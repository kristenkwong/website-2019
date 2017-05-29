/**
 * SVG path for target icon
 */
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

/**
 * SVG path for plane icon
 */
var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

/**
 * Create the map
 */
var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
"theme": "light",

  "zoomControl": {
    "zoomControlEnabled": true,
    "homeButtonEnabled": false
  },


  "dataProvider": {
    "map": "worldLow",
    "zoomLevel": 2.3,
    "zoomLongitude": 0,
    "zoomLatitude": 45,

    "lines": [ {
      "id": "line1",
      "arc": -0.85,
      "alpha": 0.3,
      "latitudes": [ 49.1652, 31.2304, 22.3964, 49.1652 ],
      "longitudes": [ -123.1411, 121.4737, 114.1095, -123.1411 ]
    }, {
      "id": "line2",
      "alpha": 0,
      "color": "#000000",
      "latitudes": [ 49.1652, 31.2304, 22.3964, 49.1652 ],
      "longitudes": [ -123.1411, 121.4737, 114.1095, -123.1411 ]
    } ],
    "images": [ {
      "svgPath": targetSVG,
      "title": "Vancouver",
      "latitude": 49.1652,
      "longitude": -123.1411
    }, {
      "svgPath": targetSVG,
      "title": "Hong Kong",
      "latitude": 22.3964,
      "longitude": 114.1095
    }, {
      "svgPath": targetSVG,
      "title": "Shanghai",
      "latitude": 31.2304,
      "longitude": 121.4737
    }, {
      "svgPath": targetSVG,
      "title": "Seattle",
      "latitude": 47.6062,
      "longitude": -122.3321
    }, {
      "svgPath": targetSVG,
      "title": "Edmonton",
      "latitude": 53.5444,
      "longitude": -113.4909
    }, {
      "svgPath": targetSVG,
      "title": "Calgary",
      "latitude": 51.0486,
      "longitude": -114.0708
    }, {
      "svgPath": targetSVG,
      "title": "Shanghai",
      "latitude": 31.2304,
      "longitude": 121.4737
    }, {
      "svgPath": targetSVG,
      "title": "Anchorage",
      "latitude": 61.2181,
      "longitude": -149.9003
    }, {
      "svgPath": targetSVG,
      "title": "Banff",
      "latitude": 51.1784,
      "longitude": -115.5708
    }, {
      "svgPath": targetSVG,
      "title": "San Francisco",
      "latitude": 37.7749,
      "longitude": -122.4194
    }, {
      "svgPath": targetSVG,
      "title": "Los Angeles",
      "latitude": 34.0522,
      "longitude": -118.2437
    }, {
      "svgPath": targetSVG,
      "title": "Las Vegas",
      "latitude": 36.1699,
      "longitude": -115.1398
    }, {
      "svgPath": targetSVG,
      "title": "Tokyo",
      "latitude": 35.6895,
      "longitude": 139.6917
    }, {
      "svgPath": targetSVG,
      "title": "Portland",
      "latitude": 45.5127,
      "longitude": -122.6795
    }, {
      "svgPath": targetSVG,
      "title": "Ottawa",
      "latitude": 45.4215,
      "longitude": -75.6972
    }, {
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#000000",
      "alpha": 0.1,
      "animateAlongLine": true,
      "lineId": "line2",
      "flipDirection": true,
      "loop": true,
      "scale": 0.03,
      "positionScale": 1.3
    }, {
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#585869",
      "animateAlongLine": true,
      "lineId": "line1",
      "flipDirection": true,
      "loop": true,
      "scale": 0.03,
      "positionScale": 1.8
    } ]
  },

  "areasSettings": {
    "unlistedAreasColor": "#8dd9ef"
  },

  "imagesSettings": {
    "color": "#585869",
    "rollOverColor": "#585869",
    "selectedColor": "#585869",
    "pauseDuration": 0.2,
    "animationDuration": 3,
    "adjustAnimationSpeed": true
  },

  "linesSettings": {
    "color": "#585869",
    "alpha": 0.4
  },

  "export": {
    "enabled": false
  }

} );