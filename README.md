# PRT Tournament Board - Configuration

Althought the configuration of the board is handled by messing directly with the Code, you will only need to change a few lines and is nothing that special.
### Next Battle Message
```Javascript
var NEXT_BATTLE_MESSAGE = "19:00 30/11";
```
Located in `pr-tournament-boardmap.js`, this is what defines the message that will appear in the maps with status defined to `Status.Next`.

### Teams
```Javascript
var TEAMS ={
  a: { initials:"MRF", logo: { header:'icons/team_icons_MRF.png' , details:'icons/team_icons_MRF.png' }, color:"#9d831d", points: '0' },
  b: { initials:"PDI", logo: { header:'icons/team_icons_PDI.png' , details:'icons/team_icons_PDI.png' }, color:"#0b8f9e", points: '0' }
};
```
Located in `pr-tournament-boardmap.js`, this is where you set information regarding both teams:
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
  name: "VADSO CITY",
  layer: "AAS STD",
  team: { a: "RU" , b:  "GB" },
  flags: { b: 'flags/us.png' },
  viewport: { lat: 70.04, lng: 29.43, zoom: 4 },
  tickets: { a: 110, b: 110 },
  background: 'maps/vadso_city/background.jpg',
  status: STATUS.NEXT
}
```
Located in `pr-tournament-boardmap-maps.js`, these are only meant to keep things simple and not overcrowed the configuration that matters **OPERATIONS**.

The first line just creates a variable, `var`, to use later with that name and after it you have the following structure:
* **name** - Name of the map
* **layer** - Name of the Layer, including size
* **team** - factions in play on this map
* **flags** - OPTIONAL - path to override the faction's flag, if omited the path will be `img/flags/<team.faction>.png`
* **viewport** - Positioning and zoom level of the local of the map
* **tickets** - Tickets for the teams
* **background** - Path to the image that will apear in the details when expanded
* **played** - Status of this map

#### Status
```Javascript
 var STATUS = {
	 NOT_PLAYED : 0,
	 PLAYED : 1,
	 NEXT : 2,
 }
```
Located in `pr-tournament-boardmap-maps.js`, this is not a configuration value but a helper, instead of memorizing the diferent numbers (`0`,`1`,`2` ) you can simply type `STATUS.NOT_PLAYED`, `STATUS.PLAYED` or `STATUS.NEXT`.
* **STATUS.NOT_PLAYED** - Default status
* **STATUS.PLAYED** - `map.tickets` will be used to see which team won the battle, message will the say that team was victorious with the team's colors
* **STATUS.NEXT** - Any map with this status will have its details-menu automaticaly open and it will display the message defined in `NEXT_BATTLE_MESSAGE`.

### Operations
```Javascript
var OPERATIONS = [
  { name: "OPERATION SUDDEN STRIKE", icon: { button: 'icons/Sword_B.svg', thumbnail:  'icons/Sword.svg', active: 'icons/Sword_active.svg'}, maps: [ NUJIMAA_AAS, KHAMY_AAS ] },
  { name: "OPERATION NIMBLE THRUST", icon: { button: 'icons/Strike_B.svg', thumbnail:  'icons/Strike.svg', active: 'icons/Strike_active.svg'}, maps: [ WANDA_AAS, DRAGON_AAS ], active: true }
]
```
Located in `pr-tournament-boardmap.js`:
* **name** -  Name of the Operation
* **icon**
  * **button** - Image used in the header when ```active=false``` or is not set
  * **thumbnail** - Image displayed next to the Operation title
  * **active** - Image used in the header when ```active=true```
* **maps** - Collection of mapss that are in play in this Operation (These are the ones you defined earlier)
* **active** - OPTIONAL - Defines the operation has the one active in the tournament


----
All image's paths are in relation to the ```img``` folger
