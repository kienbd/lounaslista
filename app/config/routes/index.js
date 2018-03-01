import React from 'react'
import { StackNavigator } from 'react-navigation'
import Screens from '../../screens'

const MainStack = StackNavigator(
  {
    Home: {
      screen: Screens.HomeScreen
    },
    Details: {
      screen: Screens.DetailsScreen
    }
  },
  {
    initialRouteName: 'Details',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)

const Routes = StackNavigator(
  {
    Main: {
      screen: MainStack
    },
    MyModal: {
      screen: Screens.ModalScreen
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)


export default Routes
