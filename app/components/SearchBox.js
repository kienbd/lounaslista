import React, { Component } from 'react'
import { View } from 'react-native'
import { Picker, Item, Form, Icon } from 'native-base'

export default class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedRestaurant: '',
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
          iosHeader="Select one"
          mode="dropdown"
          selectedValue={this.state.selectedLanguage}
          onValueChange={this.handleOnLanguageChange}
          placeholder="Select a Restaurant"
          style={styles.iconStyles}
        >
          <Item style={styles.itemStyles} label='EN' value='en' />
          <Item style={styles.itemStyles} label='FI' value='fi' />
        </Picker>
        <Picker
          iosHeader="Select one"
          mode="dropdown"
          selectedValue={this.state.selectedRestaurant}
          onValueChange={this.handleOnRestaurantChange}
          placeholder="Select a Restaurant"
          style={styles.pickerStyles}
        >
          <Item label="Select a Restaurant" value="all" />
          {
            items
              ? items.map((e, index) => <Item key={index} label={e} value={e} />)
              : null
          }
        </Picker>
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
    width: 80,
    color: '#9C9C9D'
  },
  pickerStyles: {
    flex: 1,
    color: '#9C9C9D'
  },
  itemStyles: {
    flex: 1
  }
}
