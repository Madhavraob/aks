var express = require('express');
var router = express.Router();
var axios = require('axios').default;

// https://github.com/public-apis/public-apis

router.get("/", function (req, res) {
  return axios.get('https://thatcopy.pw/catapi/rest/')
    .then(function (response) {
      // handle success
      console.log(response.data)
      return res.status(200).send(response.data);
      // return (response.body);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
});

module.exports = router;
