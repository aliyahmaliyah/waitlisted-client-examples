<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_client = new Waitlisted\ApiClient();
$api_client->getConfig()->setHost('https://your_domain.app.waitlisted.co/api/v2');
$api_client->getConfig()->setApiKey('X-API-Key', 'apikey123');

$api_instance = new Waitlisted\Api\ReservationApi($api_client);
$body = new \Waitlisted\Models\ReservationRequest();

$body->setEmail('php@waitlisted.co');


try {
    $result = $api_instance->deleteReservation($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReservationApi->createReservation: ', $e->getMessage(), PHP_EOL;
}
