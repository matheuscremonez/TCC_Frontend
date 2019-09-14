import axios from 'axios';

class AnalysisService {
    async postAnalyseImage(image, type) {
        try {
            var response = await axios.post('http://18f22aa7.ngrok.io', {
                'type': type,
                'image': image
            })

            return response.data[0];
        }
        catch (e) {
            return "Não foi possível realizar a análise, tente novamente mais tarde.";
        }
    }
}

const api = new AnalysisService();
export default api;
