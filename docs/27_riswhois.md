---
permalink: /ris-whois
---

# RISwhois

## dataservice

RISWhois is a dataservice that allows to do a whois query for which ASN originates what prefix. There are 2 use cases for this:
   * using the 'whois' command line tool. This allows querying RIS via a whois interface. The service lives at *riswhois.ripe.net*. The manual for this is available via

```
whois -h riswhois.ripe.net -- --help
```
(the complete output from that command is available at the end of this page in the RISwhois glossary section)

The output of the RISwhois dataservice is in RPSL format. Here is an example of a lookup via whois and the output:

```
$ whois -h riswhois.ripe.net 193.0.0.1
% This is RIPE NCC's Routing Information Service
% whois gateway to collected BGP Routing Tables, version2.0
% IPv4 or IPv6 address to origin prefix match
%
% For more information visit http://www.ripe.net/ris/riswhois.html
%
% Connected to backend ris-whois15.ripe.net

route:        193.0.0.0/21
origin:       AS3333
descr:        RIPE-NCC-AS Reseaux IP Europeens Network Coordination Centre (RIPE NCC), NL
lastupd-frst: 2021-12-08 16:11Z  80.81.192.175@rrc12
lastupd-last: 2022-06-09 05:48Z  86.104.125.170@rrc22
seen-at:      rrc00,rrc01,rrc03,rrc04,rrc05,rrc06,rrc07,rrc10,rrc11,rrc12,rrc14,rrc15,rrc16,rrc18,rrc19,rrc20,rrc21,rrc22,rrc23,rrc24,rrc25,rrc26
num-rispeers: 393
source:       RISWHOIS
```


   * many 'traceroute' command line tools have an option to do IP to ASN resolution, that query whois-type services. For instance:
```
traceroute -A riswhois.ripe.net www.ripe.net
```

## RISWhois dumps

The prefix to ASN data for the RISwhois service also gets stored as a file, which we call RISWhois dump. This file is updated daily and is available here:
   * [https://www.ris.ripe.net/dumps/riswhoisdump.IPv4.gz](https://www.ris.ripe.net/dumps/riswhoisdump.IPv4.gz)
   * [https://www.ris.ripe.net/dumps/riswhoisdump.IPv6.gz](https://www.ris.ripe.net/dumps/riswhoisdump.IPv6.gz)


## RISwhois glossary
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
%		   real origin is a set, the as-set. 
% -k (optional normal query) Requests a persistent connection. After 
%                  returning the result the connection will not be closed by 
%                  the server and a client may issue multiple queries on the 
%                  same connection. Use RIPE whois3 client or netcat 
%		   to be able to send queries in batch mode.  
%                  Except the first -k query, -k without an argument closes 
%                  the persistent connection.  
% -1               Requests that in case multiple origin ASes are found for 
%		   a matching prefix, only a single origin (the one seen by 
%		   majority of RIS peers) is returned. 
% -q sources       Returns information about the current set of RIB dumps 
%                  that are the source of RISwhois data. For each dump 
%                  the originating RIS Route Collector and the timestamp 
%		   of the dump are listed. 
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
% compatibility with Internet Routing Registry whois servers, allowing 
% seamless plug in of riswhois where an IRR server was used before. 
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
%          only lists IPv4 prefixes for route objects. Please see the ’!6’ 
%          command for IPv6 prefix queries from route6 objects. Also, the ’-i origin’ 
%          RIPE inverse query may be used to obtain both IPv4 and IPv6 prefixes. 
% 
% !6       Get IPv6 routes with specified origin. e.g., !6as1234. This is the 
%          IPv6 equivalent of the ’!g’ command. 
% 
% !n       Identify the query tool for statistics/logging purposes. e.g., !nRoe 
% 
% !r       Perform route searches. The default finds exact prefix/len match. 
%          The following options may be appended to the search prefix 
%          after a ’,’. e.g., !r141.211.128/24,l 
%          o - return origin AS of exact match(es) 
%          l - search for one-level less specific prefix 
%          L - search for all less specific prefixes 
%          M - search for all more specific prefixes 
% 
% !q       Quit the IRRd session
```
