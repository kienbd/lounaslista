import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StackNavigator, NavigationActions } from 'react-navigation'

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({
      routeName: 'Home',
      params: { text: 'HOME' }
    })
  ]
})

export default class LoadingScreen extends Component {
  componentDidMount() {
    const { navigation } = this.props
    setTimeout(() => {
      navigation.dispatch(resetAction)
    }, 1000)
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Text> Loading ... </Text>
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
