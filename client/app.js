// var axios = require('axios');
// var axiosCalls = require('./helperFunction/axiosCalls.js');
// import axiosCalls from './helperFunction/axiosCalls.js';

new Vue ({
  el: '#app',
  data: {
    message: 'Hello World!'
  },
  methods: {
    searchClicked: () => {
      axiosCalls.getInfo()
      .then((resp) => {
        console.log(resp.data)
      })
      .catch((err) => {
        console.log('could not fetch data...')
      })
    }
  }
})