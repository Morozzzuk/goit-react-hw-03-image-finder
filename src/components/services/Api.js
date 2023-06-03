import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (query, page) => {
  console.log(query);

  const params = new URLSearchParams({
    key: '35381512-dde9d5be5a6a0ea2b84aeda4e',
    q: query,
    page,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

  const response = await axios.get(`?${params}`);

  return response.data;
};

// //^ Add consts
// const API_KEY = '35381512-dde9d5be5a6a0ea2b84aeda4e';
// const BASE_URL = 'https://pixabay.com/api/';

// const params = new URLSearchParams({
//   orientation: 'horizontal',
//   per_page: 12,
// });
// export const getImg = async (inputValue, page = 1) => {
//   try {
//     const data = await fetch(
//       `${BASE_URL}?q=${inputValue}&page=${page}&key=${API_KEY}&${params}`
//     );
//     const response = await data.json();
//     return response;
//   } catch (err) {
//     console.log('Error', err);
//   }
// };

// const API_KEY = '35381512-dde9d5be5a6a0ea2b84aeda4e';
// const BASE_URL = 'https://pixabay.com/api/';

// export default async function getImg(inputValue, page = 1) {
//   return fetch(
//     `${BASE_URL}?q=${inputValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   ).then(res => res.json());
// }
