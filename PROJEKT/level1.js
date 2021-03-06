(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("level1",
{ "compressionlevel":-1,
 "height":20,
 "infinite":false,
 "layers":[
        {
         "data":[11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
            11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
            11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
            11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
            11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
            11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
            11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
            11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
            11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
            11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
            11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
            11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
            11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
            11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
            11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
            11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
            11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
            11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
            11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
            11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
         "height":20,
         "id":3,
         "name":"background",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
         "height":20,
         "id":4,
         "name":"platforms",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":21,
         "name":"brick",
         "objects":[
                {
                 "gid":1,
                 "height":32,
                 "id":190,
                 "name":"state1",
                 "rotation":0,
                 "type":"Brick",
                 "visible":true,
                 "width":32,
                 "x":449,
                 "y":481
                }, 
                {
                 "gid":12,
                 "height":32,
                 "id":191,
                 "name":"state2",
                 "rotation":0,
                 "type":"Brick",
                 "visible":true,
                 "width":32,
                 "x":480,
                 "y":480
                }, 
                {
                 "gid":23,
                 "height":32,
                 "id":192,
                 "name":"state3",
                 "rotation":0,
                 "type":"Brick",
                 "visible":true,
                 "width":32,
                 "x":513,
                 "y":480
                }, 
                {
                 "gid":34,
                 "height":32,
                 "id":193,
                 "name":"state4",
                 "rotation":0,
                 "type":"Brick",
                 "visible":true,
                 "width":32,
                 "x":545,
                 "y":481
                }, 
                {
                 "gid":45,
                 "height":32,
                 "id":194,
                 "name":"state5",
                 "rotation":0,
                 "type":"Brick",
                 "visible":true,
                 "width":32,
                 "x":575,
                 "y":480
                }, 
                {
                 "gid":56,
                 "height":32,
                 "id":195,
                 "name":"state6",
                 "rotation":0,
                 "type":"Brick",
                 "visible":true,
                 "width":32,
                 "x":608,
                 "y":480
                }, 
                {
                 "gid":10,
                 "height":32,
                 "id":196,
                 "name":"state7",
                 "rotation":0,
                 "type":"Brick",
                 "visible":true,
                 "width":32,
                 "x":641,
                 "y":481
                }],
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"Brick"
                }],
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":18,
         "name":"ladders",
         "objects":[
                {
                 "gid":25,
                 "height":32,
                 "id":122,
                 "name":"s1",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":159.894,
                 "y":543
                }, 
                {
                 "gid":25,
                 "height":32,
                 "id":124,
                 "name":"s4",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":928.135,
                 "y":544
                }, 
                {
                 "gid":25,
                 "height":32,
                 "id":125,
                 "name":"s11",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":735.859,
                 "y":448
                }, 
                {
                 "gid":25,
                 "height":32,
                 "id":127,
                 "name":"s19",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":96.0891,
                 "y":320
                }, 
                {
                 "gid":25,
                 "height":32,
                 "id":128,
                 "name":"s23",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":223.698,
                 "y":192
                }, 
                {
                 "gid":25,
                 "height":32,
                 "id":129,
                 "name":"s28",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":480.641,
                 "y":192
                }, 
                {
                 "gid":25,
                 "height":32,
                 "id":131,
                 "name":"s31",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":864.331,
                 "y":192
                }, 
                {
                 "gid":25,
                 "height":32,
                 "id":132,
                 "name":"s34",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":766.899,
                 "y":96
                }, 
                {
                 "gid":25,
                 "height":32,
                 "id":133,
                 "name":"s26",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":223.698,
                 "y":96
                }, 
                {
                 "gid":25,
                 "height":32,
                 "id":134,
                 "name":"s22",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":96.0891,
                 "y":224
                }, 
                {
                 "gid":25,
                 "height":32,
                 "id":135,
                 "name":"s10",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":319.405,
                 "y":352
                }, 
                {
                 "gid":25,
                 "height":32,
                 "id":136,
                 "name":"s14",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":735.859,
                 "y":352
                }, 
                {
                 "gid":25,
                 "height":32,
                 "id":137,
                 "name":"s17",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":735.859,
                 "y":256
                }, 
                {
                 "gid":14,
                 "height":32,
                 "id":138,
                 "name":"s2",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":159.894,
                 "y":512
                }, 
                {
                 "gid":14,
                 "height":32,
                 "id":140,
                 "name":"s12",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":735.859,
                 "y":416
                }, 
                {
                 "gid":14,
                 "height":32,
                 "id":141,
                 "name":"s5",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":928.135,
                 "y":512
                }, 
                {
                 "gid":14,
                 "height":32,
                 "id":142,
                 "name":"s15",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":735.859,
                 "y":320
                }, 
                {
                 "gid":14,
                 "height":32,
                 "id":143,
                 "name":"s20",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":96.0891,
                 "y":288
                }, 
                {
                 "gid":14,
                 "height":32,
                 "id":144,
                 "name":"s24",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":223.698,
                 "y":160
                }, 
                {
                 "gid":14,
                 "height":32,
                 "id":145,
                 "name":"s29",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":480.641,
                 "y":160
                }, 
                {
                 "gid":14,
                 "height":32,
                 "id":146,
                 "name":"s32",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":864.331,
                 "y":160
                }, 
                {
                 "gid":14,
                 "height":32,
                 "id":147,
                 "name":"s35",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":766.899,
                 "y":64
                }, 
                {
                 "gid":14,
                 "height":32,
                 "id":148,
                 "name":"s27",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":223.698,
                 "y":64
                }, 
                {
                 "gid":3,
                 "height":32,
                 "id":149,
                 "name":"s3",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":159.894,
                 "y":480
                }, 
                {
                 "gid":3,
                 "height":32,
                 "id":150,
                 "name":"s9",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":319.405,
                 "y":384
                }, 
                {
                 "gid":3,
                 "height":32,
                 "id":151,
                 "name":"s21",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":96.0891,
                 "y":256
                }, 
                {
                 "gid":3,
                 "height":32,
                 "id":152,
                 "name":"s25",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":223.698,
                 "y":128
                }, 
                {
                 "gid":3,
                 "height":32,
                 "id":153,
                 "name":"s30",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":480.641,
                 "y":128
                }, 
                {
                 "gid":3,
                 "height":32,
                 "id":154,
                 "name":"s33",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":864.331,
                 "y":128
                }, 
                {
                 "gid":3,
                 "height":32,
                 "id":155,
                 "name":"s36",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":766.899,
                 "y":32
                },
            
                {
                 "gid":3,
                 "height":32,
                 "id":156,
                 "name":"s13",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":735.859,
                 "y":384
                }, 
                {
                 "gid":3,
                 "height":32,
                 "id":158,
                 "name":"s16",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":735.859,
                 "y":288
                }, 
                {
                 "gid":3,
                 "height":32,
                 "id":159,
                 "name":"s6",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":928.135,
                 "y":480
                }, 
                {
                 "gid":25,
                 "height":32,
                 "id":160,
                 "name":"s37",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":766.899,
                 "y":0
                }, 
                {
                 "gid":14,
                 "height":32,
                 "id":162,
                 "name":"s18",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":735.859,
                 "y":224
                }, 
                {
                 "gid":14,
                 "height":32,
                 "id":164,
                 "name":"s8",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":319.405,
                 "y":416
                }, 
                {
                 "gid":25,
                 "height":32,
                 "id":165,
                 "name":"s7",
                 "rotation":0,
                 "type":"Ladders",
                 "visible":true,
                 "width":32,
                 "x":319.405,
                 "y":448
                }],
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"Ladders"
                }],
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":17,
         "name":"bars",
         "objects":[
                {
                 "gid":4,
                 "height":32,
                 "id":79,
                 "name":"b2",
                 "rotation":0,
                 "type":"Bars",
                 "visible":true,
                 "width":385.512,
                 "x":351.031,
                 "y":384
                }, 
                {
                 "gid":4,
                 "height":32,
                 "id":94,
                 "name":"b1",
                 "rotation":0,
                 "type":"Bars",
                 "visible":true,
                 "width":313.085,
                 "x":254.014,
                 "y":96
                }],
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"Bars"
                }],
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":19,
         "name":"gold",
         "objects":[
                {
                 "gid":7,
                 "height":32,
                 "id":166,
                 "name":"g1",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":193,
                 "y":314
                }, 
                {
                 "gid":7,
                 "height":32,
                 "id":167,
                 "name":"g2",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":833,
                 "y":448
                }, 
                {
                 "gid":7,
                 "height":32,
                 "id":168,
                 "name":"g3",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":321,
                 "y":543
                }, 
                {
                 "gid":7,
                 "height":32,
                 "id":169,
                 "name":"g4",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":577,
                 "y":192
                }],
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"Gold"
                }],
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 239, 240, 241, 242, 223, 224, 225, 226,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 302, 301, 300, 299, 294, 293, 292, 291,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 235, 236, 237, 238,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "id":10,
         "name":"guard",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"guard"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[187, 188, 189, 190, 203, 204, 205, 206, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            258, 257, 256, 255, 266, 265, 264, 263, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            199, 200, 201, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "id":12,
         "name":"hero",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"hero"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }],
 "nextlayerid":22,
 "nextobjectid":197,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.8.5",
 "tileheight":32,
 "tilesets":[
        {
         "columns":11,
         "firstgid":1,
         "image":"maps\/projekt\/NES - Lode Runner - Tileset.png",
         "imageheight":192,
         "imagewidth":352,
         "margin":0,
         "name":"platforme",
         "spacing":0,
         "tilecount":66,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":12,
         "firstgid":67,
         "image":"maps\/projekt\/NES - Lode Runner - Characters.png",
         "imageheight":160,
         "imagewidth":384,
         "margin":0,
         "name":"hero",
         "spacing":0,
         "tilecount":60,
         "tileheight":32,
         "tilewidth":32,
         "transparentcolor":"#000001"
        }, 
        {
         "columns":12,
         "firstgid":127,
         "image":"maps\/projekt\/NES - Lode Runner - Charactersd.png",
         "imageheight":160,
         "imagewidth":384,
         "margin":0,
         "name":"hero-r",
         "spacing":0,
         "tilecount":60,
         "tileheight":32,
         "tilewidth":32,
         "transparentcolor":"#000001"
        }, 
        {
         "columns":12,
         "firstgid":187,
         "image":"maps\/projekt\/output-onlinepngtools.png",
         "imageheight":160,
         "imagewidth":384,
         "margin":0,
         "name":"novo-l",
         "spacing":0,
         "tilecount":60,
         "tileheight":32,
         "tilewidth":32,
         "transparentcolor":"#000001"
        }, 
        {
         "columns":12,
         "firstgid":247,
         "image":"maps\/projekt\/output-onlinepngtools(1).png",
         "imageheight":160,
         "imagewidth":384,
         "margin":0,
         "name":"novo-r",
         "spacing":0,
         "tilecount":60,
         "tileheight":32,
         "tilewidth":32,
         "transparentcolor":"#000001"
        }],
 "tilewidth":32,
 "type":"map",
 "version":"1.8",
 "width":30
});