import React from 'react';
import {Text, View, Image, TextInput, AppRegistry, TouchableOpacity} from 'react-native';

export default class Register extends React.Component{

    constructor(){
		super()
		this.state=({
			userEmail:'', 
			userPassword:''		
		})
	}
    

    updateValue(text,field){
        // console.warn(text)
        if(field=='email'){
          this.setState({
            email:text,
          })
        } else if(field =='password'){
            this.setState({
                password:text,
            })
        }
        }
        submit(){
        let collection={}
          collection.email=this.state.email,
          collection.password=this.state.password
          // console.warn(collection)
        
          var url = 'https://snapi-wac.herokuapp.com/inscription';
        
          fetch(url, {
            method:'POST',
            body:JSON.stringify(collection),
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          }).then(res => res.json())
          .catch(error => console.error('Error:',error))
          .then(response => console.log('Success:', response))
        }
    

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#000",height:"100%"}}>

                <Image source={require('../images/logo.png')} style={{width:"100%",height:"40%"}}/>

                <Text style={{fontSize:28, alignSelf:"center",color:'#fff'}}>
                    Welcom to Snapéro !
                </Text>

                <Text style={{marginHorizontal:55,textAlign:"center",marginTop:5,opacity:0.4,color:'#fff'}}>Keep in touch with your friends with instant messaging !</Text>

                <View style={{flexDirection:'row',alignItem:"center",marginHorizontal:45,borderWidth:0.7,marginTop:40,paddingHorizontal:10,paddingVertical:6,borderColor:"#C0C0C0",borderRadius:10,backgroundColor:'whitesmoke'}}>
                    <TextInput placeholderTextColor="#C0C0C0" style={{paddingHorizontal:6}} onChangeText={(text)=>this.updateValue(text,'email')} 
                    placeholder='Email'/>
                </View>

                <View style={{flexDirection:'row',alignItem:"center",marginHorizontal:45,borderWidth:0.7,marginTop:20,paddingHorizontal:10,paddingVertical:6,borderColor:"#C0C0C0",borderRadius:10,backgroundColor:'whitesmoke'}}>
                    <TextInput secureTextEntry={true} placeholderTextColor="#C0C0C0" style={{paddingHorizontal:10}}  onChangeText={(text)=>this.updateValue(text,'password')} 
                    placeholder='Password'/>
                </View>

                <TouchableOpacity onPress={()=>this.submit(navigate('Home'))} style={{marginHorizontal:45,alignItems:"center",justifyContent:"center",marginTop:20,backgroundColor:"#e5be00",paddingVertical:8,borderRadius:10}}>
                    <Text style={{color:"white"}}>Register</Text>
                </TouchableOpacity>
                
                <Text type="submit" onPress={()=>navigate('Login')} style={{alignSelf:"center",opacity:0.7,paddingVertical:30,color:"#e5be00"}} >Already member ?</Text>
            
            </View>
        )
    }
}

AppRegistry.registerComponent('register', () => Register);