# Example Client

You will first want to update the basePath of the client to your domain. Replace [your_domain] with your domain.

```
var Waitlisted = require('waitlisted');

var apiClient = new Waitlisted.ApiClient()
apiClient.basePath = "https://[your_domain].app.waitlisted.co/api/v2"
var api = new Waitlisted.ReservationApi(apiClient);
```

Construct a reservation.

```
var body = new Waitlisted.Reservation();
body.email = 'justin+test456@waitlisted.co'
body.name = 'Waitlisted API'
```

Create a reservation.

```
api.createReservation(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

# Authenticated request

```
var Waitlisted = require('waitlisted');

var apiClient = new Waitlisted.ApiClient()
apiClient.basePath = "https://[your_domain].app.waitlisted.co/api/v2"
apiClient.authentications['api_key']['apiKey'] = 'apksdlsdalsdkl'

var api = new Waitlisted.ReservationApi(apiClient);
```

Construct a reservation request.

```
var body = new Waitlisted.ReservationRequest('justin+test456@waitlisted.co');
```
Delete a reservation.

```
api.deleteReservation(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```
