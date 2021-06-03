import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Login extends React.Component{

    constructor(){
        super();
        this.state=({
            email:'',
            password:'',
            token:'',
            message: ''
        })
        this.getData();
    }

    getData = async () => {
        try{
            let value = await AsyncStorage.getItem("token");
            if(value !== null){
                console.log("token = " + value)
                this.setState({token: value})
            }
        } catch(error){
            console.log(error);
        }
        try{
            let value2 = await AsyncStorage.getItem("emailUser");
            if(value2 !== null){
                console.log("email =" + value2)
                this.setState({email: value2})
            }
        } catch(error){
            console.log(error);
        }
        try{
            let value3 = await AsyncStorage.getItem("passwordUser");
            if(value3 !== null){
                console.log("password =" + value3)
                this.setState({password: value3})
            }
        } catch(error){
            console.log(error);
        }
    };

    updateValue(text,field){
        // console.warn(text)
        if(field=='email')
        {
        this.setState({email:text})
        }else if(field =='password')
        {
        this.setState({ password:text })
        }else if(field =='message')
        {
        this.setState({ message:text })
      }else if(field =='token')
        {
        this.setState({ token:text })
        }
    }

    saveData = async () => {
      try {
        await AsyncStorage.setItem('token', this.state.token)
        console.log('Data successfully saved')
      } catch (e) {
        console.log('Failed to save the data to the storage')
      }
      try {
        await AsyncStorage.setItem('emailUser', this.state.email)
        console.log('email successfully saved')
      } catch (e) {
        console.log('email to save the data to the storage')
      }
      try {
        await AsyncStorage.setItem('passwordUser', this.state.password)
        console.log('password successfully saved')
      } catch (e) {
        console.log('password to save the data to the storage')
      }
    }

    submit = async () => {
        let collection={}
        collection.email=this.state.email;
        collection.password=this.state.password;
        var url = 'https://snapi-wac.herokuapp.com/connection';

        fetch(url, {
        method:'POST',
        body:JSON.stringify(collection),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
        }).then(res => res.json())
        .catch(error => console.error('Error:',error))
        .then(response => {

            if(response.data.token){
              this.updateValue(response.data.token,'token')
              this.updateValue(collection.email,'email')
              this.updateValue(collection.password,'password')
              this.saveData();
              const {navigate} = this.props.navigation;
              navigate("Home");
            }
            else{
                    this.updateValue(response.data,'message');
            }
        })
    }

    render(){
        const {navigate} = this.props.navigation
        return(

        <View style={{backgroundColor:'#000', marginTop: 20, height:'100%'}}>
            <Image source={require('../images/logo.png')}
            style={{alignSelf:'center'}}
            />
            <Text style={{fontSize:28, alignSelf:"center",color:'#fff'}}>Welcome Back !</Text>

            <Text style={{marginHorizontal:55,textAlign:"center",marginTop:5,opacity:0.4,color:'#fff'}}>
                Nice to see you again!
            </Text>
            <Text style={{alignSelf:'center', color:"red"}}>
                {this.state.message}
            </Text>

            <View style={{flexDirection:'row',alignItem:"center",marginHorizontal:45,borderWidth:0.7,marginTop:40,paddingHorizontal:10,paddingVertical:6,borderColor:"#C0C0C0",borderRadius:10,backgroundColor:'whitesmoke'}}>
                <Icon name="mail" color="#e5be00" size={24}/>
                <TextInput  value={this.state.email} onChangeText={(text)=>this.updateValue(text,'email')}  style={{paddingHorizontal:6}} placeholder='Email' />
            </View>

            <View style={{flexDirection:'row',alignItem:"center",marginHorizontal:45,borderWidth:0.7,marginTop:20,paddingHorizontal:10,paddingVertical:6,borderColor:"#C0C0C0",borderRadius:10,backgroundColor:'whitesmoke'}}>
                <Icon name="lock" color="#e5be00" size={24}/>
                <TextInput onChangeText={(text)=>this.updateValue(text,'password')} value={this.state.password} secureTextEntry={true} style={{paddingHorizontal:10}} placeholder='Password'/>
            </View>

            <TouchableOpacity  onPress={()=>this.submit()} style={{marginHorizontal:45,alignItems:"center",justifyContent:"center",marginTop:20,backgroundColor:"#e5be00",paddingVertical:8,borderRadius:10}}>
                <Text style={{color:"white"}}>Login</Text>
            </TouchableOpacity>
            <Text onPress={()=>navigate('Register')} style={{alignSelf:"center",opacity:0.7,paddingVertical:30,color:"#e5be00"}} >New User ?</Text>


        </View>


        )
    }
}