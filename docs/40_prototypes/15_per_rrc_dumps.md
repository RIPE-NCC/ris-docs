---
permalink: /prototypes/per-rrc-dumps
---

# Per-RRC BGP dump files

Per-RRC dump files are MRT files of type TABLE_DUMP_V2, as described in [RFC 6396, Section 4.3](https://datatracker.ietf.org/doc/html/rfc6396#section-4.3). They contain a snapshot of all known best routes gathered by corresponding collector (RRC) and actual at the specified time.

We have been providing per-RRC MRT dump files for a long time. Those files are generated with 8-hours interval, and are available at https://data.ris.ripe.net/rrcXX/. The files that are available through the interface described below are published every hour and with significantly lower delay. They provide the same information as 8-hour dumps, but without redundant information, and are more conformant with RFC 6396.

## Changes in MRT File Format

The new per-RRC dump files (described below) have following differences comparing to the old files (available at https://data.ris.ripe.net/rrcXX/):

- The PEER_INDEX_TABLE does not list peers that have no routes in RIB entries.
- Peer entries in the PEER_INDEX_TABLE do not have any particular order.
- RIB entries are ordered by the length of their network prefix (shorter prefixes first), then by the byte representation of their network prefix, and grouped by the address family.
- BGP attributes in RIB entries do not contain MP_UNREACH_NLRI attribute.
- MP_REACH_NLRI attribute in RIB entries does not include the announced prefix, as described in Section 4.3.4 of RFC 6396.

If you have been using the old dump files, please verify that your MRT parsers could also handle the new files.

### REST Interface

Per-RRC dump files are available through the REST interface at base URL https://www.ris.ripe.net/dumps-per-rrc-rest/prototype/.

#### List latest dump files for all RRCs

Returns a list of metadata with links to latest dump files for each RRC. Collectors that have not submitted any data for more than 7 days are excluded from the list.

This call supports requests with the [`If-Modified-Since`](https://httpwg.org/specs/rfc7232.html#header.if-modified-since) header.

| __Request__           |                  |
|-----------------------|------------------|
| Relative path         | /                |
| Methods               | GET, HEAD        |
| Response Content-type | application/json |

| __Resource's fields__ |                                         |
|-----------------------|-----------------------------------------|
| `name`                | Canonical name of the file              |
| `href`                | File's location                         |
| `time`                | The time when snapshot of RIB was taken |
| `mtime`               | The time when the file was published    |
| `length`              | Length of the file                      |
| `rrc`                 | Name of the route collector             |


```bash
curl https://www.ris.ripe.net/dumps-per-rrc-rest/prototype/
```

::: details Output:
```json
{
  "links" : [ {
    "name" : "bview.20220603.1400.gz",
    "href" : "/dumps-per-rrc-rest/prototype/rrc00/bview.20220603.1400.gz",
    "time" : "2022-06-03T14:00:00.000Z",
    "mtime" : "2022-06-03T14:07:44.311Z",
    "length" : 386153499,
    "rrc" : "rrc00"
  }, {
    "name" : "bview.20220603.1400.gz",
    "href" : "/dumps-per-rrc-rest/prototype/rrc01/bview.20220603.1400.gz",
    "time" : "2022-06-03T14:00:00.000Z",
    "mtime" : "2022-06-03T14:06:22.831Z",
    "length" : 289128513,
    "rrc" : "rrc01"
  } ]
}
```
:::

#### Get list of links for a specific RRC and/or time

Returns a list of metadata with links to dump files for specified RRC and/or time. The time supplied as a request parameter is truncated to an hour.

If time is not supplied, the latest available file metadata is returned.

If RRC is not supplied, the metadata for all RRCs is returned.

This call supports requests with the [`If-Modified-Since`](https://httpwg.org/specs/rfc7232.html#header.if-modified-since) header.

| __Request__           |                  |
|-----------------------|------------------|
| Relative path         | /                |
| Methods               | GET, HEAD        |
| Response Content-type | application/json |

| __Query parameter__ |                                                 | __Example__                                      |
|---------------------|-------------------------------------------------|--------------------------------------------------|
| `rrc`               | RRC name (optional)                             | `rrc00`, `rrc26`                                 |
| `time`              | Time of a dump in the ISO8601 format (optional) | `2022-06-03T14`,<br/> `2022-06-03T14:00:00.000Z` |

| __Resource's fields__ |                                         |
|-----------------------|-----------------------------------------|
| `name`                | Canonical name of the file              |
| `href`                | File's location                         |
| `time`                | The time when snapshot of RIB was taken |
| `mtime`               | The time when the file was published    |
| `length`              | Length of the file                      |
| `rrc`                 | Name of the route collector             |

```bash
curl 'https://www.ris.ripe.net/dumps-per-rrc-rest/prototype/?time=2022-06-03T15&rrc=rrc07'
```

::: details Output:
```json
{
  "rrc" : "rrc07",
  "time" : "2022-06-03T15:00:00.000Z",
  "links" : [ {
    "name" : "bview.20220603.1500.gz",
    "href" : "/dumps-per-rrc-rest/prototype/rrc07/bview.20220603.1500.gz",
    "time" : "2022-06-03T15:00:00.000Z",
    "mtime" : "2022-06-03T15:02:48.920Z",
    "length" : 47605076,
    "rrc" : "rrc07"
  } ]
}
```
:::

#### Get latest dump file for an RRC

Returns a redirect to the latest dump file for the specified RRC.

This call supports requests with the [`If-Modified-Since`](https://httpwg.org/specs/rfc7232.html#header.if-modified-since) header.

| <!-- -->              | <!-- -->   |
|-----------------------|------------|
| Relative path         | {rrcName}/ |
| Methods               | GET, HEAD  |

| __Path parameter__ |                                 | __Example__              |
|--------------------|---------------------------------|--------------------------|
| `rrcName`          | RRC name                        | `rrc00`                  |


```bash
curl -O -J -L https://www.ris.ripe.net/dumps-per-rrc-rest/prototype/rrc07
```

#### Get dump file

Returns the dump file. (Use the links returned by the above metadata calls.)

This call supports requests with the [`If-Modified-Since`](https://httpwg.org/specs/rfc7232.html#header.if-modified-since) header.

| <!-- -->              | <!-- -->                 |
|-----------------------|--------------------------|
| Relative path         | {rrcName}/{fileName}     |
| Methods               | GET, HEAD                |
| Response Content-type | application/octet-stream |

| __Path parameter__ |                                 | __Example__              |
|--------------------|---------------------------------|--------------------------|
| `rrcName`          | RRC name                        | `rrc00`                  |
| `fileName`         | Canonical name of the dump file | `bview.20220603.1500.gz` |


```bash
curl -O https://www.ris.ripe.net/dumps-per-rrc-rest/prototype/rrc07/bview.20220603.1500.gz
```
