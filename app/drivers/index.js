import Dipoli from './dipoli'
import CSBuilding from './csbuilding'
import Kvarkki from './kvarkki'
import Taffa from './taffa'
import Hamalais from './hamalais'
import UniCafe from './unicafe'
import Alvari from './alvari'

export default drivers = {
  Dipoli,
  CSBuilding,
  Alvari,
  Taffa,
  Kvarkki,
  Hamalais,
  UniCafe
}

export const restaurants = [
  Dipoli.config.title,
  CSBuilding.config.title,
  Alvari.config.title,
  Taffa.config.title,
  Kvarkki.config.title,
  Hamalais.config.title,
  UniCafe.config.title
]
