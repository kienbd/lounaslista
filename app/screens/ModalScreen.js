import React, { Component } from 'react'
import { View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Container, Content, List, ListItem, Text, Icon, Right, Left, H1 } from 'native-base'


export default class ModalScreen extends Component {
  renderIcon = title => {
    switch (title) {
    case 'chicken':
      return <Icon key={title} name='duck' style={styles.iconstyles}/>
    case 'pork/beef':
      return <Icon key={title} name='cow' style={styles.iconstyles}/>
    case 'fish':
      return <Icon key={title} name='fish' style={styles.iconstyles}/>
    }
  }

  onListPress = selected => {
    const { navigation } = this.props
    const { onGoingBack } = navigation.state.params
    navigation.goBack()
    onGoingBack(selected)
  }

  renderListItem = (title, properties) => (
    <ListItem onPress={() => this.onListPress(title)} key={title}>
      <Left>
        <Text>
          {title}
        </Text>
        <Text style={{marginLeft: 20}}>
          {properties.map(icon => this.renderIcon(icon))}
        </Text>
      </Left>
      <Right>
        <Icon name="chevron-right" />
      </Right>
    </ListItem>
  )

  render() {
    const { navigation } = this.props
    const { restaurants } = navigation.state.params
    return (
      <Container>
        <Content>
          <H1 style={styles.pageHeaderStyles}> Restaurants List </H1>
          <View style={styles.viewStyles}>
            <List>
              {
                restaurants.map(e => this.renderListItem(e.title, e.properties))
              }
            </List>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = {
  pageHeaderStyles: {
    alignSelf: 'center',
    marginTop: 80
  },
  viewStyles: {
    marginTop: 40,
    flex: 1
  },
  iconStyles: {
    fontSize: 10
  }
}
