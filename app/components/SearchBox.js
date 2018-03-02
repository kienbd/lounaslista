import React, { Component } from 'react'
import { View } from 'react-native'
import { Picker, Item, Form, Icon } from 'native-base'

export default class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: ''
    }
  }

  handleOnChange = selected => {
    this.setState({
      selected
    })
  }

  render() {
    return (
      <View style={styles.pickerContainerStyles}>
        <Icon style={styles.iconStyles} name="ios-search" />
        <Picker
          iosHeader="Select one"
          mode="dropdown"
          selectedValue={this.state.selected}
          onValueChange={this.handleOnChange}
          placeholder="Select a Restaurant"
          style={styles.pickerStyles}
        >
          <Item label="Select a Restaurant" value="key0" />
          <Item label="ATM Card" value="key1" />
          <Item label="Debit Card" value="key2" />
          <Item label="Credit Card" value="key3" />
          <Item label="Net Banking" value="key4" />
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
    marginTop: 10,
    paddingRight: 10,
    color: '#9C9C9D'
  },
  pickerStyles: {
    flex: 1,
    color: '#9C9C9D'
  }
}
