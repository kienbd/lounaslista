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
    const { onUpdate } = this.props
    this.setState({
      selected
    })
    onUpdate(selected)
  }

  render() {
    const { items } = this.props
    return (
      <View style={styles.pickerContainerStyles}>
        <Icon style={styles.iconStyles} name="search-web" />
        <Picker
          iosHeader="Select one"
          mode="dropdown"
          selectedValue={this.state.selected}
          onValueChange={this.handleOnChange}
          placeholder="Select a Restaurant"
          style={styles.pickerStyles}
        >
          <Item label="Select a Restaurant" value="all" />
          {
            items.map((e, index) => <Item key={index} label={e} value={e} />)
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
    marginTop: 10,
    paddingRight: 10,
    color: '#9C9C9D'
  },
  pickerStyles: {
    flex: 1,
    color: '#9C9C9D'
  }
}
