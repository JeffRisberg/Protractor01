
require("babel-register");

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['ang03-spec.js'],

  //onPrepare: function () {
  //  require("babel/register");
  //}
};