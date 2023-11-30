---
permalink: /routing-beacons
---

# Routing Beacons

A Routing Beacon or BGP Beacon is a Border Gateway Protocol (BGP) speaker that announces and withdraws a particular prefix at predetermined time intervals. RIS Route Collectors originate a small number of routing beacons. These serve to better understand the state of the global BGP Internet routing system, by observing how the announcements and withdrawals of these routing beacons propagate throughout the Internet. The geographically dispersed distribution of the RIS Route Collectors makes them ideal for this purpose.

These prefixes can be divided into 2 types:
   * Beacon prefixes: These prefixes are announced and withdrawn according to a set schedule. The propagation of the announcement and withdrawal, or lack thereof, can inform us about the state of the Internet BGP routing system
   * Anchor prefixes: These prefixes are supposed to be announced all the time. Typically, one pair of a beacon and anchor prefix is announced from a specific route collector (RRC). This way anchor prefixes can be used to differentiate between activity seen as a result of changes on the originating RRC and that seen for other reasons. If the anchor flaps, it could mean that the RRC was reloaded and activity of the corresponding beacon can be ignored when doing analysis of the RIS data.

We ask our peers to accept and propagate our anchor and beacon prefixes, and we try to make an effort to have them seen globally, but it must be noted that global visibility of these prefixes is not guaranteed. If you notice any of these prefixes not propagating globally, please let us know at [ris@ripe.net](mailto:ris@ripe.net).

All beacon prefixes are announced with additional attributes. We overload the BGP AGGREGATOR attribute to tag each announcement with a timestamp, a sequence number and a number uniquely identifying the announcement. These are encoded as follows:

   * AGGREGATOR IP ADDRESS: 10.x.y.z, where x, y and z form a 24-bit count of the number of seconds between the start of the month and the time of the announcement.
   * AGGREGATOR AS NUMBER: 64512 + n, where n is a 10-bit number encoded as

    MSB                                   LSB
    +---+---+---+---+---+---+---+---+---+---+
    | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
    +---+---+---+---+---+---+---+---+---+---+
    | Announcement  |    Sequence Number    |
    |      ID       |                       |
    +---+---+---+---+---+---+---+---+---+---+
  
Adding 64512 brings the resulting number into the private AS number range.

If one wants to make special arrangements for routing beacons, contact us at [ris@ripe.net](mailto:ris@ripe.net), but keep in mind that in IPv4 the address space that we have available is very limited. We will evaluate these requests based on the potential benefit to our community as a whole. An alternative for experiments with routing beacons is the [PEERING project](https://peering.ee.columbia.edu/).

## Current Beaconing Setup

The below table lists the RIS routing beacons per February 1st, 2024.

For all beacon prefixes below we have a 2 hour up - 2 hour down schedule. Specifically:
   * Announcements at 00:00, 04:00, 08:00, 12:00, 16:00, 20:00 (UTC)
   * Withdrawals at 02:00, 06:00, 10:00, 14:00, 18:00, 22:00 (UTC)

| IPv6 prefix        | IPv4 prefix        | type     | origin RRC (IXP/multihop)   |peer location(s)|
|:-------------------|:-------------------|:---------|:----------------------------|:---------------|
| 2001:7fb:ef00::/48 |                    | beacon   | RRC00 (multihop)            | global         |
| 2001:7fb:ff00::/48 |                    | anchor   |"|"|
| 2001:7fb:fe01::/48 | 84.205.65.0/24     | beacon   | RRC01 (LINX/LONAP)          | GB             |
| 2001:7fb:ff01::/48 | 84.205.81.0/24     | anchor   |"|"|
| 2001:7fb:fe03::/48 | 84.205.67.0/24     | beacon   | RRC03 (AMS-IX, NL-IX)       | NL             |
| 2001:7fb:ff03::/48 | 84.205.83.0/24     | anchor   |"|"|
| 2001:7fb:fe04::/48 |                    | beacon   | RRC04 (CIXP)                | CH             |
| 2001:7fb:ff04::/48 |                    | anchor   |"|"|
| 2001:7fb:fe05::/48 |                    | beacon   | RRC05 (VIX)                 | AT	            |
| 2001:7fb:ff05::/48 |                    | anchor   |"|"|
| 2001:7fb:fe06::/48 |                    | beacon   | RRC06 (DIX-IE)              | JP             |
| 2001:7fb:ff06::/48 |                    | anchor   |"|"|
| 2001:7fb:fe07::/48 |                    | beacon   | RRC07 (NETNOD)              | SE	            |
| 2001:7fb:ff07::/48 |                    | anchor   |"|"|
| 2001:7fb:fe0a::/48 |                    | beacon   | RRC10 (MIX)                 | IT             |
| 2001:7fb:ff0a::/48 |                    | anchor   |"|"|
| 2001:7fb:fe0b::/48 |                    | beacon   | RRC11 (NYIIX)               | US             |
| 2001:7fb:ff0b::/48 |                    | anchor   |"|"|
| 2001:7fb:fe0c::/48 | 84.205.76.0/24     | beacon   | RRC12 (DE-CIX)              | DE             |
| 2001:7fb:ff0c::/48 | 84.205.92.0/24     | anchor   |"|"|
| 2001:7fb:fe0d::/48 |                    | beacon   | RRC13 (MSK-IX)              | RU	            |
| 2001:7fb:ff0d::/48 |                    | anchor   |"|"|
| 2001:7fb:fe0e::/48 |                    | beacon   | RRC14 (PAIX)                | US             |
| 2001:7fb:ff0e::/48 |                    | anchor   |"|"|
| 2001:7fb:fe0f::/48 |                    | beacon   | RRC15 (PTTMetro-SP)         | BR             |
| 2001:7fb:ff0f::/48 |                    | anchor   |"|"|
| 2001:7fb:fe10::/48 |                    | beacon   | RRC16 (NOTA	Miami)         | US             |
| 2001:7fb:ff10::/48 |                    | anchor   |"|"|
| 2001:7fb:fe12::/48 |                    | beacon   | RRC18 (CATNIX)              | ES             |
| 2001:7fb:ff12::/48 |                    | anchor   |"|"|
| 2001:7fb:fe13::/48 |                    | beacon   | RRC19 (NAP Africa JB)       | ZA             |
| 2001:7fb:ff13::/48 |                    | anchor   |"|"|
| 2001:7fb:fe14::/48 |                    | beacon   | RRC20 (SwissIX)             | CH             |
| 2001:7fb:ff14::/48 |                    | anchor   |"|"|
| 2001:7fb:fe15::/48 |                    | beacon   | RRC21 (FranceIX PAR/MAR)    | FR             |
| 2001:7fb:ff15::/48 |                    | anchor   |"|"|
| 2001:7fb:fe16::/48 |                    | beacon   | RRC22 (InterLAN)            | RO             |
| 2001:7fb:ff16::/48 |                    | anchor   |"|"|
| 2001:7fb:fe17::/48 |                    | beacon   | RRC23 (Equinix Singapore)   | SG             |
| 2001:7fb:ff17::/48 |                    | anchor   |"|"|
| 2001:7fb:fe18::/48 |                    | beacon   | RRC24 (multihop)            | LACNIC region  |
| 2001:7fb:ff18::/48 |                    | anchor|"|"|
| 2001:7fb:fe20::/48 |                    | beacon   | RRC25 (multihop)            | global         |
| 2001:7fb:ff20::/48 |                    | anchor|"|"|
| 2001:7fb:fe19::/48 |                    | beacon   | RRC26 (UAE-IX)              | AE             |
| 2001:7fb:ff19::/48 |                    | anchor   |"|"|

## Special beaconing setups

### Per-RIR anycasted beacons

In addition to the anchor+beacon sets per RRC, we advertise anycasted IPv6 and IPv4 prefixes per RIR region.
To uniquely identify which RRC originated a particular announcement, we encode a unique *Announcement ID* in the BGP AGGREGATOR attribute.
For more details see the explanation at the top of this page.

For all beacon prefixes below we have a 2 hour up - 2 hour down schedule. Specifically:
   * Announcements at 00:00, 04:00, 08:00, 12:00, 16:00, 20:00 (UTC)
   * Withdrawals at 02:00, 06:00, 10:00, 14:00, 18:00, 22:00 (UTC)

| IPv6 prefix        | IPv4 prefix        | type     | RIR region/multihop | origin RRCs  | AGGREGATOR announcement ID |
|:-------------------|:-------------------|:---------|:--------------------|:-------------|:---------------------------|
| 2001:7fb:ee00::/48 | 84.205.64.0/24     | beacon   | multihop            | RRC00<br>RRC25 | 0 (RRC00)<br>1 (RRC25)   |
| 2001:7fb:ef00::/48 | 84.205.80.0/24     | anchor   |"|"|"|
| 2001:7fb:ee01::/48 | 84.205.69.0/24     | beacon   | RIPE                | RRC04<br>RRC05<br>RRC07<br>RRC10<br>RRC13<br>RRC18<br>RRC20<br>RRC21<br>RRC22<br>RRC26 | 0 (RRC04)<br>1 (RRC05)<br>2 (RRC07)<br>3 (RRC10)<br>4 (RRC13)<br>5 (RRC18)<br>6 (RRC20)<br>7 (RRC21)<br>8 (RRC22)<br>9 (RRC26) |
| 2001:7fb:ef01::/48 | 84.205.85.0/24     | anchor   |"|"|"|
| 2001:7fb:ee02::/48 | 84.205.70.0/24     | beacon   | APNIC               | RRC06<br>RRC23 | 0 (RRC06)<br>1 (RRC23) |
| 2001:7fb:ef02::/48 | 84.205.86.0/24     | anchor   |"|"|"|
| 2001:7fb:ee03::/48 | 84.205.75.0/24     | beacon   | ARIN                | RRC11<br>RRC14<br>RRC16 | 0 (RRC11)<br>1 (RRC14)<br>2 (RRC16) |
| 2001:7fb:ef03::/48 | 84.205.91.0/24     | anchor   |"|"|"|
| 2001:7fb:ee05::/48 | 84.205.82.0/24     | beacon   | AFRINIC             | RRC19 | 0 (RRC19) |
| 2001:7fb:ef05::/48 | 84.205.88.0/24     | anchor   |"|"|"|
| 2001:7fb:ee04::/48 | 93.175.153.0/24    | beacon   | LACNIC              | RRC15<br>RRC24 | 0 (RRC15)<br>1 (RRC24) |
| 2001:7fb:ef04::/48 | 93.175.152.0/24    | anchor   |"|"|"|

### Long prefix beacons

To measure the reachability of longer-than-/48 IPv6 prefixes and longer-than-/24 IPv4 prefixes we continuously announce the following anycasted prefixes.

| IPv6 prefix            | IPv4 prefix        | type   | origin RRCs | AGGREGATOR announcement ID |
|:-----------------------|:-------------------|:-------|:------------|:---------------------------|
| 2001:7fb:fb01:<wbr>100::/56 | 93.175.154.0/25    | anchor | RRC04<br>RRC06<br>RRC11<br>RRC15<br>RRC19 | 0 (RRC04)<br>1 (RRC06)<br>2 (RRC11)<br>3 (RRC15)<br>4 (RRC19) |
| 2001:7fb:fb01:200::/64 | 93.175.154.128/28  | anchor | RRC04<br>RRC06<br>RRC11<br>RRC15<br>RRC19 | 0 (RRC04)<br>1 (RRC06)<br>2 (RRC11)<br>3 (RRC15)<br>4 (RRC19) |

### Fast-paced beacons

The beacons 2001:7fb:ff02::/48 and 84.205.66.0/24 are announced for 10 minutes and then withdrawn for 10 minutes from RRC03. Specifically:
   * Announcements at XX:10, XX:30, XX:50
   * Withdrawals at XX:00, XX:20, XX:40

| IPv6 prefix        | IPv4 prefix     | type     | origin RRC (IXP/multihop)   |peer location(s)|
|:-------------------|:----------------|:---------|:----------------------------|:---------------|
| 2001:7fb:ff02::/48 | 84.205.66.0/24  | beacon   | RRC03 (AMS-IX, NL-IX)       | NL             |

### Resource Certification (RPKI) Routing Beacons

A number of prefixes is permanent announcement from RRC03 to provide insight into the visibility of prefixes in various RPKI states. Each prefix has a pingable address at :1 (IPv6) or .1 (IPv6).

2001:7fb:fd04::/48 is announced by AS15562 for [RPKI TEST](https://www.ripe.net/s/rpki-test).

| IPv6 prefix        | IPv4 prefix      | RPKI state    | RPKI origin    |
|:-------------------|:-----------------|:--------------|:---------------|
| 2001:7fb:fd02::/48 | 93.175.146.0/24  | Valid         | AS12654        |
| 2001:7fb:fd03::/48 | 93.175.147.0/24  | Invalid       | AS196615       |
| 2001:7fb:ff03::/48 | 84.205.83.0/24   | Unknown       |                |
| 2001:7fb:fd04::/48 |                  | Invalid       | AS196615       |

More information available at [RIPE NCC's Resource Certification (RPKI) pages](https://www.ripe.net/manage-ips-and-asns/resource-management/rpki), and 
[Routing Certification Beacons on RIPE Labs](https://labs.ripe.net/Members/markd/routing-certification-beacons/)

### Deliberately unnanounced prefixes

The following prefixes have been allocated to RIS, but are deliberately not announced in the BGP routing system. We have a RIPE Atlas traceroute measurement towards an address in the IPv4 prefix (documented [here](https://github.com/RIPE-Atlas-Community/ripe-atlas-tips-and-tricks/wiki/nonDFZ-Routing)).

| IPv6 prefix        | IPv4 prefix      | type         |
|:-------------------|:-----------------|:-------------|
| 2001:7fb:dead::/48 | 93.175.158.0/24  | unannounced  |

# History

We have archived a description of the historical setup of routing beacons [here](/docs/historical-routing-beacons). This description is not entirely accurate and complete, but should serve as a starting point if one wants to study routing beacons pre 2024.

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
