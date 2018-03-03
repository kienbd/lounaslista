import axios from 'axios'
import Restaurant from './Restaurant'

const config = {
  title: 'Taffa',
  root: 'http://api.teknolog.fi/taffa',
  en: 'en',
  fi: 'fi'
}

const bootstrap = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = 6

  const url = `${config.root}/${config.en}/${date}/${month}/${year}`
  console.log(url)
  return axios.get(url)
    .then(response => {
      if (response.status === 200) {
        const { data } = response
        const restaurant = new Restaurant({title: config.title})

        const setMenu = data.split('\r\n')
        setMenu.forEach(e => {
          if (e.length > 0) {
            const menuItem = Restaurant.createItem(e)
            restaurant.addLunch(menuItem)
          }
        })
        return restaurant
      }
    })
}

export default Taffa = {
  bootstrap
}