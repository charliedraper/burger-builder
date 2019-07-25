import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-28fff.firebaseio.com',
});

export default instance;