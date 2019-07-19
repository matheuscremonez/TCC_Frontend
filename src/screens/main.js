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

                {!photo &&
                    <View style={styles.button}>
                        <Button title="Selecionar Imagem" onPress={this.handleChoosePhoto} />
                    </View>
                }

                {photo &&
                    <View>
                        <Image source={{ uri: photo.uri }} style={styles.image} />

                        <View style={styles.buttonSend}>
                            <View style={styles.buttonLeft}>
                                <Button title="Selecionar outra Imagem" onPress={this.handleChoosePhoto} />
                            </View>
                            <View>
                                <Button title="Enviar" />
                            </View>
                        </View>
                    </View>
                }
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
        marginTop: 25
    },
    button: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        marginTop: 25,
        marginLeft: '12%',
        width: 300,
        height: 300
    },
    buttonSend: {
        marginTop: 30,
        marginLeft: '14%',
        flexDirection: 'row'
    },
    buttonLeft: {
        marginRight: '5%'
    }
});
