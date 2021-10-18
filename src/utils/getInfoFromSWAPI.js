const getInfoSwapi = async (type, page, search) => {
  let response = await fetch(
    `http://swapi.dev/api/${type}?page=${page}&search=${search}`
  );
  const data = await response.json()
  return data
};

export default getInfoSwapi