const axios = require('axios');


axios.get(`https://swapi.co/api/people/1`)
  .then((response) => {
    return axios.get(response.data.homeworld);
  })
  .then((response) => {
    const promises = response.data.residents.map((residentUrl) => {
      return axios.get(residentUrl).then((response) => response.data.name)
    })

    return Promise.all(promises)
  })
  .then((resultFromPromiseAll) => {
    console.log(resultFromPromiseAll)
  })
