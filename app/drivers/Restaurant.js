/*
 * const dipoli = {
  title: 'Dipoli',
  menu: {
    vlunch: [
      {
        components: [
          'Whole grain wheat grits (* ,A ,G ,L ,M ,Veg ,VS)',
          'Ratatouille (* ,A ,G ,L ,M ,Veg ,VS)'
        ]
      }
    ],
    lunch: [
      {
        components: [
          'Fish patties (* ,A ,G ,L ,M)',
          'Sour cream sauce with dill (A ,G ,L)',
          'Mashed potatoes (* ,A ,G ,L)'
        ]
      },
      {
        components: [
          'Swedish hash (sausage and potatoes) (A ,L)'
        ]
      }
    ]
  }
  }
*/

const keywords = {
  fish: ['fish'],
  'pork/ beef': ['meat'],
  chicken: ['chicken']
}

export default class Restaurant {
  constructor(restaurant) {
    const {
      title
    } = restaurant

    this.title = title
    this.menu = {
      vlunch: [],
      lunch: []
    }
    this.properties = []
  }

  addVlunch(item) {
    this.menu.vlunch.push(item)
    this.properties = this.properties.concat(item.properties)
  }

  addLunch(item) {
    this.menu.lunch.push(item)
    this.properties = this.properties.concat(item.properties)
  }

  static createItem(...meal) {
    let props = []
    Object.keys(keywords).forEach(key => {
      const val = keywords[key]
      val.forEach(val => {
        meal.forEach(m => {
          if (m.toLowerCase().indexOf(val) !== -1) {
            props.push(key)
          }
        })
      })
    })

    return {
      components: meal,
      properties: props
    }
  }
}
