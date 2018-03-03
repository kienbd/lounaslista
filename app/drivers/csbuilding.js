import axios from 'axios'
import Restaurant from './Restaurant'

const config = {
  title: 'CS Building',
  root: 'https://www.sodexo.fi/ruokalistat/output/daily_json/142',
  en: 'en',
  fi: 'fi'
}

const bootstrap = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate() - 1

  const url = `${config.root}/${year}/${month}/${date}/${config.en}`
  return axios.get(url)
    .then(response => {
      if (response.status === 200) {
        const { data } = response
        const { meta, courses } = data
        if (meta.length === 0 || courses.length === 0)
          return null
        const restaurant = new Restaurant({title: meta.ref_title})

        courses.forEach(e => {
          const properties = e.properties ? ` (${e.properties})` : ''
          const menuItem = Restaurant.createItem(`${e.title_en} ${properties}`)
          if (e.category === 'Vegaani')
            restaurant.addVlunch(menuItem)
          else
            restaurant.addLunch(menuItem)
        })
        return restaurant
      }
    })
}

export default CSBuilding = {
  bootstrap
}
