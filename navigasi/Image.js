import * as React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import foto from '../gambar.jpg';

const Imagee = ({navigation}) => {
    return(
        <View style={{ margin:10, flex:1 }}>
            <View style={{ flex:1, flexDirection:'row' }}>
                <Image source={ foto } style={{ width:150, height:150, marginRight:15 }}></Image>
            </View>
            <View style={{ marginTop:1 }}>
                <Button title='Kembali'
                onPress={()=>navigation.navigate('Home')}/>
            </View>
        </View>
    );
};

export default Imagee;