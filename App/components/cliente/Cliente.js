import React, { Component } from 'react';
import { View, Text , Alert, StyleSheet, TextInput, Button, Image} from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation'


export default class ClientComponent extends Component{

    static navigationOptions = {
        title: "Cadastro de Usuário"
    }

    constructor(props){
        super(props);
        const { navigation } = this.props;
        let client = navigation.getParam('client', 0);
        client = { client }
        this.state =   client  ;
    
    }

    // componentDidMount(){
    //     Alert.alert('Carregou o did')
    // }

    _salvar(){
        // Alert.alert('Salvar')
        const { navigate } = this.props.navigation;
        navigate('Home')
    }

    render(){

        return(
            <View style={ styles.container }>
                <View style={ styles.conentAvatar }>
                    <Image source={{ uri: this.state.client.avatar }} style={styles.avatar}/>
                </View>
                <Text >Nome: </Text>                
                <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => {
                    let { client } = this.state;
                    client.name = text;
                    this.setState({client: client})
                }}
                value={this.state.client.name}
                />
                <Text >Telefone: </Text>                
                <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => {
                    let { client } = this.state;
                    client.fone = text;
                    this.setState({client: client})
                }}
                value={this.state.client.fone}
                />
                <Text >Cidade: </Text>                
                <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => {
                    let { client } = this.state;
                    client.city = text;
                    this.setState({client: client})
                }}
                value={this.state.client.city}
                />        

                <View style={ styles.button }>
                    <Button
                        title="Salvar"
                        color="#00897b"
                        onPress={ () => this._salvar() 
                    
                        }
                    />
                </View>
                

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 15
    },
    conentAvatar:{ 
        display: 'flex', 
        alignItems: 'center', 
        marginTop: 15 
    },
    avatar:{
        width:180,
        height:180,
        borderRadius: 50,
        alignItems: 'center'   
        
    },
    button:{
        marginTop: 15,
        padding: 2
    }
})

// const AppNatigator = createStackNavigator({
//     Client:{
//         screen: ClientComponent
//     }
// })

// export default createAppContainer(AppNatigator)