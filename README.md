# PRT Tournament Board - Configuration
Work in Progress...

Althought the configuration of the board is handled by messing directly with the Code, you will only need to change a few lines and is nothing that special.

### Teams
```Javascript
var TEAMS = [
    {name: "Super Team Bluefor", initials: "STB", logo: 'thumbnail.png', color: "#01ff41", points: '12' },
    {name: "Super Team Opfor", initials: "STO",  logo: 'thumbnail.png', color: "rgb(100, 24, 200)", points: '12' }
];
```
Here is were you set information, regarding both teams:
* **name** - The complete name of the Team
* **initials** - The initials of the Team's name
* **logo** - The path to the image
* **color** - Main color of the Team; It can be either hexadecimal or RGB
* **points** - The points of the team

### Maps

```Javascript
var VADSO_AAS = {
  key: "vadso_city_aas_std",
  name: "VADSO CITY",
  layer: "AAS STD",
  team : [ { name: '', faction: '', flag: '' }, { name: '', faction: '' } ],
  viewport: { lat: 70.04, lng: 29.43, zoom: 4 },
  tickets: [ 110, 110],
  background: 'maps/vadso_city/background.jpg',
  played: false
}
```

These are only meant to keep things simple and not overcrowed the configuration that matters **OPERATIONS**.

The first line just creates a variable, ```var```, to use later with that name and after it you have the following structure:
* **key** - can be anything as long its a unique string w/o spaces
* **name** - Name of the map
* **layer** - Name of the Layer, including size
* **team** - Teams and factions that will  play on this map
  * **flag** - OPTIONAL - path to the faction's flag, if omited the path will be ```img/flags/<team.faction>.png```
* **viewport** - Positioning and zoom level of the local of the map
* **tickets** - Tickets for the teams (Order matters)
* **background** - Path to the image that will apear in the details when expanded
* **played** - Tells if map was played or is yet to be played

### Maps
```Javascript
var OPERATIONS = [
  { name: "OPERATION SUDDEN STRIKE",    icon: { button: 'icons/Sword_B.svg',      thumbnail:  'icons/Sword.svg'},      maps: [ NUJIMAA_AAS, KHAMY_AAS   ] },
  { name: "OPERATION NIMBLE THRUST",    icon: { button: 'icons/Strike_B.svg',     thumbnail:  'icons/Strike.svg'},     maps: [ WANDA_AAS, DRAGON_AAS    ] }
]
```
* **name** -  Name of the Operation
* **icon** - Path to the images that ill be used in the upper buttons and the in next to the operation's Name
* **maps** - Collection of mapss that are in play in this Operation (These are the ones you defined earlier)


----
All image's paths are in relation to the ```img``` folger

