import React, { Component } from "react";
import { View } from "react-native";
import {Text, Image } from "react-native-elements";

export default class DetailsComponent extends Component {
  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item", "no data");
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={{ uri: item.picture.large }}
          style={{ width: 200, height: 200, marginBottom: 20 }}
        />
        <Text>Age: {item.dob.age}</Text>
        <Text>First name: {item.name.first}</Text>
        <Text>Last name: {item.name.last}</Text>
        <Text>Phone: {item.phone}</Text>
        <Text>Location city: {item.location.city}</Text>
        <Text>Email: {item.email}</Text>
        
      </View>
    );
  }
}
