import axios from 'axios'
import parser from 'xml-js'
import _ from 'lodash'
import Restaurant from './Restaurant'

const config = {
  title: 'UniCafe City Centre',
  en: 'https://messi.hyyravintolat.fi/rss/eng/9',
  fi: 'https://messi.hyyravintolat.fi/rss/fin/9'
}

const bootstrap = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()

  const url = `${config.en}`
  const paddedMonth = _.padStart(month, 2, '0')
  const paddedDate = _.padStart(date, 2, '0')
  const string = `${paddedDate}.${paddedMonth}`
  return axios({
    url,
    method: 'get',
    transformResponse: data => {
      return parser.xml2js(data, {
        compact: true
      })
    },
    responseType: 'text'
  }).then(response => {
    if (response.status === 200) {
      const { rss } = response.data
      const restaurant = new Restaurant({title: config.title})

      const todayMenu = rss.channel.item.find(e => {
        return e.title._text.indexOf(string) >= 0
      })

      if (todayMenu == null)
        return null

      const { description } = todayMenu
      description._text.split('.').forEach(e => {
        if (e.length > 0 && e.indexOf('Aukio Edullisesti') > -1) {
          const menuItem = Restaurant.createItem(_.replace(e, 'Aukio Edullisesti: ', ''))
          restaurant.addLunch(menuItem)
        }
      })
      return restaurant
    }
  })
}

export default UniCafe = {
  bootstrap
}
