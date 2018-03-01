import React, { Component } from 'react'
import { View } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'
import { StackNavigator } from 'react-navigation'


export default class DetailsScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state
    return {
      title: params ? params.text : 'Default',
      headerRight: (
        <RkButton
          rkType='title'
          style={{height: 40, width: 100}}
        >
          Button H
        </RkButton>
      )
    }
  }

  render() {
    const { viewStyles } = styles
    const { navigation } = this.props
    const { params } = navigation.state
    const text = params ? params.text : 'Hello There'
    return (
      <View style={viewStyles}>
        <RkButton
          rkType='title'
          style={{height: 100, width: 100}}
          onPress = { () => navigation.navigate('MyModal')}
        >
          {text}
        </RkButton>
        <RkButton
          rkType='title'
          style={{height: 100, width: 100}}
          onPress = { () => navigation.setParams({text: 'Changed'}) }
        >
          {text}

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
