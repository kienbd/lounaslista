import React, { Component } from 'react'
import { View } from 'react-native'
import MultiSelect from 'react-native-multiple-select'


export default class SearchBox extends Component {
  constructor() {
    super()
    this.state = {
      selectedItems: []
    }

    this.items = [{
      id: '92iijs7yta',
      name: 'Ondo'
    }, {
      id: 'a0s0a8ssbsd',
      name: 'Ogun'
    }, {
      id: '16hbajsabsd',
      name: 'Calabar'
    }, {
      id: 'nahs75a5sg',
      name: 'Lagos'
    }, {
      id: '667atsas',
      name: 'Maiduguri'
    }, {
      id: 'hsyasajs',
      name: 'Anambra'
    }, {
      id: 'djsjudksjd',
      name: 'Benue'
    }, {
      id: 'sdhyaysdj',
      name: 'Kaduna'
    }, {
      id: 'suudydjsjd',
      name: 'Abuja'
    }]
  }

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems })
  }

  render() {
    const { selectedItems } = this.state
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          hideTags
          items={this.items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={ (text) => console.log(text)}
          fontFamily="Roboto"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          single={true}
        />
      </View>
    )
  }
}
