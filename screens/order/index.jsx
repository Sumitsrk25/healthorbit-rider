/**
 * fileName: order/index.js
 * description: the order component
 */

 import React, { Component } from "react";
 import {
   StyleSheet,
   Dimensions,
   Image,
   Text,
   View,
   FlatList,
   TouchableOpacity,
 } from "react-native";
 import Icon from "react-native-vector-icons/Fontisto";
 import { Input, Divider, Button } from "react-native-elements";
 
 import { Header, Footer } from "../../components";
 import { HealthOrbitImage ,ProfilePhoto } from "../../assets";
 import { styles } from "./styles";
 import ApiClient from "../../utils/api_client";
 
 import { COLOR_PRESETS } from "../../presets/colors";
 import { DrawerScreens, RouteNames } from "../../navigation/route_names";
 import { moderateScale, verticalScale } from "react-native-size-matters";
 //import { SvgUri } from 'react-native-svg';
 
 const DeviceWidth = Dimensions.get("window").width;
 

 export class OrderScreen extends Component {
  
 
  renderBody() {
   
 
 
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.logoContainer}>
        <Divider orientation="horizontal" />
          
        </View>


        <View style={styles.mainContainer}>
           <Text style={styles.testHeader} >
             Select the type of document you wish to scan
           </Text>
           <Text style={styles.testHeader1}>
             We need to determine if an identity document
             is authentic and belongs to you.
             India has been set as the issuing country of
             your documents.
             Change country
           </Text>
          
        </View>
        
       <View>

       <View style={styles.cardRootMainContainer}>
         <TouchableOpacity  style={styles.cardRootContainer}>
           <View style={styles.cardRootContainer}>
             <View style={styles.cardContentContainer}>
               <View style={styles.cardHeaderContainer}>
                 <Image
                   source={require("../../assets/images/image.png")}
                   style={styles.cardImg}
                 />

                
                 <View
                   style={{
                     flexDirection: "row",
                     justifyContent: "center",
                     alignItems: "center",
                     marginLeft: 30,
                   }}
                 >
                   <View>
                     <View style={{ width: DeviceWidth * 0.65 }}>
                       <Text style={styles.testName}>Passport</Text>
                     </View>
                   </View>
                 </View>
                 {/* </View> */}
                
               </View>
             </View>
           </View>
         </TouchableOpacity>
       
         <TouchableOpacity  style={styles.cardRootContainer}>
           <View style={styles.cardRootContainer}>
             <View style={styles.cardContentContainer}>
               <View style={styles.cardHeaderContainer}>
                 <Image
                   source={require("../../assets/images/image.png")}
                   style={styles.cardImg}
                 />

                
                 <View
                   style={{
                     flexDirection: "row",
                     justifyContent: "center",
                     alignItems: "center",
                     marginLeft: 30,
                   }}
                 >
                   <View>
                     <View style={{ width: DeviceWidth * 0.65 }}>
                       <Text style={styles.testName}>Driver License</Text>
                     </View>
                   </View>
                 </View>
                 {/* </View> */}
                
               </View>
             </View>
           </View>
         </TouchableOpacity>
       
         <TouchableOpacity  style={styles.cardRootContainer}>
           <View style={styles.cardRootContainer}>
             <View style={styles.cardContentContainer}>
               <View style={styles.cardHeaderContainer}>
                 <Image
                   source={require("../../assets/images/image.png")}
                   style={styles.cardImg}
                 />

                
                 <View
                   style={{
                     flexDirection: "row",
                     justifyContent: "center",
                     alignItems: "center",
                     marginLeft: 30,
                   }}
                 >
                   <View>
                     <View style={{ width: DeviceWidth * 0.65 }}>
                       <Text style={styles.testName}>Identity Card</Text>
                     </View>
                   </View>
                 </View>
                 {/* </View> */}
                
               </View>
             </View>
           </View>
         </TouchableOpacity>
       </View>

       <View>
         <TouchableOpacity  style={styles.cardRootContainer}>
           <View style={styles.cardRootContainer}>
             <View style={styles.cardContentContainer}>
               <View style={styles.cardHeaderContainer}>
                 <Image
                   source={require("../../assets/images/image.png")}
                   style={styles.cardImg}
                 />

                
                 <View
                   style={{
                     flexDirection: "row",
                     justifyContent: "center",
                     alignItems: "center",
                     marginLeft: 30,
                   }}
                 >
                   <View>
                     <View style={{ width: DeviceWidth * 0.65 }}>
                       <Text style={styles.testName}>Education Certificate</Text>
                     </View>
                   </View>
                 </View>
                 {/* </View> */}
                
               </View>
             </View>
           </View>
         </TouchableOpacity>
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
           {/* <Footer /> */}
         </View>
       </>
     );
   }
 }
 

 
 export default OrderScreen;
 
