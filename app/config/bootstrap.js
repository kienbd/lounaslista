import { Font } from 'expo'
import React, { Component } from 'react'
import { StyleProvider } from 'native-base'
import getTheme from '../theme/components'
import LoadingScreen from '../screens/LoadingScreen'

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
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      MaterialCommunityIcons: require('@expo/vector-icons/fonts/MaterialCommunityIcons.ttf')
    })
    this.setState({ isReady: true })
  }
  render() {
    if (!this.state.isReady) {
      return <LoadingScreen />
    }
    return (
      <StyleProvider style={getTheme()}>
        <Routes />
      </StyleProvider>
    )
  }
}

