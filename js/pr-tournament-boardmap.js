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
var MAP_1 = {
  key: "Muttrah",
  name: "Muttrah",
  layer: "AAS STD",
  team : [ { name: "EMF", faction: "RU" }, { name: "PAC", faction: "MEC" } ],
  viewport: { lat: 10.47, lng: 21.85, zoom: 4 }
}

var MAP_2 = {
  key: "Beirut",
  name: "Beirut",
  layer: "AAS STD",
  team : [ { name: "EMF", faction: "RU" }, { name: "PAC", faction: "MEC" } ],
  viewport: { lat: 20.47, lng: 21.85, zoom: 4 }
}

var MAP_3 = {
  key: "Kashan",
  name: "Kashan",
  layer: "AAS STD",
  team : [ { name: "EMF", faction: "RU" }, { name: "PAC", faction: "MEC" } ],
  viewport: { lat: 30.47, lng: 21.85, zoom: 4 }
}

var MAP_4 = {
  key: "Fallujah",
  name: "Fallujah",
  layer: "AAS STD",
  team : [ { name: "EMF", faction: "RU" }, { name: "PAC", faction: "MEC" } ],
  viewport: { lat: 40.47, lng: 21.85, zoom: 4 }
}

// Operation: (string) name, (array:MAP) map
var OPERATIONS = [
  { name: "Operation 1", maps: [ MAP_1, MAP_2 ] },
  { name: "Operation 2", maps: [ MAP_3, MAP_4 ] },
  { name: "Operation 3", maps: [ MAP_3, MAP_4, MAP_4 ] },
  { name: "Operation 4", maps: [ MAP_3, MAP_4, MAP_4 ] },
  { name: "Operation 5", maps: [ MAP_3, MAP_4, MAP_4 ] },
  { name: "Operation 6", maps: [ MAP_3, MAP_4, MAP_4 ] },
  { name: "Operation 7", maps: [ MAP_3, MAP_4, MAP_4 ] },
  { name: "Operation 8", maps: [ MAP_3, MAP_4, MAP_4 ] },
  { name: "Operation 9", maps: [ MAP_3, MAP_4, MAP_4 ] },
  { name: "Operation 10", maps: [ MAP_3, MAP_4, MAP_4 ] }
       
]


/* **********************************************
 *        DO NOT EDIT BEYHOND THIS POINT
 * ********************************************** */
 
var MAPS = [];
$(window).ready(init);
 
/**
 * Wrapper for everything required for the initialization
 */
function init(){
  
  //Create the maximum required stripes
  var stripes = 0; 
  for(index in OPERATIONS){
    stripes = Math.max(0, OPERATIONS[index].maps.length);
  }
  buildOpStripes(stripes, $('#Op-Strip-Container'));
  
  //Initialize every stripe
  $('.world-map').each(function(index){ 
    MAPS.push(initMap($(this))); 
  });
  
  //Build header
  buildOpHeader(OPERATIONS, $('#Op-Header-inner'))
  
  //Show 1st Operation
  displayOperation(OPERATIONS[0]);
  $('.op-button-inner').first().addClass('selected');
  
  
  
  
  
  //Add click listeners to header's buttons
  $('#Op-Header').on('click', '.op-button-inner', onOperationSelected);
  
  $('#Op-Strip-Container').on('click', '.op-details', onClickDetails);
  
  
  
}


/**
  * 
  * @param {int} stripes - 
  * @param {Object|Jquery} container - 
  */
function buildOpStripes(stripes, container){
  
  for(i = 0; i < stripes; i++){
    
    var stripe = '';
    
    stripe += '<div class="op-stripe">';
    stripe += '<div class="world-map"></div>';

    stripe += '<div class="op-map-thumnail-wrapper">';
    stripe += '<div class="op-map-thumnail-base"></div>';
    stripe += '<img class="op-map-thumnail-image" />';
    stripe += '<div class="op-map-thumnail-text"></div>';
    stripe += '</div>';//closes .op-map-thumnail-wrapper
    
   
    var pos = 'left';
    /*if( ( i % 2 ) == 0)
      pos = 'right';*/
    
    stripe += '<div class="op-details ' + pos + '">';
    stripe += '<div class="op-map-name"></div>';
    stripe += '<div class="op-map-layer"></div>';
    
    stripe += '<div class="op-teams-container">';
    
    stripe += '<div class="op-team team-a">';
    stripe += '<div class="op-team-name"></div>';
    stripe += '<div class="op-team-faction"></div>';
    stripe += '</div>'
    
    stripe += '<div class="op-teams-versus">Vs</div>'
    
    stripe += '<div class="op-team team-b">';
    stripe += '<div class="op-team-name"></div>';
    stripe += '<div class="op-team-faction"></div>';
    stripe += '</div>';
    
    stripe += '</div>';//Closes '.op-teams-container'
    stripe += '</div>';//Closes '.op-details'
    stripe += '</div>';//Closes '.op-stripe
    
    container.append(stripe);
  }
}

function buildOpHeader(operations, container){
  
  for(index in OPERATIONS){
    var header = '';  
    header += '<div class="op-button-container"><span></span>';
    header += '<div class="op-button-inner" data-operation="' + index + '"></div>';
    header += '<div class="op-header-shadow"></div>';
    header += '</div>';
    container.append(header);
  }
}

/**
 * Initializes a map
 */
function initMap(mapContainer){
  
   return new jvm.Map({
    container: mapContainer,
    map: 'world_mill',
    backgroundColor: '#B7BBBE',
    zoomOnScroll: false,
    zoomButtons: false,
    regionStyle: {
      initial: {
        fill: 'black',
        "fill-opacity": 0.2,
        stroke: 'black',
        "stroke-width":'0px',
        "stroke-opacity": 1
      },
      hover: {
        "fill-opacity": 0.2,
        cursor: 'initial'
      },
      selected: {
        fill: 'black',
        "fill-opacity": 0.2
      },
      selectedHover: {
      }
    }
  });
}


function displayOperation(operation){
  var stripes = $('.op-stripe');
  $('#Op-Name').html(operation.name);
  
  
  stripes.each(function(index){
    
    if(index >= operation.maps.length){
      $(this).addClass('hide');
      return;
    }else{
      $(this).removeClass('hide');
      populateStripe($(this), operation.maps[index]);
      createMarkerAndFocus( MAPS[index], operation.maps[index] );
    }
  });
}


function populateStripe(stripe, map){
  stripe.find('.op-map-name').html(map.name);
  stripe.find('.op-map-layer').html(map.layer);
  
  stripe.find('.team-a .op-team-name').html(map.team[0].name);
  stripe.find('.team-a .op-team-faction').html(map.team[0].faction);
  
  stripe.find('.team-b .op-team-name').html(map.team[1].name);
  stripe.find('.team-b .op-team-faction').html(map.team[1].faction);
   stripe.find('img.op-map-thumnail-image').attr('src', 'img/thumbnail.png');
}

function createMarkerAndFocus(map, data){
  map.removeAllMarkers();
  
  map.addMarker(map.key, {latLng: [ data.viewport.lat , data.viewport.lng] });

  map.setFocus({
    animate: true,
    lat: data.viewport.lat, 
    lng: data.viewport.lng,
    scale: data.viewport.zoom
  });
}


function onOperationSelected(){
  $('.op-button-inner.selected').removeClass('selected');
  $(this).addClass('selected');
  var operation = parseInt($(this).attr('data-operation'));
  displayOperation(OPERATIONS[operation]);
}

function onClickDetails(){

  if($(this).hasClass('extended')){
    $(this).removeClass('extended');
  }else{
    $('.op-details.extended').removeClass('extended');
    $(this).addClass('extended');
  }

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

