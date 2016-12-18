/**
 * Copyright 2015 uturista.pt All Rights Reserved.
 *
 * Licensed under the Attribution-NonCommercial 4.0 International (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://creativecommons.org/licenses/by-nc/4.0/legalcode
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
   


 /* **********************************************
 *               CONFIGURATION VALUES 
 * ********************************************** */
 
 //A: LEFT SIDE
 //B: RIGHT SIDE
var TEAMS ={
  b: { initials:"EMC", logo: { header:'icons/team_icons_EMC.png' , details:'icons/team_icons_EMC.png' },   color:"#008000", points: '1' },
  a: { initials:"APN", logo: { header:'icons/team_icons_APN.png' , details:'icons/team_icons_APN.png' },   color:"#760000", points: '1' }
};
 
var OPERATIONS = [
  { name: "OPERATION CACTUS",           icon: { button: 'icons/Cactus_B.png',    thumbnail:  'icons/Cactus.png',    active:  'icons/Cactus_B_select.png' },   maps: [ KHAMY_AAS, KASHAN_AAS, BIJAR_AAS, MUTTRAH_AAS    ] },
  { name: "OPERATION RISING SUN",    	icon: { button: 'icons/RisingSun_B.png', thumbnail:  'icons/RisingSun.png', active:  'icons/RisingSun_B_select.png'}, maps: [ SHIJIA_AAS, WANDA_AAS, XIANG_AAS, DRANG_AAS  ] ,active: true},
  { name: "OPERATION STRONGHOLD",       icon: { button: 'icons/Fortress_B.png',   thumbnail:  'icons/Fortress.png',   active:  'icons/Fortress_B_select.png' },  maps: [ DRAGON_AAS, IRON_AAS, GROZNY_AAS, FOOLS_AAS  ] },
  { name: "OPERATION FROSTBITE",  		icon: { button: 'icons/Frostbite_B.png',  thumbnail:  'icons/Frostbite.png',  active:  'icons/Frostbite_B_select.png'},  maps: [ SAAREMA_AAS, NUJIMAA_AAS, ULYANOVSK_AAS, PAVLOVSK_AAS   ] },
  { name: "OPERATION GUARDIAN",         icon: { button: 'icons/Shield_B.png',     thumbnail:  'icons/Shield.png',     active:  'icons/Shield_B_select.png'},     maps: [ SAAREMA_AAS, VADSO_AAS, BEIRUT_AAS, DOVRE_WINTER_AAS   ] },
  { name: "OPERATION BROADSWORD",       icon: { button: 'icons/Sword_B.png',      thumbnail:  'icons/Sword.png',      active:  'icons/Sword_B_select.png'},      maps: [ YAMALIA_AAS, HADES_AAS, BLACKGOLD_AAS, SILENT_AAS   ] },
];

var NEXT_BATTLE_MESSAGE = "14.01.2017 1900PRT";



/* **********************************************
 *        DO NOT EDIT BEYHOND THIS POINT
 * ********************************************** */
 
 //Public Enums
var TOGGLE = { toggle: 0, close: 1, open: 2 };

//Static Vars
var MAPS = [];
var PATH;
//onLoad
$(window).ready(init);
 
 
/**
 * Wrapper for everything required for the initialization
 */
function init(){
  PATH = $('#AbsPath').attr('data-path');
  // HACK: Remove padding from vbulletin wrapper
  $("#Board-Outter").parent().css("padding", 0);
  
  //Create the maximum required stripes
  var stripes = 0; 
  for(index in OPERATIONS){
    stripes = Math.max(stripes, OPERATIONS[index].maps.length);
  }
  buildOpStripes(stripes, $('#Op-Strip-Container'));
  
  //Initialize every stripe
  $('.world-map').each(function(index){ 
    MAPS.push(initMap($(this))); 
  });
  
  //Build header
  buildOpHeader();
  $('.header-team-name.team-a').text(TEAMS.a.initials);
  $('.header-team-name.team-b').text(TEAMS.b.initials);
  $('.header-team-logo.team-a').css('background-image', 'url('+PATH+'img/'+TEAMS.a.logo.header+')');
  $('.header-team-logo.team-b').css('background-image', 'url('+PATH+'img/'+TEAMS.b.logo.header+')');
  setPoints(TEAMS.a.points, TEAMS.b.points);
  
  //Obtain direct link
	var url  = new Url; // curent document URL will be used
	var opIndex = parseInt(url.query.operation);
	
	//If no direct link, go to the active operation
	if(isNaN(opIndex)){
		opIndex = 0;
		for(op in OPERATIONS){
			if(OPERATIONS[op].active){
				opIndex = parseInt(op);
				break;
			}
		}
	}
  displayOperation(opIndex);
	opIndex++;//Required! nth-child is based 1 
 
   
  //Add click listeners to header's buttons
  $('#Op-Header').on('click', '.op-button', onOperationSelected);
  
  $('#Op-Strip-Container').on('click', '.op-stripe', onClickDetails);
  
  $('.op-selector.right').click(function(){zappingOperation(1);});
  $('.op-selector.left').click(function(){zappingOperation(-1);});
  

	
	window.onpopstate = function(event) {
		var url  = new Url; // curent document URL will be used
		var opIndex = parseInt(url.query.operation);
		if(!isNaN(opIndex)) {
			displayOperation(opIndex, false);
			opIndex++;//Required! nth-child is based 1 
		}
	
	};
}


/**
  * Handles the construction and initialization of every stripe
  * @param {int} stripes - Number of stripes to build
  * @param {Object|Jquery} container - Container that will hold the stripes
  */
function buildOpStripes(stripes, container){
  
  for(i = 0; i < stripes; i++){
    
    var stripe = '';
    
    stripe += '<div class="op-stripe">';
    stripe += '<div class="world-map"></div>';
    stripe += '<div class="filter"></div>';
    /*stripe += '<div class="op-map-thumnail-wrapper">';
    stripe += '<div class="op-map-thumnail-base"></div>';
    stripe += '<img class="op-map-thumnail-image" />';
    stripe += '<div class="op-map-thumnail-text"></div>';
    stripe += '</div>';//closes .op-map-thumnail-wrapper*/
    
   
    var pos = 'left';
    /*if( ( i % 2 ) == 0)
      pos = 'right';*/
    
    stripe += '<div class="op-details ' + pos + '">';
    
    stripe += '<div class="op-map-background-wrapper">';
    stripe += '<div class="op-map-background"></div>';
    stripe += '<div class="op-map-effect"></div>';
    stripe += '</div>';//closes .op-map-background-wrapper
    
    stripe += '<div class="op-map-name"></div>';
    stripe += '<div class="op-map-layer"></div>';
    
    stripe += '<div class="op-teams-container">';
    
    stripe += '<div class="op-team team-a">';
    stripe += '<div class="op-team-logo" style="background-image: url('+PATH+'img/'+ TEAMS.a.logo.details +');"></div>';
    stripe += '<div class="op-team-faction-container">';
    stripe += '<div class="op-team-faction-flag"></div>'
    stripe += '<div class="op-team-faction" ></div>'
    stripe += '</div>';//Closes .op-team-faction-container
    stripe += '<div class="op-team-tickets"></div>';
    stripe += '</div>';//Closes .op-team.team-a
    
    stripe += '<div class="op-teams-versus">vs</div>';
    
    stripe += '<div class="op-team team-b">';
    stripe += '<div class="op-team-logo" style="background-image: url('+PATH+'img/'+ TEAMS.b.logo.details +');"></div>';
    stripe += '<div class="op-team-faction-container">';
    stripe += '<div class="op-team-faction-flag"></div>'
    stripe += '<div class="op-team-faction"></div>';
    stripe += '</div>';//Closes .op-team-faction-container
    stripe += '<div class="op-team-tickets"></div>';
    stripe += '</div>';//Closes .op-team.team-b
    
    stripe += '</div>';//Closes '.op-teams-container'
    stripe += '</div>';//Closes '.op-details'
    stripe += '</div>';//Closes '.op-stripe
    
    container.append(stripe);
  }
}

/**
  * Handles the construction and initialization of the header (Operation buttons and selectors)
  */
function buildOpHeader(){
  var container = $('#Op-Header-Icons');
  
  for(index in OPERATIONS){
    var button = '';
		var icon;
		var bClass = [];
		var style = '';
		
		if( OPERATIONS[index].active ){
			icon = OPERATIONS[index].icon.active;
			bClass.push("active");
		} else{
			icon = OPERATIONS[index].icon.button;
		} 
		
		for(var mapIndex in OPERATIONS[index].maps){
				var map = OPERATIONS[index].maps[mapIndex];
				if(map.status == STATUS.PLAYED){
					var base1Index = parseInt(mapIndex)+1;
					bClass.push("show-bars");
					
					style += map.playedOrder == 1 ? "border-top-color:" : "border-bottom-color:";
					style += map.tickets.a > map.tickets.b ? TEAMS.a.color : TEAMS.b.color;
					style += ";";
				}
		}
		
		button += '<div class="op-button '+bClass.join(" ")+'" data-operation="' + index + '"  style="'+style+'">'
    button += '<img src="'+PATH+'img/' + icon + '"/>';
    button += '</div>';
    container.append(button);
  }
}

/**
  * Handles the initialization of a map
  * @param {Object|Jquery} mapContainer - Container that will hold the map
  */
function initMap(mapContainer){
  
   return new jvm.Map({
    container: mapContainer,
    map: 'world_mill',
    backgroundColor: '#404040',
    zoomOnScroll: false,
    zoomButtons: false,
    panOnDrag:  false,
    regionStyle: {
      initial: {
        fill: '#202020',
        "fill-opacity": 1,
        stroke: '#202020',
        "stroke-width":'1px',
        "stroke-opacity": 0
      },
      hover: {
        "fill-opacity": 1,
        cursor: 'initial'
      },
      selected: {
        fill: '#202020',
        "fill-opacity": 1
      },
      selectedHover: {
      }
    }
  });
}

/**
  * Updates Header and Stripes with the information of the given operation
  * @param {int} opIndex - Operation index
  */
function displayOperation(opIndex, saveHistory){
	if(typeof saveHistory == 'undefined')
		saveHistory = true;
	
	var operation = OPERATIONS[opIndex];

	
	if(saveHistory){
		var url = new Url;
		url.query.operation = opIndex;
		history.pushState(null, null, url);
	}
		
	opIndex++; //Required! nth-child is based 1
	$('.op-button.selected').removeClass('selected');
	$('.op-button:nth-child('+opIndex+')').addClass('selected');
	
  //Hide extended operation details if any
  $('.op-details.extended').each(function(){  toggleDetails($(this), TOGGLE.close); })
  
  
  var stripes = $('.op-stripe');
  $('#Op-Name').text(operation.name);
  $('#Op-Logo').css('background-image', 'url('+PATH+'img/'+operation.icon.thumbnail+')')
  
  stripes.each(function(index){
    
    if(index >= operation.maps.length){
      $(this).addClass('hide');
      return;
    }else{
      $(this).removeClass('hide');
      populateStripe( $(this), operation.maps[index]);
      createMarkerAndFocus( MAPS[index], operation.maps[index] );
    }
  });
  

}

/**
  * Given a stripe it updates its information with the given Operation object
  * @param {Object|Jquery} stripe - Stripe that is the container to all the information
  * @param {Object|Map} operation - Map information object
  */
function populateStripe(stripe, map) {
    //Reset
    stripe.find('.op-teams-container').removeClass("played")
    stripe.find('.op-teams-versus').text('vs');
    stripe.find('.op-details').removeAttr('data-alt-description');

    //New Data
    var tickets = map.tickets;
		
		//Title
    stripe.find('.op-map-name').html(map.name);
    stripe.find('.op-map-layer').html(map.layer);

    for (t = 0; t < 2; t++) {
        var team = t == 0 ? 'a' : 'b';

        stripe.find('.team-' + team + ' .op-team-faction').text(map.team[team]);
        stripe.find('.team-' + team + ' .op-team-tickets').text(tickets[team] + ' TICKETS');

        var flag = 'flags/' + map.team[team] + '.png';

        if (typeof map.flags != 'undefined' && typeof map.flags[team] != 'undefined')
            flag = map.flags[team];

        stripe.find('.team-' + team + ' .op-team-faction-flag').css('background-image', 'url(' + PATH + 'img/' + flag + ')');
    }

    if (map.status == STATUS.PLAYED) {
        var winner = tickets.a > tickets.b ? 'a' : 'b';
        var message = TEAMS[winner].initials + ' VICTORY';
        stripe.find('.op-teams-versus').text(message).css("border-color", TEAMS[winner].color);
        stripe.find('.op-teams-container').addClass("played");

    } else if (map.status == STATUS.NEXT) {
        stripe.find('.op-teams-versus').text(NEXT_BATTLE_MESSAGE);
        var details = stripe.find('.op-details');
        toggleDetails(details, TOGGLE.open);
        details.attr('data-alt-description', 'vs');
    }

    stripe.find('.op-map-background').css('background-image', 'url(' + PATH + 'img/' + map.background + ')');
}


/**
  * Creates a marker and focus on it
  * @param {Object|JVM} map - Map to create marker and focus
  * @param {Object|Map} data - Map information with the latitude, longitude and zoom
  */
function createMarkerAndFocus(map, data){
  map.removeAllMarkers();
  
  map.addMarker("unique", {latLng: [ data.viewport.lat , data.viewport.lng] });

  map.setFocus({
    animate: true,
    lat: data.viewport.lat, 
    lng: data.viewport.lng,
    scale: data.viewport.zoom
  });
}

/**
  * Switch Operations in relation to the current one
  * @param {int} step - Position of new operation in relation to current one
  */
function zappingOperation(step){  
  var currentoperationSelected = $('.op-button.selected');
  var opIndex = parseInt(currentoperationSelected.attr('data-operation'));
  
  var nOperations = $('.op-button').length;
  var nextOper = mod(opIndex + step, nOperations) ;
  
  displayOperation(nextOper);

}


/**
  * Event handler -  User selects an operation
  */
function onOperationSelected(){
  var operation = parseInt($(this).attr('data-operation'));
  displayOperation(operation);
}

/**
  * Event handler -  User clicks on details of a stripe (Operation's map)
  */
function onClickDetails(){
 
 // $('.op-details.extended').each(function(){ toggleDetails( $(this), TOGGLE.close ); });
  
    toggleDetails($(this).find(".op-details"), TOGGLE.toggle);
}


/**
  * Opens, Closes or Toggles a given Stripe
  * @param {Object|Jquery} container - Map detail's object to close/open
  * @param {int} toggle - New state: open/close/toggle
  */
function toggleDetails(container, toggle){
  
  if( (toggle == TOGGLE.open) && container.hasClass('extended'))
    return;
  
  if( (toggle == TOGGLE.close) && !container.hasClass('extended'))
    return;

	var altDescription = container.attr("data-alt-description");
	var dscripContainer = container.find(".op-teams-versus");
	
	if(typeof altDescription !== 'undefined' ){
		container.attr("data-alt-description", dscripContainer.text());
		dscripContainer.text(altDescription);
	}
	
  if( (toggle == TOGGLE.close) || ((toggle == TOGGLE.toggle) && container.hasClass('extended') ) ){
    container.removeClass('extended');
  }else{
    container.addClass('extended');
  } 
}

/**
  * Sets the points in the Header
  * @param {int} teamA - Points of team A
  * @param {int} teamB - Points of team B
  */
function setPoints(teamA, teamB){
  $('.header-team-points.team-a').css('color', TEAMS.a.color).text(teamA);
  $('.header-team-points.team-b').css('color', TEAMS.b.color).text(teamB);
}

/**
  * Calculates the modulus (Native mod,%, is broken)
  * @param {int} n
  * @param {int} m
  */
function mod(n, m) {
  return ((n % m) + m) % m;
}


/**
 * Given a SVG container it adds a line between 2 points 
 * @param {Object|JQuery} container - SVG Container
 * @param {Object| {left: int, top: int}} origin - Position of origin
 * @param {Object| {left: int, top: int}} destiny - Position of destiny
 */
function drawLine(container, origin, destiny){
 
  var dist = calculateDistance(origin.left, origin.top, destiny.left, destiny.top);
  var nHtml = ' <line x1="' +origin.left+ '" y1="' +origin.top+ '" x2="' +destiny.left+ '" y2="' +destiny.top+ '" style="stroke:rgb(255,0,0);stroke-width:2; stroke-dasharray: ' +dist+ 'px; stroke-dashoffset: ' +dist+ 'px " />';
  nHtml += container.html();
  container.html(nHtml);
}

/**
 * Calculates the center of the element in relation to a given element
 * @param {string} containerID - ID of the container
 * @param {Object|JQuery} object - element to obtain the center 
 * @return {Object| {left: int, top: int} }
 */
function calculateCenter(containerID, object){
  var center = {top : 0, left: 0};
  var left = 0;
  var top = 0;
  var parent = object.parent();
  while ( parent.attr("ID") != containerID){
    
    left += parent.position().left;
    top += parent.position().top;
    
    parent = parent.parent();
  }
  
  
  center.left = left + object.position().left + ( object.width() / 2 );
  center.top = top + object.position().top + ( object.height() / 2 );
  
  return center;
}

/**
 * Calculates the Distance between 2 points
 * @param {int} x1 - Position of point 1 in X axis 
 * @param {int} y1 - Position of point 1 in Y axis 
 * @param {int} x2 - Position of point 2 in X axis 
 * @param {int} y2 - Position of point 2 in Y axis 
 */
function calculateDistance(x1, y1, x2, y2){

  var xx = x1 - x2;
  var yy = y1 - y2;
  
  return Math.sqrt( Math.pow(xx, 2) + Math.pow(yy, 2) );
}

