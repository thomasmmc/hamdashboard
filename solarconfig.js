const topBarCenterText = `KN6PTQ Solar Dashboard`;

// Grid layout
var layout_cols = 3;
var layout_rows = 2;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important/*

const aURL = [
/*  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
     ["2196F3", "SCC SkyView Dashboard", "https://kn6ptq.com/index.html", "1"],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
*/  

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
  ["Solar Dynamics Observatory: Extreme Ultraviolet : He II 171 Å",
      "https://umbra.nascom.nasa.gov/images/latest_aia_171"],
//2
["Solar Dynamics Observatory: Extreme Ultraviolet He II 211 Å",
  "https://umbra.nascom.nasa.gov/images/latest_aia_211.gif"],
//3
["Solar Dynamics Observatory: Extreme Ultraviolet : He II 304 Å",
    "https://umbra.nascom.nasa.gov/images/latest_aia_304.gif"],
//4
 ["Helioseismic and Magnetic Imager (HMI): Magnetogram",
  "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_512_HMIB.jpg"],
//5
  ["Hinode X-Ray Telescope (XRT)",
   "http://solar.physics.montana.edu/HINODE/XRT/QL/syn_comp_png/latest_syn.png","https://solarmonitor.org/data/2025/03/01/pngs/hxrt/hxrt_flter_fd_20250228_180634.png"],
//6
 ["NOAA Solar WX",
    "https://services.swpc.noaa.gov/images/animations/suvi/primary/map/latest.png"],
 

/* 
 "Propagation",
  "https://img.propagation.dr2w.de/n-america/10M/dr2w_animation_10M.gif",
    "https://www.tvcomm.co.uk/g7izu/Autosave/NA_ES_AutoSave.JPG",
  "https://img.propagation.dr2w.de/n-america/20M/dr2w_animation_20M.gif",
  "https://img.propagation.dr2w.de/n-america/40M/dr2w_animation_40M.gif",
  "https://img.propagation.dr2w.de/n-america/80M/dr2w_animation_80M.gif",
  "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
  ],
  ["HF PROPAGATION",
"https://www.hamqsl.com/solar100sc.php"] [
    "RS-44 POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=44909",
  ],
  [
"", "https://www.hamqsl.com/solar101vhf.php", "https://www.hamqsl.com/solar100sc.php", "https://www.hamqsl.com/solarpich.php"
],

  */
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
const tileDelay = [9999999,9999999,9999999,9999999,9999999,9999999,];
