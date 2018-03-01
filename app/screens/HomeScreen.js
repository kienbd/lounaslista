import React, { Component } from 'react'
import { View } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'
import { StackNavigator } from 'react-navigation'


export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home Screen'
  }

  render() {
    const { viewStyles } = styles
    return (
      <View style={viewStyles}>
        <RkButton
          rkType='title'
          style={{height: 100, width: 100}}
          onPress = { () => this.props.navigation.navigate('Details', {
            text: 'From Home'
          })}
        >
          Go to Details Screen
        </RkButton>
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
