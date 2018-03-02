import React from 'react'
import { StackNavigator } from 'react-navigation'
import Screens from '../../screens'

export default StackNavigator(
  {
    Home: {
      screen: Screens.HomeScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
)
