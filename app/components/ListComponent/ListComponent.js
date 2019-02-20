import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { ListItem } from "react-native-elements";

export default class ListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: null
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = `https://randomuser.me/api/?results=25`;

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
          error: res.error || null
        });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  onPress(item){
    this.props.navigation.navigate('Details',{
        item: item
    });
}

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
        <ListItem
            title={`${item.name.first} ${item.name.last}`}
            subtitle={item.email}
            leftAvatar={{ source: { uri: item.picture.thumbnail } }}
            containerStyle={{ borderBottomWidth: 0 }}
            onPress={() => {this.onPress(item)}}
          />
        )}
        keyExtractor={item => item.email}
        ItemSeparatorComponent={this.renderSeparator}
      />
    );
  }
}
