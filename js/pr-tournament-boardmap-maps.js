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
 
var teamA = "PSC";
var teamB = "EAA";
 
 
 
 var VADSO_AAS = {
  key: "vadso_city_aas_std",
  name: "VADSO CITY",
  layer: "AAS STD",
  team: { a: "RU" , b:  "GB" },
  viewport: { lat: 70.04, lng: 29.43, zoom: 4 },
  tickets: { a: 110, b: 110 },
  background: 'maps/vadso_city/background.jpg',
  played: false
}
 
var BEIRUT_AAS = {
  key: "beirut_aas_std",
  name: "BEIRUT",
  layer: "AAS STD",
  team : { a: "IDF" , b:  "RU" },
  viewport: { lat: 33.53, lng: 35.30, zoom: 4 },
  tickets: { a: 110, b: 110 },
  background: 'maps/beirut/background.jpg',
  played: false
}
 
var KOZELSK_AAS = {
  key: "kozelsk_aas_std",
  name: "KOZELSK",
  layer: "AAS STD",
  team :  { a: "RU" , b:  "MIL" },
  viewport: { lat: 54.02, lng: 35.48, zoom: 4 },
  tickets: { a: 110, b: 110 },
  background: 'maps/kozelsk/background.jpg',
  played: false
}

var Sbeneh_AAS = {
  key: "Sbeneh_aas_std",
  name: "SBENEH",
  layer: "AAS STD",
  team :  { a: "FSA" , b:  "MEC" },
  viewport: { lat: 33.26, lng: 36.17, zoom: 4 },
  tickets: { a: 110, b: 110 },
  background: 'maps/sbeneh_outskirts/background.jpg',
  played: false
}

var MUTTRAH_AAS = {
  key: "muttrah_aas_std",
  name: "MUTTRAH CITY",
  layer: "AAS STD",
  team :  { a: "USMC" , b:  "MEC" },
  viewport: { lat: 23.37, lng: 58.34, zoom: 4 },
  tickets: { a: 110, b: 110 },
  background: 'maps/muttrah_city_2/background.jpg',
  played: false
}

var HADES_AAS = {
  key: "hades_aas_std",
  name: "HADES PEAK",
  layer: "AAS STD",
  team :  { a: "RU" , b:  "NL" },
  viewport: { lat: 44.14, lng: 39.36, zoom: 4 },
  tickets: { a: 110, b: 110 },
  background: 'maps/hades_peak/background.jpg',
  played: false
}

var SHIJIA_AAS = {
  key: "shijia_aas_std",
  name: "SHIJIA VALLEY",
  layer: "AAS STD",
  team :  { a: "PLA" , b:  "GB" },
  viewport: { lat: 33.03, lng: 111.13, zoom: 4 },
  tickets: { a: 110, b: 110 },
  background: 'maps/shijiavalley/background.jpg',
  played: false
}

var KASHAN_AAS = {
  key: "kashan_aas_std",
  name: "KASHAN",
  layer: "AAS STD",
  team : { a: "CA" , b:  "MEC" },
  viewport: { lat: 33.59, lng: 51.28, zoom: 4 },
  tickets: { a: 110, b: 110 },
  background: 'maps/kashan_desert/background.jpg',
  played: false
}

var YAMALIA_AAS = {
  key: "yamalia_aas_std",
  name: "YAMALIA",
  layer: "AAS STD",
  team : { a: "CA" , b:  "RU" },
  viewport: { lat: 66.59, lng: 74.51, zoom: 4 },
  tickets: { a: 110, b: 110 },
  background: 'maps/yamalia/background.jpg',
  played: false
}

var XIANG_AAS = {
  key: "xiang_aas_std",
  name: "XIANGSHAN",
  layer: "AAS STD",
  team : { a: "PLA" , b:  "FR" },
  viewport: { lat: 29.26, lng: 121.43, zoom: 4 },
  tickets: { a: 110, b: 110 },
  background: 'maps/xiangshan/background.jpg',
  played: false
}


var SAAREMA_AAS = {
  key: "saarema_aas_std",
  name: "SAAREMA",
  layer: "AAS STD",
  team : { a: "USMC" , b:  "RU" },
  viewport: { lat: 58.25, lng: 22.30, zoom: 4 },
  tickets: { a: 110, b: 110 },
  background: 'maps/saaremaa/background.jpg',
  played: false
}

var DRANG_AAS = {
  key: "drang_aas_std",
  name: "IA DRANG",
  layer: "AAS STD",
  team : { a: "US" , b:  "NVA" },
  viewport: { lat: 13.33, lng: 107.42, zoom: 4 },
  tickets: { a: 110, b: 110 },
  background: 'maps/battle_of_ia_drang/background.jpg',
  played: false
}


var DOVRE_AAS = {
  key: "dovre_aas_std",
  name: "DOVRE",
  layer: "AAS STD",
  team : { a: "RU" , b:  "NL" },
  viewport: { lat: 62.2, lng: 9.28, zoom: 4 },
  tickets: { a: 110, b: 110 },
  background: 'maps/dovre/background.jpg',
  played: false
}


var BLACKGOLD_AAS = {
  key: "black_gold_aas_std",
  name: "BLACK GOLD",
  layer: "AAS STD",
  team : { a: "PLA" , b:  "RU" },
  viewport: { lat: 43.29, lng: 87.43, zoom: 4 },
  tickets: { a: 110, b: 110 },
  background: 'maps/black_gold/background.jpg',
  played: false
}


var NUJIMAA_AAS = {
  key: "nujimaa_aas_std",
  name: "NUJIMAA",
  layer: "AAS STD",
  team : { a: "RU" , b:  "FR" },
  viewport: { lat: 60.57, lng: 28.32, zoom: 4 },
  tickets: { a: 110, b: 110 },
  background: 'maps/nuijamaa/background.jpg',
  played: false
}



var KHAMY_AAS = {
  key: "khamy_aas_std",
  name: "KHAMISIYAH",
  layer: "AAS STD",
  team : { a: "US" , b:  "MEC" },
  viewport: { lat: 31.14, lng: 46.19, zoom: 4 },
  tickets: { a: 110, b: 110 },
  background: 'maps/khamisiyah/background.jpg',
  played: false
}

var WANDA_AAS = {
  key: "wanda_shan_aas_std",
  name: "WANDA SHAN",
  layer: "AAS STD",
  team : { a: "PLA" , b:  "GER" },
  viewport: { lat: 48, lng: 129, zoom: 4 },
  tickets: { a: 110, b: 110 },
  background: 'maps/wanda_shan/background.jpg',
  played: false
}

var DRAGON_AAS = {
  key: "dragon_fly_aas_std",
  name: "DRAGON FLY",
  layer: "AAS STD",
  team : { a: "MIL" , b:  "GB" }, 
  viewport: { lat: 43.18, lng: 20.99, zoom: 4 },
tickets: { a: 110, b: 110 },
  background: 'maps/dragon_fly/background.jpg',
  played: false
}
	
