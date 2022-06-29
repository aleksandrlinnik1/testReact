import axios from 'axios';

const serverApi = axios.create({
    baseURL: 'https://213.184.245.66:5010',
});

const username = 'fetest';
const password = 'root123456';

const _getPeople = (people) => {
    return people.map((person) => {
        return {
            name: `${person.surname}`,
            image_ref: person.image_ref,
            key: person.id,
        };
    });
};

export const api = {
    login() {
        return serverApi
            .get(`/login`, {
                auth: { username, password },
            })
            .then((response) => {
                serverApi.defaults.headers.common[
                    'Authorization'
                ] = `Bearer ${response.data.access_token}`;
            });
    },
    getAllPeople() {
        return serverApi
            .get(`/api/get_all_people`)
            .then((response) => _getPeople(response.data.data.people));
    },
    getImage(image_ref) {
        return serverApi
            .get(image_ref, { responseType: 'arraybuffer' })
            .then((response) => {
                const base64String = btoa(
                    String.fromCharCode(...new Uint8Array(response.data))
                );
                return `data:image/bmp;base64,${base64String}`;
            });
    },
};
