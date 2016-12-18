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
 var STATUS = {
	 NOT_PLAYED : 0,
	 PLAYED : 1,
	 NEXT : 2,
 }

 var VADSO_AAS = {
  name: "VADSO CITY",
  layer: "AAS INF",
  team: { a: "RU" , b:  "GB" },
  viewport: { lat: 70.04, lng: 29.43, zoom: 4 },
  tickets: { a: 0, b: 0 },
  background: 'maps/vadso_city/background.jpg',
  status: STATUS.NOT_PLAYED
}
 
var BEIRUT_AAS = {
  name: "BEIRUT",
  layer: "AAS INF",
  team : { a: "IDF" , b:  "RU" },
  viewport: { lat: 33.53, lng: 35.30, zoom: 4 },
  tickets: { a: 0, b: 0 },
  background: 'maps/beirut/background.jpg',
  status: STATUS.NOT_PLAYED
}
 
var KOZELSK_AAS = {
  name: "KOZELSK",
  layer: "AAS STD",
  team :  { a: "RU" , b:  "MIL" },
  viewport: { lat: 54.02, lng: 35.48, zoom: 4 },
  tickets: { a: 0, b: 0 },
  background: 'maps/kozelsk/background.jpg',
  status: STATUS.NOT_PLAYED
}

var GROZNY_AAS = {
  name: "GROZNY",
  layer: "AAS STD",
  team :  { a: "RU" , b:  "MIL" },
  viewport: { lat: 43.32, lng: 45.69, zoom: 4 },
  tickets: { a: 0, b: 0 },
  background: 'maps/grozny/background.jpg',
  status: STATUS.NOT_PLAYED
}

var MUTTRAH_AAS = {
  name: "MUTTRAH CITY",
  layer: "AAS STD",
  team :  { a: "USMC" , b:  "MEC" },
  viewport: { lat: 23.37, lng: 58.34, zoom: 4 },
  tickets: { a: 0, b: 0 },
  background: 'maps/muttrah_city_2/background.jpg',
  status: STATUS.NOT_PLAYED
}

var HADES_AAS = {
  name: "HADES PEAK",
  layer: "AAS STD",
  team :  { a: "RU" , b:  "GB" },
  viewport: { lat: 44.14, lng: 39.36, zoom: 4 },
  tickets: { a: 0, b: 0 },
  background: 'maps/hades_peak/background.jpg',
  status: STATUS.NOT_PLAYED
}

var SHIJIA_AAS = {
  name: "SHIJIA VALLEY",
  layer: "AAS ALT",
  team :  { a: "PLA" , b:  "GB" },
  viewport: { lat: 33.03, lng: 111.13, zoom: 4 },
  tickets: { a: 0, b: 0 },
  background: 'maps/shijiavalley/background.jpg',
  status: STATUS.NOT_PLAYED
}

var KASHAN_AAS = {
  name: "KASHAN DESERT",
  layer: "AAS ALT",
  team : { a: "US" , b:  "MEC" },
  viewport: { lat: 33.59, lng: 51.28, zoom: 4 },
  tickets: { a: 600, b: 600 },
  background: 'maps/kashan_desert/background.jpg',
  status: STATUS.NOT_PLAYED
}

var YAMALIA_AAS = {
  name: "YAMALIA",
  layer: "AAS ALT",
  team : { a: "CA" , b:  "RU" },
  viewport: { lat: 66.59, lng: 74.51, zoom: 4 },
  tickets: { a: 0, b: 0 },
  background: 'maps/yamalia/background.jpg',
  status: STATUS.NOT_PLAYED
}

var XIANG_AAS = {
  name: "XIANGSHAN",
  layer: "AAS STD",
  team : { a: "PLA" , b:  "FR" },
  viewport: { lat: 29.26, lng: 121.43, zoom: 4 },
  tickets: { a: 107, b: 0 },
  background: 'maps/xiangshan/background.jpg',
  status: STATUS.PLAYED,
  playedOrder: 1
}


var SAAREMA_AAS = {
  name: "SAAREMAA",
  layer: "AAS ALT/INF",
  team : { a: "USMC" , b:  "RU" },
  viewport: { lat: 58.25, lng: 22.30, zoom: 4 },
  tickets: { a: 0, b: 0 },
  background: 'maps/saaremaa/background.jpg',
  status: STATUS.NOT_PLAYED
}

var DRANG_AAS = {
  name: "IA DRANG",
  layer: "AAS INF",
  team : { a: "US" , b:  "NVA" },
  viewport: { lat: 13.33, lng: 107.42, zoom: 4 },
  tickets: { a: 0, b: 0 },
  background: 'maps/battle_of_ia_drang/background.jpg',
  status: STATUS.NOT_PLAYED
}


var DOVRE_AAS = {
  name: "DOVRE",
  layer: "AAS STD",
  team : { a: "RU" , b:  "NL" },
  viewport: { lat: 62.2, lng: 9.28, zoom: 4 },
  tickets: { a: 0, b: 0 },
  background: 'maps/dovre/background.jpg',
  status: STATUS.NOT_PLAYED
}

var DOVRE_WINTER_AAS = {
  name: "DOVRE WINTER",
  layer: "AAS ALT",
  team : { a: "RU" , b:  "GER" },
  viewport: { lat: 62.2, lng: 9.28, zoom: 4 },
  tickets: { a: 0, b: 0 },
  background: 'maps/dovre_winter/background.jpg',
  status: STATUS.NOT_PLAYED
}


var BLACKGOLD_AAS = {
  name: "BLACK GOLD",
  layer: "AAS ALT",
  team : { a: "PLA" , b:  "RU" },
  viewport: { lat: 43.29, lng: 87.43, zoom: 4 },
  tickets: { a: 0, b: 0 },
  background: 'maps/black_gold/background.jpg',
  status: STATUS.NOT_PLAYED
}


var NUJIMAA_AAS = {
  name: "NUIJAMAA",
  layer: "AAS STD",
  team : { a: "RU" , b:  "FR" },
  viewport: { lat: 60.57, lng: 28.32, zoom: 4 },
  tickets: { a: 0, b: 0 },
  background: 'maps/nuijamaa/background.jpg',
  status: STATUS.NOT_PLAYED
}



var KHAMY_AAS = {
  name: "KHAMISIYAH",
  layer: "AAS ALT",
  team : { a: "US" , b:  "MEC" },
  viewport: { lat: 31.14, lng: 46.19, zoom: 4 },
  tickets: { a: 0, b: 0 },
  background: 'maps/khamisiyah/background.jpg',
  status: STATUS.NOT_PLAYED
}

var WANDA_AAS = {
  name: "WANDA SHAN",
  layer: "AAS INF",
  team : { a: "PLA" , b:  "GER" },
  viewport: { lat: 48, lng: 129, zoom: 4 },
  tickets: { a: 0, b: 35 },
  background: 'maps/wanda_shan/background.jpg',
  status: STATUS.PLAYED,
  playedOrder: 2
}

var DRAGON_AAS = {
  name: "DRAGON FLY",
  layer: "AAS STD",
  team : { a: "MIL" , b:  "GB" }, 
  viewport: { lat: 43.18, lng: 20.99, zoom: 4 },
  tickets: { a: 0, b: 0 },
  background: 'maps/dragon_fly/background.jpg',
  status: STATUS.NOT_PLAYED
}

var IRON_AAS = {
  name: "IRON RIDGE",
  layer: "AAS STD",
  team : { a: "RU" , b:  "MIL" }, 
  viewport: { lat: 51.24, lng: 30.3, zoom: 4 },
tickets: { a: 0, b: 0 },
  background: 'maps/iron_ridge/background.jpg',
  status: STATUS.NOT_PLAYED
}

var FOOLS_AAS = {
  name: "FOOLS ROAD",
  layer: "AAS INF",
  team : { a: "MIL" , b:  "GB" }, 
  viewport: { lat: 43.02, lng: 46.52, zoom: 4 },
tickets: { a: 0, b: 0 },
  background: 'maps/fools_road/background.jpg',
  status: STATUS.NOT_PLAYED
}

var BIJAR_AAS = {
  name: "BIJAR CANYONS",
  layer: "AAS STD",
  team : { a: "IDF" , b:  "MEC" }, 
  viewport: { lat: 33.02, lng: 35.73, zoom: 4 },
tickets: { a: 0, b: 0 },
  background: 'maps/bijar_canyons/background.jpg',
  status: STATUS.NOT_PLAYED
}

var ULYANOVSK_AAS = {
  name: "ULYANOVSK",
  layer: "AAS STD",
  team : { a: "RU" , b:  "GER" }, 
  viewport: { lat: 54.30, lng: 48.35, zoom: 4 },
tickets: { a: 0, b: 0 },
  background: 'maps/ulyanovsk/background.jpg',
  status: STATUS.NOT_PLAYED
}

var PAVLOVSK_AAS = {
  name: "PAVLOVSK",
  layer: "AAS INF",
  team : { a: "US" , b:  "RU" }, 
  viewport: { lat: 42.87, lng: 132.56, zoom: 4 },
tickets: { a: 0, b: 0 },
  background: 'maps/pavlovsk_bay/background.jpg',
  status: STATUS.NOT_PLAYED
}

var SILENT_AAS = {
  name: "SILENT EAGLE",
  layer: "AAS ALT",
  team : { a: "RU" , b:  "GER" }, 
  viewport: { lat: 67.43, lng: 34.25, zoom: 4 },
tickets: { a: 0, b: 0 },
  background: 'maps/silent_eagle/background.jpg',
  status: STATUS.NOT_PLAYED
}
	
