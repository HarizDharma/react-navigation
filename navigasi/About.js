import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const About = ({navigation}) => {
    return(
        <View style={{ margin:10, flex:1 }}>
            <Text style={{ textAlign:'center', flex:1 }}>Tugas PPB Kharisma Dharma Putra</Text>
            <Text style={{ textAlign:'center', flex:18 }}>React Native navigation</Text>
            <View style={{ marginTop:10 }}>
                <Button title='Kembali'
                onPress={()=>navigation.navigate('Home')}/>
            </View>
        </View>
    );
};

export default About;