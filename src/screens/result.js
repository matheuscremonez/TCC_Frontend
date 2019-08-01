import React from 'react';
import {
    StyleSheet, View
} from 'react-native';
import { Button, Text } from 'galio-framework';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text h4 style={styles.textResult}>
                    Foi concluido que a Imagem é:
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    textResult: {
        textAlign: 'center',
        marginTop: '7%'
    }
});