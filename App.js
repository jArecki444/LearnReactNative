import React from 'react';
import ListComponent from './app/components/ListComponent/ListComponent';
import DetailsComponent from './app/components/DetailsComponent/DetailsComponent';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Home: ListComponent,
    Details: DetailsComponent,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


