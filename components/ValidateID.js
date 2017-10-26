import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NativeModules
} from 'react-native';
import {
  Button,
  Form,
  Item,
  Input
} from 'native-base';
//let MyObjcClass = require('NativeModules').MyObjcClass;

export default class ValidateID extends Component<{}> {
  constructor(props) {
    super(props);
    this.handleValidationClick = this.handleValidationClick.bind(this);
    this.state = {
      inputWorkFlowID: null,
      inputPhone: null,
      inputEmail: null,
      inputCountry: null,
      inputIdentityNumber: null,
      number: 0
    }
  }

  handleValidationClick() {
    NativeModules.MyObjcClass.squareMe(this.state.number, (error, number) => {
      if(error) {
        console.error(error);
      } else {
        this.setState({number: number});
      }
    })

  }

  render() {
    return (
      <View>
        <Form>
          {/* <Item>
            <Input placeholder="Work Flow ID" />
          </Item>
          <Item last>
            <Input placeholder="Phone" />
          </Item>
          <Item last>
            <Input placeholder="Email" />
          </Item>
          <Item last>
            <Input placeholder="Country" />
          </Item>
          <Item last>
            <Input placeholder="Identity Number" />
          </Item> */}
          <Item number>
            <Input placeholder="Test Number" onChangeText={(number) => this.setState({number})}/>
          </Item>
        </Form>
        <Button success onPress={this.handleValidationClick}><Text>Request Data</Text></Button>
        <Text>{this.state.number}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});