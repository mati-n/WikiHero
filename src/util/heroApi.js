const apiKey = "2022615024491192";
const HeroApi = {
  search_name(name) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/superheroapi.com/api.php/${apiKey}/search/${name}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        let results = [];
        if (jsonResponse.response === "success") {
          if (jsonResponse) {
            for (let i = 0; i < jsonResponse.results.length; i++) {
              results.push(jsonResponse.results[i]);
            }
            return results;
          }
        }
      });
  },
  search_id(id) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/superheroapi.com/api.php/${apiKey}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        let result;
        if (jsonResponse.response === "success") {
          if (jsonResponse) {
            result = jsonResponse;
            return result;
          }
        }
      });
  }
};

export default HeroApi;
