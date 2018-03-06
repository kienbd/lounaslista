import React, { Component } from 'react'
import { View } from 'react-native'
import { Text, Button, List, ListItem, Body, Title, Icon } from 'native-base'

import CenteredText from '../components/CenteredText'

export default class Menu extends Component {
  renderIcon = title => {
    switch (title) {
    case 'chicken':
      return <Icon name='duck' style={styles.iconStyles}/>
    case 'pork/beef':
      return <Icon name='cow' />
    case 'fish':
      return <Icon name='fish' />
    }
  }

  renderMenu = menu => menu.map((e, index) => {
    return (
      <ListItem key={index}>
        <Body>
          {
            e.components.map((elem, cindex) => <CenteredText key={cindex}> {elem} </CenteredText>)
          }
          {
            e.properties.map((elem, cindex) => <CenteredText key={cindex}> {this.renderIcon(elem)} </CenteredText>)
          }
        </Body>
      </ListItem>
    )
  })

  onButtonPress = () => {
    const { onTitleClick } = this.props
    onTitleClick()
  }

  render() {
    const { restaurant } = this.props
    if (restaurant == null)
      return null
    const { title, menu } = restaurant
    if (title == null || menu == null)
      return null
    return (
      <View style={styles.containerStyles}>
        <View style={styles.linkStyles}>
          <Button transparent dark large style={styles.linkButtonStyles} onPress={this.onButtonPress}>
            <Text style={styles.linkTextStyles} uppercase={false}> { title }</Text>
          </Button>
        </View>
        <View style={styles.listContainerStyles}>
          <List>
            {
              menu.vlunch.length > 0
                ? <ListItem itemDivider style={styles.listItemDividerStyles}>
                  <Body>
                    <CenteredText style={styles.listItemDividerTextStyles}> Vegetatarian Lunch </CenteredText>
                  </Body>
                </ListItem>
                : null
            }
            {
              this.renderMenu(menu.vlunch)
            }
            {
              menu.lunch.length > 0
                ? <ListItem itemDivider style={styles.listItemDividerStyles}>
                  <Body>
                    <CenteredText style={styles.listItemDividerTextStyles}> Lunch </CenteredText>
                  </Body>
                </ListItem>
                : null
            }
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
