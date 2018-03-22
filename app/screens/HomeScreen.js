import React, { Component } from 'react'
import { Container, Content, Picker, Form, Button, Text, Icon } from 'native-base'
import { View, FlatList, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import Menu from '../components/Menu'
import SearchBox from '../components/SearchBox'

import * as restaurantsActions from '../store/restaurants/actions'

import Restaurants from '../drivers'

export class HomeScreen extends Component {
  constructor() {
    super()
    this.flatList = null
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const params = navigation.state.params || {}
    const items = navigation.state.items || ['Loading...']
    return {
      header: (
        <View style={styles.headerStyles}>
          <SearchBox
            onUpdate={params.changeSelectorValue}
            items = {items}
          />
          <View style={{marginTop: 20, flexDirection: 'row'}}>
            <Button iconLeft bordered dark style={{...styles.topBtnStyles, width: 100}}>
              <Icon name='duck'/>
              <Text uppercase={false} style={{...styles.topBtnTextStyles, width: 90}}>
                Chicken
              </Text>
            </Button>
            <Button iconLeft bordered dark style={styles.topBtnStyles}>
              <Icon name='cow' />
              <Text uppercase={false} style={styles.topBtnTextStyles}>
                Beef/ Pork
              </Text>
            </Button>
            <Button iconLeft bordered dark style={styles.topBtnStyles}>
              <Icon name='fish' />
              <Text uppercase={false} style={styles.topBtnTextStyles}>
                Fish
              </Text>
            </Button>
          </View>
        </View>
      )
    }
  }

  onValueChangeHandler = selected => {
    /*
    this.setState({
      selected
    })
    */
  }

  componentWillUpdate = (nextProps, nextStates) => {
    /*
    const { selected, restaurants } = nextStates
    const { currentSelected } = this.state
    if (selected !== '' && selected !== currentSelected) {
      const restaurant = restaurants.find(e => e.title === selected)
      if (restaurant) {
        const index = restaurants.indexOf(restaurant)
        const flatList = this.flatList

        if (flatList) {
          flatList.scrollToIndex({index, animated: true})
        }
      }
    }
    */
  }

  onTitleClickHandler = () => {
    const { navigation } = this.props
    const { restaurants } = this.state
    navigation.navigate('Modal', {
      onGoingBack: this.onValueChangeHandler,
      restaurants: restaurants
    })
  }


  componentWillMount() {
    const { navigation } = this.props
    navigation.setParams({
      changeSelectorValue: this.onValueChangeHandler
    })
  }

  componentDidMount() {
    this.props.dispatch(restaurantsActions.fetchAllRestaurants())
  }

  render() {
    const restaurants = []
    return (
      <Container>
        <StatusBar backgroundColor='blue' barStyle='dark-content' />
        <View style={styles.contentStyles}>
          <FlatList
            data={restaurants}
            renderItem={({ item }) => <Menu restaurant={item} onTitleClick={this.onTitleClickHandler} />}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.title}
            ref={(ref) => { this.flatList = ref }}
          />
        </View>
      </Container>
    )
  }
}

const mapStatetoProps = state => {
  return {
    fetching: state.fetching,
    fetched: state.fetched,
    restaurants: state.restaurants
  }
}

export default connect(mapStatetoProps)(HomeScreen)


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
    width: 90,
    borderColor: '#DEDEDE',
    elevation: 1,
    marginRight: 10,
    borderRadius: 4
  },
  topBtnTextStyles: {
    width: 80,
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333333',
    flexWrap: 'wrap'
  }
}
