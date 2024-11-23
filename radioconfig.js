const topBarCenterText = `KN6PTQ - Radio Dashboard`;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "QRZ", "https://www.qrz.com/db/KN6PTQ", "1"],
    ["2196F3", "SCC SkyView Dashboard", "https://kn6ptq.com/index.html", "1"],
  ["2196F3", "LIGHTNING", "https://map.blitzortung.org/#3.87/36.5/-89.41", "1", "R"],
  ["2196F3", "NWS MTR", "https://www.weather.gov/mtr/", "1", "R"],
  ["2196F3", "WEATHER", "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=37.774929&lon=-122.419418&zoom=5", "1", "R"],
  ["2196F3", "WINDS", "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-122.456,37.788,3000", "1", "R"],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
["2196F3","SCC Watershed", "https://valleywateralert.org/scvwd/webcams/watersheds.php", "1", "R"],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  //1
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KMUX_loop.gif",
  ],
//2 
[
  "Propagation",
  "https://img.propagation.dr2w.de/n-america/10M/dr2w_animation_10M.gif",
    "https://www.tvcomm.co.uk/g7izu/Autosave/NA_ES_AutoSave.JPG",
  "https://img.propagation.dr2w.de/n-america/20M/dr2w_animation_20M.gif",
  "https://img.propagation.dr2w.de/n-america/40M/dr2w_animation_40M.gif",
  "https://img.propagation.dr2w.de/n-america/80M/dr2w_animation_80M.gif",
  "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
  ],
  //3
 //4
  [
    "ISS POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
  ],
  //5
  //6

//7
["",
    "https://www.hamqsl.com/solarpich.php"],
//8
 ["Solar WX",
    "https://services.swpc.noaa.gov/images/animations/suvi/primary/map/latest.png"],
   //9
  [
    "LOCAL ABSD",
    "iframe|https://globe.adsbexchange.com/?airport=SJC",
  ],

//10
  //11

  [
    "NOAA D-`xRAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
  ],
 //10
 
  //12

  
  ["",
    "https://www.hamqsl.com/solar101vhf.php"],

  ["",
    "https://www.hamqsl.com/marston.php"]

/* 
  ["HF PROPAGATION",
"https://www.hamqsl.com/solar100sc.php"] [
    "RS-44 POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=44909",
  ],
  */
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
const tileDelay = [11200,10000,11000,10100,10200,10500,10300,10600,30400,60700,60900,10800,];
