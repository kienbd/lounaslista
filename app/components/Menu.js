import React, { Component } from 'react'
import { View } from 'react-native'
import { Text, Button, List, ListItem, Body, Title, Icon, Spinner } from 'native-base'

import CenteredText from '../components/CenteredText'
import { renderCategoryIcon } from '../utils/rendering'

export default class Menu extends Component {
  renderMenuItem = menu => menu.map((e, index) => {
    return (
      <ListItem key={index}>
        <Body>
          {
            e.components.map((elem, cindex) => <CenteredText key={cindex}> {elem} </CenteredText>)
          }
          {
            e.properties.map((elem, cindex) => <CenteredText key={cindex}> {renderCategoryIcon(cindex, elem, styles)} </CenteredText>)
          }
        </Body>
      </ListItem>
    )
  })

  renderMenu = menu => {
    if (menu.length > 0)
      return this.renderMenuItem(menu)
    else
      return (
        <ListItem>
          <Body>
            <CenteredText> No menu available </CenteredText>
          </Body>
        </ListItem>
      )
  }

  onButtonPress = () => {
    const { onTitleClick } = this.props
    onTitleClick()
  }

  render() {
    const { restaurant } = this.props
    if (restaurant == null)
      return null
    const { title, menu, fetched, error } = restaurant
    if (error)
      return null
    if (menu == null)
      return (
        <View style={styles.containerStyles}>
          <View style={styles.linkStyles}>
            <Button transparent dark large style={styles.linkButtonStyles} >
              <Text style={styles.linkTextStyles} uppercase={false}> { title }</Text>
            </Button>
          </View>
          <View>
            <Spinner color='green' />
          </View>
        </View>
      )
    return (
      <View style={styles.containerStyles}>
        <View style={styles.linkStyles}>
          <Button transparent dark large style={styles.linkButtonStyles} onPress={this.onButtonPress}>
            <Text style={styles.linkTextStyles} uppercase={false}> { title }</Text>
          </Button>
        </View>
        <View style={styles.listContainerStyles}>
          <List>
            <ListItem itemDivider style={styles.listItemDividerStyles}>
              <Body>
                <CenteredText style={styles.listItemDividerTextStyles}> Vegetatarian Lunch </CenteredText>
              </Body>
            </ListItem>
            {
              this.renderMenu(menu.vlunch)
            }
            <ListItem itemDivider style={styles.listItemDividerStyles}>
              <Body>
                <CenteredText style={styles.listItemDividerTextStyles}> Lunch </CenteredText>
              </Body>
            </ListItem>
            {
              this.renderMenu(menu.lunch)
            }
          </List>
        </View>
      </View>
    )
  }
}

const styles = {
  containerStyles: {
    marginTop: 10,
    marginBottom: 20
  },
  linkButtonStyles: {
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
    paddingBottom: 5
  },
  linkStyles: {
    alignSelf: 'center'
  },
  linkTextStyles: {
    fontWeight: 'bold',
    fontSize: 24
  },
  listContainerStyles: {
    elevation: 0,
    marginTop: 10,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#333'
  },
  listItemDividerStyles: {
    backgroundColor: '#dedede'
  },
  listItemDividerTextStyles: {
    fontWeight: 'bold'
  },
  iconStyles: {
    color: '#333333'
  }
}
