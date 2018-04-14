# Notes

(Random collection of stuff.)

There are 4073 total MdBs in the file.

```
$ jq -c . stammdaten.json | wc -l
4073
```

## Names

243 of them have more than one name.

```
$ jq -c '.NAMEN.NAME | arrays' stammdaten.json | wc -l
243
```

**WARNING:** `.NAMEN.NAME` is a single object if an MdB has only one name, but an array of objects if they have more than one.
(Presumably, this oddity is an artifact of the XML-to-JSON conversion and not the Bundestag’s fault.)

```
  "NAMEN": {
    "NAME": {
      "NACHNAME": "Abelein",
      "VORNAME": "Manfred",
      "ORTSZUSATZ": null,
      "ADEL": null,
      "PRAEFIX": null,
      "ANREDE_TITEL": "Dr.",
      "AKAD_TITEL": "Prof. Dr.",
      "HISTORIE_VON": "19.10.1965",
      "HISTORIE_BIS": null
    }
  }

  "NAMEN": {
    "NAME": [
      {
        "NACHNAME": "Albowitz",
        "VORNAME": "Ina",
        "ORTSZUSATZ": null,
        "ADEL": null,
        "PRAEFIX": null,
        "ANREDE_TITEL": null,
        "AKAD_TITEL": null,
        "HISTORIE_VON": "20.12.1990",
        "HISTORIE_BIS": "25.09.2012"
      },
      {
        "NACHNAME": "Albowitz-Freytag",
        "VORNAME": "Ina",
        "ORTSZUSATZ": null,
        "ADEL": null,
        "PRAEFIX": null,
        "ANREDE_TITEL": null,
        "AKAD_TITEL": null,
        "HISTORIE_VON": "26.09.2012",
        "HISTORIE_BIS": null
      }
    ]
  }
```

## Reference

During reconciliation, I started adding some data from the file manually.
For this, I created the item [Q51850225](http://www.wikidata.org/entity/Q51850225)
and used it in references (“stated in”; “retrieved: 2018-04-13” (the date when I downloaded the file)).
That’s not to say that this is the final form those references should take, of course…
