# PRT Tournament Board - Configuration
Work in Progress...

Althought the configuration of the board is handled by messing directly with the Code, you will only need to change a few lines and is nothing that special.

### Teams
```Javascript
var TEAMS ={
  a: { initials:"MRF", logo: { header:'icons/team_icons_MRF.png' , details:'icons/team_icons_MRF.png' }, color:"#9d831d", points: '0' },
  b: { initials:"PDI", logo: { header:'icons/team_icons_PDI.png' , details:'icons/team_icons_PDI.png' }, color:"#0b8f9e", points: '0' }
};
```
Here is were you set information, regarding both teams:
* **initials** - The initials of the Team's name
* **logo**
  * **header** - Path to the image that will be displayed in the Header
  * **details** - Path to the image that will be displayed in every Op-details
* **color** - Main color of the Team; It can be either hexadecimal or RGB
* **points** - The points of the team

The team represented in the ```a``` field will be displayed on the left side and ```b``` team will be on the right.


### Maps

```Javascript
var VADSO_AAS = {
  key: "vadso_city_aas_std",
  name: "VADSO CITY",
  layer: "AAS STD",
  team: { a: "RU" , b:  "GB" },
  flags: { b: 'flags/us.png' },
  viewport: { lat: 70.04, lng: 29.43, zoom: 4 },
  tickets: { a: 110, b: 110 },
  background: 'maps/vadso_city/background.jpg',
  played: false
}
```

These are only meant to keep things simple and not overcrowed the configuration that matters **OPERATIONS**.

The first line just creates a variable, ```var```, to use later with that name and after it you have the following structure:
* **key** - can be anything as long its a unique string w/o spaces
* **name** - Name of the map
* **layer** - Name of the Layer, including size
* **team** - factions in play on this map
* **flags** - OPTIONAL - path to override the faction's flag, if omited the path will be ```img/flags/<team.faction>```
* **viewport** - Positioning and zoom level of the local of the map
* **tickets** - Tickets for the teams
* **background** - Path to the image that will apear in the details when expanded
* **played** - if ```true``` a 'victorous' message will appear to the team w/ more tickets, if ```false``` the tickets diference will be ignored (DRAWs are not implemented)

### Operations
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

