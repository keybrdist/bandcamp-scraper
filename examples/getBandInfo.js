var bandcamp = require('../lib/index');

var bandUrl = 'http://plush.bandcamp.com';
bandcamp.getBandInfo(bandUrl, function(error, bandInfo) {
  if (error) {
    console.log(error);
  } else {
    console.log(bandInfo);
  }
});
