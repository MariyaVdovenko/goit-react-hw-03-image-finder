export const fetchImages = (query = '', pageNumber = 1) => {
  console.log(query);
  return fetch(
    `https://pixabay.com/api/?q=${query}&page==${pageNumber}&key=13128632-519e28f670cc6f8f58c4d9c9f&image_type=photo&orientation=horizontal&per_page=12`,
  )
    .then(res => res.json())
    .then(data => data.hits);
};
