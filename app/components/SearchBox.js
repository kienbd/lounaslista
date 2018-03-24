import React, { Component } from 'react'
import { View } from 'react-native'
import { Picker, Item, Form, Icon } from 'native-base'
import _ from 'lodash'

export default class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedRestaurant: undefined,
      selectedLanguage: ''
    }
  }

  handleOnRestaurantChange = selected => {
    const { onRestautantChange } = this.props
    this.setState({
      selectedRestaurant: selected
    })
    onRestautantChange(selected)
  }

  handleOnLanguageChange = selected => {
    const { onLanguageChange } = this.props
    this.setState({
      selectedLanguage: selected
    })
    onLanguageChange(selected)
  }

  renderRestaurantPicker = items => {
    if (items === null || items.length === 0)
      return null
    else {
      const mappedItems = items.map(e => {
        return <Item key={e} label={e} value={e} />
      })
      mappedItems.unshift(
        <Picker.Item key="all" label="Select a Restaurant" value="all" />
      )
      return (
        <Picker
          mode="dropdown"
          placeholder="Select a Restaurant"
          selectedValue={this.state.selectedRestaurant}
          onValueChange={this.handleOnRestaurantChange}
          style={styles.pickerStyles}
        >
          {mappedItems}
        </Picker>
      )
    }
  }

  componentWillUpdate(nextProps, nextStates) {
    if (this.state.selectedLanguage === '' && nextProps.defaultLanguage !== this.props.defaultLanguage) {
      this.setState({
        selectedLanguage: nextProps.defaultLanguage
      })
    }
  }

  render() {
    const { items } = this.props
    return (
      <View style={styles.pickerContainerStyles}>
        <Picker
          mode="dropdown"
          selectedValue={this.state.selectedLanguage}
          onValueChange={this.handleOnLanguageChange}
          placeholder="Select a Restaurant"
          style={styles.iconStyles}
        >
          <Item style={styles.itemStyles} label='EN' value='en' />
          <Item style={styles.itemStyles} label='FI' value='fi' />
        </Picker>
        { this.renderRestaurantPicker(items) }
      </View>
    )
  }
}

const styles = {
  pickerContainerStyles: {
    borderWidth: 1,
    borderColor: '#D7D9DA',
    elevation: 1,
    borderRadius: 4,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 10
  },
  iconStyles: {
    width: 80
  },
  pickerStyles: {
    flex: 1
  },
  itemStyles: {
    flex: 1
  }
}
