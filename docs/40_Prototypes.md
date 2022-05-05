# Prototypes

## Per-peer dump files

Per-peer dump files are MRT files of type TABLE_DUMP_V2, as described in [RFC 6396, Section 4.3](https://datatracker.ietf.org/doc/html/rfc6396#section-4.3), similar to the "raw bview" per-RRC dump files. The difference is that each file only contains RIB entries from single peer, and that these files are generated every hour (in contrast with per-RRC files, which are generated every 8 hours). Another difference is that these files are more conformant with the format described in the RFC: they do not contain MP_UNREACH_NLRI attribute in RIB entries, and do not include announced prefix in MP_REACH_NLRI attribute, as Section 4.3.4 of RFC 6396 describes.

At the moment we have per-peer dump files since 28 January 2022, however, we plan to reduce the retention of these files to two weeks.

### REST Interface

Per-peer dump files are available through the REST interface at base URL https://www.ris.ripe.net/dumps-per-peer-rest/prototype/.

#### List all RRCs

Returns list of objects with links to individual RRC's dumps. 

| __Request__           |                  |
|-----------------------|------------------|
| Relative path         | /                |
| Methods               | GET              |
| Response Content-type | application/json |

| __Resource's fields__ |                   |
|-----------------------|-------------------|
| `name`                | Resource name     |
| `href`                | Resource location |

[//]: # (<RestRepl :baseUrl="https://www.ris.ripe.net/dumps-per-peer-rest/prototype/" method="GET"/>)

```bash
curl https://www.ris.ripe.net/dumps-per-peer-rest/prototype/
```

::: details Output:
```json
{
  "rrcs" : [ {
    "name" : "rrc00",
    "href" : "/dumps-per-peer-rest/prototype/rrc00"
  }, {
    "name" : "rrc01",
    "href" : "/dumps-per-peer-rest/prototype/rrc01"
  }, {
    "name" : "rrc03",
    "href" : "/dumps-per-peer-rest/prototype/rrc03"
  } ]
}
```
:::


#### List dump times for an RRC

Returns list of objects with links to all available dump times for an RRC.

| <!-- -->              | <!-- -->         |
|-----------------------|------------------|
| Relative path         | {rrcName}        |
| Methods               | GET              |
| Response Content-type | application/json |

| __Resource's fields__ |                                                        |
|-----------------------|--------------------------------------------------------|
| `name`                | Resource name                                          |
| `href`                | Resource location                                      |
| `time`                | Time (hour) of the dump (ISO8601-formatted)            |
| `mtime`               | Time the resource was last updated (ISO8601-formatted) |

[//]: # (<RestRepl :baseUrl="https://www.ris.ripe.net/dumps-per-peer-rest/prototype/rrc01/" method="GET"/>)

```bash
curl https://www.ris.ripe.net/dumps-per-peer-rest/prototype/rrc01/
```

::: details Output:
```json
{
  "rrc" : "rrc01",
  "links" : [ {
    "name" : "2022-05-03T10",
    "href" : "/dumps-per-peer-rest/prototype/rrc01/2022-05-03T10",
    "time" : "2022-05-03T10",
    "mtime" : "2022-05-03T10:02:31.033Z"
  }, {
    "name" : "2022-05-03T09",
    "href" : "/dumps-per-peer-rest/prototype/rrc01/2022-05-03T09",
    "time" : "2022-05-03T09",
    "mtime" : "2022-05-03T09:02:31.229Z"
  }, {
    "name" : "2022-05-03T08",
    "href" : "/dumps-per-peer-rest/prototype/rrc01/2022-05-03T08",
    "time" : "2022-05-03T08",
    "mtime" : "2022-05-03T08:03:06.934Z"
  } ]
}
```
:::

#### List dump files for a specific time and RRC

Returns list of objects with links to all available dump files for an RRC and a time.

| <!-- -->              | <!-- -->         |
|-----------------------|------------------|
| Relative path         | {rrcName}/{time} |
| Methods               | GET              |
| Response Content-type | application/json |

| __Resource's fields__ |                                                        |
|-----------------------|--------------------------------------------------------|
| `name`                | Dump file name                                         |
| `href`                | Dump file location                                     |
| `mtime`               | Time of the last file modification (ISO8601-formatted) |
| `peerIp`              | IP address of a peer                                   |

[//]: # (<RestRepl :baseUrl="https://www.ris.ripe.net/dumps-per-peer-rest/prototype/rrc01/2022-05-03T10" method="GET"/>)

```bash
curl https://www.ris.ripe.net/dumps-per-peer-rest/prototype/rrc01/2022-05-03T10
```

::: details Output:
```json
{
  "rrc" : "rrc01",
  "time" : "2022-05-03T10",
  "links" : [ {
    "name" : "bview-20220503T1000-053950A5.gz",
    "href" : "/dumps-per-peer-rest/prototype/rrc01/2022-05-03T10/bview-20220503T1000-053950A5.gz",
    "mtime" : "2022-05-03T10:01:02.253Z",
    "peerIp" : "5.57.80.165"
  }, {
    "name" : "bview-20220503T1000-053950AE.gz",
    "href" : "/dumps-per-peer-rest/prototype/rrc01/2022-05-03T10/bview-20220503T1000-053950AE.gz",
    "mtime" : "2022-05-03T10:01:06.304Z",
    "peerIp" : "5.57.80.174"
  }, {
    "name" : "bview-20220503T1000-200107F800040000000000000C8E0001.gz",
    "href" : "/dumps-per-peer-rest/prototype/rrc01/2022-05-03T10/bview-20220503T1000-200107F800040000000000000C8E0001.gz",
    "mtime" : "2022-05-03T10:01:01.886Z",
    "peerIp" : "2001:7f8:4::c8e:1"
  }]
}
```
:::


#### Get dump file

Returns the dump file for one peer at specified time.

| <!-- -->              | <!-- -->                    |
|-----------------------|-----------------------------|
| Relative path         | {rrcName}/{time}/{fileName} |
| Methods               | GET, HEAD                   |
| Response Content-type | application/octet-stream    |

[//]: # (<RestRepl :baseUrl="https://www.ris.ripe.net/dumps-per-peer-rest/prototype/rrc01/2022-05-03T10/bview-20220503T1000-053950A5.gz" method="GET"/>)

```bash
curl -O https://www.ris.ripe.net/dumps-per-peer-rest/prototype/rrc01/2022-05-03T10/bview-20220503T1000-053950A5.gz
```
