import React, { Component } from 'react'
import { Container, Content, Picker, Form, Button, Text } from 'native-base'
import { View, ScrollView, StatusBar } from 'react-native'

import Menu from '../components/Menu'
import SearchBox from '../components/SearchBox'

const dipoli = {
  title: 'Dipoli',
  menu: {
    vlunch: [
      {
        components: [
          'Whole grain wheat grits (* ,A ,G ,L ,M ,Veg ,VS)',
          'Ratatouille (* ,A ,G ,L ,M ,Veg ,VS)'
        ]
      }
    ],
    lunch: [
      {
        components: [
          'Fish patties (* ,A ,G ,L ,M)',
          'Sour cream sauce with dill (A ,G ,L)',
          'Mashed potatoes (* ,A ,G ,L)'
        ]
      },
      {
        components: [
          'Swedish hash (sausage and potatoes) (A ,L)'
        ]
      }
    ]
  }
}

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      header: (
        <View style={styles.headerStyles}>
          <SearchBox />
          <View style={{marginTop: 20, flexDirection: 'row'}}>
            <Button bordered dark style={styles.topBtnStyles}>
              <Text uppercase={false} style={styles.topBtnTextStyles}> Chicken </Text>
            </Button>
            <Button bordered dark style={styles.topBtnStyles}>
              <Text uppercase={false} style={styles.topBtnTextStyles}> Beef </Text>
            </Button>
            <Button bordered dark style={styles.topBtnStyles}>
              <Text uppercase={false} style={styles.topBtnTextStyles}> Pork </Text>
            </Button>
          </View>
        </View>
      )
    }
  }
  render() {
    return (
      <Container>
        <StatusBar backgroundColor='blue' barStyle='dark-content' />
        <Content padder>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.menusViewStyles}>
            <Menu restaurant={dipoli} />
            <Menu restaurant={dipoli} />
          </ScrollView>
        </Content>
      </Container>
    )
  }
}


const styles = {
  headerStyles: {
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 20,
    height: 170,
    backgroundColor: '#FCFCFF',
    elevation: 2
  },
  menusViewStyles: {
    flex: 1,
    marginTop: 10
  },
  topBtnStyles: {
    minWidth: 60,
    borderColor: '#DEDEDE',
    elevation: 1,
    marginRight: 10,
    borderRadius: 4
  },
  topBtnTextStyles: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333'
  }
}




