# Routing Beacons

A Routing Beacon or BGP Beacon is a Border Gateway Protocol (BGP) speaker that announces and withdraws a particular prefix at predetermined time intervals. RIS Route Collectors originate a small number of routing beacons. These serve to better understand the state of the global BGP Internet routing system, by observing how the announcements and withdrawals of these routing beacons propagate throughout the Internet. The geographically dispersed distribution of the RIS Route Collectors makes them ideal for this purpose.

These prefixes can be divided into 2 types:
   * Beacon prefixes: These prefixes are announced and withdrawn according to a set schedule. The propagation of the announcement and withdrawal, or lack thereof, can inform us about the state of the Internet BGP routing system
   * Anchor prefixes: These prefixes are supposed to be announced all the time. Typically, one pair of a beacon and anchor prefix is announced from a specific route collector (RRC). This way anchor prefixes can be used to differentiate between activity seen as a result of changes on the originating RRC and that seen for other reasons. If the anchor flaps, it could mean that the RRC was reloaded and activity of the corresponding beacon can be ignored when doing analysis of the RIS data.

We ask our peers to accept and propagate our anchor and beacon prefixes, and we try to make an effort to have them seen globally, but it must be noted that global visibility of these prefixes is not guaranteed. If you notice any of these prefixes not propagating globally, please let us know at ris@ripe.net

All IPv4 beacon prefixes are announced with additional attributes. We overload the BGP AGGREGATOR attribute to tag each announcement with a timestamp, a sequence number and the identifier of the RRC making the announcement. These are encoded as follows:

   * AGGREGATOR IP ADDRESS: 10.x.y.z, where x, y and z form a 24-bit count of the number of seconds between the start of the month and the time of the announcement.
   * AGGREGATOR AS NUMBER: 64512 + n, where n is a 10-bit number encoded as

    MSB                                   LSB
    +---+---+---+---+---+---+---+---+---+---+
    | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
    +---+---+---+---+---+---+---+---+---+---+
    |    RRC ID     |    Sequence Number    |
    +---+---+---+---+---+---+---+---+---+---+
  
Adding 64512 brings the resulting number into the private AS number range.

If one wants to make special arrangements for routing beacons, contact us at ris@ripe.net, but keep in mind that in IPv4 the address space that we have available is very limited. We will evaluate these requests based on the potential benefit to our community as a whole. An alternative for experiments with routing beacons is the [PEERING project](https://peering.ee.columbia.edu/).

## Current Beaconing Setup

For all beacon prefixes below we have a 2 hour up - 2 hour down schedule. Specifically:
   * Announcements at 00:00, 04:00, 08:00, 12:00, 16:00, 20:00 (UTC)
   * Withdrawals at 02:00, 06:00, 10:00, 14:00, 18:00, 22:00 (UTC)

| IPv4 prefix      | IPv6 prefix        | type     | origin RRC (IXP/multihop)   |peer location(s)|
|:-----------------|:-------------------|:---------|:----------------------------|:---------------|
|84.205.64.0/24	   | 2001:7FB:FE00::/48 | beacon   | RRC00 (multihop)            | global         |
|84.205.80.0/24    | 2001:7FB:FF00::/48 | anchor   |"|"|
|84.205.65.0/24	   | 2001:7FB:FE01::/48 | beacon   | RRC01 (LINX/LONAP)          | GB             |
|84.205.81.0/24    | 2001:7FB:FF01::/48 | anchor   |"|"|
|84.205.67.0/24	   | 2001:7FB:FE03::/48 | beacon   | RRC03 (AMS-IX, NL-IX)       | NL,DK          |
|84.205.83.0/24    | 2001:7FB:FF03::/48 | anchor   |"|"|
|84.205.68.0/24	   | 2001:7FB:FE04::/48 | beacon   | RRC04 (CIXP)                | CH,FR          |
|84.205.84.0/24    | 2001:7FB:FF04::/48 | anchor   |"|"|
|84.205.69.0/24	   | 2001:7FB:FE05::/48 | beacon   | RRC05 (VIX)                 | AT	            |
|84.205.85.0/24    | 2001:7FB:FF05::/48 | anchor   |"|"|
|84.205.70.0/24    | 2001:7FB:FE06::/48 | beacon   | RRC06 (DIX-IE)              | JP             |
|84.205.86.0/24    | 2001:7FB:FF06::/48 | anchor   |"|"|
|84.205.71.0/24	   | 2001:7FB:FE07::/48 | beacon   | RRC07 (NETNOD)              | SE	            |
|84.205.87.0/24    | 2001:7FB:FF07::/48 | anchor   |"|"|
|84.205.74.0/24    | 2001:7FB:FE0A::/48 | beacon   | RRC10 (MIX)                 | IT             |
|84.205.90.0/24    | 2001:7FB:FF0A::/48 | anchor   |"|"|
|84.205.75.0/24	   | 2001:7FB:FE0B::/48 | beacon   | RRC11 (NYIIX)               | US             |
|84.205.91.0/24    | 2001:7FB:FF0B::/48 | anchor   |"|"|
|84.205.76.0/24	   | 2001:7FB:FE0C::/48 | beacon   | RRC12 (DE-CIX)              | DE             |
|84.205.92.0/24    | 2001:7FB:FF0C::/48 | anchor   |"|"|
|84.205.77.0/24    | 2001:7FB:FE0D::/48 | beacon   | RRC13 (MSK-IX)              | RU	            |
|84.205.93.0/24    | 2001:7FB:FF0D::/48 | anchor   |"|"|
|84.205.78.0/24	   | 2001:7FB:FE0E::/48 | beacon   | RRC14 (PAIX)                | US             |
|84.205.94.0/24    | 2001:7FB:FF0E::/48 | anchor   |"|"|
|84.205.79.0/24	   | 2001:7FB:FE0F::/48 | beacon   | RRC15 (PTTMetro-SP)         | BR             |
|84.205.95.0/24    | 2001:7FB:FF0F::/48 | anchor   |"|"|
|84.205.73.0/24    | 2001:7FB:FE10::/48 | beacon   | RRC16 (NOTA	Miami)         | US             |
|84.205.89.0/24    | 2001:7FB:FF10::/48 | anchor   |"|"|
|                  | 2001:7FB:FE12::/48 | beacon   | RRC18 (CATNIX)              | ES             |
|                  | 2001:7FB:FF12::/48 | anchor   |"|"|
|84.205.82.0/24    | 2001:7FB:FE13::/48 | beacon   | RRC19 (NAP Africa JB)       | ZA 	          |
|84.205.88.0/24    | 2001:7FB:FF13::/48 | anchor   |"|"|
|                  | 2001:7FB:FE14::/48 | beacon   | RRC20 (SwissIX)             | CH             |
|                  | 2001:7FB:FF14::/48 | anchor   |"|"|
|93.175.149.0/24	 | 2001:7FB:FE15::/48 | beacon   | RRC21 (FranceIX PAR/MAR)    | FR             |
|93.175.148.0/24   | 2001:7FB:FF15::/48 | anchor   |"|"|
|                  | 2001:7FB:FE16::/48 | beacon   | RRC22 (InterLAN)            | RO             |
|                  | 2001:7FB:FF16::/48 | anchor   |"|"|
|93.175.151.0/24	 | 2001:7FB:FE17::/48 | beacon   | RRC23 (Equinix Singapore)   | SG             |
|93.175.150.0/24   | 2001:7FB:FF17::/48 | anchor   |"|"|
|93.175.153.0/24   | 2001:7FB:FE18::/48 | beacon   | RRC24 (multihop)            | LACNIC region  |
|93.175.152.0/24   | 2001:7FB:FF18::/48 |anchor|"|"|

## Special beaconing setups

### Anycast failover simulation

The prefix 84.205.72.0/24 is permanent announcement from RRC14 (anchor) and it is periodically announced from RRC03 (beacon)
according to this timetable:
   * Announcements at 00:00, 04:00, 08:00, 12:00, 16:00, 20:00 (UTC)
   * Withdrawals at 02:00, 06:00, 10:00, 14:00, 18:00, 22:00 (UTC)

84.205.72.1 is configured as a "pingable address" on both RRCs involved in this setup

| IPv4 prefix      | type     | origin RRC (IXP/multihop)   |peer location(s)|
|:-----------------|:---------|:----------------------------|:---------------|
|84.205.72.0/24    | anchor   | RRC14 (PAIX)                | US             |
|84.205.72.0/24    | beacon   | RRC03 (AMS-IX,NL-IX)        | NL,DK          |


### Resource Certification (RPKI) Routing Beacons

A number of prefixes is permanent announcement from RRC03 to provide insight into the visibility of prefixes in various RPKI states. Each prefix has a pingable address at .1 (IPv4) or ::1 (IPv6).

2001:7fb:fd04::/48 is announced by AS15562 for [RPKI TEST](https://www.ripe.net/s/rpki-test).

| IPv4 prefix      | IPv6 prefix        | RPKI state    | RPKI origin    |
|:-----------------|:-------------------|:--------------|:---------------|
|93.175.146.0/24   |2001:7fb:fd02::/48  | Valid         | AS12654        |
|93.175.147.0/24   |2001:7fb:fd03::/48  | Invalid       | AS196615       |
|84.205.83.0/24    |2001:7fb:ff03::/48  | Unknown       |                |
|                  |2001:7fb:fd04::/48  | Invalid       | AS196615       |

More information available at [RIPE NCC's Resource Certification (RPKI) pages](https://www.ripe.net/manage-ips-and-asns/resource-management/rpki), and 
[Routing Certification Beacons on RIPE Labs](https://labs.ripe.net/Members/markd/routing-certification-beacons/)

# History

We have archived a description of the historical setup of routing beacons here: https://www.ripe.net/analyse/internet-measurements/routing-information-service-ris/historical-list-of-ris-routing-beacons . This description is not entirely accurate and complete, but should serve as a starting point if one wants to study routing beacons pre 20216.

# Machine readable routing beacon info

Current routing beacon information in machine readable format can be found here:
   
   [ris-routing-beacons.json](ris-routing-beacons.json)
   
# Further background reading

Some research, presentations and other external documentation on uses of routing beacons can be found here:

## Route Flap Dampening (RFD)
  * [RFC 2439](https://datatracker.ietf.org/doc/html/rfc2439): BGP Route Flap Damping | C. Villamizar, R. Chandra and R. Govindan
  * [ripe-580](https://www.ripe.net/publications/docs/ripe-580): RIPE Routing Working Group Recommendations on Route Flap Damping | Randy Bush, Cristel Pelsser, Mirjam Kuhne, Olaf Maennel, Pradosh Mohapatra, Keyur Patel, Rob Evans
  * [Route Flap Damping: Harmful?](https://meetings.ripe.net/ripe-43/presentations/ripe43-routing-flap.pdf) | Randy Bush, Tim Griffin and Zhuoqing Morley Mao
  * [Delayed Internet Routing Convergence](https://dl.acm.org/doi/pdf/10.1145/347059.347428) | C. Labovitz, A. Ahuja, A. Bose and F. Jahanian
  * [Route Flap Damping Exacerbates Internet Routing Convergence](https://dl.acm.org/doi/pdf/10.1145/633025.633047) | Zhuoqing Morley Mao, Ramesh Govindan, George Varghese and Randy Katz

## Ghost routes/zombie routes
  * [BGP Zombies](https://labs.ripe.net/author/romain_fontugne/bgp-zombies/) | Romain Fontugne and Emile Aben
  * [BGP Zombies: an Analysis of Beacons Stuck Routes](https://hal.inria.fr/hal-01970596/document) | Romain Fontugne, Esteban Bautista, Colin Petrie, Yutaro Nomura, Patrice Abry, Paulo Gonçalves, Kensuke Fukuda, Emile Aben

## General BGP background
  * [Tim Griffin's Interdomain Routing page](https://www.cl.cam.ac.uk/~tgg22/interdomain/)
