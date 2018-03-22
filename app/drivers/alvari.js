import axios from 'axios'
import Restaurant from './Restaurant'

const config = {
  title: 'alvari',
  en: 'http://www.amica.fi/modules/json/json/Index?costNumber=0190&language=en',
  fi: 'http://www.amica.fi/modules/json/json/Index?costNumber=0190&language=fi'
}

const bootstrap = () => {
  const today = new Date()
  const url = `${config.en}`
  return axios.get(url)
    .then(response => {
      if (response.status === 200) {
        const { data } = response
        const restaurant = new Restaurant({title: data.RestaurantName})

        const todayMenu = data.MenusForDays.find(e => {
          const menuDate = new Date(e.Date)
          return menuDate.toDateString() === today.toDateString()
        })

        if (todayMenu == null)
          return null

        todayMenu.SetMenus.forEach(e => {
          const menuItem = Restaurant.createItem(...e.Components)
          if (e.Name === 'VEGETARIAN LUNCH')
            restaurant.addVlunch(menuItem)
          if (e.Name === 'LUNCH')
            restaurant.addLunch(menuItem)
        })
        return restaurant
      }
    })
}

export default Alvari = {
  bootstrap
}
