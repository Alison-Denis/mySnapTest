import React from 'react'
import { useState } from 'react'
import {FlatList, Text, View, Image,TouchableOpacity} from 'react-native'

const FriendListScreen=() =>{
  const [results,setResults]=useState('')
  const url = "https://snapi-wac.herokuapp.com/all"
        //var token = "2522AEF676FF25E6"
        fetch(url,
        {
            method: 'GET',
            headers: {
                "token": "LhjqXYGa8j2x4qnv45GALZ5S"
                
              }
        })
        .then((response)=>{
          return response.json()
        })
        .then(json =>{
          // console.warn(json)
          setResults(json.data)
        })

let snap_id = results.getParam('snap_id', 0);
    fetch('https://snapi-wac.herokuapp.com/snap/' + snap_id)
        .then((response) => response.json())
        .then((responseJson) => {
        setResults({
            isLoading: false,
            services: responseJson.data,
        }, function(){
            });
        })
        .catch((error) =>{
            console.error(error);
        });

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#000', marginTop:30 }}>
        <View style={{backgroundColor:'#000'}}>
        <Text style={{ fontWeight:'bold', alignSelf:'center', color:'white', marginTop:3}}>Watch stories</Text>
    
                        
          <View style={{flexDirection:'row',paddingHorizontal:10,paddingVertical:10}}>

            <Image
              style={{borderRadius:50, width: 60, height: 60,marginHorizontal: 5, borderColor: 'lightgray', borderWidth: 3}}
              source={{uri:'https://data.whicdn.com/images/314524325/original.jpg'}}
              />
            <Image
              style={{borderRadius:50,width: 60, height: 60, marginHorizontal: 5, borderColor: 'lightgray', borderWidth: 3}}
              source={{uri:'https://www.le-grand-pastis.com/wp-content/uploads/2021/02/Beer-district-une.jpg'}}
              />
                <Image
              style={{borderRadius:50,width: 60, height: 60, marginHorizontal: 5, borderColor: '#797cec', borderWidth:2}}
              source={{uri:'https://i.pinimg.com/originals/5d/9f/2d/5d9f2d8d76428a6966ba7ed91bc045c0.jpg'}}
              />
                <Image
              style={{borderRadius:50,width: 60, height: 60, marginHorizontal: 5, borderColor: '#e5be00', borderWidth: 3}}
              source={{uri:'https://smallthoughtsinasportsworld.files.wordpress.com/2012/07/raymond_felton_013.jpg'}}
              /> 
              <Image
              style={{borderRadius:50,width: 60, height: 60, marginHorizontal: 5, borderColor: '#797cec', borderWidth: 3}}
              source={{uri:'https://www.ifolor.ch/content/dam/ifolor/inspire-gallery/inspirationen/selbstportraet-selfie/inspire_selbstportraet_selfie_1200px_header.jpg.transform/q60/image.jpg?inspire_selbstportraet_selfie_1200px_header.jpg'}}
              />
          
          </View>
       </View >

        <FlatList data={results} keyExtractor={(x, i) => i} renderItem={({ item }) =>
            <TouchableOpacity>

                <View  style={{flexDirection:'row',alignSelf:'center',alignItem:"center",borderWidth:0.2,marginTop:5,paddingHorizontal:8,paddingVertical:6,borderColor:"#e5be00",borderRadius:2, backgroundColor:'black', width:'90%'}}>
                    <Image
                    style={{borderRadius:25,width:40, height:40}}
                    source={require('../images/user.jpg')} 
                    />
                  <Text  style={{paddingHorizontal:6,paddingVertical:13, fontWeight: '400', color:'white'}} >
                    {item.email}
                  </Text>
                </View>

            </TouchableOpacity>
    
    }
        />
     
      </View>
    );
  }

  export default FriendListScreen;