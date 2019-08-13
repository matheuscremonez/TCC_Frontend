import axios from 'axios';

class AnalysisService {
    async postAnalyseImage(image) {
        try {
            return await axios.post('http://6a9bca76.ngrok.io', {
                //Precisa pegar no fileName da imagem a extensão da foto
                'type': 'jpg',
                'image': image,
            })
        }
        catch (e) {
            return "Não foi possível realizar a análise, tente novamente mais tarde.";
        }
    }
}

const api = new AnalysisService();
export default api;
