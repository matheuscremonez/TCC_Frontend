import axios from 'axios';

class AnalysisService {
    async postAnalyseImage(image) {
        try {
            return await axios.post('CAMINHO PARA O BACK-END', {
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
