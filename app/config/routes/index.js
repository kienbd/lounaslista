import React from 'react'
import { StackNavigator } from 'react-navigation'
import Screens from '../../screens'

export default StackNavigator(
  {
    Loading: {
      screen: Screens.LoadingScreen
    },
    Home: {
      screen: Screens.HomeScreen
    }
  },
  {
    initialRouteName: 'Loading',
    headerMode: 'none'
  }
)
