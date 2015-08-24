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
  name: "Kashan",
  description: [ "BEIRUT AAS STD" , "RU - MEC" ],
  latLng: [ -40.72, -45.14] 
}

var MAP_2 = {
  key: "Beirut",
  name: "Kashan",
  description: [ "BB", "BEIRUT AAS STD" , '<span class="pac">PAC</span> AS IDF (650 TICKETS)', "EMF AS RUS (650 TICKETS)" ],
  latLng: [ 40.47, 21.85] 
}

var MAP_3 = {
  key: "Kashan",
  name: "Kashan",
  description: [ "CC", "BEIRUT AAS STD" , "PAC AS IDF (650 TICKETS)", "EMF AS RUS (650 TICKETS)" ],
  latLng: [ 20.47, 41.85] 
}

var MAP_4 = {
  key: "Fallujah",
  name: "Kashan",
  description: [ "DD", "BEIRUT AAS STD" , "PAC AS IDF (650 TICKETS)", "EMF AS RUS (650 TICKETS)" ],
  latLng: [ 60.47, 91.85] 
}

// Operation: (string) name, (array:MAP) map
var OPERATIONS = [
  [ "Operation 1", [ MAP_1, MAP_2 ] ],
  [ "Operation 2", [ MAP_3, MAP_4 ] ]
]


/* **********************************************
 *        DO NOT EDIT BEYHOND THIS POINT
 * ********************************************** */

 var MAP;
 
 $(window).ready(init);
 
/**
 * Wrapper for everything required for the initialization
 */
function init(){
  initMap();
  
  //Init Operation List
  for(var index in OPERATIONS){
    $("#op-list").append('<li class="op-name">' + OPERATIONS[index][0] + '</li>');
  }
  
  //Init markers
  for(index in OPERATIONS){
    
    for(map_index in OPERATIONS[index][1]){
      var args = [];
      args.push(index)
      MAP.addMarker(OPERATIONS[index][1][map_index].key, {latLng: OPERATIONS[index][1][map_index].latLng, Operation: index} );
    }
  }
 

  //Init Behaviour on hovering Operations
  $("#op-list").on('mouseover', 'li', onOperationTitleMouseEnter);
  $("#op-list").on('mouseout', 'li', onOperationTitleMouseLeave);
  $("#world-map").on('mouseover', '.jvectormap-marker', onMarkerEnter);
  $("#world-map").on('mouseout', '.jvectormap-marker', onMarkerLeave);
}

/**
 * Initializes the MAP
 */
function initMap(){
  
  MAP = new jvm.Map({
    container: $('#world-map'),
    map: 'world_mill',
    backgroundColor: '#B7BBBE',
    zoomOnScroll: false,
    zoomMax: 1,
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


/**
  * Returns an array of Jquery elements, this elements are the markers respective to the given operation index
  * @param {int} opIndex
  */
function getMarkers(opIndex){
  var markers = $('.jvectormap-marker');
  
  var maps = [];
  for( index in OPERATIONS[opIndex][1] ){
    maps.push( OPERATIONS[opIndex][1][index].key );
  }
  
  var markersFiltered = [];
  markers.each(function(){
    if( $.inArray( $(this).attr('data-index'), maps) > -1){
      markersFiltered.push( $(this) );
    }
  });
  
  return markersFiltered;
}

/**
  * For some reason Jquery.addClass is failing on some elements (blame jvectormap) this is the workaround
  * @param {Object|Jquery} DOM element that will receive the new class
  * @param {string} name of class to add
  */
function FIX_addClass(object, nClass){
  var oldClass = object.attr('class');
  object.attr('class', oldClass + ' ' + nClass);
}

/**
  * For some reason Jquery.removeClass is failing on some elements (blame jvectormap) this is the workaround
  * @param {Object|Jquery} DOM element that we'll remove the class
  * @param {string} name of class to remove
  */
function FIX_removeClass(object, rClass){
  var oldClass = object.attr('class');
  
  if(oldClass == undefined)
    return;
  
  var newClass = oldClass.replace(rClass, '');
  object.attr('class', newClass);
}



function onOperationTitleMouseEnter(){
  var pos = $(this).prevAll().length;
 
  var markers = getMarkers(pos);   
     
  for(index in markers){
    //FIXME: NOT WORKING FOR SOME REASON
    //markers[index].addClass("prt-selected"); 
    FIX_addClass(markers[index], 'prt-selected');
  }
  
  //Calculate average location of the markers
  var sum = 0;
  for(index in markers){
    sum += parseInt(markers[index].attr('cx'));
  }
  var average = sum / markers.length;
  
  //FIXME: Remove magic number!!!!
  if(average > 300){
   showOpOverlay(OPERATIONS[pos], { overlayClass: 'ocean', descriptionClass: 'right' });
  }else{
    showOpOverlay(OPERATIONS[pos], { overlayClass: 'ocean', descriptionClass: 'left' });
  }
  
}

function onOperationTitleMouseLeave(){       
  //FIXME: NOT WORKING FOR SOME REASON
  //$('.jvectormap-marker.prt-selected').removeClass("prt-selected");
  FIX_removeClass($('.jvectormap-marker.prt-selected'), 'prt-selected');
  hideOpOverlay();
}


function onMarkerEnter(){
  
  var marker = MAP.markers[$(this).attr('data-index')];
  var operation = marker.config.Operation;
  
  var markers = getMarkers(operation);   
     
  for(index in markers){
    //FIXME: NOT WORKING FOR SOME REASON
    //markers[index].addClass("prt-selected"); 
    FIX_addClass(markers[index], 'prt-selected');
  }
  
 
  
  //Calculate average location of the markers
  var sum = 0;
  for(index in markers){
    sum += parseInt(markers[index].attr('cx'));
  }
  var average = sum / markers.length;
  
  //FIXME: Remove magic number!!!!
  if(average > 300){
    showOpOverlay(OPERATIONS[operation], { overlayClass: 'ocean', descriptionClass: 'right' });
  }else{
    showOpOverlay(OPERATIONS[operation], { overlayClass: 'ocean', descriptionClass: 'left' });
  }
  
  //Draw Line towars Op-Overlay
  for(index in markers){
    var pos = index;
    var img = $('#op-details .op:nth-child(' +(++pos)+ ') img');
    drawLine($('#world-map svg g:nth-child(3) '),  {left: parseFloat(markers[index].attr('x')), top: parseFloat(markers[index].attr('y')) },  calculateCenter('world-map', img));
  }
}

function onMarkerLeave(){
  //FIXME: NOT WORKING FOR SOME REASON
  //$('.jvectormap-marker.prt-selected').removeClass("prt-selected");
  FIX_removeClass($('.jvectormap-marker.prt-selected'), 'prt-selected');
  
  hideOpOverlay();
  $('#world-map svg g:nth-child(3) ').html('');
}



function hideOpOverlay(){
  $('#world-map').removeClass('show-op-overlay');
}





/**
 * Handles everything regarding showing the Operation details
 * @param {Object|Operation} The object regarding an Operation
 * @param {Object| { overlayClass: string, descriptionClass: string}} An object with extra classes to add to the overlay
 *
 */

function showOpOverlay( Operation, styles){
  $('#world-map').addClass('show-op-overlay');
  $('#op-details').addClass(styles.overlayClass);
  
  var descHolders = $('#op-details .op-description');
  descHolders.addClass(styles.descriptionClass);
  
  
  descHolders.each(function(index){
    $(this).html('');//Reset
    
    //Append Descriptions
    for( var d in Operation[1][index].description ){
      $(this).append("<p>"+Operation[1][index].description[d]+"</p>");
    }
  });
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

