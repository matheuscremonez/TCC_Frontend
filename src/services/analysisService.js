import axios from 'axios';

class AnalysisService {
    async postAnalyseImage(image, type) {
        try {
            return await axios.post('http://dcc65e25.ngrok.io', {
                'type': type,
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
