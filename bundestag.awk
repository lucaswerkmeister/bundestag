# Usage: awk -ifunctions [OPTIONS...] PROGRAM [FILE...]

function de2iso(date) {
  if (date == "") {
    return date
  }
  split(date, parts, ".")
  return parts[3] "-" parts[2] "-" parts[1]
}

function iso2qs(date) {
  if (date == "") {
    return date
  }
  return "+" date "T00:00:00Z/11"
}

function de2qs(date) {
  return iso2qs(de2iso(date))
}

BEGIN {
  dumpItem = "Q51850225"
  dumpRetrievedDate = "2018-04-13"
}
