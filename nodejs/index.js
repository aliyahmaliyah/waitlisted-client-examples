var Waitlisted = require('waitlisted');

var apiClient = new Waitlisted.ApiClient()
apiClient.basePath = "https://my_domain.app.waitlisted.co/api/v2"
apiClient.authentications['api_key']['apiKey'] = 'my_api_key'

var api = new Waitlisted.ReservationApi(apiClient);

// Create a reservation
var body = new Waitlisted.Reservation();
body.email = 'justin+test456@waitlisted.co'
body.name = 'Waitlisted API'

api.createReservation(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


// Delete a reservation

var body = new Waitlisted.ReservationRequest('test@test.com');


api.deleteReservation(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});