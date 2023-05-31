//^ Add consts
const API_KEY = '35381512-dde9d5be5a6a0ea2b84aeda4e';
const BASE_URL = 'https://pixabay.com/api/';

export default async function getImg(inputValue, page = 1) {
  return fetch(
    `${BASE_URL}?q=${inputValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => res.json());
}
