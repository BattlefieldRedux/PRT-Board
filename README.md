# PRT Tournament Board - Configuration
Work in Progress...

Althought the configuration of the board is handled by messing directly with the Code, you will only need to change a few lines and is nothing that special.

### Teams
```Javascript
var TEAMS = [
    {name: "Super Team Bluefor", initials: "STB", color: "#01ff41" },
    {name: "Super Team Opfor", initials: "STO", color: "rgb(100, 24, 200)" }
];
```
Here is were you set information, regarding both teams:
* **name** - The complete name of the Team
* **initials** - The initials of the Team's name
* **color** - Main color of the Team; It can be either hexadecimal or RGB

### Maps

```Javascript
var VADSO_AAS = {
    key: "vadso_city_aas_std",
    name: "Vadso City",
    layer: "AAS STD",
    team : [
        { name: "Team A", faction: "RU" },
        { name: "Team A", faction: "GB" }
    ],
    viewport: { lat: 70.04, lng: 29.43, zoom: 4 },
    tickets: [ 110, 110]
    played: false;
}
```

These are only meant to keep things simple and not overcrowed the configuration that matters **OPERATIONS**.

The first line just creates a variable, ```var```, to use later with that name and after it you have the following structure:
* **key** - can be anything as long its a unique string w/o spaces
* **name** - Name of the map
* **layer** - Name of the Layer, including size
* **team** - Teams and factions that will  play on this map
* **viewport** - Positioning and zoom level of the local of the map
* **tickets** - Tickets for the teams (Order matters)
* **played** - Tells if map was played or is yet to be played

### Maps
```
var OPERATIONS = [
  { name: "Operation 1", maps: [ VADSO_AAS, BEIRUT_AAS    ] },
  { name: "Operation 2", maps: [ KOZELSK_AAS, Sbeneh_AAS  ] },
  { name: "Operation 3", maps: [ MUTTRAH_AAS, HADES_AAS   ] }
]
```
* **name** -  Name of the Operation
* **maps** - Collection of mapss that are in play in this Operation (These are the ones you defined earlier)


