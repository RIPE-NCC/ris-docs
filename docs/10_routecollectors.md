---
permalink: /route-collectors
---

# Route collectors

Route collectors are the (physical or virtual) machines where RIS ingests BGP routing data. We receive this data via BGP peering sessions, where RIPE RIS uses [AS12654](https://www.peeringdb.com/net/621). Most route collectors collect data from peers at IXP peering LANs that the route collectors are physically attached to. We also have 'multi-hop' route collectors, which collect BGP data from peers via BGP multi-hop sessions. The advantage of multi-hop BGP sessions is that data collection is not restricted to networks that are attached to the same peering LANs as the RIS collector. Instead, these sessions can be established with us from all over the world.

Our route collectors have names that start with 'RRC' and end with a number. Starting at 00 and (as of this writing) up to 26.
We typically add a small number of route collectors every year.

For route collectors that are attached to IXP peering LANs we keep our [PeeringDB record](https://www.peeringdb.com/net/621) up to date, so this serves as the authoritative source for what peering LANs we can establish BGP peering sessions on, ie. where networks can directly peer with us.

Our active multi-hop collectors and their meta-data is listed below:

| Name   | Physical Location  | Type     | Scope         | Raw Data | Sponsors |
|:-------|:-------------------|:---------|:--------------|:---------| ---------|
| RRC00  | Amsterdam, NL      | multihop | global        | [data](https://data.ris.ripe.net/rrc00/)| [RIPE NCC](https://www.ripe.net/) |
| RRC01  | London, GB         | IXP      | LINX, LONAP   | [data](https://data.ris.ripe.net/rrc01/)| [LINX](https://www.linx.net/), [LONAP](https://www.lonap.net/) |
| RRC03  | Amsterdam, NL      | IXP      | AMS-IX, NL-IX | [data](https://data.ris.ripe.net/rrc03/)| [AMS-IX](https://www.ams-ix.net), [NL-IX](https://www.nl-ix.net/) |
| RRC04  | Geneva, CH         | IXP      | CIXP          | [data](https://data.ris.ripe.net/rrc04/)| [CERN](https://cixp.net/) |
| RRC05  | Vienna, AT         | IXP      | VIX           | [data](https://data.ris.ripe.net/rrc05/)| [VIX](https://www.vix.at/) |
| RRC06  | Otemachi, JP       | IXP      | DIX-IE, JPIX  | [data](https://data.ris.ripe.net/rrc06/)| [RIPE NCC](https://www.ripe.net/) |
| RRC07  | Stockholm, SE      | IXP      | Netnod        | [data](https://data.ris.ripe.net/rrc07/)| [NETNOD](https://www.netnod.se/) |
| RRC10  | Milan, IT          | IXP      | MIX           | [data](https://data.ris.ripe.net/rrc10/)| [MIX](https://mix-it.net/) |
| RRC11  | New York, NY, US   | IXP      | NYIIX         | [data](https://data.ris.ripe.net/rrc11/)| [Telehouse](https://www.telehouse.net/), [GTT](https://www.gtt.com/) |
| RRC12  | Frankfurt, DE      | IXP      | DE-CIX        | [data](https://data.ris.ripe.net/rrc12/)| [DE-CIX](https://www.de-cix.net/) |
| RRC13  | Moscow, RU         | IXP      | MSK-IX        | [data](https://data.ris.ripe.net/rrc13/)| [MSK-IX](https://www.msk-ix.ru/) |
| RRC14  | Palo Alto, CA, US  | IXP      | PAIX          | [data](https://data.ris.ripe.net/rrc14/)| [Equinix](https://www.equinix.com/) |
| RRC15  | Sao Paolo, BR      | IXP      | PTTMetro-SP   | [data](https://data.ris.ripe.net/rrc15/)| [IX.br](https://ix.br/) |
| RRC16  | Miami, FL, US      | IXP      | Equinix Miami | [data](https://data.ris.ripe.net/rrc16/)| [RIPE NCC](https://www.ripe.net/) |
| RRC18  | Barcelona, ES      | IXP      | CATNIX        | [data](https://data.ris.ripe.net/rrc18/)| [CATNIX](https://www.catnix.net/) |
| RRC19  | Johannesburg, ZA   | IXP      | NAP Africa JB | [data](https://data.ris.ripe.net/rrc19/)| [Network Platforms](https://www.networkplatforms.co.za/)|
| RRC20  | Zurich, CH         | IXP      | SwissIX       | [data](https://data.ris.ripe.net/rrc20/)| [SWISS-IX](https://www.swissix.ch/) |
| RRC21  | Paris, FR          | IXP      | France-IX Paris and France-IX Marseille | [data](https://data.ris.ripe.net/rrc21/)| [France-IX](https://www.franceix.net/en/)|
| RRC22  | Bucharest, RO      | IXP      | Interlan      | [data](https://data.ris.ripe.net/rrc22/)| [InterLAN](https://www.interlan.ro/) |
| RRC23  | Singapore, SG      | IXP      | Equinix Singapore | [data](https://data.ris.ripe.net/rrc23/)| [Equinix](https://www.equinix.com/) |
| RRC24  | Montevideo, UY     | multihop | LACNIC region | [data](https://data.ris.ripe.net/rrc24/)| [LACNIC](https://www.lacnic.net/) |
| RRC25  | Amsterdam, NL      | multihop | global        | [data](https://data.ris.ripe.net/rrc25/)| [RIPE NCC](https://www.ripe.net/) |
| RRC26  | Dubai, AE          | IXP      | UAE-IX        | [data](https://data.ris.ripe.net/rrc26/)| [Datamena](https://datamena.com/), [UAE-IX ](https://www.uae-ix.net/)|


Historic route collectors are listed in this table:

| Name   | Physical Location  | Type     | Scope         | Raw Data |
|:-------|:-------------------|:---------|:--------------|:---------|
| RRC02  | Paris, FR          | IXP      | SFINX         | [data](https://data.ris.ripe.net/rrc02/)|
| RRC08  | San Jose, CA, US   | IXP      | MAE-WEST      | [data](https://data.ris.ripe.net/rrc08/)|
| RRC09  | Zurich, CH         | IXP      | TIX           | [data](https://data.ris.ripe.net/rrc09/)|



Locations are also available in dns LOC records

## Peer meta-data

RIPEstat [has an API (rrc-info)](https://stat.ripe.net/docs/02.data-api/rrc-info.html) with the current RIS peers and their numbers of routes. Furthermore, there is a prototype with machine-readable metadata for the **multihop** peers in our [peer metadata prototype](./40_prototypes/20_peer_metadata.md).

We also have a web page of peers per RRC: https://www.ris.ripe.net/peerlist/all.shtml

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
