import axios from 'axios'

const GENERAL_API_URL='http://localhost:8080/';
const REGISTRATION_API_URL = `${GENERAL_API_URL}/registration`;

class RegistrationDataService {
    showRegistrationForm() {
        return axios.get(`${REGISTRATION_API_URL}`);
    }
    
}

export default new RegistrationDataService;