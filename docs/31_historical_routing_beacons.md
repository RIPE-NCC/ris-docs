---
permalink: /historical-routing-beacons
---

# Historical List of RIS Routing Beacons

This page lists all beacons that were announced by RIS since 2002 and have since been disabled.

**Note:** Until 02/01/2024 all IPv4 beacons were tagged with the RRC identifier as part of the BGP AGGREGATOR attribute. This encoding was done as follows:

   * AGGREGATOR IP ADDRESS: 10.x.y.z, where x, y and z form a 24-bit count of the number of seconds between the start of the month and the time of the announcement.
   * AGGREGATOR AS NUMBER: 64512 + n, where n is a 10-bit number encoded as

    MSB                                   LSB
    +---+---+---+---+---+---+---+---+---+---+
    | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
    +---+---+---+---+---+---+---+---+---+---+
    |    RRC ID     |    Sequence Number    |
    +---+---+---+---+---+---+---+---+---+---+
 
Adding 64512 brings the resulting number into the private AS number range.

## 22/02/2019 - 02/01/2024

Advertisements from RRC24 in Montevideo, Uruguay (multihop).

RRC24:
* Announcements at 00:00, 04:00, 08:00, 12:00, 16:00, 20:00 (UTC)
* Withdrawals at 02:00, 06:00, 10:00, 14:00, 18:00, 22:00 (UTC)

Routing Beacon Address Schema:
| Prefix          | RRC                     | Location         |
|:----------------|:------------------------|:-----------------|
| 93.175.153.0/24 | RRC24 - LACNIC Multihop | Montevideo, UY   |

Routing Anchor Address Schema:
| Prefix          | RRC                   | Location           |
|:----------------|:----------------------|:-------------------|
| 93.175.152.0/24 | RRC24 - LACNIC Multihop | Montevideo, UY   |

## 22/12/2017 - 02/01/2024

Advertisements from RRC23 in Singapore, Singapore.

RRC23:
* Announcements at 00:00, 04:00, 08:00, 12:00, 16:00, 20:00 (UTC)
* Withdrawals at 02:00, 06:00, 10:00, 14:00, 18:00, 22:00 (UTC)

Routing Beacon Address Schema:
| Prefix          | RRC                   | Location         |
|:----------------|:----------------------|:-----------------|
| 93.175.151.0/24 | RRC23 - Equinix SG    | Singapore, SG    |

Routing Anchor Address Schema:
| Prefix          | RRC                   | Location         |
|:----------------|:----------------------|:-----------------|
| 93.175.150.0/24 | RRC23 - Equinix SG    | Singapore, SG    |

## 04/11/2015 - 02/01/2024

Advertisements from RRC21 in Paris, France.

RRC21:
* Announcements at 00:00, 04:00, 08:00, 12:00, 16:00, 20:00 (UTC)
* Withdrawals at 02:00, 06:00, 10:00, 14:00, 18:00, 22:00 (UTC)

Routing Beacon Address Schema:
| Prefix          | RRC                   | Location         |
|:----------------|:----------------------|:-----------------|
| 93.175.149.0/24 | RRC21 - France-IX     | Paris, FR        |

Routing Anchor Address Schema:
| Prefix          | RRC                   | Location         |
|:----------------|:----------------------|:-----------------|
| 93.175.148.0/24 | RRC21 - France-IX     | Paris, FR        |

## 28/01/2016 - 02/01/2024

Advertisements from RRC19 in Johannesburg, South Africa.

RRC19:
* Announcements at 00:00, 04:00, 08:00, 12:00, 16:00, 20:00 (UTC)
* Withdrawals at 02:00, 06:00, 10:00, 14:00, 18:00, 22:00 (UTC)

Routing Beacon Address Schema:
| Prefix         | RRC                   | Location         |
|:---------------|:----------------------|:-----------------|
| 84.205.82.0/24 | RRC19 - NAP Africa JB | Johannesburg, ZA |

Routing Anchor Address Schema:
| Prefix         | RRC                   | Location         |
|:---------------|:----------------------|:-----------------|
| 84.205.88.0/24 | RRC19 - NAP Africa JB | Johannesburg, ZA |

## 01/02/2008 - 02/01/2024

Advertisements from RRC16 in Miami, Florida, United States.

RRC16:
* Announcements at 00:00, 04:00, 08:00, 12:00, 16:00, 20:00 (UTC)
* Withdrawals at 02:00, 06:00, 10:00, 14:00, 18:00, 22:00 (UTC)

Routing Beacon Address Schema:
| Prefix         | RRC                   | Location         |
|:---------------|:----------------------|:-----------------|
| 84.205.73.0/24 | RRC16 - NOTA          | Miami, FL, US    |

Routing Anchor Address Schema:
| Prefix         | RRC                   | Location         |
|:---------------|:----------------------|:-----------------|
| 84.205.89.0/24 | RRC16 - NOTA          | Miami, FL, US    |

## 14/12/2005 - 02/01/2024

Advertisements from RRC15 in Sao Paulo, Brazil.

RRC15:
* Announcements at 00:00, 04:00, 08:00, 12:00, 16:00, 20:00 (UTC)
* Withdrawals at 02:00, 06:00, 10:00, 14:00, 18:00, 22:00 (UTC)

Routing Beacon Address Schema:
| Prefix         | RRC                   | Location         |
|:---------------|:----------------------|:-----------------|
| 84.205.79.0/24 | RRC15 - PTTMetro-SP   | Sao Paulo, BR    |

Routing Anchor Address Schema:
| Prefix         | RRC                   | Location         |
|:---------------|:----------------------|:-----------------|
| 84.205.95.0/24 | RRC15 - PTTMetro-SP   | Sao Paulo, BR    |

## 02/06/2005 - 02/01/2024

Advertisements from RRC13 in Moscow, Russia.

RRC13:
* Announcements at 00:00, 04:00, 08:00, 12:00, 16:00, 20:00 (UTC)
* Withdrawals at 02:00, 06:00, 10:00, 14:00, 18:00, 22:00 (UTC)

Routing Beacon Address Schema:
| Prefix         | RRC                   | Location         |
|:---------------|:----------------------|:-----------------|
| 84.205.77.0/24 | RRC13 - MSK-IX        | Moscow, RU       |

Routing Anchor Address Schema:
| Prefix         | RRC                   | Location         |
|:---------------|:----------------------|:-----------------|
| 84.205.93.0/24 | RRC13 - MSK-IX        | Moscow, RU       |

## 03/02/2005 - 02/01/2024

All RRCs:
* Announcements at 00:00, 04:00, 08:00, 12:00, 16:00, 20:00 (UTC)
* Withdrawals at 02:00, 06:00, 10:00, 14:00, 18:00, 22:00 (UTC)

Routing Beacon Address Schema:
| Prefix         | RRC                   | Location         |
|:---------------|:----------------------|:-----------------|
| 84.205.64.0/24 | RRC00 - RIPE NCC      | Amsterdam, NL    |
| 84.205.65.0/24 | RRC01 - LINX          | London, UKi      |
| 84.205.67.0/24 | RRC03 - AMS-IX, NL-IX | Amsterdam, NL    |
| 84.205.68.0/24 | RRC04 - CIXP          | Geneva, CH       |
| 84.205.69.0/24 | RRC05 - VIX           | Vienna, AT       |
| 84.205.70.0/24 | RRC06 - DIX-IE        | Otematchi, JP    |
| 84.205.71.0/24 | RRC07 - NETNOD        | Stockholm, SE    |
| 84.205.74.0/24 | RRC10 - MIX           | Milan, IT        |
| 84.205.75.0/24 | RRC11 - NYIIX         | New York, NY, US |
| 84.205.76.0/24 | RRC12 - DE-CIX        | Frankfurt, DE    |
| 84.205.78.0/24 | RRC14 - PAIX          | Palo Alto, CA, US|

Routing Anchor Address Schema:
| Prefix         | RRC                   | Location         |
|:---------------|:----------------------|:-----------------|
| 84.205.80.0/24 | RRC00 - RIPE NCC      | Amsterdam, NL    |
| 84.205.81.0/24 | RRC01 - LINX          | London, UK       |
| 84.205.83.0/24 | RRC03 - AMS-IX, NL-IX | Amsterdam, NL    |
| 84.205.84.0/24 | RRC04 - CIXP          | Geneva, CH       |
| 84.205.85.0/24 | RRC05 - VIX           | Vienna, AT       |
| 84.205.86.0/24 | RRC06 - DIX-IE        | Otematchi, JP    |
| 84.205.87.0/24 | RRC07 - NETNOD        | Stockholm, SE    |
| 84.205.90.0/24 | RRC10 - MIX           | Milan, IT        |
| 84.205.91.0/24 | RRC11 - NYIIX         | New York, NY, US |
| 84.205.92.0/24 | RRC12 - DE-CIX        | Frankfurt, DE    |
| 84.205.94.0/24 | RRC14 - PAIX          | Palo Alto, CA, US|

## 03/02/2005 - 02/01/2024

Beacon initiated to simulate anycast failover from RRC01 to RRC03.

RRC01 / RRC03:
* Permanent announcement from RRC01
* Announcements from RRC03 at 00:00, 04:00, 08:00, 12:00, 16:00, 20:00 (UTC)
* Withdrawals from RRC03 at 02:00, 06:00, 10:00, 14:00, 18:00, 22:00 (UTC)

Routing Beacon Address Schema:
| Prefix         | RRC                   | Location         |
|:---------------|:----------------------|:-----------------|
| 84.205.72.0/24 | RRC01 - LINX          | London, UK       |
| 84.205.72.0/24 | RRC03 - AMS-IX, NL-IX |  Amsterdam, NL   |

## 03/02/2005 - 02/10/2008

Advertisements from RRC02 in Paris, France.

RRC02:
* Announcements at 00:00, 04:00, 08:00, 12:00, 16:00, 20:00 (UTC)
* Withdrawals at 02:00, 06:00, 10:00, 14:00, 18:00, 22:00 (UTC)

Routing Beacon Address Schema:
| Prefix         | RRC                   | Location         |
|:---------------|:----------------------|:-----------------|
| 84.205.66.0/24 | RRC02 - SFINX         | Paris, FR        |

Routing Anchor Address Schema:
| Prefix         | RRC                   | Location         |
|:---------------|:----------------------|:-----------------|
| 84.205.82.0/24 | RRC02 - SFINX         | Paris, FR        |

# 02/02/2005 - 03/09/2007

Beacon initiated to simulate anycast failover from RRC01 to RRC03.

RRC01 / RRC03:
* Permanent announcement from RRC01
* Announcements from RRC03 at 00:00, 04:00, 08:00, 12:00, 16:00, 20:00 (UTC)
* Withdrawals from RRC03 at 02:00, 06:00, 10:00, 14:00, 18:00, 22:00 (UTC)

Routing Beacon Address Schema:
| Prefix         | RRC                          | Location         |
|:---------------|:-----------------------------|:-----------------|
| 84.205.72.0/24 | RRC01 - LINX                 | London, UK       |
| 84.205.72.0/24 | RRC03 - AMS-IX, NL-IX, GN-IX | Amsterdam, NL    |

## 07/12/2004 - 02/02/2005

Beacon initiated to assist studies into unwanted effects on convergence when applying current Route Flap Damping practises.

RRC14:
* Announcements at 00:00h, 04:00h, 08:00h, 12:00h, 16:00h and 20:00h (UTC)
* Withdrawals at 02:00h, 06:00h, 10:00h, 14:00h, 18:00h and 22:00h (UTC)

Routing Beacon Address Schema:
| Prefix          | RRC                          | Location         |
|:----------------|:-----------------------------|:-----------------|
| 195.80.232.0/24 | RRC14 - PAIX                 | Palo Alto, US    |

Prefix 195.80.232.0/24 was previously announced by RRC08. After moving RRC08 from MAE-West to PAIX, it is announced by RRC14.

## 06/07/2004 - 02/02/2005

Beacon initiated to assist studies into unwanted effects on convergence when applying current Route Flap Damping practises.

RRC12:
* Announcements at 00:00h, 04:00h, 08:00h, 12:00h, 16:00h and 20:00h (UTC)
* Withdrawals at 02:00h, 06:00h, 10:00h, 14:00h, 18:00h and 22:00h (UTC)

Routing Beacon Address Schema:
| Prefix          | RRC                          | Location           |
|:----------------|:-----------------------------|:-------------------|
| 195.80.236.0/24 | RRC12 - DE-CIX               | Frankfurt, Germany |

## 06/07/2004 - 02/02/2005

Beacon initiated to assist studies into unwanted effects on convergence when applying current Route Flap Damping practises.

RRC12:
* Announcements at 00:00h, 04:00h, 08:00h, 12:00h, 16:00h and 20:00h (UTC)
* Withdrawals at 02:00h, 06:00h, 10:00h, 14:00h, 18:00h and 22:00h (UTC)

Routing Beacon Address Schema:
| Prefix          | RRC                          | Location           |
|:----------------|:-----------------------------|:-------------------|
| 195.80.236.0/24 | RRC12 - DE-CIX               | Frankfurt, Germany |

## 20/09/2004 - 02/02/2005

Additional Beacon Prefix, 195.80.238.0/24 is announced as normal on RRC01, RRC02, RRC05, RRC06, RRC11. This Beacon Prefix is requested from Hitech Ballani (hitesh@cs.cornell.edu) to work on Anycast server behaviours.

## 06/11/2003 - 02/02/2005

Beacon initiated to assist studies into unwanted effects on convergence when applying current Route Flap Damping practises.

RRC10:
* Announcements at 00:00h, 04:00h, 08:00h, 12:00h, 16:00h and 20:00h (UTC)
* Withdrawals at 02:00h, 06:00h, 10:00h, 14:00h, 18:00h and 22:00h (UTC)

Routing Beacon Address Schema:
| Prefix          | RRC                          | Location           |
|:----------------|:-----------------------------|:-------------------|
| 195.80.234.0/24 | RRC10 - MIX                  | Milan, IT          |

## 14/02/2004 - 02/02/2005

Beacon initiated to assist studies into unwanted effects on convergence when applying current Route Flap Damping practises.

RRC11:
* Announcements at 00:00h, 04:00h, 08:00h, 12:00h, 16:00h and 20:00h (UTC)
* Withdrawals at 02:00h, 06:00h, 10:00h, 14:00h, 18:00h and 22:00h (UTC)

Routing Beacon Address Schema:
| Prefix          | RRC                          | Location           |
|:----------------|:-----------------------------|:-------------------|
| 195.80.235.0/24 | RRC11 - NYIIX                | New York, NY, USA  |

## 30/09/2002 - 02/02/2005

Beacons initiated to assist studies into unwanted effects on convergence when applying current Route Flap Damping practises.

All RRCs:
* Announcements at 00:00h, 04:00h, 08:00h, 12:00h, 16:00h and 20:00h (UTC)
* Withdrawals at 02:00h, 06:00h, 10:00h, 14:00h, 18:00h and 22:00h (UTC)

Routing Beacon Address Schema:
| Prefix          | RRC                          | Location           |
|:----------------|:-----------------------------|:-------------------|
| 195.80.224.0/24 | RRC00 - RIPE NCC             | Amsterdam, NL      |
| 195.80.225.0/24 | RRC01 - LINX                 | London, UK         |
| 195.80.226.0/24 | RRC02 - SFINX                | Paris, FR          |
| 195.80.227.0/24 | RRC03 - AMS-IX               | Amsterdam, NL      |
| 195.80.228.0/24 | RRC04 - CIXP                 | Geneva, CH         |
| 195.80.229.0/24 | RRC05 - VIX                  | Vienna, AT         |
| 195.80.230.0/24 | RRC06 - NSPIXP2              | Otematchi, JP      |
| 195.80.231.0/24 | RRC07 - Netnod-IX            | Stockholm, SE      |
| 195.80.232.0/24 | RRC08 - MAE-WEST             | San Jose, CA, US   |

## 10/03/2002 - 02/02/2005

Beacon initiated to simulate anycast failover from RRC01 to RRC03.

RRC01 / RRC03:
* Permanent announcement from RRC01
* Announcements from RRC03 at 00:00, 04:00, 08:00, 12:00, 16:00, 20:00 (UTC)
* Withdrawals from RRC03 at 02:00, 06:00, 10:00, 14:00, 18:00, 22:00 (UTC)

Routing Beacon Address Schema:
| Prefix          | RRC                          | Location           |
|:----------------|:-----------------------------|:-------------------|
195.80.233.0/24   | RRC01 - LINX                 | London, UK         |
195.80.233.0/24   | RRC03 - AMS-IX               | Amsterdam, NL      |

