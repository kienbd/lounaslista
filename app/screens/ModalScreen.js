import React, { Component } from 'react'
import { View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Container, Content, List, ListItem, Text, Icon, Body, Right } from 'native-base'


export default class ModalScreen extends Component {
  onListPress = selected => {
    const { navigation } = this.props
    const { onGoingBack } = navigation.state.params
    navigation.goBack()
    onGoingBack(selected)
  }

  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Aaron Bennet</Text>
            </ListItem>
            <ListItem onPress={() => this.onListPress('Dipoli')}>
              <Body>
                <Text>A</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => this.onListPress('Taffa')}>
              <Text>Ali Connors</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>B</Text>
            </ListItem>
            <ListItem>
              <Text>Bradley Horowitz</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}
