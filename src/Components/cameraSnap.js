// import React, { useState, useEffect, useRef } from 'react';
// import { Text, View, TouchableOpacity} from 'react-native';
// import { Camera } from 'expo-camera';
// import { Ionicons } from '@expo/vector-icons'; // reverseCam icon

// import { AntDesign } from '@expo/vector-icons'; // delete button
// import { FontAwesome } from '@expo/vector-icons'; // user icon


// export default function CameraSnap() {
//     const [hasPermission, setHasPermission] = useState(null);
//     const [type, setType] = useState(Camera.Constants.Type.back);
//     const [setIsPreview] = useState(false);

//     const cameraRef = useRef();

//     useEffect(() => {
//         (async () => {
//           const { status } = await Camera.requestPermissionsAsync();
//           setHasPermission(status == 'granted');
//         })();
//       }, []);


//       // const takePicture = async () => {
//       //   if (cameraRef.current) {
//       //     const options = { quality: 0.5, base64: true, skipProcessing: true };
//       //     const data = await cameraRef.current.takePictureAsync(options);
//       //     const source = data.uri;
//       //     if (source) {
//       //       await cameraRef.current.pausePreview();
//       //       setIsPreview(true);
//       //     }
//       //   }
//       // }
    
//       const cancelPreview = async () => {     
//         await cameraRef.current.resumePreview();
//         setIsPreview(false);
//       };

//       if (hasPermission === null) {
//         return <View />;
//       }
//       if (hasPermission === false) {
//         return <Text>No access to camera</Text>;
//       }
//       return (
//         <View>

//           <Camera type={type} style={{ height:"90%", width:"100%"}} ref={cameraRef}>


//             {/* ROND TAKE PICTURE
            
//             <View style={{alignSelf:'center', position:'absolute', bottom:5}}>
//                 <TouchableOpacity onPress={takePicture}>
//                 <Entypo name="circle" size={40} color="white" />
//                 </TouchableOpacity>
//               </View> */}

//             {/* CAMERA REVERSE : */}
//             <View>
//               <TouchableOpacity style={{size:30, position:'absolute', right:6, top:2}}
//                 onPress={() => {
//                   setType(
//                     type === Camera.Constants.Type.back
//                       ? Camera.Constants.Type.front
//                       : Camera.Constants.Type.back
//                   );
//                 }}>
//                 <Ionicons name="camera-reverse-outline" size={24} color="white"/>
//               </TouchableOpacity>
//             </View>


//             {/* DELETE PIC  : */}
//             <View style={{ position:'absolute', top:3, left:3}}>
//               <TouchableOpacity onPress={cancelPreview}>
//                 <AntDesign name="delete" size={24} color="white" />
//               </TouchableOpacity>
//             </View>


//           </Camera>

//         </View>
//       );
// }