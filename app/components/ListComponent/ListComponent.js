import React, { Component } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";

export default class ListComponent extends Component {
  static navigationOptions = {
    title: "List of users from API"
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = `https://randomuser.me/api/?results=25`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
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

  onPress(item) {
    this.props.navigation.navigate("Details", {
      item: item
    });
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.indicator}>
          <ActivityIndicator size='large' color='#000000' />
        </View>
      );
    } else {
      return (
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              title={`${this.capitalize(item.name.first)} ${this.capitalize(item.name.last)}`}
              subtitle={item.email}
              leftAvatar={{ source: { uri: item.picture.thumbnail } }}
              containerStyle={{ borderBottomWidth: 0 }}
              onPress={() => {
                this.onPress(item);
              }}
            />
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column"
  }
});
