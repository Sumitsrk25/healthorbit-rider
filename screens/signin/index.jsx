/**
 * fileName: signin/index.js
 * description: the signin screen component
 */

 import React, { Component } from "react";
 import { Image, View, FlatList, TouchableOpacity,CheckBox,Alert, Text} from "react-native";
 import { CommonActions , StackActions} from "@react-navigation/routers";

 import Icon from "react-native-vector-icons/Fontisto";
 import { Input } from "react-native-elements";
 import {SocialIcon } from 'react-native-elements';
 import { Header, Footer } from "../../components";
 import { HealthOrbitImage } from "../../assets";
 import { styles } from "./styles";
 import ApiClient from "../../utils/api_client";
 
 import { COLOR_PRESETS } from "../../presets/colors";
 import { RouteNames } from "../../navigation/route_names";
//  import SvgUri from 'react-native-svg-uri';
 
 
 

 export class SingIn extends Component {
   constructor(props) {
     super(props);
     this.state = {
       testList: [],
       email:'',
       password:''
     };
     
   }
   
 
   RiderLoginFunction = () =>{
 
    const { email }  = this.state ;
    const { password }  = this.state ;
    
    
   fetch('https://engistack.com/dm/rider/rider_login.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
    
       email: email,
    
       password: password
    
     })
    
   }).then((response) => response.json())
         .then((responseJson) => {
    
           // If server response message same as Data Matched
          if(responseJson === 'Data Matched')
           {
    
               //Then open Profile activity and send user email to profile activity.
               //this.props.navigation.navigate('Second', { Email: email });

               Alert.alert(responseJson);
              //  Alert.alert(
              //   "Alert Title",
              //   "My Alert Msg",
              //   [
                  
              //     { text: "OK", 
              //       onPress: () => this.props.navigation.dispatch(
              //         CommonActions.reset({
              //           index: 0,
              //           routes: [{ name: RouteNames.HOME }],
              //         })
              //       )}
              //   ],
              //   { cancelable: false }
              // );
              
              
              
           }
           else{
    
             Alert.alert(responseJson);
           }
    
         }).catch((error) => {
           console.error(error);
         });
    
    
     }
 
   renderBody() {
     return (
       <View style={{ flex: 1 }}>
         <View style={styles.logoContainer}>
           
           {/* <SvgUri 
             width="200" 
             height="200" 
             source={{uri:'https://kigadel.com/gimonn/ic/Icons/Icon%20Logo.svg'}}
           /> */}
           {/* <Image source={HealthOrbitImage} style={styles.logoSize} /> */}
             
         </View>

         <TouchableOpacity onPress={() => {this.props.navigation.navigate(RouteNames.HOME)}}>
           <Text style={styles.testHeader}>Sign In</Text>
         </TouchableOpacity>

          <Input
           inputContainerStyle={styles.inputContainer}
           leftIconContainerStyle={styles.leftIconContainer}
           inputStyle={styles.input}
           containerStyle={styles.inputRootContainer}
           placeholder="Email ID"
           onChangeText={(email) => this.setState({ email })}
           
          />
 
          {/* <Text style={{padding: 10, fontSize: 42}}>
            {email.split(' ').map((word) => word && '').join(' ')}
          </Text> */}


          <Input
           inputContainerStyle={styles.inputContainer}
           leftIconContainerStyle={styles.leftIconContainer}
           inputStyle={styles.input}
           containerStyle={styles.inputRootContainer}
           placeholder="Password"
           secureTextEntry={true} 
           style={{color:"black"}}
          //  maxLength={10} 
           minLength={3} 
           onChangeText={(password) => this.setState({ password })}
          />

          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
           
          }}>
            
            <View style={{ flexDirection: 'column'}}>
              
              <View style={{ flexDirection: 'row',marginRight:50 }}>
                <CheckBox
                  value={this.state.checked}
                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                />
                 
                <Text style={{marginTop: 5,color:COLOR_PRESETS.PRIMARY.DARK}}> Remeber Me</Text>
              </View>
            </View>
            
            <TouchableOpacity onPress={() => {this.props.navigation.navigate(RouteNames.FORGET_PASSWORD)}}>
              <Text style={styles.forget}>Forget Password?</Text>
            </TouchableOpacity>
          </View>
          
         
         
          <TouchableOpacity onPress={this.RiderLoginFunction}>
            <Text style={styles.SingIn}>Sign In</Text>
          </TouchableOpacity>
          
        

          <View style={styles.bottom}>
            <View style={{flex:0.8}}>
              <Text>Don't have an account? </Text>
            </View>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate(RouteNames.SIGN_UP)}}>
              <Text style={styles.signup}>Create a new one </Text>
            </TouchableOpacity>
          </View>
        
       </View>



     );
   }
 
   
   render() {
     return (
       <>
         <View style={styles.rootContainer}>
           <Header />
           {this.renderBody()}
           {/* <Footer /> */}
         </View>
       </>
     );
   }
 }
 
 export default SingIn;

 
