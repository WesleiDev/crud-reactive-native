import React, {Component} from 'react';
import { View,
        Text,
        StyleSheet,
        FlatList,
        Alert,
        Image,
        TouchableHighlight } from 'react-native';

class ListClientComponent extends Component{

    constructor(props){
        super(props);
    }

    _editar(item){
        // Alert.alert(item.name)
        const { navigate } = this.props.navigation;
        navigate('Client', {client: item})
    }

    _onPressButton(name){
        Alert.alert('Precionou o botão: '+name)
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

    render(){
        return(
            <View style={ styles.container }>
                <FlatList
                    data = {data}
                    renderItem = { ({item}) => this.renderItem(item) }
                >

                </FlatList>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 15        
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