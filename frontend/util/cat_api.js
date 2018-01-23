export const createCat = (cat) => {
  return $.ajax({
    url: '/api/cats',
    method: 'POST',
    data: { cat: cat },
    dataType: 'json'
  });
}

export const fetchCats = () => {
  return $.ajax({
    url: '/api/cats',
    method: 'GET',
    dataType: 'json',
  })
}
