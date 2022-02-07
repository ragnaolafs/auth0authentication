import client from './client';

const getPhotos = () => client.get('/animals/rand/8');

const exportObject = { getPhotos };

export default exportObject;