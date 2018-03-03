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
  }

  addVlunch(item) {
    this.menu.vlunch.push(item)
  }

  addLunch(item) {
    this.menu.lunch.push(item)
  }

  static createItem(...meal) {
    return {
      components: meal
    }
  }
}
