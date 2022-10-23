import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Home = ({navigation}) => {
    return(
        <View style={{ margin:10, flex:1 }}>
            <Text style={{ textAlign:'center' }}>Home Screen</Text>
            <View style={{ flex:1, flexDirection:'row', marginTop:10 }}>
                <View style={{ flex:1, marginRight:5, backgroundColor: 'red' }}>
                    <Button title='About'
                    onPress={()=>navigation.navigate('About')}/>
                </View>
                <View style={{ flex:1, marginLeft:5, backgroundColor: 'red' }}>
                    <Button title='Image'
                    onPress={()=>navigation.navigate('Image')}/>
                </View>
            </View>
            <View style={{ flex:12, flexDirection:'row', marginTop:10, backgroundColor: 'red' }}>
                <View style={{ flex:1, marginRight:5 }}>
                    <Button title='Profile'
                    onPress={()=>navigation.navigate('Profile')}/>
                </View>
                <View style={{ flex:1, marginLeft:5, backgroundColor: 'red' }}>
                    <Button title='Portfolio'
                    onPress={()=>navigation.navigate('Portfolio')}/>
                </View>
            </View>
        </View>
    );
};

export default Home;