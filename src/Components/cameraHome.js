// import 'react-native-gesture-handler'
// import React from 'react';
// import { StyleSheet, Text, View,Modal,Alert,KeyboardAvoidingView, TouchableOpacity} from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions';

// export default async function pickFromCamera(){
//     const {granted} =  await Permissions.askAsync(Permissions.CAMERA)
//     if(granted){
//          let data =  await ImagePicker.launchCameraAsync({
//               mediaTypes:ImagePicker.MediaTypeOptions.Images,
//               allowsEditing:true,
//               aspect:[1,1],
//               quality:0.5
//           })
//         if(!data.cancelled){
//             let newfile = {
//               uri:data.uri,
//              // duration: 5,
//               //to: 'a@a.Fr'
//               type:`test/${data.uri.split(".")[1]}`,
//               name:`test.${data.uri.split(".")[1]}`

//           }
//             handleUpload(newfile)
//         }
//     }else{
//        Alert.alert("you need to give up permission to work")
//     }
//  }