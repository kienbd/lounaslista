import { Font } from 'expo'
import React, { Component } from 'react'
import { StyleProvider, Root } from 'native-base'
import { Provider } from 'react-redux'
import getTheme from '../theme/components'
import LoadingScreen from '../screens/LoadingScreen'
import store from '../store'

import Routes from './routes'

export default class Bootstrap extends Component {
  constructor() {
    super()
    this.state = {
      isReady: false
    }
  }
  componentWillMount() {
    this.loadFonts()
  }
  async loadFonts() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
      'Material Design Icons': require('@expo/vector-icons/fonts/MaterialIcons.ttf')
    })
    this.setState({ isReady: true })
  }
  render() {
    if (!this.state.isReady) {
      return <LoadingScreen />
    }
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme()}>
          <Root>
            <Routes />
          </Root>
        </StyleProvider>
      </Provider>
    )
  }
}

