import axios from 'axios'
import parser from 'xml-js'
import _ from 'lodash'
import Restaurant from './Restaurant'

const config = {
  title: 'Hämäläis Osakunta',
  root: 'http://www.hys.net/ruokalista.xml'
}

const bootstrap = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()

  const url = `${config.root}`
  const paddedMonth = _.padStart(month, 2, '0')
  const paddedDate = _.padStart(date, 2, '0')
  const string = `${paddedDate}.${paddedMonth}`
  console.log(string)
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
      description._cdata.split(',<br />\r\n').forEach(e => {
        if (e.length > 0) {
          const menuItem = Restaurant.createItem(e)
          restaurant.addLunch(menuItem)
        }
      })
      return restaurant
    }
  })
}

export default Hamalais = {
  config,
  bootstrap
}
