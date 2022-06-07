# Peer metadata files

Peer metadata files are files in json format which hold information on RIS peers.
This files are created one time per day. Each file name either has a timestamp or it states `latest`.

### Location

While this functionality considered a prototype it will be available here:
[https://www.ris.ripe.net/prototypes/peer-metadata/](https://www.ris.ripe.net/prototypes/peer-metadata/)

### Format

The files provided are of json format.
::: details Example:
```json
{
 "meta": {
  "created_at": "2022-06-07T00:07:01Z",
  "version": "0.1"
 },
 "data": [
  {
   "rrc": 25,
   "asn": 328840,
   "ipv4": "102.220.16.6",
   "ipv6": "",
   "country": "CM",
   "city": "DLA",
   "feed-type": ""
  },
  {
   "rrc": 25,
   "asn": 212744,
   "ipv4": "103.158.223.243",
   "ipv6": "2a0f:5707:aa80:2744::1",
   "country": "DE",
   "city": "FRA",
   "feed-type": ""
  },
  {
   "rrc": 25,
   "asn": 212577,
   "ipv4": "185.154.154.157",
   "ipv6": "2a07:8dc1:20:6d::1",
   "country": "FR",
   "city": "LLE",
   "feed-type": ""
  },
...
  {
   "rrc": 25,
   "asn": 34872,
   "ipv4": "194.28.99.120",
   "ipv6": "2a0c:b640:ffff:0:28:99:112:120",
   "country": "DE",
   "city": "DUS",
   "feed-type": ""
  }
]
}
```
:::

