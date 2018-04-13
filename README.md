# Bundestag → Wikidata data import

The Bundestag (the German parliament) published basic information („Stammdaten“) of all its members,
and I’m trying to import it into Wikidata.

## Already done

I converted the data into a more useful format (JSON instead of XML)
and started to extract useful bits (names, biographical information)
into separate files.
Then I started the process of reconciling them with Wikidata in OpenRefine.

(More detailed descriptions of these steps are available in the commit messages –
see the [log](../../commits).)

## Current status

There’s an OpenRefine project in the repository with all the members of the Bundestag.
3197 were matched automatically to a Wikidata item;
876 need to be matched manually –
either they have more than one possible match (select the right one),
or no match was found (try to locate one manually or create a new item).

The desired outcome of this step should be a tab-separate file of Bundestag ID and Wikidata item ID.

## To be done

Decide what to export and how to do it…
I haven’t planned far ahead here to be honest,
I’m just sure that the above steps will be necessary no matter how we proceed afterwards.
