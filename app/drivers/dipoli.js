import axios from 'axios'
import Restaurant from './Restaurant'

const config = {
  title: 'Dipoli',
  en: 'http://www.fazerfoodco.fi/modules/json/json/Index?costNumber=3101&language=en',
  fi: 'http://www.fazerfoodco.fi/modules/json/json/Index?costNumber=3101&language=fi'
}

const bootstrap = () => {
  return axios.get(config.en)
    .then(response => {
      if (response.status === 200) {
        const { data } = response
        // const restaurant = new Restaurant({title: data.RestaurantName})
        const restaurant = new Restaurant({title: config.title})

        const todayMenu = data.MenusForDays.find(e => {
          const menuDate = new Date(e.Date)
          const today = new Date()

          return menuDate.toDateString() === today.toDateString()
        })

        if (todayMenu == null)
          return restaurant

        todayMenu.SetMenus.forEach(e => {
          const menuItem = Restaurant.createItem(...e.Components)
          if (e.Name === 'Vegetarian lunch')
            restaurant.addVlunch(menuItem)
          if (e.Name === 'Lunch')
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

export default Dipoli = {
  config,
  bootstrap
}
