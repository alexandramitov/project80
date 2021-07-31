import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';

import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class DailyPic extends React.Component{




    componentDidMount(){
        this.getAPOD();
    }


    getAPOD = () => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=ZktrdVD0rNuuz4AOLuQtlCjW4drMRgyHeMwOaZBu")
        .then(response => {
            this.setState({ apod: response.data })
        })
        .catch(error => {
            Alert.alert(error.message)
        })
    }




    render(){
        return(
            <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text> Daily Pics Screen </Text>

                <View style={StyleSheet.container}>
                    <SafeAreaView style={styles.droidSafeArea}/>
                    <ImageBackground
                    source={require('../assets 2/stars.gif')} style={styles.backgroundImage} >
                        <Text style={styles.routeText}> Astronony picture of the day </Text>
                        <Text style={styles.titleText}> {this.state.apod/title}</Text>
                        <TouchableOpacity style={styles.listContainer}
                        onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}
                        >
                            <View style={styles.iconContainer}>
                                <Image source={require("../assets 2/play-video.png")} style={{ width: 50, height: 50 }}></Image>
                            </View>

                        </TouchableOpacity>

                       <Text style={styles.explanationText}> {this.state.apod.explanation} </Text>

                    </ImageBackground>

                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    iconContainer: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    },
    listContainer: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    explanationText: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
})
