import React from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textResult}>
                    Foi concluido que a Imagem é:
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    textResult: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 25
    }
});