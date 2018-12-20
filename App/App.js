
import React, {Component} from 'react';
import {Text, View, AppRegistry,  Alert, FlatList, ActivityIndicator} from 'react-native';
import ListClient from  './components/ListClient/ListClient';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import ClientComponent from './components/cliente/Cliente';

 class HomeComponent extends Component{
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
  
  }


  render(){
    return(
      <ListClient navigation={ this.props.navigation }></ListClient>
    )
  }
}

const App = createStackNavigator({
  Home:   { screen: HomeComponent },
  Client: { screen: ClientComponent }
})
export default createAppContainer(App);

// AppRegistry.registerComponent('AwesomeProject', ()=> PizzaTranslator);