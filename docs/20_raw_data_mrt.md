# Route Collection Raw Data: MRT Files

Route collector projects (like RIS, Routeviews) store the data they capture in files in the [MRT format](https://tools.ietf.org/html/rfc6396). This data is useful for looking at the state of the BGP Internet, debugging/post-mortems of events in BGP, and tracking of long term trends in BGP.

Typically 2 types of files are collected: **dumps** and **updates**. Dump files store the state of the routing system at a given time, 
while update files store all changes to the routing system for a particular interval.

## Name and location

RIS collects collects data on a per-route collector basis. This means we store all the BGP data we receive from all the peers of a route collector in a single file.
Most route collectors collect data for peers at the IXP peering LAN(s) the collector is connected to, but some (as of this writing RRC00, RRC24 and RRC25) 
are so-called multi-hop collectors, which in practice means they collect data from peers from all over the Internet.
RRCs are numbered, starting at RRC00, and going up. Deprecated RRCs will not have new data but their data will be accessible. More meta-data about each
individual RRC is available at 

The naming scheme for is as follows:
```
   https://data.ris.ripe.net/rrcXX/YYYY.MM/TYPE.YYYYMMDD.HHMM.gz
```
   
with:

  * XX = the RRC number
  * YYYY = year
  * MM = month
  * TYPE = the type of file, which is either **bview** (dumps) or **update** (updates)
  * DD = day
  * HH = hour
  * MM = minute

Currently dumps are created every 8 hours,
 and updates are created every 5 minutes

## Tooling

There are multiple tools that are able to parse and extract information from MRT files. This is a non-exhausitive list of the most used tooling:
  * [bgpdump](https://github.com/RIPE-NCC/bgpdump): One of the first MRT parsers, written in C
  * [CAIDA bgpstream](https://bgpstream.caida.org/): Software suite, consisting of commandline, bindings to python, C library
  * [bgpscanner](https://gitlab.com/Isolario/bgpscanner): MRT parser in C, written for speed. Part of the now-defunct Isolario project
  * [microbgp suite](https://git.doublefourteen.io/bgp/ubgpsuite): MRT parser in C, written for speed
  * [BGPKit](https://github.com/bgpkit/bgpkit-parser): MRT parser written in Rust
  * [java MRT](https://github.com/paaguti/java-mrt): MRT parser written in Java
  * [mrt parser](https://github.com/sdstrowes/mrt-parser): A minimal, experimental MRT parser in Rust
