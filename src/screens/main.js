import React from 'react';
import {
    StyleSheet, Text, Image, Button, View
} from 'react-native';
import Spinner from 'react-native-spinkit';
import ImagePicker from 'react-native-image-picker';

import AnalysisService from '../services/analysisService';


export default class App extends React.Component {

    state = {
        photo: null,
        loading: false
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

    callAnalyse = () => {
        this.setState({ loading: true });

        /*AnalysisService.postAnalyseImage(photo.uri)
            .then(response => {
                this.setState({ loading: false });
                //chamar tela result
            }) */
    }

    render() {
        if (this.state.loading === true) {
            return (
                <View style={[styles.container, styles.positionCenter]}>
                    <Spinner isVisible={true} size={100} type={'Circle'} color={"#FFFFFF"} />
                </View>
            );
        }
        else {
            return (
                <View style={styles.container}>
                    <View>
                        <Text style={styles.textMenu}>
                            Analisador de Imagens Modificadas
                        </Text>
                    </View>

                    {!this.state.photo &&
                        <View style={styles.button}>
                            <Button title="Selecionar Imagem" onPress={this.handleChoosePhoto} />
                        </View>
                    }

                    {this.state.photo &&
                        <View>
                            <View style={styles.positionCenter}>
                                <Image source={{ uri: this.state.photo.uri }} style={styles.image} />
                            </View>

                            <View style={styles.buttonSend}>
                                <View style={styles.buttonLeft}>
                                    <Button title="Selecionar outra Imagem" onPress={this.handleChoosePhoto} />
                                </View>
                                <View>
                                    <Button title="Enviar" onPress={this.callAnalyse} />
                                </View>
                            </View>
                        </View>
                    }
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#85dcb0'
    },
    textMenu: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 25
    },
    positionCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        marginTop: 25,
        width: 300,
        height: 300
    },
    button: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
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
