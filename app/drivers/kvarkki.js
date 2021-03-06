import axios from 'axios'
import Restaurant from './Restaurant'

const config = {
  title: 'Kvarkki',
  root: 'https://www.sodexo.fi/ruokalistat/output/daily_json/26521',
  en: 'en',
  fi: 'fi'
}

const bootstrap = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()

  const url = `${config.root}/${year}/${month}/${date}/${config.en}`
  return axios.get(url)
    .then(response => {
      if (response.status === 200) {
        const restaurant = new Restaurant({title: config.title})

        const { data } = response
        const { meta, courses } = data
        // const restaurant = new Restaurant({title: meta.ref_title})
        if (meta.length === 0 || courses.length === 0)
          return restaurant

        courses.forEach(e => {
          const properties = e.properties ? ` (${e.properties})` : ''
          const menuItem = Restaurant.createItem(`${e.title_en} ${properties}`)
          if (e.category === 'Vegetarian' || e.category === 'Vegaani')
            restaurant.addVlunch(menuItem)
          else if (e.category.indexOf('Kotiruoka') > -1)
            restaurant.addLunch(menuItem)
        })
        return restaurant
      }
    })
    .catch(e => {
      console.log(e)
      throw e
    })
}

export default Kvarkki = {
  config,
  bootstrap
}
