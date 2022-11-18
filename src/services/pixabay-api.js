function fetchImages(searchQuery = 'test', page = '1') {
  const KEY = '19998766-bc5c9aa883552721d0d63d23f';
  // const response = await fetch(
  //   `https://pixabay.com/api/?q=${searchQuery}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  // );
  // const responseJSON = await response.json();
  // return responseJSON;

  return fetch(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

const api = {
  fetchImages,
};

export { api };
