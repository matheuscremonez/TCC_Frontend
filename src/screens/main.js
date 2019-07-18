import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    Button,
    View
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class App extends React.Component {
    state = {
        photo: null
    };

    handleChoosePhoto = () => {
        //Configuração para retirar algum dado que se obtem ao selecionar a foto
        const options = {};

        ImagePicker.launchImageLibrary(options, response => {

            if (response.uri) {
                //Debug
                console.log('response', response);

                this.setState({ photo: response });
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
        });
    };

    render() {
        const { photo } = this.state;

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.textMenu}>
                        Analisador de Imagens Modificadas
                    </Text>
                </View>

                <View style={styles.button}>
                    <Button title="Selecionar Imagem" onPress={this.handleChoosePhoto} />
                </View>

                {photo && (<Image source={{ uri: photo.uri }} style={{ width: 300, height: 300 }} />)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    textMenu: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 24
    },
    button: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
