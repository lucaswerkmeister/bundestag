# Bundestag → Wikidata data import

The Bundestag (the German parliament) published basic information („Stammdaten“) of all its members,
and I’m trying to import it into Wikidata.

## Already done

I converted the data into a more useful format (JSON instead of XML)
and started to extract useful bits (names, biographical information)
into separate files.

The next step was reconciling the MdBs with Wikidata items.
I imported the names and dates/places of birth/death into OpenRefine
and had it automatically match them to Wikidata items;
as it turned out, the most useful results were obtained when matching just on the names and ignoring the other data,
since otherwise the extra data would lower OpenRefine’s confidence in the match below the auto-match threshold.
3197 entries could be matched automatically,
and the remaining 876 were matched manually to Wikidata items by @akaes and me.
The result was the file [IDs](IDs) containing a mapping from the ID in the Bundestag’s database to the Wikidata item ID.

(More detailed descriptions of these steps are available in the commit messages –
see the [log](../../commits).)

## Current status

We have a tab-separated file from Bundestag ID to Wikidata item ID, plus some supplementary information.

## To be done

Decide what to export and how to do it…
I haven’t planned far ahead here to be honest,
I’m just sure that the above steps will be necessary no matter how we proceed afterwards.
