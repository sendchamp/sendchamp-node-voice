var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.sendchamp.com/api/v1/voice/send',
  'headers': {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer ACCESS_KEY'
  },
  body: JSON.stringify({"customer_mobile_number":"2348119974190","message":"Hello from Olumide","sender_name":"Kashbase12"})

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
