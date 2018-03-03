import React, { Component } from 'react'
import { Container, Content, Picker, Form, Button, Text } from 'native-base'
import { View, ScrollView, StatusBar } from 'react-native'

import Menu from '../components/Menu'
import SearchBox from '../components/SearchBox'

import Restaurants from '../drivers'
import Dipoli from '../drivers/dipoli'

export default class HomeScreen extends Component {
  constructor() {
    super()
    this.state = {
      restaurants: []
    }
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      header: (
        <View style={styles.headerStyles}>
          <SearchBox />
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

  componentDidMount() {
    Restaurants.forEach(ed => {
      ed.driver.bootstrap().then(restaurant => {
        let updated = this.state.restaurants.slice()
        updated.push(restaurant)
        this.setState({restaurants: updated})
      })
    })
  }

  render() {
    const { restaurants } = this.state
    return (
      <Container>
        <StatusBar backgroundColor='blue' barStyle='dark-content' />
        <Content padder>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.menusViewStyles}>
            {
              restaurants.map((e, index) => <Menu key={index} restaurant={e} />)
            }
          </ScrollView>
        </Content>
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




