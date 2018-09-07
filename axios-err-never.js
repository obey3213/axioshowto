const axios = require('axios');


async function getData() {
  try {
    const response = await axios.get('https://swapi.co/api/people/1');
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

getData();
