
require("babel-core/register")({presets: ["es2015"]});

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['ang03-spec.js']
};