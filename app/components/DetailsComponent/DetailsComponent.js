import React, { Component } from "react";
import { View } from "react-native";
import { Text, Image } from "react-native-elements";

export default class DetailsComponent extends Component {
  static navigationOptions = {
    title: "Details of user"
  };

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

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
        <Text>First name: {this.capitalize(item.name.first)}</Text>
        <Text>Last name: {this.capitalize(item.name.last)}</Text>
        <Text>Phone: {item.phone}</Text>
        <Text>Location city: {this.capitalize(item.location.city)}</Text>
        <Text>Email: {item.email}</Text>
      </View>
    );
  }
}
