window.onload = function () {
  alert("hi");
  var ImageMap = function (map, img) {
          console.log("masuk js");
          var n,
              areas = map.getElementsByTagName('area'),
              len = areas.length,
              coords = [],
              previousWidth = 128;
          for (n = 0; n < len; n++) {
              coords[n] = areas[n].coords.split(',');
          }
          this.resize = function () {
              var n, m, clen,
                  x = img.offsetWidth / previousWidth;
              for (n = 0; n < len; n++) {
                  clen = coords[n].length;
                  for (m = 0; m < clen; m++) {
                      coords[n][m] *= x;
                  }
                  areas[n].coords = coords[n].join(',');
              }
              previousWidth = img.offsetWidth;
              return true;
          };
          window.onresize = this.resize;
      },
      imageMap = new ImageMap(document.getElementById('map_ID'), document.getElementById('img_ID'));
  imageMap.resize();
  return;
}
