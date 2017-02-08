# Example Client

You will first want to update the basePath of the client to your domain. Replace [your_domain] with your domain.
```
require_once(__DIR__ . '/vendor/autoload.php');

$api_client = new Waitlisted\ApiClient();
$api_client->getConfig()->setHost('https://[your_domain].app.waitlisted.co/api/v2');
$api_instance = new Waitlisted\Api\ReservationApi($api_client);
```


Construct a reservation.

```
$body = new \Waitlisted\Models\Reservation();

$body->setEmail('php@waitlisted.co');
$body->setName('PHP Test');

```

Create a reservation.

```
try {
    $result = $api_instance->createReservation($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReservationApi->createReservation: ', $e->getMessage(), PHP_EOL;
}
```

# Authenticated request

Make sure to again update the domain and API key which can be found on your dashboard.

```
require_once(__DIR__ . '/vendor/autoload.php');

$api_client = new Waitlisted\ApiClient();
$api_client->getConfig()->setHost('https://[your_domain].app.waitlisted.co/api/v2');
$api_client->getConfig()->setApiKey('X-API-Key', 'apikey1234');

$api_instance = new Waitlisted\Api\ReservationApi($api_client);
```

Construct a reservation request.

```
$body = new \Waitlisted\Models\ReservationRequest();
$body->setEmail('php@waitlisted.co');
```
Delete a reservation.

```
try {
    $result = $api_instance->deleteReservation($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReservationApi->createReservation: ', $e->getMessage(), PHP_EOL;
}
```
