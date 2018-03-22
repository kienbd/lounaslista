import React, { Component } from 'react'
import { Container, Content, Picker, Form, Button, Text, Icon } from 'native-base'
import { View, FlatList, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

import Menu from '../components/Menu'
import SearchBox from '../components/SearchBox'

import * as restaurantsActions from '../store/restaurants/actions'

import { restaurants as restaurantsList } from '../drivers'

export class HomeScreen extends Component {
  constructor() {
    super()
    this.flatList = null
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const params = navigation.state.params || {}
    const items = restaurantsList
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

  onSelectedRestaurantChangeHandler = selected => {
    const { selectRestaurant } = this.props
    selectRestaurant(selected)
  }

  onTitleClickHandler = () => {
    const { navigation, restaurants } = this.props
    navigation.navigate('Modal', {
      onGoingBack: this.onSelectedRestaurantChangeHandler,
      restaurants: _.values(restaurants)
    })
  }

  componentWillMount() {
    const { navigation } = this.props
    navigation.setParams({
      changeSelectorValue: this.onSelectedRestaurantChangeHandler
    })
  }

  componentDidMount() {
    const { fetchAllRestaurants } = this.props
    fetchAllRestaurants()
  }

  componentWillUpdate = (nextProps, nextStates) => {
    const { selected } = nextProps
    const { currentSelected } = this.props.selected
    if (selected !== '' && selected !== currentSelected) {
      const index = restaurantsList.indexOf(selected)
      const flatList = this.flatList

      if (flatList) {
        flatList.scrollToIndex({index, animated: true})
      }
    }
  }


  render() {
    const { restaurants } = this.props
    const mappedRestaurants = restaurantsList.map(e => {
      if (restaurants[e])
        return restaurants[e]
      else
        return {title: e}
    })
    console.log(mappedRestaurants)
    return (
      <Container>
        <StatusBar backgroundColor='blue' barStyle='dark-content' />
        <View style={styles.contentStyles}>
          <FlatList
            data={_.compact(mappedRestaurants)}
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

const mapStateToProps = state => state.restaurants
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchAllRestaurants: restaurantsActions.fetchAllRestaurants,
      selectRestaurant: restaurantsActions.selectRestaurant
    }, dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)


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
