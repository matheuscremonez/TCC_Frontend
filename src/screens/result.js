import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'galio-framework';

export default class App extends React.Component {
    render() {
        const metadata = this.props.navigation.getParam('metadata', 'NO-ID');

        if (metadata.length > 0) {
            return (
                <View style={styles.container}>
                    <Text h3 style={styles.textResult}>
                        Foi concluido que a Imagem é:
                    </Text>
                    <Text h4 style={styles.textResult}>
                        {metadata}
                    </Text>
                </View>
            );
        }
        else {
            return (
                <View style={styles.container}>
                    <Text h3 style={styles.textResult}>
                        Sem alteração (Obtido por Metadados)
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
    }
});