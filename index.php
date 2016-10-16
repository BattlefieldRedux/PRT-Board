<!--
  Copyright 2015 uturista.pt All Rights Reserved.
  
  Licensed under the Attribution-NonCommercial 4.0 International (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  
  https://creativecommons.org/licenses/by-nc/4.0/legalcode
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
 -->
 

 
 

 <?php 
  $path = 'http://';
  
  echo '<div id="AbsPath" data-path="'.$path.'"></div>' ;
  echo 
    '<link rel="stylesheet" href="'.$path.'css/jquery-jvectormap-2.0.4.css" type="text/css" media="screen"/>
    <link rel="stylesheet" href="'.$path.'css/pr-tournament-boardmap.css" type="text/css" media="screen"/>
    <script src="'.$path.'js/jquery-2.1.4.min.js"></script>
    <script src="'.$path.'js/url.min.js"></script>
    <script src="'.$path.'js/jquery-jvectormap-2.0.4.min.js"></script>
    <script src="'.$path.'js/jquery-jvectormap-world-mill.js"></script>
    <script src="'.$path.'js/pr-tournament-boardmap-maps.js"></script>
    <script src="'.$path.'js/pr-tournament-boardmap.js"></script>';
  
  
 
 ?>
    <!-- BOARD -->
    <div id="Board-Outter">
      <div id="Board">
        <div id="Op-Header">
          <div id="Op-Header-Inner">
            <div class="header-team-logo team-a"></div>
            <div class="header-team-name team-a"></div>
            <div class="header-team-points team-a"></div>
            
            <div id="Op-Header-Icons-Wrapper">
              <div style="display: table; height: 100%; margin: 0 auto;">
                <div class="op-selector left"></div>
                <div id="Op-Header-Icons"></div>
                <div class="op-selector right"></div>
              </div>
            </div>
            
            <div class="header-team-points team-b"></div>
            <div class="header-team-name team-b"></div>
            <div class="header-team-logo team-b"></div>
          </div>
          <div id="Op-Name-Wrapper">
            <div style="display: table; height: 100%; margin: 0 auto;">
              <div id="Op-Logo"></div>
              <div id="Op-Name"></div>
            </div>
          </div>
        </div>
        <div id="Op-Strip-Container">
        </div>
      </div>
    </div>
    <!-- END: BOARD -->