import React, { Components} from 'React';
import { StyleSheet, Text, View } from 'react-native';

export default class Body extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.body}>
                {this.props.children}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    body: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});
