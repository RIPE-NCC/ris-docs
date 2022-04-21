# Route collectors

Route collectors are the physical machines where RIS ingests BGP routing data. We receive this data via BGP peering sessions. Most route collectors collect data from peers at IXP peering LANs that the route collectors are physically attached to. We also have 'multi-hop' route collectors, which collect BGP data from peers via BGP multi-hop sessions. The advantage of multi-hop BGP sessions is that data collection is not restricted to networks that are attached to the same peering LANs as the RIS collector. Instead, these sessions can be established with us from all over the world.

Or route collectors have names that start with 'RRC' and end with a number. Starting at 00 and (as of this writing) up to 26.
We typically add a small number of route collectors every year.

For route collectors that are attached to IXP peering LANs we keep our [PeeringDB record](https://www.peeringdb.com/net/621) up to date, so this serves as the authoritative source for what peering LANs we can establish BGP peering sessions on, ie. where networks can directly peer with us.

Our multi-hop collectors and their meta-data is listed below:

| Name   | Physical Location  | Scope         | 
|:-------|:-------------------|:--------------|
| RRC00  | Amsterdam, NL      | global        |
| RRC24  | Montevideo, UY     | LACNIC region |
| RRC25  | Amsterdam, NL      | global        |

Locations are also available in dns LOC records

RIPEstat includes a metadata call with more information: https://stat.ripe.net/docs/data_api#rrc-info

We also have a list of peers per RRC: https://www.ris.ripe.net/peerlist/all.shtml

## BGP Timer settings

Since BGP Timer settings influence data collection we document their settings here:

BGP Timer settings since 23 November 2006:

  * Keepalives: 60 seconds
  * Holddown: 180 seconds

BGP Timer settings between 17 October 2002 and 23 November 2006:

  * Keepalives: 0 (disabled)
  * Holddown: 0 (disabled)

BGP Timer settings before 17 October 2002:

  * Keepalives: 60 seconds
  * Holddown: 180 seconds
