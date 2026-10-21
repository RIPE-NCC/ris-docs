---
permalink: /ris-whois
---

# RISwhois

## WHOIS service

RISwhois provides a WHOIS service based on the real-world routing data observed by our network of remote route collectors (RRCs). It allows you to query for routes by IP address, prefix, or ASN, returning information about where the route was seen, when it was last updated, and how many RIS peers can see it. As is customary for WHOIS, the output is returned in RPSL format.

The service is accessible on *riswhois.ripe.net*, port 43. You can send queries over the command line using a tool like `netcat` or `whois`, e.g.

```
$ whois -h riswhois.ripe.net 193.0.0.1
% This is RIPE NCC's Routing Information Service
% whois gateway to collected BGP Routing Tables, version v0.1.6-2
% IPv4 or IPv6 address to origin prefix match
%
% For more information visit https://ris.ripe.net/docs/ris-whois/
%
% Connected to backend ris-whois29.ripe.net

route:        193.0.0.0/21
origin:       AS3333
descr:        RIPE-NCC-AS Reseaux IP Europeens Network Coordination Centre (RIPE NCC), NL
lastupd-frst: 2026-05-12 11:46Z  193.0.0.56@rrc00
lastupd-last: 2026-10-21 07:53Z  198.32.160.242@rrc11
seen-at:      rrc00,rrc01,rrc03,rrc04,rrc05,rrc06,rrc07,rrc10,rrc11,rrc12,rrc13,rrc14,rrc15,rrc16,rrc18,rrc19,rrc20,rrc21,rrc22,rrc23,rrc24,rrc25,rrc26
num-rispeers: 352
source:       RISWHOIS
```

The exact type of lookup can be customized using query flags (-L, -l, -M, -m, -x, etc). Information about the flags and query syntax is available by querying `-H` to get the RISwhois help text, also included below. Note that some flags may not be supported by your whois client and will require special syntax to pass, e.g. `whois -h riswhois.ripe.net -- "-R 193.0.0.1"`.

Additionally, some `traceroute` command line tools have an option to do IP to ASN resolution using a WHOIS service, often using the `-A` flag. For instance, you may be able to use `traceroute -A riswhois.ripe.net www.ripe.net` and get inline ASN information for each hop.

## RISwhois dumps

A summary of the data in RISwhois is also available over HTTP(S) as a set of dump files:

   * [https://www.ris.ripe.net/dumps/riswhoisdump.IPv4.gz](https://www.ris.ripe.net/dumps/riswhoisdump.IPv4.gz)
   * [https://www.ris.ripe.net/dumps/riswhoisdump.IPv6.gz](https://www.ris.ripe.net/dumps/riswhoisdump.IPv6.gz)

These files are generated on request by the RISwhois server (in the past, they were updated daily), and correspond to the output of the `dump` and `dump6` commands.

The same information is also available in Parquet format, combining IPv4 and IPv6 data:

   * [https://www.ris.ripe.net/dumps/riswhoisdump.parquet](https://www.ris.ripe.net/dumps/riswhoisdump.parquet)

## RPKI Route Origin Validation Information
If requested using the `-R` flag, RISwhois will include RPKI Route Origin Validation information in its responses. In RPSL, this includes the `rpki-ov-state` and `rpki-vrp` attributes. For example:

```
$ whois -h riswhois.ripe.net -- "-R -x 2.76.116.0/24"
% This is RIPE NCC's Routing Information Service
% whois gateway to collected BGP Routing Tables, version v0.1.6-2
% IPv4 or IPv6 address to origin prefix match
%
% For more information visit https://ris.ripe.net/docs/ris-whois/
%
% Connected to backend ris-whois29.ripe.net

route:         2.76.116.0/24
origin:        AS29355
descr:         KCELL-AS Kcell JSC, KZ
lastupd-frst:  2026-08-18 02:29Z  195.66.226.113@rrc01
lastupd-last:  2026-10-21 08:58Z  187.16.222.107@rrc15
seen-at:       rrc00,rrc01,rrc03,rrc04,rrc05,rrc06,rrc07,rrc10,rrc11,rrc12,rrc13,rrc14,rrc15,rrc16,rrc18,rrc19,rrc20,rrc21,rrc22,rrc23,rrc24,rrc25,rrc26
rpki-ov-state: valid
rpki-vrp:      2.76.116.0/24 => AS29355
rpki-vrp:      2.76.116.0/23 => AS29355
rpki-vrp:      2.76.112.0/21 => AS29355
num-rispeers:  343
source:        RISWHOIS
```

The format and interpretation of the added attributes is described below. We use the definition of "match" and "cover" from RFC 6811 §2.

The `rpki-ov-state` attribute can be one of:

* `valid`: the route is valid, i.e. at least one VRP matches the route.
* `invalid`: the route is invalid, i.e. at least one VRP covers the route, but none match it.
* `invalid-origin`: the route is invalid, but the nearest-matching VRP differs only in its allowed origin ASN.
* `invalid-length`: the route is invalid, but the nearest-matching VRP differs only in its allowed maximum length.
* `unknown`: no VRPs cover the route.

We define the *nearest-matching VRP* by ordering all covering VRPs lexicographically based on

1. whether the VRP ASN matches the route origin ASN,
2. whether the route prefix length is less than or equal to the VRP maximum length,
3. the length of the VRP prefix,
4. the inverse distance of the route prefix length to the VRP maximum prefix length,

and picking the maximal VRP based on these criteria.

An `rpki-vrp` attribute is generated for all covering VRPs. Its syntax is as follows:

```
rpki-vrp: <IP-address>/<prefixlen>(-<vrp max-length>)? => <origin>
```

If the maximum length specified in the VRP is equal to its prefix length, it is omitted.

The `-R` flag can also be used in combination with the `dump` and `dump6` commands to include RPKI ROV information in the dump. This will extend the format with three additional fields, `<rpki-ov-state> <num-vrps> <nearest-matching-vrp>?`, e.g.

```
...
3333    193.0.0.0/21    351     valid   1       193.0.0.0/21 => AS3333
3333    193.0.0.128/29  1       invalid-length  1       193.0.0.0/21 => AS3333
3333    193.0.10.0/23   351     valid   1       193.0.10.0/23 => AS3333
3333    193.0.12.0/23   351     valid   1       193.0.12.0/23 => AS3333
3333    193.0.18.0/23   351     valid   1       193.0.18.0/23 => AS3333
...
```

## RISwhois help
The RISwhois help text is reproduced below for convenience.

```
% RISWHOIS Glossary
% -----------------
%
% RIPE whois style queries
% ------------------------
%
% -l <prefix>      Returns first levels less specific or exact match prefix,
% -L <prefix>      Returns all levels of less specific prefixes,
%                  including exact matches for <prefix>.
% -L <ip-number>   Returns all levels of less specific prefixes,
%                  including the longest matches for <ip-number>.
% -M <prefix>      Returns all levels of more specific prefixes,
%                  excluding the exact matches for <prefix>.
% -M <ip-number>   Returns only the longest matches for <ip-number>.
% -x <prefix>      Requests that only exact matches on a prefix be
%                  performed. If no exact match is found no objects are
%                  returned.
% -i <as-number>   Inverse query. List all routes, IPv4 and IPv6, which have
%                  the specified AS number as origin
% -F               Produce output in short format, one line per entry
% -H               Output this help message
% -K               Requests that only the primary keys of an object to be
%                  returned, i.e. route, origin AS, and, in case the
%                  real origin is a set, the as-set.
% -k (optional normal query) Requests a persistent connection. After
%                  returning the result the connection will not be closed by
%                  the server and a client may issue multiple queries on the
%                  same connection. Use RIPE whois3 client or netcat
%                  to be able to send queries in batch mode.
%                  Except the first -k query, -k without an argument closes
%                  the persistent connection.
% -1               Requests that in case multiple origin ASes are found for
%                  a matching prefix, only a single origin (the one seen by
%                  majority of RIS peers) is returned.
% -q sources       Returns information about the current set of RIB dumps
%                  that are the source of RISwhois data. For each dump
%                  the originating RIS Route Collector and the timestamp
%                  of the dump are listed.
% -R               Include ROV origin validation status.
%
% Special commands:
% -----------------
%
% dump             output full list of IPv4 prefixes seen in combined RIS tables
% dump6            output full list of IPv6 prefixes seen in combined RIS tables
% moas             output list of IPv4 prefixes seen in RIS with Multiple Origin-AS
% moas6            output list of IPv6 prefixes seen in RIS with Multiple Origin-AS
% peers            output active list of RIS peers and their IPv4/IPv6 prefix counts
% sources          output statistics on RIS route collector data used by RISwhois
%
%
% Compatibility options:
% ----------------------
%
% Following options have no effect in RISwhois but are here only for
% compatibility with Internet Routing IRR server was used before.
%
% -T (comma separated list of object types, no white space is allowed)
%                  Restricts the types of objects to lookup in the query.
% -a               Specifies that the server should perform lookups in all
%                  available sources.  See also -q sources query.
% -s (comma separated list of sources, no white space is allowed) Specifies
%                  which sources and in which order are to be looked up when
%                  performing a query.
% -V<client-tag>   Sends information about the client to the server.
%
%
% RADB/IRRd style queries
% -----------------------
%
% RISwhois supports following subset of http://www.irrd.net/irrd-user.pdf, appendix B:
%
% !g       Get routes with specified origin. e.g., !gas1234. This command
%          only lists IPv4 prefixes for route objects. Please see the '!6'
%          command for IPv6 prefix queries from route6 objects. Also, the '-i origin'
%          RIPE inverse query may be used to obtain both IPv4 and IPv6 prefixes.
%
% !6       Get IPv6 routes with specified origin. e.g., !6as1234. This is the
%          IPv6 equivalent of the '!g' command.
%
% !n       Identify the query tool for statistics/logging purposes. e.g., !nRoe
%
% !r       Perform route searches. The default finds exact prefix/len match.
%          The following options may be appended to the search prefix
%          after a ','. e.g., !r141.211.128/24,l
%          o - return origin AS of exact match(es)
%          l - search for one-level less specific prefix
%          L - search for all less specific prefixes
%          M - search for all more specific prefixes
%
% !q       Quit the IRRd session
```
