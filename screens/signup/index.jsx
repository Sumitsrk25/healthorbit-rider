/**
 * fileName: signup/index.js
 * description: the signup screen component
 */

 import React, { Component } from "react";
 import { Image, Text, View, FlatList, TouchableOpacity,CheckBox ,Alert,ScrollView,} from "react-native";
 
 import Icon from "react-native-vector-icons/Fontisto";
 import { Input } from "react-native-elements";
 
 import { Header, Footer } from "../../components";
 import { HealthOrbitImage } from "../../assets";
 import { styles } from "./styles";
 import ApiClient from "../../utils/api_client";
 
 import { COLOR_PRESETS } from "../../presets/colors";
 import { RouteNames } from "../../navigation/route_names";
//  import SvgUri from 'react-native-svg-uri';
 
 
 

 export class SingUp extends Component {
   constructor(props) {
     super(props);
     this.state = {
      RiderName: '',
      RiderEmail: '',
      RiderPassword: '',
      RiderMobile:''
     };
     
   }
 
   RiderRegistrationFunction = () =>{
 
 
    const { RiderName }  = this.state ;
    const { RiderEmail }  = this.state ;
    const { RiderPassword }  = this.state ;
    const { RiderMobile}  = this.state ;
    
    
    
    fetch('https://engistack.com/dm/rider/rider_registration.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
    
       name: RiderName,
    
       email: RiderEmail,
    
       password:RiderPassword,

       mobile : RiderMobile
    
     })
    
   }).then((response) => response.json())
         .then((responseJson) => {
    
   // Showing response message coming from server after inserting records.
           Alert.alert(responseJson );
         }).catch((error) => {
           console.error(error);
         });
    
    
    }
  
   renderBody() {
     return (
      <ScrollView>
       <View style={{ flex: 1 }}>
         <View style={styles.logoContainer}>
           
           {/* <SvgUri 
             width="200" 
             height="200" 
             source={{uri:'https://kigadel.com/gimonn/ic/Icons/Icon%20Logo.svg'}}
           /> */}
           {/* <Image source={HealthOrbitImage} style={styles.logoSize} /> */}
             
         </View>

         <TouchableOpacity onPress={() => {this.props.navigation.navigate(RouteNames.SCREEN_2)}}>
           <Text style={styles.testHeader}>SignUp</Text>
         </TouchableOpacity>

          <Input
           inputContainerStyle={styles.inputContainer}
           leftIconContainerStyle={styles.leftIconContainer}
           inputStyle={styles.input}
           containerStyle={styles.inputRootContainer}
           placeholder="Username"
           onChangeText={RiderName => this.setState({RiderName})}
          />
 
          <Input
           inputContainerStyle={styles.inputContainer}
           leftIconContainerStyle={styles.leftIconContainer}
           inputStyle={styles.input}
           containerStyle={styles.inputRootContainer}
           placeholder="Email Address"
           onChangeText={RiderEmail => this.setState({RiderEmail})}
          />

          <Input  
           keyboardType='numeric'
           maxLength={10} 
           inputContainerStyle={styles.inputContainer}
           leftIconContainerStyle={styles.leftIconContainer}
           inputStyle={styles.input}
           containerStyle={styles.inputRootContainer}
           placeholder="Mobile No."
           style={{color:"black"}}
           onChangeText={RiderMobile => this.setState({RiderMobile})}
          />


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
           onChangeText={RiderPassword => this.setState({RiderPassword})}
          />


           <View style={{ flexDirection: 'column',marginLeft:30}}>
              
              <View style={{ flexDirection: 'row',marginRight:50 }}>
                <CheckBox
                  value={this.state.checked}
                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                />
                 
                <Text style={{marginTop: 5,color:COLOR_PRESETS.PRIMARY.DARK}}> By signing up you accept the terms of services and the privacy policy</Text>
              </View>
            </View>
         
          <TouchableOpacity onPress={this.RiderRegistrationFunction}>
            <Text style={styles.SingIn}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.bottom}>
            <View style={{flex:0.6}}>
              <Text>Already have an account? </Text>
            </View>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate(RouteNames.SIGN_IN)}}>
              <Text style={styles.signup}>SignIn </Text>
            </TouchableOpacity>
          </View>
        
       </View>
      </ScrollView>


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
 
 export default SingUp;
 