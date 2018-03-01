import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class HomeScreen extends Component {
  render() {
    const { viewStyles } = styles
    return (
      <View style={viewStyles}>
        <Text> Home </Text>
      </View>
    )
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}
