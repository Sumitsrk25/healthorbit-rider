/**
 * fileName: home/index.js
 * description: the home screen component
 */

 import React, { Component } from "react";
 import { Image, Text, View, FlatList, TouchableOpacity ,DropDownPicker} from "react-native";
 
 //import Select from 'react-select';
 //import 'bootstrap/dist/css/bootstrap.min.css';
 import { TabViewAnimated, TabViewPage, TabBarTop } from 'react-native-tab-view';
 import Icon from "react-native-vector-icons/Fontisto";
 import { Header, Footer } from "../../components";
 import { HealthOrbitImage, ProfilePhoto } from "../../assets";
 import { styles } from "./styles";
 import ApiClient from "../../utils/api_client";
 
 import { COLOR_PRESETS } from "../../presets/colors";
 import { RouteNames } from "../../navigation/route_names";
 import SvgUri from "react-native-svg-uri";

 
 
 export class HomeScreen extends Component {
   constructor(props) {
     super(props);
    
   }
  
   
  
   renderBody() {
   
 
 
     return (
       <View style={{ flex: 1 }}>
         <View style={styles.logoContainer}>
           {/* <SvgUri
             width="200"
             height="200"
             source={{uri:'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'}}
           /> */}
           <Image source={ProfilePhoto} style={styles.logoSize} />
         </View>


         <View>
           <Text style={styles.testHeader} >We need to verify your ID</Text>
            <Text style={styles.testHeader1}>
              In order to create an account, we need to
              be 100% sure that you are you. As we’re a
              financial service, we have to comply with
              KYC and AML requirements.
            </Text>
            <Text style={styles.testHeader1}>
              We need to determine if an identity document
              is authentic and belongs to you.
              India has been set as the issuing country of
              your documents.
              Change country.
              You just need to go through some
              steps which will help us to build a
              secure system together.
            </Text>
         </View>
         
        <View>

        <View>
          <TouchableOpacity>
            <Text style={styles.SingIn}>verify</Text>
          </TouchableOpacity>
        </View>

        <View>
         
            <Text style={styles.testHeader2}>I don't have my ID with me</Text>
          
        </View>

         

        </View>

        
 
         


         
       </View>
     );
   }
 
  
   render() {
     return (
       <>
         <View style={styles.rootContainer}>
         <Header/>
           {this.renderBody()}
           
         </View>
       </>
     );
   }
 }
 
 export default HomeScreen;