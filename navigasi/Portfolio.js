import * as React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import project from '../gambar.jpg';

const Portfolio = ({navigation}) => {
    return(
        <View style={{ margin:10, flex:1 }}>
            <View style={{ flex:1, flexDirection:'row' }}>
                <View>
                    <Image source={ project } style={{ width:150, height:150, marginRight:15 }}></Image>
                    <Text style={{ marginTop:10 }}>Portfolio 1</Text>
                </View>
                <View>
                    <Image source={ project } style={{ width:150, height:150, marginLeft:15 }}></Image>
                    <Text style={{ marginTop:10 }}>Portfolio 2</Text>
                </View>
            </View>
            <View style={{ marginTop:10 }}>
                <Button title='Kembali'
                onPress={()=>navigation.navigate('Home')}/>
            </View>
        </View>
    );
};

export default Project;