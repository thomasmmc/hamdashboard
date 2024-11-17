const topBarCenterText = `KN6PTQ - SF Bay Area`;

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
    "SATELLITE WUS",
    "https://cdn.star.nesdis.noaa.gov/GOES18/GLM/SECTOR/wus/EXTENT3/GOES18-WUS-EXTENT3-1000x1000.gif",
  ],
  //3
  [
	"Activity & Forecast", 
	"https://www.wpc.ncep.noaa.gov/noaa/noaa.gif", 
	"https://www.wpc.ncep.noaa.gov/noaa/noaad2.gif", 
	"https://www.wpc.ncep.noaa.gov/noaa/noaad3.gif", 
	"https://www.spc.noaa.gov/products/exper/day4-8/day48prob.gif", 	"https://www.spc.noaa.gov/exper/mesoanalysis/activity_loop.gif", 	"https://www.spc.noaa.gov/products/watch/validww.png", 
	"https://www.spc.noaa.gov/climo/reports/today.gif", 
	
	"https://www.wpc.ncep.noaa.gov/threats/final/hazards_d3_7_contours.png", 
	"https://www.wpc.ncep.noaa.gov/qpf/fill_94qwbg.gif", 	"https://data.mesonet.org/data/public/noaa/metar/maps/realtime/latest.tair.png",
/*
"https://www.weather.gov/wwamap/png/US.png", 
	"https://www.spc.noaa.gov/products/exper/enhtstm/imgs/enh_1600.gif", 
	"https://www.spc.noaa.gov/products/outlook/day2otlk_0600.gif", 
	"https://www.spc.noaa.gov/products/outlook/day3otlk_0730.gif", 
*/
  ],
 //4
  [
    "ISS POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
  ],
  //5
  [
    "FORECAST",
    "https://radar.weather.gov/ridge/standard/KMUX_loop.gif",
  ],
  //6
  [
    "LIGHTNING LOCAL",
    "https://www.blitzortung.org/en/Images/image_b_ca.png",
  ],
//7
["HF PROPAGATION",
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
[
"Guadalupe River at Alma Ave",
"iframe|https://valleywateralert.org/scvwd/webcams/site.php?cid=5138"],

  //11

  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
  ],
 //10
  ["HF PROPAGATION",
"https://www.hamqsl.com/solar100sc.php"],
 
  //12

  /*
  ["HF PROPAGATION",
    "https://www.hamqsl.com/solar101vhf.php"],
  ["HF PROPAGATION",
    "https://www.hamqsl.com/solarpich.php"],
  [
    "RS-44 POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=44909",
  ],
  */
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
const tileDelay = [11200,10000,11000,10100,10200,10500,10300,10600,30400,60700,60900,10800,];
