import React, { Component } from 'react'
import { Container, Content, Picker, Form, Button, Text } from 'native-base'
import { View, FlatList, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Menu from '../components/Menu'
import SearchBox from '../components/SearchBox'

import Restaurants from '../drivers'

export default class HomeScreen extends Component {
  constructor() {
    super()
    this.state = {
      restaurants: [],
      selected: ''
    }
    this.flatList = null
  }

  onValueChangeHandler = selected => {
    this.setState({
      selected
    })
    const { restaurants } = this.state
    const index = restaurants.indexOf(restaurants.find(e => e.title === selected))
    const _flatList = this.flatList
    const _scrollOffset = 420

    if (_flatList) {
      _flatList.scrollToIndex({index, animated: true})
    }
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const params = navigation.state.params || {}
    return {
      header: (
        <View style={styles.headerStyles}>
          <SearchBox
            items={Restaurants.map(e => e.title)}
            onUpdate={params.changeSelectorValue}
          />
          <View style={{marginTop: 20, flexDirection: 'row'}}>
            <Button bordered dark style={styles.topBtnStyles}>
              <Text uppercase={false} style={styles.topBtnTextStyles}> Chicken </Text>
            </Button>
            <Button bordered dark style={styles.topBtnStyles}>
              <Text uppercase={false} style={styles.topBtnTextStyles}> Beef </Text>
            </Button>
            <Button bordered dark style={styles.topBtnStyles}>
              <Text uppercase={false} style={styles.topBtnTextStyles}> Pork </Text>
            </Button>
          </View>
        </View>
      )
    }
  }

  componentWillMount() {
    const { navigation } = this.props
    navigation.setParams({
      changeSelectorValue: this.onValueChangeHandler
    })
  }

  componentDidMount() {
    Restaurants.forEach(ed => {
      ed.driver.bootstrap().then(restaurant => {
        if (restaurant) {
          let updated = this.state.restaurants.slice()
          updated.push(restaurant)
          this.setState({restaurants: updated})
        }
      })
    })
  }

  render() {
    const { restaurants } = this.state
    return (
      <Container>
        <StatusBar backgroundColor='blue' barStyle='dark-content' />
        <View style={styles.contentStyles}>
          <FlatList
            data={restaurants}
            renderItem={({ item }) => <Menu restaurant={item} />}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.title}
            ref={(ref) => { this.flatList = ref }}
          />
        </View>
      </Container>
    )
  }
}


const styles = {
  headerStyles: {
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 20,
    height: 170,
    backgroundColor: '#FCFCFF',
    elevation: 2
  },
  contentStyles: {
    padding: 5,
    paddingHorizontal: 20,
    flex: 1
  },
  menusViewStyles: {
    flex: 1,
    marginTop: 10
  },
  topBtnStyles: {
    minWidth: 60,
    borderColor: '#DEDEDE',
    elevation: 1,
    marginRight: 10,
    borderRadius: 4
  },
  topBtnTextStyles: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333'
  }
}




