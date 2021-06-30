import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppHeader from '../Component/AppHeader';

export default class StraMapScreen extends React.Component{
    render(){
        return(

            <View>

                <AppHeader/>

                <Text style={styles.Main}>
                    StraMapScreen
                </Text>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    Main:{
      marginTop: 40,
    }
  })