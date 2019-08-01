import React from 'react';
import {
    StyleSheet, Image, View
} from 'react-native';
import { Button, Text } from 'galio-framework';
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

        /* AnalysisService.postAnalyseImage(photo.uri)
            .then(response => {
                this.setState({ photo: null, loading: false });
                this.props.navigation.navigate('Result', { });
            }) */
    }

    render() {
        if (this.state.loading === true) {
            return (
                <View style={[styles.container, styles.positionCenter]}>
                    <Spinner isVisible={true} size={100} type={'Circle'} color={"#000000"} />
                </View>
            );
        }
        else {
            return (
                <View style={styles.container}>
                    <View>
                        <Text h4 style={styles.textMenu}>
                            Analisador de Imagens Modificadas
                        </Text>
                    </View>

                    {!this.state.photo &&
                        <View style={styles.button}>
                            <Button onPress={this.handleChoosePhoto}>
                                Selecionar Imagem
                            </Button>
                        </View>
                    }

                    {this.state.photo &&
                        <View>
                            <View style={styles.positionCenter}>
                                <Image source={{ uri: this.state.photo.uri }} style={styles.image} />
                            </View>

                            <View style={styles.buttonSend}>
                                <View style={styles.separateButton}>
                                    <Button color='error' onPress={this.handleChoosePhoto}>
                                        Selecionar outra Imagem
                                    </Button>
                                </View>
                                <View>
                                    <Button color='info' onPress={this.callAnalyse}>
                                        Enviar
                                    </Button>
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
        backgroundColor: '#FFFFFF'
    },
    textMenu: {
        textAlign: 'center',
        marginTop: '7%'
    },
    positionCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        marginTop: '10%',
        width: '80%',
        height: 300
    },
    button: {
        marginTop: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonSend: {
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    separateButton: {
        marginBottom: '5%'
    }
});
