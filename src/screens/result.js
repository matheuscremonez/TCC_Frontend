import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'galio-framework';

export default class App extends React.Component {
    render() {
        const metadata = this.props.navigation.getParam('metadata', 'NO-ID');
        const deepLearning = this.props.navigation.getParam('deepLearning', 'NO-ID');

        if (metadata.length > 0) {
            return (
                <View style={styles.container}>
                    <Text h3 style={[styles.textResult, styles.black]}>
                        Resultado Análise:
                    </Text>
                    <Text h4 style={[styles.textResult, styles.black]}>
                        Editado em: {metadata}
                    </Text>
                    <Text h4 style={[(deepLearning == 'Verdadeiro') ? styles.green : styles.red, styles.textResult]}>
                        {deepLearning}
                    </Text>
                </View>
            );
        }
        else {
            return (
                <View style={styles.container}>
                    <Text h3 style={[styles.textResult, styles.black]}>
                        Resultado Análise:
                    </Text>
                    <Text h4 style={[(deepLearning == 'Verdadeiro') ? styles.green : styles.red, styles.textResult2]}>
                        {deepLearning}
                    </Text>
                </View>
            );
        }
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
    },
    textResult2: {
        textAlign: 'center',
        marginTop: '14%'
    },
    green: {
        color: '#00ff00'
    },
    red: {
        color: '#ff0000'
    },
    black: {
        color: '#000000'
    }
});
