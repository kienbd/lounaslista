import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'


export default class ModalScreen extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.viewStyles}>
        <Button
          onPress = { () => navigation.goBack() }
          title="Back"
        />
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
