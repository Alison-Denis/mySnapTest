import 'react-native-gesture-handler'

import React,{useState} from 'react';
import { StyleSheet, Text, View,Modal,Alert,KeyboardAvoidingView, Image} from 'react-native';
import {TextInput,Button} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


  export default function Camera() {

  const pickFromGallery = async ()=>{
     const {granted} =  await Permissions.askAsync(Permissions.CAMERA_ROLL)
     if(granted){
          let data =  await ImagePicker.launchImageLibraryAsync({
               mediaTypes:ImagePicker.MediaTypeOptions.Images,
               allowsEditing:true,
               aspect:[1,1],
               quality:0.5
           })
           if(!data.cancelled){
               let newfile = {
                 uri:data.uri,
                // duration: 5,
                 //to: 'a@a.Fr'
                 type:`test/${data.uri.split(".")[1]}`,
                 name:`test.${data.uri.split(".")[1]}`

             }
               handleUpload(newfile)
           }
     }else{
        Alert.alert("you need to give up permission to work")
     }
  }
  const pickFromCamera = async ()=>{
     const {granted} =  await Permissions.askAsync(Permissions.CAMERA)
     if(granted){
          let data =  await ImagePicker.launchCameraAsync({
               mediaTypes:ImagePicker.MediaTypeOptions.Images,
               allowsEditing:true,
               aspect:[1,1],
               quality:0.5
           })
         if(!data.cancelled){
             let newfile = {
               uri:data.uri,
              // duration: 5,
               //to: 'a@a.Fr'
               type:`test/${data.uri.split(".")[1]}`,
               name:`test.${data.uri.split(".")[1]}`

           }
             handleUpload(newfile)
         }
     }else{
        Alert.alert("you need to give up permission to work")
     }
  }

   const handleUpload = (image)=>{
    // console.log(image);
    /* Request header:{"Content -Type": "multipart/form -data","token ": "2522 AEF676FF25E6"}
     Request body:{"duration ": 5,"to": "nom@domain.fr","image ": image  file}

     Response OK:{"data": "Snap  Created"}

     Response KO:{"data": "error  message"}*/
      //  var myHeaders = new Headers();
      //  myHeaders.append("Content-Type", "multipart/form-data");
      //  myHeaders.append("token", "LhjqXYGa8j2x4qnv45GALZ5S");
        //let collection={}
        //collection.duration= image.duration;
      //  collection.to= image.to;
      //  collection.uri= image.uri;
        var myInit = {
                      method: 'POST',
                      /*headers: {
                          "Content-Type": "multipart/form-data",
                          "token": "LhjqXYGa8j2x4qnv45GALZ5S"
                      },
                      body: {
                        "image": "/home/maxime/Desktop/W-JSC-502-LIL-2-1-snapchat-maxime.delanghe-Garance/src/images/logo.png",
                        "duration": '5',
                        "to": 'a@a.Fr'
                      }*/
                     };
      const data = new FormData()
      data.append("image", image)
    //  data.append("image", "/home/maxime/Pictures/product-icon-KSOS.png")
      data.append('duration', "9")
      data.append('to', "Zaki@hotmail.fr")
    /*  var data = new FormData();
      data.append('file', {
      uri: image.uri, /storage/emulated/0/Pictures/RNSketchCanvas/image.png
      name: 'image.png',
      type: 'image/png'
    });*/
        fetch("https://snapi-wac.herokuapp.com/snap",{
            method: 'POST',
            headers: {
              "Content-Type": "multipart/form-data",
              "token": "L6UxGVKHUesSuBedLCdJP82U" // token de l'user actual ?
            },
            body: data/* {
            //  "image": "/home/maxime/Pictures/product-icon-KSOS.png",
              "duration": "5",
              "to": "a@a.Fr"
            }*/
            }).then(response => response.json())
              .then(data => {
                 console.log(data);
            })
   }


  return (
    <View style={{backgroundColor:'#000', marginTop:30}}>
          {/* <Image source={background} style={{ alignSelf:'center', width:'100%', height:'100%'}}/> */}
      
          <Button  style={{width:"50%", borderRadius:20, position:'absolute', top:50, alignSelf:'center'}}
            icon="camera"
            mode="contained"
            color='#797cec'
            onPress={() => pickFromCamera()}>
              Take a picture
          </Button>

          <Button  style={{width:"50%", borderRadius:20, position:'absolute', top:100, alignSelf:'center'}}
            icon="image-area"
            mode="contained"
            color='#797cec'
            onPress={() => pickFromGallery()}>
              gallery
          </Button>
         
          
    </View>
  );
}
const background = require('../images/logo.png');

const styles=StyleSheet.create({
    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10
    }
})