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