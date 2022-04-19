const { default: axios } = require("axios");
//************* Show Pokemon All Paginate *******************************//
exports.getPokemonPaginate = async function (limit, offset) {
  await axios
    .get(
      "https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset
    )
    .then(function (res) {
      respData = res.data.results;
      console.log(respData);
      return respData;
    });
};

//************* Show Pokemon Individual By id *******************************//
exports.getPokemonDetailByid = async function (id) {
  await axios
    .get("https://pokeapi.co/api/v2/pokemon/" + id)
    .then(function (res) {
      respData = res.data;
      console.log(respData);
      return respData;
    });
};
//************* Show Pokemon By Tyoe Id *******************************//
exports.getPokemonByType = async function (typeId) {
  await axios
    .get("https://pokeapi.co/api/v2/type/" + typeId)
    .then(function (res) {
      respData = res.data.pokemon;
      console.log(respData);
      return respData;
    });
};
