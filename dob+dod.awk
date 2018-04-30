#!/usr/bin/gawk -f

@include "bundestag"

BEGIN {
  FS="\t"
  OFS=","
  print "qid",
    "P569",
    "S248",
    "s813",
    "P570",
    "S248",
    "s813"
}

{
  qid=$2
  dateOfBirth=$3
  dateOfDeath=$5
  print qid,
    de2qs(dateOfBirth),
    dumpItem,
    iso2qs(dumpRetrievedDate),
    de2qs(dateOfDeath),
    dumpItem,
    iso2qs(dumpRetrievedDate)
}
