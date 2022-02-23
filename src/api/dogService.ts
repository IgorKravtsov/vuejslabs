import axios from 'axios'



export class DogService {
   static _apiBase = 'https://dog.ceo/api';

   static async getAllDogs() {
      const url = `${DogService._apiBase}/breeds/list/all`;
      return  await axios.get(url);
   }
}