import * as React from 'react';
import { Text, TextInput, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMap extends React.Component{

    constructor(){
        super();
        this.state={
            latitude: '',
            longitude: '',
            text: '',
        }
    }



    render(){

        const { longitude, latitude } = this.state;
        const path = 'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'





        return(
            <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text> Star Map Screen </Text>

                <WebView
                  scalesPageToFit={true}
                  source={{uri: path}}
                  style={{ marginTop: 20, marginBottom: 20 }}
                />


                <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder= "Enter your latitude"
                placeholderTextColor= "#ffff#000000"
                onChangeText={(text) => {
                    this.setState({
                        latitude: text
                    })
                }}
                />

                <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder= "Enter your longitude"
                placeholderTextColor= "#ffff#000000"
                onChangeText={(text) => {
                    this.setState({
                        longitude: text
                    })
                }}
                />



            </View>
        )
    }
}




















