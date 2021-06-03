import React, { useState, setResults } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
//import { CommonActions } from '@react-navigation/native';

export default function Messages() {
    const [snaps,setSnaps]=useState('')
    const url = 'https://snapi-wac.herokuapp.com/snaps';
    const navigation = useNavigation();
 

    fetch(url, {
        method: 'GET',
        headers: {
        "token": "LhjqXYGa8j2x4qnv45GALZ5S"     
        }
    })
    .then(response => {
       return response.json()
    })
    .then(json =>{
       setSnaps(json.data)
    })

    // // navigation.dispatch(CommonActions.getParams({ id:snap_id }));
    // // let snap_id = navigation.navigate({routeName:'Snap', param:{snap_id}});
    // // C'est de la merde.
    // let snap_id = 1;

    //     fetch('https://snapi-wac.herokuapp.com/snap/' + snap_id)
    //       .then((response) => response.json())
    //       .then((responseJson) => {
    //         setResults({
    //           isLoading: false,
    //           services: responseJson.data,
    //         }, function(){
    
    //         });
    
    //       })
    //       .catch((error) =>{
    //         console.error(error);
    //       });
          
    return(

    <SafeAreaView>
        <View style={{ justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#FFF',paddingVertical:10}} >
            <Text style={{ marginTop:20, fontWeight: 'bold'}}>Receptions</Text>
        </View>

        <FlatList data={ snaps } keyExtractor={(x, i) => i} renderItem={({ item }) =>
            <TouchableOpacity
            // onPress= {() => navigation.getParams('Snap', {id:item.snap_id})} C'est de la merde aussi.
            >

                <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'#000'}}>

                <View style={{ flexDirection:'row', alignItems:'center', marginTop:5, margin:10}}>
                    <View style={{ marginTop:20}}>
                        <Image
                        style={{borderRadius:20,width: 50, height: 50}}
                        source={require('../images/user.png')} 
                        />
                    </View>
               
                    <View>
                        <Text style={{ paddingLeft:10, fontWeight:'bold', fontSize:18, marginTop:27, color:'#797cec' }}>
                            {item.from}
                        </Text>
                        
                        <View style={{//new container
                            flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <View style={{ marginLeft:10 }} />
                                <Text style={{color:'#a1a1a1' }}>
                                    New Snap - {item.duration} mn 
                                </Text>
                        </View>
                    </View>
                
                </View>

            
                <View style={{padding:10, borderLeftWidth:2, borderLeftColor:'gray', marginTop:35, marginRight:5}}>
                   <EvilIcons name="sc-telegram" size={30} color='#797cec'/>
                </View>
        </View>
        </TouchableOpacity>
        }/>
      
    </SafeAreaView>
    
    );
}