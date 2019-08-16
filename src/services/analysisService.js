import axios from 'axios';

class AnalysisService {
    async postAnalyseImage(image, type) {
        try {
            return await axios.post('http://87e77cf0.ngrok.io', {
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
