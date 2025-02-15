const topBarCenterText = `SF Bay Area SkyView`;

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
   ["2196F3", "Radio Dashboard", "https://kn6ptq.com/radio.html", "1"],
  
  ["2196F3", "LIGHTNING", "https://map.blitzortung.org/#3.87/36.5/-89.41", "1", "R"],
  ["2196F3", "NWS MTR", "https://www.weather.gov/mtr/", "1", "R"],
  ["2196F3", "WEATHER", "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=37.774929&lon=-122.419418&zoom=5", "1", "R"],
  ["2196F3", "WINDS", "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-122.456,37.788,3000", "1", "R"],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
["2196F3","Valler Water Webcams", "https://valleywateralert.org/scvwd/webcams/watersheds.php", "1", "R"],
["2196F3","Valley Water Alert Map ", "https://alert.valleywater.org/map?p=map", "1", "R"],
/*
 ["2196F3", "QRZ", "https://www.qrz.com/db/KN6PTQ", "1"],
*/
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
 ["Solar Weather",
    "https://www.hamqsl.com/solarpich.php"
    ],
 //5
  [
    "Local Temperature",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=maxt&n=1",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=mint&n=1",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=maxt&n=2",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=mint&n=2",
  ],
  //6
  [
    "Local Lightning",
    "https://www.blitzortung.org/en/Images/image_b_ca.png",
    "https://cdn.star.nesdis.noaa.gov/GOES18/GLM/SECTOR/psw/EXTENT3/20243281806_GOES18-GLM-psw-EXTENT3-1200x1200.jpg",
  ],
//7
  [
  "Wind",
  "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=NORTHCALIFORNIA&element=windspd&n=3",
  "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=NORTHCALIFORNIA&element=windspd&n=4",
  ],
//8
  [
  "Percipitation",
  "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=NORTHCALIFORNIA&element=qpf&n=1",
  "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=NORTHCALIFORNIA&element=qpf&n=2",
  ],
   //9
  [
    "Local Forecast",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wx&n=1",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wx&n=2",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wx&n=3",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wx&n=4",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wx&n=5",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wx&n=6",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wx&n=7",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wx&n=8",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wx&n=9",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wx&n=10",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wx&n=11",
  ],
//10
  [
    "Local Hazards",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wwa&n=1",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wwa&n=2",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wwa&n=3",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wwa&n=4",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wwa&n=5",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wwa&n=6",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wwa&n=7",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wwa&n=8",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wwa&n=9",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wwa&n=10",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=PST&sector=MTR&element=wwa&n=11",
    ],
//11
[
  "Guadalupe River Watershed",
  "iframe|https://valleywateralert.org/scvwd/charts/sgi_line_chart.php?id=5138",
  "iframe|https://valleywateralert.org/scvwd/charts/sgi_line_chart.php?noAq=1&id=5073,35073",
  "iframe|https://valleywateralert.org/scvwd/charts/sgi_line_chart.php?id=5148",
  "iframe|https://valleywateralert.org/scvwd/charts/sgi_line_chart.php?id=5017",
],

  //12
  [
    "Coyote Creek Watershed",
    "iframe|https://valleywateralert.org/scvwd/charts/sgi_line_chart.php?id=5098,5098",
    "iframe|https://valleywateralert.org/scvwd/charts/sgi_line_chart.php?id=5058",
    "iframe|https://valleywateralert.org/scvwd/charts/sgi_line_chart.php?noAq=1&id=150100,15010",

  ],
 
  /*
  //12
  
        "LOCAL ABSD",
    "iframe|https://globe.adsbexchange.com/?airport=SJC",

"HF PROPAGATION",
"https://www.hamqsl.com/solar100sc.php"],
 
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
