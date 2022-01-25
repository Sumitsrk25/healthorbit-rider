/**
 * fileName: home/index.js
 * description: the home screen component
 */

 import React, { Component } from "react";
 import { Dimensions,Image,Divider,Text, View, FlatList, TouchableOpacity ,DropDownPicker} from "react-native";
 
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

 
 const DeviceWidth = Dimensions.get("window").width;
 export class DocumentScreen extends Component {
   constructor(props) {
     super(props);
    
   }
  
   
  
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
           
         </View>
       </>
     );
   }
 }
 
 export default DocumentScreen;