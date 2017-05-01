/**
 * Created by Brendan on 4/2/2017.
 */
'use strict';
angular.module('angularBoilerplateApp.services')
  .service('navService', function ($rootScope, $q, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var self = this;
    // self.apiKey = "&departure_time=1541202457&traffic_model=best_guess&key=AIzaSyBu6QqMhIhGQgZrkh8azlDqROY5I3_3Uu4";
    // self.url = "https://maps.googleapis.com/maps/api/directions/json";
    // self.originStr = "?origin=";
    // self.destinationStr = "&destination=";

    //The following 4 objects are copied directly from real Google Map Direction API calls
    //I use them in lieu of calls based on real user input due to CORS issues
    self.tempTransitObj = {
      "geocoded_waypoints": [
        {
          "geocoder_status": "OK",
          "partial_match": true,
          "place_id": "ChIJkYaLwAIG9YgRQ_GSN7N5ZIc",
          "types": [
            "street_address"
          ]
        },
        {
          "geocoder_status": "OK",
          "partial_match": true,
          "place_id": "ChIJDdmRwWYE9YgRG9PijMy2IOk",
          "types": [
            "street_address"
          ]
        }
      ],
      "routes": [
        {
          "bounds": {
            "northeast": {
              "lat": 33.8455977,
              "lng": -84.3391324
            },
            "southwest": {
              "lat": 33.7761755,
              "lng": -84.38798299999999
            }
          },
          "copyrights": "Map data ©2017 Google",
          "legs": [
            {
              "arrival_time": {
                "text": "11:03pm",
                "time_zone": "America/New_York",
                "value": 1493607789
              },
              "departure_time": {
                "text": "10:08pm",
                "time_zone": "America/New_York",
                "value": 1493604494
              },
              "distance": {
                "text": "7.4 mi",
                "value": 11981
              },
              "duration": {
                "text": "55 mins",
                "value": 3295
              },
              "end_address": "85 5th St NE, Atlanta, GA 30308, USA",
              "end_location": {
                "lat": 33.7761755,
                "lng": -84.3848289
              },
              "start_address": "1075 Lynmoor Dr NE, Atlanta, GA 30319, USA",
              "start_location": {
                "lat": 33.8444895,
                "lng": -84.3448779
              },
              "steps": [
                {
                  "distance": {
                    "text": "0.4 mi",
                    "value": 658
                  },
                  "duration": {
                    "text": "9 mins",
                    "value": 512
                  },
                  "end_location": {
                    "lat": 33.845069,
                    "lng": -84.339264
                  },
                  "html_instructions": "Walk to N Druid Hills Rd @ Lenox Park",
                  "polyline": {
                    "points": "agqmEnrxaOAWCc@?}@?iA?iB@oC?kE?iAIAkACQ?IAKEGEMKGKGMMe@YiAM_@j@UXOLGJIFGDIBIFQ@KDq@Bo@[??L"
                  },
                  "start_location": {
                    "lat": 33.8444895,
                    "lng": -84.3448779
                  },
                  "steps": [
                    {
                      "distance": {
                        "text": "0.2 mi",
                        "value": 334
                      },
                      "duration": {
                        "text": "4 mins",
                        "value": 259
                      },
                      "end_location": {
                        "lat": 33.8445099,
                        "lng": -84.34125859999999
                      },
                      "html_instructions": "Head <b>east</b> on <b>Lynmoor Dr NE</b>",
                      "polyline": {
                        "points": "agqmEnrxaOAWCc@?}@?iA?iB@oC?kE?iA"
                      },
                      "start_location": {
                        "lat": 33.8444895,
                        "lng": -84.3448779
                      },
                      "travel_mode": "WALKING"
                    },
                    {
                      "distance": {
                        "text": "0.1 mi",
                        "value": 173
                      },
                      "duration": {
                        "text": "2 mins",
                        "value": 129
                      },
                      "end_location": {
                        "lat": 33.8455977,
                        "lng": -84.34025339999999
                      },
                      "html_instructions": "Turn <b>left</b> to stay on <b>Lynmoor Dr NE</b>",
                      "maneuver": "turn-left",
                      "polyline": {
                        "points": "egqmEz{waOIAkACQ?IAKEGEMKGKGMMe@YiAM_@"
                      },
                      "start_location": {
                        "lat": 33.8445099,
                        "lng": -84.34125859999999
                      },
                      "travel_mode": "WALKING"
                    },
                    {
                      "distance": {
                        "text": "446 ft",
                        "value": 136
                      },
                      "duration": {
                        "text": "2 mins",
                        "value": 107
                      },
                      "end_location": {
                        "lat": 33.8449317,
                        "lng": -84.33919449999999
                      },
                      "html_instructions": "Turn <b>right</b> onto <b>Lenox Park Blvd NE</b>",
                      "maneuver": "turn-right",
                      "polyline": {
                        "points": "_nqmEpuwaOj@UXOLGJIFGDIBIFQ@KDq@Bo@"
                      },
                      "start_location": {
                        "lat": 33.8455977,
                        "lng": -84.34025339999999
                      },
                      "travel_mode": "WALKING"
                    },
                    {
                      "distance": {
                        "text": "49 ft",
                        "value": 15
                      },
                      "duration": {
                        "text": "1 min",
                        "value": 17
                      },
                      "end_location": {
                        "lat": 33.845069,
                        "lng": -84.339264
                      },
                      "html_instructions": "Turn <b>left</b> onto <b>N Druid Hills Rd NE</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                      "maneuver": "turn-left",
                      "polyline": {
                        "points": "yiqmE|nwaO[??L"
                      },
                      "start_location": {
                        "lat": 33.8449317,
                        "lng": -84.33919449999999
                      },
                      "travel_mode": "WALKING"
                    }
                  ],
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "0.9 mi",
                    "value": 1497
                  },
                  "duration": {
                    "text": "3 mins",
                    "value": 206
                  },
                  "end_location": {
                    "lat": 33.8336,
                    "lng": -84.34074
                  },
                  "html_instructions": "Bus towards 8 - Kensington STA",
                  "polyline": {
                    "points": "ujqmEjowaO?ED?^A|@?l@B\\FXNXVRRT`@`@v@^t@`@dAFNN`@f@r@`@f@r@p@x@n@j@\\RHHBr@Xx@VtBb@j@N~Br@B@\\PTJf@Td@NfAV^F~@L`A?zAi@^K^KNEn@Sd@Ob@QDATKnAq@RMDCd@]pA{@t@g@\\UDC`@[LKNMLMLORUPSLOT]HONYj@h@"
                  },
                  "start_location": {
                    "lat": 33.845069,
                    "lng": -84.339264
                  },
                  "transit_details": {
                    "arrival_stop": {
                      "location": {
                        "lat": 33.8336,
                        "lng": -84.34074
                      },
                      "name": "N Druid Hills Rd NE @ Buford Hwy NE"
                    },
                    "arrival_time": {
                      "text": "10:19pm",
                      "time_zone": "America/New_York",
                      "value": 1493605198
                    },
                    "departure_stop": {
                      "location": {
                        "lat": 33.845069,
                        "lng": -84.339264
                      },
                      "name": "N Druid Hills Rd @ Lenox Park"
                    },
                    "departure_time": {
                      "text": "10:16pm",
                      "time_zone": "America/New_York",
                      "value": 1493604992
                    },
                    "headsign": "8 - Kensington STA",
                    "line": {
                      "agencies": [
                        {
                          "name": "Metropolitan Atlanta Rapid Transit Authority",
                          "phone": "1 (404) 848-5000",
                          "url": "http://www.itsmarta.com/"
                        }
                      ],
                      "color": "#008000",
                      "name": "North Druid Hills Rd.",
                      "short_name": "8",
                      "text_color": "#000000",
                      "vehicle": {
                        "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/bus2.png",
                        "name": "Bus",
                        "type": "BUS"
                      }
                    },
                    "num_stops": 7
                  },
                  "travel_mode": "TRANSIT"
                },
                {
                  "distance": {
                    "text": "184 ft",
                    "value": 56
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 0
                  },
                  "end_location": {
                    "lat": 33.833721,
                    "lng": -84.340143
                  },
                  "html_instructions": "Walk to N Druid Hills Rd NE @ Buford Hwy NE",
                  "polyline": {
                    "points": "_comErxwaOWwB"
                  },
                  "start_location": {
                    "lat": 33.8336,
                    "lng": -84.34074
                  },
                  "steps": [
                    {
                      "distance": {
                        "text": "184 ft",
                        "value": 56
                      },
                      "duration": {
                        "text": "1 min",
                        "value": 0
                      },
                      "end_location": {
                        "lat": 33.833721,
                        "lng": -84.340143
                      },
                      "polyline": {
                        "points": "_comErxwaOWwB"
                      },
                      "start_location": {
                        "lat": 33.8336,
                        "lng": -84.34074
                      },
                      "travel_mode": "WALKING"
                    }
                  ],
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "2.3 mi",
                    "value": 3772
                  },
                  "duration": {
                    "text": "9 mins",
                    "value": 540
                  },
                  "end_location": {
                    "lat": 33.823072,
                    "lng": -84.36995
                  },
                  "html_instructions": "Bus towards 39 Buford Hwy - Lindbergh STA",
                  "polyline": {
                    "points": "wcomEztwaOiDiEVZ~CvD`CrCTXlJ|KJLfAtAhBvBpAzAxClD`AhAbFfGnAxAxCfDPRZ^V`@Vj@Jr@Nn@Fh@Ft@@d@?b@Gz@Ej@Eb@Ed@IbBAh@@h@LdBTx@`BlGDLZnAr@vCRz@Lx@Fx@Ax@AZC\\kAhG_@nBMl@Q|@Oz@c@bCSjA_@rBM`AEl@Cb@At@EhDCvCCdB?j@?jD?f@?jA?`B?V?f@TBBnBEdBUvAET]nCNPvFx@pAV^@dFK"
                  },
                  "start_location": {
                    "lat": 33.833721,
                    "lng": -84.340143
                  },
                  "transit_details": {
                    "arrival_stop": {
                      "location": {
                        "lat": 33.823072,
                        "lng": -84.36995
                      },
                      "name": "Lindbergh Center Station"
                    },
                    "arrival_time": {
                      "text": "10:40pm",
                      "time_zone": "America/New_York",
                      "value": 1493606400
                    },
                    "departure_stop": {
                      "location": {
                        "lat": 33.833721,
                        "lng": -84.340143
                      },
                      "name": "N Druid Hills Rd NE @ Buford Hwy NE"
                    },
                    "departure_time": {
                      "text": "10:31pm",
                      "time_zone": "America/New_York",
                      "value": 1493605860
                    },
                    "headsign": "39 Buford Hwy - Lindbergh STA",
                    "line": {
                      "agencies": [
                        {
                          "name": "Metropolitan Atlanta Rapid Transit Authority",
                          "phone": "1 (404) 848-5000",
                          "url": "http://www.itsmarta.com/"
                        }
                      ],
                      "color": "#00f200",
                      "name": "Buford Highway",
                      "short_name": "39",
                      "text_color": "#000000",
                      "vehicle": {
                        "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/bus2.png",
                        "name": "Bus",
                        "type": "BUS"
                      }
                    },
                    "num_stops": 10
                  },
                  "travel_mode": "TRANSIT"
                },
                {
                  "distance": {
                    "text": "161 ft",
                    "value": 49
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 49
                  },
                  "end_location": {
                    "lat": 33.8230549,
                    "lng": -84.36941539999999
                  },
                  "html_instructions": "Walk to Lindbergh Center Transit Station",
                  "polyline": {
                    "points": "eammEdo}aOBiB"
                  },
                  "start_location": {
                    "lat": 33.823072,
                    "lng": -84.36995
                  },
                  "steps": [
                    {
                      "distance": {
                        "text": "161 ft",
                        "value": 49
                      },
                      "duration": {
                        "text": "1 min",
                        "value": 49
                      },
                      "end_location": {
                        "lat": 33.8230549,
                        "lng": -84.36941539999999
                      },
                      "polyline": {
                        "points": "eammEdo}aOBiB"
                      },
                      "start_location": {
                        "lat": 33.823072,
                        "lng": -84.36995
                      },
                      "travel_mode": "WALKING"
                    }
                  ],
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "3.3 mi",
                    "value": 5268
                  },
                  "duration": {
                    "text": "6 mins",
                    "value": 360
                  },
                  "end_location": {
                    "lat": 33.781247,
                    "lng": -84.38634200000001
                  },
                  "html_instructions": "Metro rail towards Gold Southbound to Airport Station",
                  "polyline": {
                    "points": "aammEzk}aOCNTDt@Nr@Lt@Lt@Lt@Nr@L@?p@LB?^F@@@?@?@??@@?@?@?@??@@?@?@?@@@?@?@?@@@?@?@?@@@?@?@@@?@?@??@@?@?@?@??@@?@?@?@@@?@?@?@@@?@??@@?@?@?@??@@?@?@@@?@?@?@@@?@?@@@?@?@?@@@?@??@@?@?@?@@@?@??@@?@?@?@@@?@?@@@?@?@@@?@??@@?@?@?@@@?@??@@?@?@@@?@??@@?@?@?@@@?@@@?@??@@?@?@@@?@??@@?@??@@?@?@@@?@?@@@?@??@@?@@@?@@@?@?@@@?@@@??@@?@?@@@?@@@?@@@?@@@?@??@@??@@?@?@@@?@@@?@@@?@@@?@@@@@?@??@@?@@@??@@?@??@@?@@@??@@?@??@@?@@@?@@@?@@@@@?@@@@@?@@@?@@@@@?@@@@@?@@@@@?@@@@@?@@@@@?@@JF@@@@@??@@?@@@??@@?@@@@@??@@??@@?@??@@??@@?@@@??@@??@@??@@?@??@@?@@@@@@@?@@@@@@@?@@@@@@@@@?@@@@@@@??@@??@@?@??@@??@@??@@?@@@??@@??@@?@@@@@?@@@@@@@@@??@@??@@?@@@??@BBl@b@l@b@l@b@l@b@`@Z@?@@@@@??@@??@@?@@@@@??@@?@@@@@@@?@@?@@?@@@@@??@@?@@@??@@??@@??@@??@@?@@@@@??@@?@@@@@@@@@?@@@@@??@@??@@??@@?@??@@??@@??@@??@@?@@@@@??@@?@@@@@@@@@??@@?@@@??@@??@@??@@??@@?@@@??@@??@@?@@@@@@@@@?@@?@@?@@@??@@??@@??@@??@@?@@@??@@??@@??@@?@@@@@@@@@??@@?@@@@@??@@??@@??@@?@@@@@@@??@@??@@?@@@@@@@@@??@@??@@?@@@@@??@@??@@?@@@@@@BBl@d@l@d@j@d@j@d@l@d@j@d@l@d@j@d@l@d@TP@@@@@@@?@@?@@?@@@@@??@@??@@??@@??@@?@@@@@??@@?@@@@@@@@@??@@??@@?@@@@@??@@??@@??@@??@@?@@@@@@@?@@@@@@@@@??@@??@@?@@@??@@??@@??@@?@@@@@??@@?@@@@@@@?@@@@@@@@@??@@??@@?@??@@??@@??@@?@@@??@@??@@?@@@@@?@@@@@@@?@@@@@@@?@@@@@@@??@@?@@@??@@?@@@@@?@@@@@??@@??@@?@??@@??@@?@??@@??@@?@??@@??@@?@@@??@@?@??@@??@@?@@@??@@?@??@@??@@?@??@@?@@@??@@??@@?@??@@?@@@?@@@??@@?@@@@@?@@@?@@@?@@@@@?@@@@@?@@@?@@@??@@?@@@?@??@@??@@?@??@@?@??@@?@@@??@@?@?@@@@@?@@@?@@@?@@@?@@@??@@?@??@@?@??@@??@@?@?@@@??@@?@?@@@@@?@??@@?@??@@?@??@@??@@?@?@@@??@@?@?@@@@@?@?@@@@@?@??@@?@@@?@@@?@@@?@@@?@@@?@@@??@@?@??@@?@??@FBp@Xp@Xf@R@?@@@?@@@?@@@??@@?@??@@?@??@@?@@@?@@@?@?@@@@@?@@@??@@?@?@@@??@@?@?@@@@@?@?@@@??@@?@??@@?@??@@?@??@@??@@?@?@@@??@@?@?@@@@@?@@@?@@@??@@?@??@@?@??@@?@??@@?@@@??@@?@??@@?@@@?@@@?@@@??@@?@@@?@@@?@@@??@@??@@?@??@@?@??@@?@??@@??@@?@??@@??@@?@??@@?@@@??@@?@??@@??@@?@??@@?@??@@??@@?@??@@??@@?@??@@??@@?@@@??@@?@??@@??@@?@@@??@@??@@?@??@@??@@?@@@??@@??@@?@??@@?@@@@@@@?@@@@@??@@?@@@@@@@?@@@@@@@??@@??@@??@@?@@@??@@??@@??@@?@@@@@?@@@@@@@@@@@??@@??@@??@@??@@??@@?@@@@@??@@?@@@@@@@@@@@@@??@@??@@??@@??@@@@?@@?@@?@@?@@??@@??@@??@@??@@?@@@@@@@@@@?@@??@@??@@??@@??@@?@@?@@?@@?@@??@@??@@??@@??@@??@@@@@@@@@?@@??@@??@@??@@??@@??@@@@@@@@@?@@??@@??@@??@@@@@@B@??@@??@@??@@@@@@@?@@??@@@@@?@@??@@??@@@@@@@?@@??@@??@?@@??@@??@@@@@@@?@@??@@??@?@@??@@@@@@@?@@??@@??@?@@??@@??@@@@@?@@??@@@?@@??@@@@@?@@@@@@@?@@??@?@@??@@@@@?@@??@@@?@@??@@??@@@?@@@@@?@@??@?@@??@@??@@@?@@@@@@@?@@??@?@@??@@@@@?@@@?@@??@@??@?@@??@@@@@?@@@@@?@@??@?@@??@@@?@@@@@?@@??@@??@?@@??@@@@@?@@@@@?@@??@?@@??@@@?@@@@?Zj@`@r@`@r@`@r@`@r@`@r@`@p@`@r@@B@@@@?@@@?@@??@@@?@@@@@?@@??@@@?@@??@@@?@@@@@?@@??@@@?@@??@@@?@@@@@?@@??@@@?@@??@@@@@?@@@@@?@@??@?@@??@@@@@?@@@@@?@@??@@@?@@??@@@?@@@@@?@@??@@@?@@??@@@@@?@@??@@@?@@??@@@@@?@@@@@?@@??@?@@??@@??@@@?@@@@@?@@??@@??@?@@??@@@@@@@?@@@?@@??@HJb@p@`@p@b@p@b@p@b@p@b@r@`@p@b@p@JN@@@@?@@@?@@??@@??@?@@??@@@@@?@@??@@@?@@??@@??@@@?@@@@@@@?@@??@@@?@@??@@@@@?@@??@?@@??@@??@@@@@@@?@@@?@@??@@??@@@?@@??@@@@@?@@??@@@@@?@@??@@@@@?@@??@@@?@@??@@??@@@@@?@@??@@@?@@??@@??@@@@@@@?@@??@@??@?@@??@@@@@@@@@?@@??@@@@@?@@??@@@@@@@?@@??@@??@@@@@@@@@?@@??@@??@@??@@@?@@??@@??@@@@@@@@@?@@??@@??@@??@@@@@@@@@?@@??@@??@@??@@@@@@@@@@@@@?@@?@@@@@@@@@@@@?@@??@@??@@??@@??@@?@@@@?@@?@@?@@??@@??@@??@@??@@?@@@@@@@@@@@@@@@??@@??@@??@@??@@??@@?@@@@@@@@@@@??@@??@@??@@??@@??@@?@@@@@??@@@@?@@@@@@@??@@??@@??@@?@@@??@@??@@??@@?@@@@@?@@@@@@@@@?@@@@@@@??@@?@@@@@??@@?@@@??@@??@@?@??@@??@@?@??@@??@@??@@?@??@@??@@?@@@??@@?@??@@??@@?@@@??@@?@@@??@@?@??@@??@@?@??@@?@??@@??@@?@??@@??@@?@??@@?@@@?@@@??@@?@@@?@@@?@@@@@?@@@?@@@??@@?@??@@?@??@@?@@@?@@@??@@?@?@@@@@?@?@@@??@@?@??@@?@??@@?@@@?@@@?@?@@@?@@@??@@?@??@@?@?@@@?@@@?@??@@?@??@@?@?@@@?@@@?@?@@@??@@?@?@@@?@?@@@?@??@@?@?@@@?@??@@?@?@@@?@?@@@?@??@@?@?@@@?@?@@@?@?@@@?@??@@?@?@?@@@?@??@@?@?@?@@@?@?@@@?@?@??@@?@?@@@?@?@?@@@?@?@??@@?@?@?@??@@?@?@?@@@?@?@?@@@?@?@@@?@?@?@?@@@?@?@??@@?@?@?@?@@@?@?@?@@@?@?@?@?@@@?@?@?@??@@?@?@?@?@@@?@?@?@?@@@?@?@?@?@@@?@?@?@?@?@@@?@?@?@?@?@@@?@?@?@?@@@?@?@?@?@?@?@@@?@?@?@?@?@@@?@?@?@?@?@?@?@@@?@?@?@?@?@?@@@?@?@?@?@?@?@?@?@?@@@?@?@?@?@?@?@?@?@@@?@?@?@?@?@?@?@?@?@?@?@@@?@?@?@?@?@?@?@?@?@?@?@?@?@@@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@@@?@?@?@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?h@At@Av@?t@Av@At@?RA@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@??A@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@?@?@?@?@?@?@?@??A@?@?@?@?@?@?@?@?@?@?NA@?@?@?@?@?@??A@?@?@?@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@?JA@?@?@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@??A@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?V?v@?t@?v@@v@?t@?D?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?P?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@??A@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@??A@?@?@?@?@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@?@?@A@?@?@?@?@?@??A@?@?@?@?@?@?@?@A@?@?@?@?@?@A@?@?@?@?@?@?@A@?@?@?@?@??A@?@?@?@?@?@?@A@?@?@?@?@A@?@?@?@?@?@A@?@?@?@?@??A@?@?@?@?@?@??A@?@?@?@?@A@?@?@?@?@?@A@?@?@?@??A@?@?JAt@It@It@It@Kv@IXCZEt@It@It@It@It@Kv@Ir@It@It@ID?@A@?@?@?@??A@?@?@?@?@?@A@?@?@?@?@A@?@?@?@?@?@A@?@?@?@??A@?@?@?@?@?@?@A@?@?@?@?@A@?@?@?@?@?@A@?@?@?@?@?@A@?@?@?@?@?@??A@?@?@?@?@?@??A@?@?@?@?@?@?@?@A@?@?@?@?@?@A@?@?@?@?@?@?@?@??A@?@?@?@?@?@?@??A@?@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@??A@?@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@?@?@?@?@?@AN?v@Ct@Cv@Ct@Av@Cj@C@?@?@?@?@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@?@?@?@?@?@?@A@?@?@?@?@?@?@?@?@?@?@A@?j@Cv@Ct@CLA?E"
                  },
                  "start_location": {
                    "lat": 33.8230549,
                    "lng": -84.36941539999999
                  },
                  "transit_details": {
                    "arrival_stop": {
                      "location": {
                        "lat": 33.781247,
                        "lng": -84.38634200000001
                      },
                      "name": "Midtown Transit Station"
                    },
                    "arrival_time": {
                      "text": "10:54pm",
                      "time_zone": "America/New_York",
                      "value": 1493607240
                    },
                    "departure_stop": {
                      "location": {
                        "lat": 33.8230549,
                        "lng": -84.36941539999999
                      },
                      "name": "Lindbergh Center Transit Station"
                    },
                    "departure_time": {
                      "text": "10:48pm",
                      "time_zone": "America/New_York",
                      "value": 1493606880
                    },
                    "headsign": "Gold Southbound to Airport Station",
                    "line": {
                      "agencies": [
                        {
                          "name": "Metropolitan Atlanta Rapid Transit Authority",
                          "phone": "1 (404) 848-5000",
                          "url": "http://www.itsmarta.com/"
                        }
                      ],
                      "color": "#d4a723",
                      "name": "Gold",
                      "text_color": "#000000",
                      "vehicle": {
                        "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/metro.png",
                        "name": "Metro rail",
                        "type": "SUBWAY"
                      }
                    },
                    "num_stops": 2
                  },
                  "travel_mode": "TRANSIT"
                },
                {
                  "distance": {
                    "text": "0.4 mi",
                    "value": 681
                  },
                  "duration": {
                    "text": "9 mins",
                    "value": 538
                  },
                  "end_location": {
                    "lat": 33.7761755,
                    "lng": -84.3848289
                  },
                  "html_instructions": "Walk to 85 5th St NE, Atlanta, GA 30308, USA",
                  "polyline": {
                    "points": "y{dmEru`bOb@gA|@??kA`ABfDNHAJ?z@BN@|AFjBHJ@rBHnFV@_@JgE"
                  },
                  "start_location": {
                    "lat": 33.781247,
                    "lng": -84.38634200000001
                  },
                  "steps": [
                    {
                      "distance": {
                        "text": "115 ft",
                        "value": 35
                      },
                      "duration": {
                        "text": "1 min",
                        "value": 24
                      },
                      "end_location": {
                        "lat": 33.7807575,
                        "lng": -84.3859781
                      },
                      "html_instructions": "Head <b>south</b> toward <b>Peachtree Pl NE</b>",
                      "polyline": {
                        "points": "y{dmEru`bOb@gA|@?"
                      },
                      "start_location": {
                        "lat": 33.781247,
                        "lng": -84.38634200000001
                      },
                      "travel_mode": "WALKING"
                    },
                    {
                      "distance": {
                        "text": "115 ft",
                        "value": 35
                      },
                      "duration": {
                        "text": "1 min",
                        "value": 27
                      },
                      "end_location": {
                        "lat": 33.780764,
                        "lng": -84.385604
                      },
                      "html_instructions": "Turn <b>left</b> onto <b>Peachtree Pl NE</b>",
                      "maneuver": "turn-left",
                      "polyline": {
                        "points": "wxdmEjs`bO?kA"
                      },
                      "start_location": {
                        "lat": 33.7807575,
                        "lng": -84.3859781
                      },
                      "travel_mode": "WALKING"
                    },
                    {
                      "distance": {
                        "text": "0.3 mi",
                        "value": 503
                      },
                      "duration": {
                        "text": "7 mins",
                        "value": 403
                      },
                      "end_location": {
                        "lat": 33.7762529,
                        "lng": -84.3859899
                      },
                      "html_instructions": "Turn <b>right</b> onto <b>Cypress St NE</b>",
                      "maneuver": "turn-right",
                      "polyline": {
                        "points": "wxdmE~p`bO`ABfDNHAJ?z@BN@|AFjBHJ@rBHnFV"
                      },
                      "start_location": {
                        "lat": 33.780764,
                        "lng": -84.385604
                      },
                      "travel_mode": "WALKING"
                    },
                    {
                      "distance": {
                        "text": "354 ft",
                        "value": 108
                      },
                      "duration": {
                        "text": "1 min",
                        "value": 84
                      },
                      "end_location": {
                        "lat": 33.7761755,
                        "lng": -84.3848289
                      },
                      "html_instructions": "Turn <b>left</b> onto <b>5th St NE</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                      "maneuver": "turn-left",
                      "polyline": {
                        "points": "q|cmEls`bO@_@JgE"
                      },
                      "start_location": {
                        "lat": 33.7762529,
                        "lng": -84.3859899
                      },
                      "travel_mode": "WALKING"
                    }
                  ],
                  "travel_mode": "WALKING"
                }
              ],
              "traffic_speed_entry": [],
              "via_waypoint": []
            }
          ],
          "overview_polyline": {
            "points": "agqmEnrxaOE{@?gC@oOqBGSKUWUs@g@iBdAe@XQLQJ[F}@Bo@[??L?Ed@AjBB\\FXNl@j@v@xA`AzBVp@hAzAlB`B~@f@|@\\x@VtBb@jDbA~At@lBf@~AT`A?zAi@~@WhC{@~BmAxF{Dx@w@r@y@^m@NYj@h@WwBiDiEvDrEpOxQpDlEjFhGdHpIhF`Gl@r@n@lAZbBN~A@hAMfBKhAKlCNnCvBfIhBpHTrBCtAC\\kAhGm@|CyAhIm@tDIpAKvJCpC?rE?lFTBBnBEdBUvAET]nCNPvFx@pAV^@dFKBiBCNTDhB\\jBZ|Cj@j@HHBTDh@JtAXpAb@nAj@tAx@fJzGnCtBrPvMhAx@jAr@jAn@nAj@lHzCnAl@hAp@fAx@dA~@`AfAz@lAhCjEvIfOzK`Qz@jA~@fAbA`AhAz@jAr@nAj@pAd@pAZtATtANvAJvABrNIxDIxDMvAAzJ@hB?vACtAGtAMp]wDnDWrNa@j@C~@ElBGLA?Eb@gA|@??kA`ABpDLfABdFTbJ`@LgF"
          },
          "summary": "",
          "warnings": [
            "Walking directions are in beta.    Use caution – This route may be missing sidewalks or pedestrian paths."
          ],
          "waypoint_order": []
        }
      ],
      "status": "OK"
    };
    self.tempDrivingObj = {
      "geocoded_waypoints": [
        {
          "geocoder_status": "OK",
          "partial_match": true,
          "place_id": "ChIJkYaLwAIG9YgRQ_GSN7N5ZIc",
          "types": [
            "street_address"
          ]
        },
        {
          "geocoder_status": "OK",
          "partial_match": true,
          "place_id": "ChIJDdmRwWYE9YgRG9PijMy2IOk",
          "types": [
            "street_address"
          ]
        }
      ],
      "routes": [
        {
          "bounds": {
            "northeast": {
              "lat": 33.8455317,
              "lng": -84.3366934
            },
            "southwest": {
              "lat": 33.7712303,
              "lng": -84.39370049999999
            }
          },
          "copyrights": "Map data ©2017 Google",
          "legs": [
            {
              "distance": {
                "text": "8.3 mi",
                "value": 13297
              },
              "duration": {
                "text": "18 mins",
                "value": 1073
              },
              "duration_in_traffic": {
                "text": "20 mins",
                "value": 1194
              },
              "end_address": "85 5th St NE, Atlanta, GA 30308, USA",
              "end_location": {
                "lat": 33.7761755,
                "lng": -84.3848289
              },
              "start_address": "1075 Lynmoor Dr NE, Atlanta, GA 30319, USA",
              "start_location": {
                "lat": 33.8444895,
                "lng": -84.3448779
              },
              "steps": [
                {
                  "distance": {
                    "text": "0.2 mi",
                    "value": 334
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 50
                  },
                  "end_location": {
                    "lat": 33.8445099,
                    "lng": -84.34125859999999
                  },
                  "html_instructions": "Head <b>east</b> on <b>Lynmoor Dr NE</b>",
                  "polyline": {
                    "points": "agqmEnrxaOAWCc@?}@?iA?iB@oC?kE?iA"
                  },
                  "start_location": {
                    "lat": 33.8444895,
                    "lng": -84.3448779
                  },
                  "travel_mode": "DRIVING"
                },
                {
                  "distance": {
                    "text": "0.1 mi",
                    "value": 158
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 34
                  },
                  "end_location": {
                    "lat": 33.8455317,
                    "lng": -84.3404065
                  },
                  "html_instructions": "Turn <b>left</b> to stay on <b>Lynmoor Dr NE</b>",
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "egqmEz{waOIAkACQ?IAKEGEMKGKGMMe@YiA"
                  },
                  "start_location": {
                    "lat": 33.8445099,
                    "lng": -84.34125859999999
                  },
                  "travel_mode": "DRIVING"
                },
                {
                  "distance": {
                    "text": "492 ft",
                    "value": 150
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 33
                  },
                  "end_location": {
                    "lat": 33.844835,
                    "lng": -84.33920379999999
                  },
                  "html_instructions": "Turn <b>right</b> onto <b>Lenox Park Blvd NE</b>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "qmqmEpvwaOj@Y\\QPQJKHML[BSDi@@Y?e@"
                  },
                  "start_location": {
                    "lat": 33.8455317,
                    "lng": -84.3404065
                  },
                  "travel_mode": "DRIVING"
                },
                {
                  "distance": {
                    "text": "1.1 mi",
                    "value": 1807
                  },
                  "duration": {
                    "text": "4 mins",
                    "value": 251
                  },
                  "end_location": {
                    "lat": 33.8326223,
                    "lng": -84.33689319999999
                  },
                  "html_instructions": "Turn <b>right</b> at the 1st cross street onto <b>N Druid Hills Rd NE</b>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "eiqmE~nwaOR?N?J@V@n@LTJLFNJd@d@LNJJJXDLN\\L^h@vALZZb@`@d@ZXrAlATRXRl@Zd@Nt@RpDbAvBl@d@L`@N~@ZjAb@VHXJVFd@FlAc@x@Sv@Ux@UDCx@WZMBAVIRIz@e@~@o@t@g@nA{@b@[^[TQDCl@m@Z]LCRYDIFKFKN[^q@JOJg@DWJg@F[Hi@H]d@aCJq@FWHg@Ji@TgALw@Jk@"
                  },
                  "start_location": {
                    "lat": 33.844835,
                    "lng": -84.33920379999999
                  },
                  "travel_mode": "DRIVING"
                },
                {
                  "distance": {
                    "text": "0.2 mi",
                    "value": 347
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 26
                  },
                  "end_location": {
                    "lat": 33.8306743,
                    "lng": -84.339236
                  },
                  "html_instructions": "Turn <b>right</b> onto the <b>Interstate 85 S</b> ramp",
                  "polyline": {
                    "points": "{|nmEp`waOVUHEDCBABA@AB?B?BAB?`@?^n@JRNTJRHTJTVj@d@nApAlDFLj@j@"
                  },
                  "start_location": {
                    "lat": 33.8326223,
                    "lng": -84.33689319999999
                  },
                  "travel_mode": "DRIVING"
                },
                {
                  "distance": {
                    "text": "0.9 mi",
                    "value": 1430
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 50
                  },
                  "end_location": {
                    "lat": 33.8238611,
                    "lng": -84.35224149999999
                  },
                  "html_instructions": "Merge onto <b>I-85 S</b>",
                  "maneuver": "merge",
                  "polyline": {
                    "points": "upnmEfowaOpCpI~AxERh@HTr@~A`@v@\\j@`@r@lAbBbB|Bp@~@\\f@h@|@l@~@PXZn@^r@Th@v@jBfArCh@tAJNN\\d@fAh@vARh@Rh@HVf@tAl@nBNj@FTNr@TfALn@@D?D@B"
                  },
                  "start_location": {
                    "lat": 33.8306743,
                    "lng": -84.339236
                  },
                  "travel_mode": "DRIVING"
                },
                {
                  "distance": {
                    "text": "0.9 mi",
                    "value": 1397
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 59
                  },
                  "end_location": {
                    "lat": 33.8164102,
                    "lng": -84.36258579999999
                  },
                  "html_instructions": "Take exit <b>86</b> toward <b>Peachtree St</b>",
                  "maneuver": "ramp-right",
                  "polyline": {
                    "points": "cfmmEn`zaOEb@Hn@Fn@@NBVDb@@PHbABd@Bx@@bA@j@BRBj@@t@LzD?FBt@Dh@BXDXDZHXDTFRFRNXJTLTRZNTTTZTb@Zr@`@nBhAz@b@rDnBr@`@r@`@tCdBZPd@Vd@XbAj@|BpAfAr@dAr@n@d@^Z@?B@JD"
                  },
                  "start_location": {
                    "lat": 33.8238611,
                    "lng": -84.35224149999999
                  },
                  "travel_mode": "DRIVING"
                },
                {
                  "distance": {
                    "text": "1.2 mi",
                    "value": 1887
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 81
                  },
                  "end_location": {
                    "lat": 33.8066661,
                    "lng": -84.37889680000001
                  },
                  "html_instructions": "Merge onto <b>GA-13 S</b>",
                  "maneuver": "merge",
                  "polyline": {
                    "points": "qwkmEda|aOtApARRrBpBpB`ChA|Ap@bA|@rAl@bAXd@t@xADHHNHNR`@Rd@HNf@lA`AbC^bAz@bC^pA\\nAb@bBVdA^fBBLLr@N~@ZhBJn@RhAPv@J^Lh@Ph@HVTh@Xn@LXVb@\\j@b@n@l@t@X`@l@t@JNtBjClAxAJNRV`@f@b@j@X^d@r@\\j@^z@"
                  },
                  "start_location": {
                    "lat": 33.8164102,
                    "lng": -84.36258579999999
                  },
                  "travel_mode": "DRIVING"
                },
                {
                  "distance": {
                    "text": "0.5 mi",
                    "value": 762
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 37
                  },
                  "end_location": {
                    "lat": 33.8031453,
                    "lng": -84.38559169999999
                  },
                  "html_instructions": "Take the <b>I-85 S</b>/<b>I-75 S</b> exit",
                  "maneuver": "ramp-right",
                  "polyline": {
                    "points": "uzimEbg_bOFZFXL`@HXJb@F`@PdATlBD^LrA@FXnB?@Hf@BRBTJ\\BJDJFNFLBHDHDFDJHLDFJLFHFHDDHJDDBDHDFFVTBDHFl@l@FDBBBDBBFFDDBDLNp@z@HJFHZ^BDRXPVZb@\\d@LPFJDFBD@@@?@?@@@?@?L?"
                  },
                  "start_location": {
                    "lat": 33.8066661,
                    "lng": -84.37889680000001
                  },
                  "travel_mode": "DRIVING"
                },
                {
                  "distance": {
                    "text": "2.2 mi",
                    "value": 3551
                  },
                  "duration": {
                    "text": "2 mins",
                    "value": 141
                  },
                  "end_location": {
                    "lat": 33.7746976,
                    "lng": -84.3905017
                  },
                  "html_instructions": "Merge onto <b>I-85 S</b>",
                  "maneuver": "merge",
                  "polyline": {
                    "points": "udimE|p`bOvCdFfFtKTd@tClG~@vBjAhCR^Xd@NTDDPTPTTTXXRPTRLJRLLH\\TZPb@Th@TXLNDLDRDLDRDJ@ZFNBTBR@h@DJ@L?P?J?F?b@?^A`@Cp@Ir@Kh@Kh@QnNsE`Be@n@QLCLC`@KHAJCz@ObAO~@Of@G`AKLAjAKB?B?RF|@EnBIbBCbCAt@Ad@A^AhCA`AA`AAnACb@CtAEv@EfAE\\CXA^At@Cr@ArH?dF?X?pECf@A`AE~@CtAIf@EZELChAMpC_@nC_@fAS"
                  },
                  "start_location": {
                    "lat": 33.8031453,
                    "lng": -84.38559169999999
                  },
                  "travel_mode": "DRIVING"
                },
                {
                  "distance": {
                    "text": "0.2 mi",
                    "value": 279
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 23
                  },
                  "end_location": {
                    "lat": 33.7722001,
                    "lng": -84.39061769999999
                  },
                  "html_instructions": "Take exit <b>249D</b> toward <b>U.S. 78</b>/<b>North Avenue</b>/<b>Georgia Tech</b>/<b>U.S. 278</b>",
                  "maneuver": "ramp-right",
                  "polyline": {
                    "points": "{rcmEroabOj@JJ@H@F?P?l@AL?R?|AAP?@?tA@`@@R?hAF"
                  },
                  "start_location": {
                    "lat": 33.7746976,
                    "lng": -84.3905017
                  },
                  "travel_mode": "DRIVING"
                },
                {
                  "distance": {
                    "text": "328 ft",
                    "value": 100
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 39
                  },
                  "end_location": {
                    "lat": 33.7712984,
                    "lng": -84.3906739
                  },
                  "html_instructions": "Continue onto <b>Exit 249D</b>",
                  "polyline": {
                    "points": "gccmEjpabOhABhBD"
                  },
                  "start_location": {
                    "lat": 33.7722001,
                    "lng": -84.39061769999999
                  },
                  "travel_mode": "DRIVING"
                },
                {
                  "distance": {
                    "text": "0.2 mi",
                    "value": 301
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 87
                  },
                  "end_location": {
                    "lat": 33.7712649,
                    "lng": -84.3874206
                  },
                  "html_instructions": "Turn <b>left</b> onto <b>US-278 E</b>/<b>US-78 E</b>/<b>North Avenue NW</b>",
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "s}bmEtpabO@o@@o@?C?E@a@?a@?G?IBO?W@wA?m@@qB?gCEa@"
                  },
                  "start_location": {
                    "lat": 33.7712984,
                    "lng": -84.3906739
                  },
                  "travel_mode": "DRIVING"
                },
                {
                  "distance": {
                    "text": "0.4 mi",
                    "value": 564
                  },
                  "duration": {
                    "text": "2 mins",
                    "value": 110
                  },
                  "end_location": {
                    "lat": 33.776334,
                    "lng": -84.387309
                  },
                  "html_instructions": "Turn <b>left</b> onto <b>West Peachtree St NW</b>",
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "k}bmEj|`bOo@?_@Ai@AwAE_@?a@?]Aa@?g@AkAA}@AqA?eA?W?gAAy@?gAAY?{A?"
                  },
                  "start_location": {
                    "lat": 33.7712649,
                    "lng": -84.3874206
                  },
                  "travel_mode": "DRIVING"
                },
                {
                  "distance": {
                    "text": "0.1 mi",
                    "value": 230
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 52
                  },
                  "end_location": {
                    "lat": 33.7761755,
                    "lng": -84.3848289
                  },
                  "html_instructions": "Turn <b>right</b> onto <b>5th St NE</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "a}cmEt{`bOByABmAF_B@_@JgE"
                  },
                  "start_location": {
                    "lat": 33.776334,
                    "lng": -84.387309
                  },
                  "travel_mode": "DRIVING"
                }
              ],
              "traffic_speed_entry": [],
              "via_waypoint": []
            }
          ],
          "overview_polyline": {
            "points": "agqmEnrxaOE{@?gC@oOqBGSKUWUs@YiAj@Yn@c@TYPo@FcA?e@R?Z@fANb@Rt@p@XZn@dBv@rB|@hA~CnCl@Zd@NfFvA|Cz@`Bj@tC`Ad@FlAc@pBi@tC_AZKnAo@hFoDt@m@r@q@Z]LCXc@~@eBJOJg@P_A`AeFh@{Cb@_CJk@VUNIFCLCd@?j@bAp@tA|@zBxAzDj@j@pCpIrBbG|@tB~@bBnBvCtC|DfC~Dz@bBlAtCpBhFZl@vBrFp@lB|@zCz@`E@JCf@VfCT~CD|BD~@RdHH~AHr@\\~AVl@Xj@b@p@p@j@vA|@jDlBfFpChEfCjDnBdEdCtBxA`@ZNFhBdBrBpBpB`CzB`DjBvC~AxCz@fBhBpEzAfE|@`Dz@hD`AhFf@xCd@`Ct@jCn@xAd@|@`AzAfAvA|FjHdBzB~@rA\\j@^z@Nt@Vz@RdAf@rDRrBZvBPrA\\dAVh@`@n@^d@ZXfBdB~BtC~BfDFFF@L?vCdF|FzLtEdK~AhD`AvAtAvAdAv@x@f@lAj@jA^hATbBNv@@jAArAM|AWxOeFpCw@ZGv@QfFw@~CYVFlDObIIlHG`GS~CMhBExO?jFChBGtCMbAKxJqAfASj@JTBtAAdCAvBB|AFrDHB_B@mABy@B_KEa@o@?iACwDGkMGwFAPgHJgE"
          },
          "summary": "I-85 S",
          "warnings": [],
          "waypoint_order": []
        }
      ],
      "status": "OK"
    };
    self.tempBikingObj = {
      "geocoded_waypoints": [
        {
          "geocoder_status": "OK",
          "partial_match": true,
          "place_id": "ChIJkYaLwAIG9YgRQ_GSN7N5ZIc",
          "types": [
            "street_address"
          ]
        },
        {
          "geocoder_status": "OK",
          "partial_match": true,
          "place_id": "ChIJDdmRwWYE9YgRG9PijMy2IOk",
          "types": [
            "street_address"
          ]
        }
      ],
      "routes": [
        {
          "bounds": {
            "northeast": {
              "lat": 33.8455317,
              "lng": -84.3301857
            },
            "southwest": {
              "lat": 33.7761549,
              "lng": -84.3848289
            }
          },
          "copyrights": "Map data ©2017 Google",
          "legs": [
            {
              "distance": {
                "text": "8.1 mi",
                "value": 13024
              },
              "duration": {
                "text": "56 mins",
                "value": 3351
              },
              "end_address": "85 5th St NE, Atlanta, GA 30308, USA",
              "end_location": {
                "lat": 33.7761755,
                "lng": -84.3848289
              },
              "start_address": "1075 Lynmoor Dr NE, Atlanta, GA 30319, USA",
              "start_location": {
                "lat": 33.8444895,
                "lng": -84.3448779
              },
              "steps": [
                {
                  "distance": {
                    "text": "0.2 mi",
                    "value": 334
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 79
                  },
                  "end_location": {
                    "lat": 33.8445099,
                    "lng": -84.34125859999999
                  },
                  "html_instructions": "Head <b>east</b> on <b>Lynmoor Dr NE</b>",
                  "polyline": {
                    "points": "agqmEnrxaOAWCc@?}@?iA?iB@oC?kE?iA"
                  },
                  "start_location": {
                    "lat": 33.8444895,
                    "lng": -84.3448779
                  },
                  "travel_mode": "BICYCLING"
                },
                {
                  "distance": {
                    "text": "0.1 mi",
                    "value": 158
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 22
                  },
                  "end_location": {
                    "lat": 33.8455317,
                    "lng": -84.3404065
                  },
                  "html_instructions": "Turn <b>left</b> to stay on <b>Lynmoor Dr NE</b>",
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "egqmEz{waOIAkACQ?IAKEGEMKGKGMMe@YiA"
                  },
                  "start_location": {
                    "lat": 33.8445099,
                    "lng": -84.34125859999999
                  },
                  "travel_mode": "BICYCLING"
                },
                {
                  "distance": {
                    "text": "492 ft",
                    "value": 150
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 64
                  },
                  "end_location": {
                    "lat": 33.844835,
                    "lng": -84.33920379999999
                  },
                  "html_instructions": "Turn <b>right</b> onto <b>Lenox Park Blvd NE</b>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "qmqmEpvwaOj@Y\\QPQJKHML[BSDi@@Y?e@"
                  },
                  "start_location": {
                    "lat": 33.8455317,
                    "lng": -84.3404065
                  },
                  "travel_mode": "BICYCLING"
                },
                {
                  "distance": {
                    "text": "1.6 mi",
                    "value": 2620
                  },
                  "duration": {
                    "text": "12 mins",
                    "value": 744
                  },
                  "end_location": {
                    "lat": 33.8279094,
                    "lng": -84.3303069
                  },
                  "html_instructions": "Turn <b>right</b> onto <b>N Druid Hills Rd NE</b>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "eiqmE~nwaOR?N?J@V@n@LTJLFNJd@d@LNJJJXDLN\\L^h@vALZZb@`@d@ZXrAlATRXRl@Zd@Nt@RpDbAvBl@d@L`@N~@ZjAb@VHXJVFd@FlAc@x@Sv@Ux@UDCx@WZMBAVIRIz@e@~@o@t@g@nA{@b@[^[TQDCl@m@Z]LCRYDIFKFKN[^q@JOJg@DWJg@F[Hi@H]d@aCJq@FWHg@Ji@TgALw@Jk@f@mBNi@Lc@Na@Xs@BEZu@DIZk@b@s@~@kAZa@LKNSFIDG@G@CBI~@aAb@a@NM|A_BBARWhAkAJKr@y@JKr@cAd@o@NWTc@FKHOd@_AN_@"
                  },
                  "start_location": {
                    "lat": 33.844835,
                    "lng": -84.33920379999999
                  },
                  "travel_mode": "BICYCLING"
                },
                {
                  "distance": {
                    "text": "1.8 mi",
                    "value": 2903
                  },
                  "duration": {
                    "text": "11 mins",
                    "value": 689
                  },
                  "end_location": {
                    "lat": 33.8048778,
                    "lng": -84.3374252
                  },
                  "html_instructions": "Turn <b>right</b> onto <b>Briarcliff Rd NE</b>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "m_nmElwuaOl@SDCB?@?B?@?B?@@B@DDDBBD^n@l@`Cj@hCp@xAp@~@n@n@d@d@NJFDlAdARP`Ap@|@n@n@Vn@XPHlAh@jA^f@Ff@@HBF?J?v@EbAIh@CtA@JA^?rADn@Bh@F~@PzA`@f@Nn@LFBj@Hn@AFA\\A|AGvAEvAGZA`@Cx@CJANCp@KFAf@Ol@U`Ac@TIZQj@Wz@_@h@WB?r@UnAWf@If@En@E^AZ@d@BNBJB\\NXPf@Z|@n@VTRLHFZP\\NTFD@JBL@H?H?P@r@EpAi@r@Y`@MLCJAHA^?F@\\F\\HJDRJ`@RbA~@XT^Zr@b@ZLLFPD|@VZHh@LJBTDz@VPDf@d@JNPTDHPRDFDFPT\\b@PTNTLLLN@@NNLN"
                  },
                  "start_location": {
                    "lat": 33.8279094,
                    "lng": -84.3303069
                  },
                  "travel_mode": "BICYCLING"
                },
                {
                  "distance": {
                    "text": "210 ft",
                    "value": 64
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 9
                  },
                  "end_location": {
                    "lat": 33.8045905,
                    "lng": -84.3380162
                  },
                  "html_instructions": "Slight <b>right</b> toward <b>Johnson Rd NE</b>",
                  "maneuver": "turn-slight-right",
                  "polyline": {
                    "points": "ooimE|cwaO@J?D?@@B?@@Br@vA"
                  },
                  "start_location": {
                    "lat": 33.8048778,
                    "lng": -84.3374252
                  },
                  "travel_mode": "BICYCLING"
                },
                {
                  "distance": {
                    "text": "0.9 mi",
                    "value": 1449
                  },
                  "duration": {
                    "text": "6 mins",
                    "value": 344
                  },
                  "end_location": {
                    "lat": 33.796822,
                    "lng": -84.3500547
                  },
                  "html_instructions": "Continue onto <b>Johnson Rd NE</b>",
                  "polyline": {
                    "points": "umimErgwaO\\`A`@bAv@tBVh@NTd@p@j@t@h@t@nAdBj@x@vDfFh@p@bAlAf@f@\\Zb@^v@n@LLHJr@v@V`@JXTr@Np@Jr@TnAj@~CPz@t@nEZfAZv@DJBFDHDHPXZf@DHv@pARTl@n@LFhAb@XJVF"
                  },
                  "start_location": {
                    "lat": 33.8045905,
                    "lng": -84.3380162
                  },
                  "travel_mode": "BICYCLING"
                },
                {
                  "distance": {
                    "text": "0.8 mi",
                    "value": 1267
                  },
                  "duration": {
                    "text": "6 mins",
                    "value": 351
                  },
                  "end_location": {
                    "lat": 33.7875681,
                    "lng": -84.3553756
                  },
                  "html_instructions": "Continue onto <b>North Highland Avenue Northeast</b>",
                  "polyline": {
                    "points": "c}gmExryaOn@TzD|AdA\\xBh@fCn@`@HrAXD@FBHBDBXNBDZ\\FFFJX^HJX^P\\FJPZJVXr@FRHVT|@DVFZXhBVjBHTHRBFBDBBDFDDHFDDLHHDJDb@HtCl@\\D^D\\?l@Al@Eh@In@Q`@Gh@EvDM"
                  },
                  "start_location": {
                    "lat": 33.796822,
                    "lng": -84.3500547
                  },
                  "travel_mode": "BICYCLING"
                },
                {
                  "distance": {
                    "text": "0.5 mi",
                    "value": 745
                  },
                  "duration": {
                    "text": "2 mins",
                    "value": 94
                  },
                  "end_location": {
                    "lat": 33.7876106,
                    "lng": -84.36344009999999
                  },
                  "html_instructions": "Turn <b>right</b> onto <b>Amsterdam Ave NE</b>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "icfmEbtzaOA|BCbC?nWAjG?lH"
                  },
                  "start_location": {
                    "lat": 33.7875681,
                    "lng": -84.3553756
                  },
                  "travel_mode": "BICYCLING"
                },
                {
                  "distance": {
                    "text": "361 ft",
                    "value": 110
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 13
                  },
                  "end_location": {
                    "lat": 33.7866193,
                    "lng": -84.36345519999999
                  },
                  "html_instructions": "Turn <b>left</b> onto <b>Brookridge Dr NE</b>",
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "qcfmEnf|aOdEB"
                  },
                  "start_location": {
                    "lat": 33.7876106,
                    "lng": -84.36344009999999
                  },
                  "travel_mode": "BICYCLING"
                },
                {
                  "distance": {
                    "text": "256 ft",
                    "value": 78
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 14
                  },
                  "end_location": {
                    "lat": 33.7860658,
                    "lng": -84.36397649999999
                  },
                  "html_instructions": "Keep <b>right</b> to stay on <b>Brookridge Dr NE</b>",
                  "maneuver": "keep-right",
                  "polyline": {
                    "points": "k}emErf|aOf@b@dAbA"
                  },
                  "start_location": {
                    "lat": 33.7866193,
                    "lng": -84.36345519999999
                  },
                  "travel_mode": "BICYCLING"
                },
                {
                  "distance": {
                    "text": "0.1 mi",
                    "value": 160
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 64
                  },
                  "end_location": {
                    "lat": 33.7866455,
                    "lng": -84.3655466
                  },
                  "html_instructions": "Turn <b>right</b> onto <b>Elkmont Dr NE</b>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "}yemEzi|aOId@Kn@I`@Kh@Sp@[x@MZIN"
                  },
                  "start_location": {
                    "lat": 33.7860658,
                    "lng": -84.36397649999999
                  },
                  "travel_mode": "BICYCLING"
                },
                {
                  "distance": {
                    "text": "135 ft",
                    "value": 41
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 15
                  },
                  "end_location": {
                    "lat": 33.7865457,
                    "lng": -84.365955
                  },
                  "html_instructions": "Slight <b>left</b> onto <b>Orme Cir NE</b>",
                  "maneuver": "turn-slight-left",
                  "polyline": {
                    "points": "q}emEts|aO?X?PDLLV"
                  },
                  "start_location": {
                    "lat": 33.7866455,
                    "lng": -84.3655466
                  },
                  "travel_mode": "BICYCLING"
                },
                {
                  "distance": {
                    "text": "394 ft",
                    "value": 120
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 22
                  },
                  "end_location": {
                    "lat": 33.7854708,
                    "lng": -84.36590059999999
                  },
                  "html_instructions": "Turn <b>left</b> to stay on <b>Orme Cir NE</b>",
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "}|emEfv|aOD?rABj@Ct@KLAL@"
                  },
                  "start_location": {
                    "lat": 33.7865457,
                    "lng": -84.365955
                  },
                  "travel_mode": "BICYCLING"
                },
                {
                  "distance": {
                    "text": "0.3 mi",
                    "value": 541
                  },
                  "duration": {
                    "text": "3 mins",
                    "value": 153
                  },
                  "end_location": {
                    "lat": 33.7863949,
                    "lng": -84.3716472
                  },
                  "html_instructions": "Turn <b>right</b> onto <b>Park Dr NE</b>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "evemEzu|aOe@~F?DGp@Cd@ALaAhKY`DY~CMdA"
                  },
                  "start_location": {
                    "lat": 33.7854708,
                    "lng": -84.36590059999999
                  },
                  "travel_mode": "BICYCLING"
                },
                {
                  "distance": {
                    "text": "0.4 mi",
                    "value": 597
                  },
                  "duration": {
                    "text": "2 mins",
                    "value": 119
                  },
                  "end_location": {
                    "lat": 33.7818308,
                    "lng": -84.37278789999999
                  },
                  "html_instructions": "Turn <b>left</b> onto <b>Charles Allen Dr</b>",
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "}{emExy}aOFDJDVJNCd@C^?^HNFNJJRJXHXJ`@Pp@R`ALZDDNNRFZD\\?n@Gb@EVCJCZE|Co@l@MPEPEZCJAr@A\\@HB"
                  },
                  "start_location": {
                    "lat": 33.7863949,
                    "lng": -84.3716472
                  },
                  "travel_mode": "BICYCLING"
                },
                {
                  "distance": {
                    "text": "0.4 mi",
                    "value": 613
                  },
                  "duration": {
                    "text": "3 mins",
                    "value": 154
                  },
                  "end_location": {
                    "lat": 33.78179009999999,
                    "lng": -84.379413
                  },
                  "html_instructions": "Turn <b>right</b> onto <b>10th Street Cycle Track</b>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "m_emE|`~aO?RAzQ?zB?|A?dF?|EH\\"
                  },
                  "start_location": {
                    "lat": 33.7818308,
                    "lng": -84.37278789999999
                  },
                  "travel_mode": "BICYCLING"
                },
                {
                  "distance": {
                    "text": "0.3 mi",
                    "value": 425
                  },
                  "duration": {
                    "text": "4 mins",
                    "value": 242
                  },
                  "end_location": {
                    "lat": 33.7817253,
                    "lng": -84.3840064
                  },
                  "html_instructions": "Continue onto <b>10th St NE</b>",
                  "polyline": {
                    "points": "e_emEhj_bO?vC?z@@|@?Z@j@?lB@^@d@@zA?hA?\\?\\@dA@f@Ax@"
                  },
                  "start_location": {
                    "lat": 33.78179009999999,
                    "lng": -84.379413
                  },
                  "travel_mode": "BICYCLING"
                },
                {
                  "distance": {
                    "text": "0.4 mi",
                    "value": 621
                  },
                  "duration": {
                    "text": "3 mins",
                    "value": 156
                  },
                  "end_location": {
                    "lat": 33.7761549,
                    "lng": -84.384531
                  },
                  "html_instructions": "Turn <b>left</b> onto <b>Peachtree St NE</b>",
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "y~dmE`g`bOrADt@Dx@BrFVrAFp@BZBN@T@hFTX@x@D`@@zBJ"
                  },
                  "start_location": {
                    "lat": 33.7817253,
                    "lng": -84.3840064
                  },
                  "travel_mode": "BICYCLING"
                },
                {
                  "distance": {
                    "text": "92 ft",
                    "value": 28
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 3
                  },
                  "end_location": {
                    "lat": 33.7761755,
                    "lng": -84.3848289
                  },
                  "html_instructions": "Turn <b>right</b> onto <b>5th St NE</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "}{cmEhj`bOEz@"
                  },
                  "start_location": {
                    "lat": 33.7761549,
                    "lng": -84.384531
                  },
                  "travel_mode": "BICYCLING"
                }
              ],
              "traffic_speed_entry": [],
              "via_waypoint": []
            }
          ],
          "overview_polyline": {
            "points": "agqmEnrxaOE{@?gC@oOqBGSKUWUs@YiAj@Yn@c@TYPo@FcA?e@R?Z@fANb@Rt@p@XZn@dBv@rB|@hA~CnCl@Zd@NfFvA|Cz@`Bj@tC`Ad@FlAc@pBi@tC_AZKnAo@hFoDt@m@r@q@Z]LCXc@~@eBJOJg@P_A`AeFh@{Cb@_Cr@yC\\mAh@uA`AqBb@s@~@kAh@m@^m@DMbBcBdCgCtC}CxAsBd@{@fA{Bx@WJ@RP^n@l@`Cj@hCp@xAp@~@n@n@t@p@tAjAtAbA|@n@n@V`Ab@lAh@jA^nAHPBbAElBM`B?rBDxAJzCr@vA\\r@Lv@CjHWbCK`AOn@Q`DuAtCoAbCm@nAOnAG`ADZFv@`@pCnBd@Xr@Vh@FZ@r@EpAi@tAg@XEh@Ad@Hh@Nt@^|AtA^Zr@b@h@TnA\\fB`@lA\\r@t@n@z@fAvAl@t@\\^@PBJr@vA\\`AxAxDf@~@pAfB|I|LlB~BdAbArBhBr@v@V`@`@lA|AtIfAjGv@~BTf@jB|C`AdAvAj@p@RjFrBdA\\xBh@hDx@jBb@^R^b@r@~@j@|@Xf@v@vBZtA`@dC`@`CLZRVf@\\bFbA|@DzAGxA[jAMvDMA|BCbC?nWAxPdEBf@b@dAbAId@UpA_@zAi@tAIN?XD^RVrABj@CbAML@e@~FGv@Er@{AjPY~CMdARJVJNCdACn@PNJJRTr@\\rAR`ALZTTn@LlAGz@IrFgAjAQpA?HB?RAvU?bI?|EH\\?rEBrFDjFBhDAx@rADnBHtKf@hHZzAFzBJEz@"
          },
          "summary": "Briarcliff Rd NE",
          "warnings": [
            "Bicycling directions are in beta. Use caution – This route may contain streets that aren't suited for bicycling."
          ],
          "waypoint_order": []
        }
      ],
      "status": "OK"
    };
    self.tempWalkingObj = {
      "geocoded_waypoints": [
        {
          "geocoder_status": "OK",
          "partial_match": true,
          "place_id": "ChIJkYaLwAIG9YgRQ_GSN7N5ZIc",
          "types": [
            "street_address"
          ]
        },
        {
          "geocoder_status": "OK",
          "partial_match": true,
          "place_id": "ChIJDdmRwWYE9YgRG9PijMy2IOk",
          "types": [
            "street_address"
          ]
        }
      ],
      "routes": [
        {
          "bounds": {
            "northeast": {
              "lat": 33.8455317,
              "lng": -84.33920309999999
            },
            "southwest": {
              "lat": 33.77594690000001,
              "lng": -84.3848289
            }
          },
          "copyrights": "Map data ©2017 Google",
          "legs": [
            {
              "distance": {
                "text": "6.4 mi",
                "value": 10240
              },
              "duration": {
                "text": "2 hours 13 mins",
                "value": 7959
              },
              "end_address": "85 5th St NE, Atlanta, GA 30308, USA",
              "end_location": {
                "lat": 33.7761755,
                "lng": -84.3848289
              },
              "start_address": "1075 Lynmoor Dr NE, Atlanta, GA 30319, USA",
              "start_location": {
                "lat": 33.8444895,
                "lng": -84.3448779
              },
              "steps": [
                {
                  "distance": {
                    "text": "0.2 mi",
                    "value": 334
                  },
                  "duration": {
                    "text": "4 mins",
                    "value": 259
                  },
                  "end_location": {
                    "lat": 33.8445099,
                    "lng": -84.34125859999999
                  },
                  "html_instructions": "Head <b>east</b> on <b>Lynmoor Dr NE</b>",
                  "polyline": {
                    "points": "agqmEnrxaOAWCc@?}@?iA?iB@oC?kE?iA"
                  },
                  "start_location": {
                    "lat": 33.8444895,
                    "lng": -84.3448779
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "0.1 mi",
                    "value": 158
                  },
                  "duration": {
                    "text": "2 mins",
                    "value": 107
                  },
                  "end_location": {
                    "lat": 33.8455317,
                    "lng": -84.3404065
                  },
                  "html_instructions": "Turn <b>left</b> to stay on <b>Lynmoor Dr NE</b>",
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "egqmEz{waOIAkACQ?IAKEGEMKGKGMMe@YiA"
                  },
                  "start_location": {
                    "lat": 33.8445099,
                    "lng": -84.34125859999999
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "492 ft",
                    "value": 150
                  },
                  "duration": {
                    "text": "2 mins",
                    "value": 118
                  },
                  "end_location": {
                    "lat": 33.844835,
                    "lng": -84.33920379999999
                  },
                  "html_instructions": "Turn <b>right</b> onto <b>Lenox Park Blvd NE</b>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "qmqmEpvwaOj@Y\\QPQJKHML[BSDi@@Y?e@"
                  },
                  "start_location": {
                    "lat": 33.8455317,
                    "lng": -84.3404065
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "0.4 mi",
                    "value": 679
                  },
                  "duration": {
                    "text": "9 mins",
                    "value": 510
                  },
                  "end_location": {
                    "lat": 33.8398435,
                    "lng": -84.34284629999999
                  },
                  "html_instructions": "Turn <b>right</b> onto <b>N Druid Hills Rd NE</b>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "eiqmE~nwaOR?N?J@V@n@LTJLFNJd@d@LNJJJXDLN\\L^h@vALZZb@`@d@ZXrAlATRXRl@Zd@Nt@RpDbAvBl@"
                  },
                  "start_location": {
                    "lat": 33.844835,
                    "lng": -84.33920379999999
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "0.2 mi",
                    "value": 275
                  },
                  "duration": {
                    "text": "3 mins",
                    "value": 203
                  },
                  "end_location": {
                    "lat": 33.8387292,
                    "lng": -84.3454995
                  },
                  "html_instructions": "Slight <b>right</b> onto <b>Goodwin Rd NE</b>",
                  "maneuver": "turn-slight-right",
                  "polyline": {
                    "points": "_jpmExexaO|AnE~B`I"
                  },
                  "start_location": {
                    "lat": 33.8398435,
                    "lng": -84.34284629999999
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "1.0 mi",
                    "value": 1612
                  },
                  "duration": {
                    "text": "20 mins",
                    "value": 1206
                  },
                  "end_location": {
                    "lat": 33.8255812,
                    "lng": -84.3514584
                  },
                  "html_instructions": "Turn <b>left</b> onto <b>Shady Valley Dr NE</b>",
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "acpmEjvxaO~@VnA`@lA`@fAZhDd@`CVbCb@`B\\v@Hz@BnBFD@F@H@PDXFF@D@FBD@HFNFDDHDPLPLFFTPxCzC^^LL`B~Ah@h@vFrFt@p@PNf@^RJTLn@XFDh@P@?RDlBTr@Dz@HbALb@@X?TAl@GR?l@AXB"
                  },
                  "start_location": {
                    "lat": 33.8387292,
                    "lng": -84.3454995
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "46 ft",
                    "value": 14
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 11
                  },
                  "end_location": {
                    "lat": 33.8255941,
                    "lng": -84.35160809999999
                  },
                  "html_instructions": "Turn <b>right</b> onto <b>Buford Hwy NE</b>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "{pmmEr{yaOA\\"
                  },
                  "start_location": {
                    "lat": 33.8255812,
                    "lng": -84.3514584
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "397 ft",
                    "value": 121
                  },
                  "duration": {
                    "text": "2 mins",
                    "value": 96
                  },
                  "end_location": {
                    "lat": 33.8247668,
                    "lng": -84.3524266
                  },
                  "html_instructions": "Turn <b>left</b> toward <b>Lenox Rd NE</b>",
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "}pmmEp|yaOJ@B?DDfCtCDD"
                  },
                  "start_location": {
                    "lat": 33.8255941,
                    "lng": -84.35160809999999
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "230 ft",
                    "value": 70
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 62
                  },
                  "end_location": {
                    "lat": 33.8241664,
                    "lng": -84.35218379999999
                  },
                  "html_instructions": "Turn <b>left</b> onto <b>Lenox Rd NE</b>",
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "ykmmEtazaOZKPEVIp@U"
                  },
                  "start_location": {
                    "lat": 33.8247668,
                    "lng": -84.3524266
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "1.6 mi",
                    "value": 2540
                  },
                  "duration": {
                    "text": "33 mins",
                    "value": 2000
                  },
                  "end_location": {
                    "lat": 33.8079139,
                    "lng": -84.36591850000001
                  },
                  "html_instructions": "Continue onto <b>Cheshire Bridge Rd NE</b>",
                  "polyline": {
                    "points": "ahmmEb`zaOt@Sj@Ox@Ud@MfAUt@G`@GVE`BIr@EzAM`@Cf@ETC`@Cx@GD?d@Aj@?D?d@Df@BJ@RD\\HTFrA`@j@NND^JzCv@pAXvA^vAd@pAf@ZLbAd@xHnD|@`@`@VHDHFp@f@HFFFDDJJFFFFJPNTPVFLDFFJDHDJBDBDDJBHDFBJHVFNHXPj@Tx@f@bBDLZdAFTBNfCzIbApDTz@Lb@z@zCfAxD@DhAtDxAtEl@dB@J@HBJH\\Lf@@@FV@RAZ?X"
                  },
                  "start_location": {
                    "lat": 33.8241664,
                    "lng": -84.35218379999999
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "2.5 mi",
                    "value": 3973
                  },
                  "duration": {
                    "text": "52 mins",
                    "value": 3124
                  },
                  "end_location": {
                    "lat": 33.77594690000001,
                    "lng": -84.38144700000001
                  },
                  "html_instructions": "Turn <b>left</b> onto <b>Piedmont Ave NE</b>",
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "mbjmE~u|aOHBD@TFVJnAr@xDtB^RDBf@VtAl@^HZDD@N?L@VAh@EbAMPC\\EtASh@Eh@A^@^BjFl@`BRvAJtALrANjAPXFp@JdATVFRDXFTFPDXHTJTHTLTJPLfBnA^\\f@f@r@r@LLJJDBjAfAr@t@TRNNJHb@b@@?RRPRhBfBXZl@n@|@x@nBjBDDVRlBhBhAhA|@x@\\VJHRNjBvAl@b@tB~At@j@|@x@z@`AX^`@d@b@h@vAdBx@z@VXPRLJHHHHLHNHNDZFZ?xBCN?L?R?H@F?R@fALTFf@LVFtBp@zAn@RHf@Rb@RZRJJnAdAp@p@l@h@RJRHz@TVFl@N^H`@FTDPDB?|GlALDhARh@DdERjFTnFV"
                  },
                  "start_location": {
                    "lat": 33.8079139,
                    "lng": -84.36591850000001
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "0.2 mi",
                    "value": 314
                  },
                  "duration": {
                    "text": "4 mins",
                    "value": 263
                  },
                  "end_location": {
                    "lat": 33.7761755,
                    "lng": -84.3848289
                  },
                  "html_instructions": "Turn <b>right</b> onto <b>5th St NE</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "uzcmE`w_bOIvCItCE`BCv@I~CEz@"
                  },
                  "start_location": {
                    "lat": 33.77594690000001,
                    "lng": -84.38144700000001
                  },
                  "travel_mode": "WALKING"
                }
              ],
              "traffic_speed_entry": [],
              "via_waypoint": []
            }
          ],
          "overview_polyline": {
            "points": "agqmEnrxaOE{@?gC@oOqBGSKUWUs@YiAj@Yn@c@TYPo@FcA?e@R?Z@fANb@Rt@p@XZn@dBv@rB|@hA~CnCl@Zd@NfFvAvBl@|AnE~B`I~@V|CbAfAZhDd@`CVbCb@`B\\v@HjDJLB|@P\\Np@`@XTnDlDxDvDlHdHx@n@`Bx@j@P`CZnBNbALb@@n@A`AGfA@A\\J@HDlCzCvBq@`EgAfAUt@Gx@MrGa@xCU|AAlAH^FrDbA|GbBnDdAlBt@|JtE~Ax@nA|@`@`@t@fAn@nAVt@x@nCpAlEdFxQrC~JbDjKn@pB\\zAHX?n@?XHBZH`IhEl@ZtAl@^H`@F\\@`AGtAQrBYrAG~@DlI`AlDX~C`@hDp@tAZn@Tj@Vf@XfBnA^\\zAzAXXpAjAhAhA`A|@hDjDjBhBtBpBlG`GhDhCbDbCrBdBzCpDpC`Dh@l@n@h@^NZFZ?hCCj@@Z@|AT~@TtBp@zAn@z@\\~@f@zApA~AzAf@TrA\\dCf@`IxAhARh@DpLh@nFVIvCOvFSrG"
          },
          "summary": "Piedmont Ave NE",
          "warnings": [
            "Walking directions are in beta.    Use caution – This route may be missing sidewalks or pedestrian paths."
          ],
          "waypoint_order": []
        }
      ],
      "status": "OK"
    };

    //If I was using real API data, this is the POST I would make to pass user form data to my Node server file
    //For driving travel times
    var getDrivingTime = function(data, callback){
      if(data.address){
        var tempHomeAddress = data.address.line1+" "+data.address.city+", "+data.address.state+" "+data.address.zip;
        var tempWorkAddress = data.workAddress.line1+" "+data.workAddress.city+", "+data.workAddress.state+" "+data.workAddress.zip;
        var oData = {home: tempHomeAddress, work: tempWorkAddress, mode: "driving"};
        $http({
          method: 'POST',
          url: '/api/route',
          data: oData})
            .then(function (data) {
              self.drivingData = data.data;
              //console.log(data);
              return callback(self.drivingData);
            }, function myError(response) {
              //self.data = response.statusText;
              console.log(response.data);
              return response.data;
        });
      }
    };

    //My attempt to fix CORS issue locally by adding headers to my request URL. It did not work.
    var test = function(){
      $http({
        method: 'GET',
        url: "https://maps.googleapis.com/maps/api/directions/json?origin=75+9th+Ave+New+York,+NY&destination=MetLife+Stadium+1+MetLife+Stadium+Dr+East+Rutherford,+NJ+07073&departure_time=1541202457&traffic_model=best_guess&key=AIzaSyBu6QqMhIhGQgZrkh8azlDqROY5I3_3Uu4",
        headers:{
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        }
      }).then(function (data) {
        console.log(data);
      },function err(resp) {
        console.log(resp);
      })
    };
    //test();

    //Same as above except it gets public transit travel times
    var getTransitTime = function(data){
      if(data.address){
        var tempHomeAddress = data.address.line1+" "+data.address.city+", "+data.address.state+" "+data.address.zip;
        var tempWorkAddress = data.workAddress.line1+" "+data.workAddress.city+", "+data.workAddress.state+" "+data.workAddress.zip;
        var oData = {home: tempHomeAddress, work: tempWorkAddress, mode: "transit"};
        $http({
          method: 'POST',
          url: '/api/route',
          data: oData})
          .then(function (data) {
            self.transitData = data.data;
            console.log(data);
          }, function myError(response) {
            //self.data = response.statusText;
            console.log(response.data);
          });
      }
    };

    //For biking
    var getBikingTime = function(data){
      if(data.address){
        var tempHomeAddress = data.address.line1+" "+data.address.city+", "+data.address.state+" "+data.address.zip;
        var tempWorkAddress = data.workAddress.line1+" "+data.workAddress.city+", "+data.workAddress.state+" "+data.workAddress.zip;
        var oData = {home: tempHomeAddress, work: tempWorkAddress, mode: "bicycling"};
        $http({
          method: 'POST',
          url: '/api/route',
          data: oData})
          .then(function (data) {
            self.bikingData = data.data;
            console.log(data);
          }, function myError(response) {
            //self.data = response.statusText;
            console.log(response.data);
          });
      }
    };

    //For walking
    var getWalkingTime = function(data){
      if(data.address){
        var tempHomeAddress = data.address.line1+" "+data.address.city+", "+data.address.state+" "+data.address.zip;
        var tempWorkAddress = data.workAddress.line1+" "+data.workAddress.city+", "+data.workAddress.state+" "+data.workAddress.zip;
        var oData = {home: tempHomeAddress, work: tempWorkAddress, mode: "walking"};
        $http({
          method: 'POST',
          url: '/api/route',
          data: oData})
          .then(function (data) {
            self.walkingData = data.data;
            return self.walkingData;
            //console.log(data);
          }, function myError(response) {
            //self.data = response.statusText;
            console.log(response.data);
          });
      }
    };

    return{
      //I use a promise since this is an async call.
      //Callback gives me data once the requested data comes from Google.
      getDrivingTime: function(data, callback){
        var deferred = $q.defer();
        getDrivingTime(data, function(data){
          deferred.resolve(data);
        });
        deferred.promise.then(function(res){
          return callback(res);
        });
      },
      getMyTransitData: function(){
        return self.tempTransitObj;
      },
      getMyDrivingData: function(){
        return self.tempDrivingObj;
      },
      getMyBikingData: function(){
        return self.tempBikingObj;
      },
      getMyWalkingData: function(){
        return self.tempWalkingObj;
      },
      getTransitTime: function(data){
        getTransitTime(data);
      },
      getBikingTime: function(data){
        getBikingTime(data);
      },
      getWalkingTime: function(data){
        getWalkingTime(data);
      },
      getDrive: function(){
        return data.drivingData;
      },
      getTransit: function(){
        return data.transitData;
      },
      getBike: function(){
        return data.bikingData;
      },
      getWalk: function(){
        return data.walkingData;
      }
    };
  });
