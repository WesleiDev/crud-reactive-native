import React, {Component} from 'react';
import { View,
        Text,
        StyleSheet,
        FlatList,
        Alert,
        Image,
        TouchableHighlight,Button } from 'react-native';
        

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
class ListClientComponent extends Component{

    constructor(props){
        super(props);
        this.state = { clients: null};
    }
    _editar(item){
        // Alert.alert(item.name)
        const { navigate } = this.props.navigation;
        let data ={
            id: item.id,
            name: item.name,
            city: item.city,
            fone: item.fone,
            avatar: item.avatar
        }
    
        navigate('Client', {client: data})
    }

    _onPressButton(name){
        Alert.alert('Precionou o botão: '+name)
    }

    consultar(){
        let data = [];
        // Realm.open({schema: [ClientSchema], schemaVersion: 9})
        // .then(realm =>{
        //     let clients = realm.objects('Client')

        //     if(clients){
        //         Alert.alert('Possui clients!')
        //     }else{
        //         Alert.alert('Não possui')
        //     }

        //     for(let clie of clients){
        //     data.push(clie);
        //     Alert.alert('Cliente: ', clie.name)
        //     }

        //     this.setState({
        //         clients: data
        //     })
            
        // })

        let realm = new Realm({schema: [ClientSchema], schemaVersion: 9})
        let clients = realm.objects('Client')
            for(let clie of clients){
            data.push(clie)
            }

            this.setState({
                clients: data
            })

        console.log('VAIII')

        // for(let clie of clients){
        //     // data.push(clie);
        // }
        
        // this.setState({
        //                 clients: data
        //      
    }

    componentDidMount(){
       this.consultar(); 
    }



    renderItem(item){
        return (                
                <TouchableHighlight
                    onPress={ () => this._editar(item)}
                    underlayColor="white"
                >
                   <View style={ styles.listUser }>
                   <Image source= { {uri: item.avatar } } style={ styles.avatar }/>
                        <View style={ styles.contentListUser }>
                            <Text> { item.name }</Text>
                            <Text> { item.fone } </Text>
                            <Text> { item.city } </Text>
                        </View> 
                    </View> 
                </TouchableHighlight> 
                            
        )
    }

    addClient(){
        const { navigate } = this.props.navigation;
        navigate('Client', {
                                client: {
                                        id: null,
                                        name: '', 
                                        city: '', 
                                        fone:'',
                                        avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png'
                                    }
                                })
    }

    render(){

        if(!this.state.clients){
            return(
                <View style={styles.container }>
                    <TouchableHighlight style={ styles.btnAdd }
                        onPress={ () => this.addClient() }
                        underlayColor="white"
                        >            
                            <Text style={ styles.iconAdd } >+</Text>
       
                    </TouchableHighlight>
                    <Button
                title="Atualizar"
                onPress={ () => this.consultar() }
                >

                </Button>  
                </View>
    
                

    
            );
        }
        return(
            
            <View style={ styles.container }>
            
                <FlatList
                    data = {this.state.clients}
                    renderItem = { ({item}) => this.renderItem(item) }
                >

                </FlatList>
                <TouchableHighlight style={ styles.btnAdd }
                    onPress={ () => this.addClient() }
                    underlayColor="white"
                    >            
                        <Text style={ styles.iconAdd } >+</Text>
    
                </TouchableHighlight>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 15,
    },
    avatar:{
        width:50,
        height:50,
        borderRadius: 50
    },
    listUser:{
        display: "flex",
        flexDirection: "row",
        padding:10
    },
    contentListUser:{
        display:"flex", 
        flexDirection:"column" 
    },
    btnAdd:{
        height: 50,
        width:50,
        backgroundColor:'#00897b',
        borderRadius: 50,
        marginLeft: 310,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        alignContent: 'center',
        padding: 0,
        zIndex: 10
    },
    iconAdd:{
        fontSize:35
    }
})

const data = [
    {name:"Weslei ferreira da silva", fone: "(44) 99936-6810", city: "Maringá", avatar:"https://cdn2.iconfinder.com/data/icons/professions/512/user_boy_avatar-512.png"},
    {name:"Juliano Barbosa ferraz", fone: "(44) 88965-3654", city: "Sarandi", avatar:"https://previews.123rf.com/images/robuart/robuart1703/robuart170300728/73855318-emotion-avatar-man-happy-successful-face-vector.jpg"},
    {name:"Guilherme Algusto", fone: "(44) 7987-5262", city: "Marialva", avatar:"https://cdn.dribbble.com/users/35310/screenshots/5319659/avatar-black-girl-2_64px.png"},
    {name:"Amando dos santos", fone: "(44) 1121-6548", city: "Maringá", avatar:"https://cdn1.iconfinder.com/data/icons/ninja-things-1/720/ninja-background-512.png"},
    {name:"Pedro amado", fone: "(44) 5214-9879", city: "Iguatemi", avatar:"https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/1-512.png"},
    
]


export default ListClientComponent