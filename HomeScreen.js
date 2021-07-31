import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';


export default class HomeScreen extends React.Component{
    
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../assets 2/stars.gif')} style={styles.backgroundImage} >
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}> Stellar App </Text>
                </View>

                <TouchableOpacity style={styles.routeCard} onPress={()=>
                this.props.navigation.navigate("StarMap")
                }>
                    <Text style={styles.routeText}> Star Map </Text>
                    <Image source={require("../assets 2/star_map.png")} style={{ width: 80, height: 80 }}/>
                </TouchableOpacity>


                <TouchableOpacity style={styles.routeCard} onPress={()=>
                this.props.navigation.navigate("SpaceCrafts")
                }>
                    <Text style={styles.routeText}> Space Crafts </Text>
                    <Image source={require("../assets 2/spacecraft.png")} style={{ width: 80, height: 80 }}/>
                </TouchableOpacity>


                <TouchableOpacity style={styles.routeCard} onPress={()=>
                this.props.navigation.navigate("DailyPic")
                }>
                    <Text style={styles.routeText}> Daily Pics </Text>
                    <Image source={require("../assets 2/daily_pictures.png")} style={{ width: 80, height: 80 }}/>
                </TouchableOpacity>


        
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
})