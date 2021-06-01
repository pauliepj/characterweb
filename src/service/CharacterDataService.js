import axios from 'axios'

const CHARACTER = 'CharacterBuilder';
const GENERAL_API_URL='http://localhost:8080/api';
const CHARACTER_API_URL = `${GENERAL_API_URL}/character/${CHARACTER}`;

class CharacterDataService {
    retrieveAllCharacters(name) {
        return axios.get(`${GENERAL_API_URL}/character`);
    }
}

export default new CharacterDataService;