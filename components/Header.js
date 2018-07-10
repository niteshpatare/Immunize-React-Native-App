import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
    constructor(props){
        super(props);
    }    
    render(){
        return(
            <View style={styles.header}>
                <Text>Header</Text>
            </View>
        );
    }    
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#9d9',
    },
});
