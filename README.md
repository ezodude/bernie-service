# Bernie

## API

## GET bike status

Get bike theft status, you need to supply a bike's frame Id.

```
curl -i -X GET https://bernie-my-bike.herokuapp.com/api/v1/bike/1223/status
```

The response either stolen ```true``` or ```false```. E.g.

```
{
    id: "1223",
    stolen: true
}
```

## POST bike theft notification

Report theft, you need to supply the bike's frame Id and GPS coordinates for last seen location.

```
curl -i -X POST https://bernie-my-bike.herokuapp.com/api/v1/bike/1223/theft/notification -d '{"lat": "38.9419", "long": "78.3020"}'
```

Here's the reponse. It includes the owner's name,

```
{
    id: "1223",
    notified_at: "2016-07-17T09:35:09.395Z",
    owner: "Simon"
}
```

This sends an SMS to the owners mobile with a google map's link. Here's an example link:

```
http://maps.google.com/maps?z=12&t=m&q=loc:38.9419+-78.3020
```

* z is the zoom level (1-20)
* t is the map type ("m" map, "k" satellite, "h" hybrid, "p" terrain, "e" GoogleEarth)
* q is the search query, if it is prefixed by loc: then google assumes it is a lat lon separated by a +
