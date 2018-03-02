import React, { Component } from 'react'
import {Text} from 'react-native'

export default class CenteredText extends Component {
  render() {
    return (
      <Text style={{alignSelf: 'center', textAlign: 'center', ...this.props.style}}>
        {this.props.children}
      </Text>
    )
  }
}

