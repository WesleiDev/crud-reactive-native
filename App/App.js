
import React, {Component} from 'react';
import {Text, View, AppRegistry,  Alert, FlatList, ActivityIndicator} from 'react-native';
import ListClient from  './components/ListClient/ListClient';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import ClientComponent from './components/cliente/Cliente';


const Realm = require('realm');

const ClientSchema = {
    name: 'Client',
    primaryKey: 'id',
    properties:{
      id:{ type: 'string'},
      name: { type: 'string' },
      fone: { type: 'string' },
      city: { type: 'string' },
      avatar: { type: 'string' }
    }
  } 

 class HomeComponent extends Component{
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    Realm.open({ schema:[ClientSchema], path:'crud.react' , schemaVersion:9})
      .then(realm =>{
        console.log('REALMMMM', realm)
        try{
          let clients = realm.objects('Client')
          for(let clie of clients){
            console.log('CLIENTE: ', clie)
        }

        console.log('Clients: ',clients)
        }catch(e){
          console.log('Erro ao consultar clientes: ', e)
        }
        
        

      })
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