import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

    class AnyColorButton extends Component {
       displayAlert =()=> {
         alert("This is a alert box");
       }

       render() {
         return (
           <Button color={this.props.color} title="Click Me" onPress={this.displayAlert}/>
         );
       }
    }

export default class App extends Component {
  render() {
    return(
      <View style={{marginTop: 200}}>
       <AnyColorButton color="violet"/>
       <Text style={{marginLeft:120}}> My first alert box </Text>
      </View>
    );
  }
}