import * as Expo from 'expo'
import React, { Component } from 'react'
import { StyleProvider } from 'native-base'
import getTheme from '../theme/components'

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
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
    })
    this.setState({ isReady: true })
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return (
      <StyleProvider style={getTheme()}>
        <Routes />
      </StyleProvider>
    )
  }
}

