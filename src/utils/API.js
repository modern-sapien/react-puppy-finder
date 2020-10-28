import axios from "axios";
const randodog = "https://dog.ceo/api/breeds/image/random";

export default {
  // this calls  a random dog image
  getRandomDog: function () {
    return axios.get(randodog);
  },

  // this calls a specific breed
  getDogBreed: function (breedType) {
    return axios.get("https://dog.ceo/api/breed/" + breedType + "/images");
  },

  // this calls the site to list out the different breeds
  dogList: function () {
    return axios.get("https://dog.ceo/api/breeds/list/all");
  },
};
