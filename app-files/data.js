var APP_DATA = {
  "scenes": [
    {
      "id": "0-show-unit-entrance",
      "name": "Show unit entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.14843245798755333,
        "pitch": -0.07527524001332431,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -1.7347401661275192,
          "pitch": 0.2818481826109984,
          "rotation": 0,
          "target": "1-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-corridor-1",
      "name": "Corridor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7701446275345809,
          "pitch": 0.09636175693472637,
          "rotation": 10.995574287564278,
          "target": "2-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-corridor-2",
      "name": "Corridor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.510381083456636,
        "pitch": 0.14826569687307334,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -0.21396064534418002,
          "pitch": 0.08873190068758596,
          "rotation": 0,
          "target": "1-corridor-1"
        },
        {
          "yaw": 1.3786612216881942,
          "pitch": 0.1340162492025332,
          "rotation": 0,
          "target": "3-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-corridor-3",
      "name": "Corridor 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.8113919086014345,
        "pitch": 0.01607700327539341,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "4-corridor-lift",
      "name": "Corridor lift",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -3.065275660619747,
        "pitch": 0.18363265437183607,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": 0.039394117697689524,
          "pitch": 0.017748586188957916,
          "rotation": 0,
          "target": "3-corridor-3"
        },
        {
          "yaw": -1.5966980326796794,
          "pitch": 0.06463842754430082,
          "rotation": 0,
          "target": "5-pool-lift"
        },
        {
          "yaw": -1.1954522978134214,
          "pitch": 0.05145951161211215,
          "rotation": 0,
          "target": "29-ground-floor-lift"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-pool-lift",
      "name": "Pool lift",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.9792507562661505,
        "pitch": 0.08049009482974334,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -1.5269884124757063,
          "pitch": 0.0238407618410168,
          "rotation": 0,
          "target": "6-pool-corridor"
        },
        {
          "yaw": 0.10023408212668095,
          "pitch": -0.005506748900277358,
          "rotation": 0,
          "target": "4-corridor-lift"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-pool-corridor",
      "name": "Pool corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.550501223630741,
        "pitch": 0.01709754753858128,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": 0.5875280546458441,
          "pitch": 0.039474274964238276,
          "rotation": 0,
          "target": "5-pool-lift"
        },
        {
          "yaw": -2.68308844828233,
          "pitch": 0.0675303964987819,
          "rotation": 0,
          "target": "7-pool-deck-1"
        },
        {
          "yaw": -0.6310842827573868,
          "pitch": 0.35282670445077713,
          "rotation": 0,
          "target": "22-common-area-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-pool-deck-1",
      "name": "Pool deck 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.455195095302912,
        "pitch": -0.012504335880857198,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -1.4254339573513697,
          "pitch": 0.13572029164413024,
          "rotation": 0,
          "target": "6-pool-corridor"
        },
        {
          "yaw": 2.306953763486776,
          "pitch": 0.1724077070641421,
          "rotation": 4.71238898038469,
          "target": "8-pool-deck-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.802079708272732,
          "pitch": 0.3222460376093288,
          "title": "Pool with timber deck",
          "text": "Glass edge swimming pool with timber deck"
        }
      ]
    },
    {
      "id": "8-pool-deck-2",
      "name": "Pool deck 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.5773995927222462,
        "pitch": 0.04644467612891923,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": 1.5005361827007109,
          "pitch": 0.04954232477606979,
          "rotation": 0,
          "target": "9-pool-deck-3"
        },
        {
          "yaw": -1.3135983887935918,
          "pitch": 0.042854086481767695,
          "rotation": 0,
          "target": "6-pool-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-pool-deck-3",
      "name": "Pool deck 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.2756303079193998,
        "pitch": 0.04364202768964631,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -0.7042232025954114,
          "pitch": 0.001101016136775712,
          "rotation": 0,
          "target": "8-pool-deck-2"
        },
        {
          "yaw": 2.4618697104039686,
          "pitch": 0.14228719741429963,
          "rotation": 4.71238898038469,
          "target": "10-pool-deck-4"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2838303231846133,
          "pitch": -0.14165051989026622,
          "title": "Excellent view",
          "text": "Excellent panoramic views of Cyberjaya"
        }
      ]
    },
    {
      "id": "10-pool-deck-4",
      "name": "Pool deck 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.0811872053510765,
        "pitch": 0.0011587029387705172,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -0.3544783570667711,
          "pitch": 0.047887166357465816,
          "rotation": 0,
          "target": "11-pool-deck-5"
        },
        {
          "yaw": 2.4082680238368255,
          "pitch": 0.043849000676029704,
          "rotation": 0,
          "target": "7-pool-deck-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-pool-deck-5",
      "name": "Pool deck 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.9600559851992028,
        "pitch": 0.13585925292910517,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -1.6675950849610324,
          "pitch": 0.10724090246361406,
          "rotation": 0,
          "target": "10-pool-deck-4"
        },
        {
          "yaw": 0.1689122769661342,
          "pitch": 0.07325363356042836,
          "rotation": 1.5707963267948966,
          "target": "12-bbq-terrace"
        },
        {
          "yaw": -3.074609443638252,
          "pitch": 0.18104963392806184,
          "rotation": 0,
          "target": "13-fitness-station"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bbq-terrace",
      "name": "BBQ Terrace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.8675789852814013,
        "pitch": 0.10118360824668038,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -1.6331065172952108,
          "pitch": 0.09157154577859217,
          "rotation": 0,
          "target": "11-pool-deck-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-fitness-station",
      "name": "Fitness Station",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.810690097576181,
        "pitch": -0.016706370597860953,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": 2.048098154748075,
          "pitch": 0.06956008710173123,
          "rotation": 0,
          "target": "14-tennis-court-1"
        },
        {
          "yaw": -1.1318688675764879,
          "pitch": 0.05671634604995823,
          "rotation": 0,
          "target": "11-pool-deck-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-tennis-court-1",
      "name": "Tennis court 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.8133768076453052,
        "pitch": -0.027894179696190236,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -2.1667270658845865,
          "pitch": 0.09346042827985812,
          "rotation": 0,
          "target": "13-fitness-station"
        },
        {
          "yaw": 0.9259265889903396,
          "pitch": 0.17644937699988716,
          "rotation": 0,
          "target": "15-tennis-court-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-tennis-court-2",
      "name": "Tennis court 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.5310993803140054,
        "pitch": -0.02612948565589157,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": 2.9785835211667138,
          "pitch": 0.018437275056054858,
          "rotation": 7.853981633974483,
          "target": "16-tennis-court-3"
        },
        {
          "yaw": -0.5040053177591481,
          "pitch": 0.13953825158424316,
          "rotation": 0,
          "target": "14-tennis-court-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-tennis-court-3",
      "name": "Tennis court 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8237051202020567,
          "pitch": 0.006784076699716479,
          "rotation": 0,
          "target": "15-tennis-court-2"
        },
        {
          "yaw": -0.43451855424448027,
          "pitch": -0.004028430167871022,
          "rotation": 0,
          "target": "17-playground-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-playground-1",
      "name": "Playground 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.9679864543753212,
        "pitch": -0.09110301856056502,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -3.125969439435094,
          "pitch": 0.04072743762190889,
          "rotation": 0,
          "target": "16-tennis-court-3"
        },
        {
          "yaw": 0.8849964324021329,
          "pitch": 0.11004032704854794,
          "rotation": 0,
          "target": "18-playground-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-playground-2",
      "name": "Playground 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.016485579102066,
          "pitch": 0.04476921083358398,
          "rotation": 0,
          "target": "17-playground-1"
        },
        {
          "yaw": -0.9197959449818995,
          "pitch": -0.006397895544537846,
          "rotation": 1.5707963267948966,
          "target": "19-playground-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-playground-3",
      "name": "Playground 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.435157013061886,
        "pitch": 0.0946756859550959,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -0.23227353044177157,
          "pitch": 0.056425286256121865,
          "rotation": 0,
          "target": "18-playground-2"
        },
        {
          "yaw": -2.159639674900541,
          "pitch": 0.08632759144453672,
          "rotation": 0,
          "target": "20-common-area-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-common-area-1",
      "name": "Common area 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -3.097585144427539,
        "pitch": -1.9539925233402755e-14,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -0.1566124284596082,
          "pitch": 0.034518099828879656,
          "rotation": 0,
          "target": "19-playground-3"
        },
        {
          "yaw": 3.009788105300343,
          "pitch": 0.11536190812765135,
          "rotation": 0,
          "target": "21-common-area-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-common-area-2",
      "name": "Common area 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.7782301572893227,
        "pitch": -0.11432535662501486,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -2.3424354950996538,
          "pitch": 0.0371548783898028,
          "rotation": 0,
          "target": "20-common-area-1"
        },
        {
          "yaw": 0.9606755762165022,
          "pitch": 0.12287745817616269,
          "rotation": 0.7853981633974483,
          "target": "22-common-area-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-common-area-3",
      "name": "Common area 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.890565242285258,
        "pitch": 0.16452900004475346,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": 1.5348675153994717,
          "pitch": 0.3185666385181207,
          "rotation": 0,
          "target": "6-pool-corridor"
        },
        {
          "yaw": -2.4604941226854216,
          "pitch": 0.21480634090418604,
          "rotation": 0,
          "target": "21-common-area-2"
        },
        {
          "yaw": -0.6900998463134709,
          "pitch": -0.3538099196352391,
          "rotation": 0,
          "target": "23-gym-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-gym-corridor",
      "name": "Gym corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7770314794423872,
          "pitch": 0.48605106882516935,
          "rotation": 0,
          "target": "22-common-area-3"
        },
        {
          "yaw": 0.27274166168006886,
          "pitch": 0.24262279877093107,
          "rotation": 1.5707963267948966,
          "target": "24-gym-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-gym-entrance",
      "name": "Gym entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.5343392633028845,
        "pitch": 0.00714533478906354,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": 0.9251734198419133,
          "pitch": 0.10373117555103306,
          "rotation": 0,
          "target": "23-gym-corridor"
        },
        {
          "yaw": -0.441260132292955,
          "pitch": 0.13030252944184895,
          "rotation": 0,
          "target": "25-gym-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-gym-1",
      "name": "Gym 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.7401162740289937,
        "pitch": 0.17348361749649754,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": 1.356259036606673,
          "pitch": 0.1352599583570857,
          "rotation": 0,
          "target": "24-gym-entrance"
        },
        {
          "yaw": -1.5288945417650979,
          "pitch": 0.1762249070835118,
          "rotation": 0,
          "target": "26-gym-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-gym-2",
      "name": "Gym 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.1696005150426583,
        "pitch": 0.08554328966480718,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -0.8275499365179293,
          "pitch": -0.022713560370220875,
          "rotation": 0,
          "target": "24-gym-entrance"
        },
        {
          "yaw": 2.0911566084741224,
          "pitch": 0.17360914140370198,
          "rotation": 0,
          "target": "27-gym-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-gym-3",
      "name": "Gym 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.965793699718583,
        "pitch": 0.28870419930888325,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -2.261879754282692,
          "pitch": 0.018407174503627388,
          "rotation": 0,
          "target": "24-gym-entrance"
        },
        {
          "yaw": 1.1075357957555703,
          "pitch": 0.1658981152583472,
          "rotation": 1.5707963267948966,
          "target": "28-gym-4-pool-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-gym-4-pool-view",
      "name": "Gym 4 pool view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.7106232952787135,
        "pitch": 0.03478446501743093,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -0.7080293712985366,
          "pitch": 0.5595043207006309,
          "rotation": 0,
          "target": "27-gym-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-ground-floor-lift",
      "name": "Ground floor lift",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.401134295739741,
          "pitch": 0.06735996699613267,
          "rotation": 0,
          "target": "30-ground-floor-corridor"
        },
        {
          "yaw": 0.6649429131829905,
          "pitch": 0.02577297129360545,
          "rotation": 0,
          "target": "4-corridor-lift"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-ground-floor-corridor",
      "name": "Ground floor corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.6306671562625805,
        "pitch": 0.06766716800618511,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": 1.5512980020748408,
          "pitch": 0.08737780184232413,
          "rotation": 0,
          "target": "29-ground-floor-lift"
        },
        {
          "yaw": -1.6306671562625805,
          "pitch": 0.06766716800618511,
          "rotation": 0,
          "target": "31-ground-floor-concierge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-ground-floor-concierge",
      "name": "Ground floor concierge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.1945115733183407,
        "pitch": -0.11981457078028157,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -0.0865411817398396,
          "pitch": -0.008550913389640868,
          "rotation": 0,
          "target": "29-ground-floor-lift"
        },
        {
          "yaw": 2.5833323549873253,
          "pitch": 0.058758466359702055,
          "rotation": 0,
          "target": "32-concierge-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-concierge-1",
      "name": "Concierge 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.9235016082389418,
        "pitch": -0.07531772324206187,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -2.1132227165780773,
          "pitch": 0.020796444499346478,
          "rotation": 0,
          "target": "31-ground-floor-concierge"
        },
        {
          "yaw": 1.1846335130676273,
          "pitch": 0.05738446630692451,
          "rotation": 0,
          "target": "33-concierge-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-concierge-2",
      "name": "Concierge 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.795371807549298,
        "pitch": 0.03619873576321808,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -1.4892914198287883,
          "pitch": 0.07473626048378534,
          "rotation": 0,
          "target": "32-concierge-1"
        },
        {
          "yaw": -2.922518974122987,
          "pitch": 0.029457657828196204,
          "rotation": 0,
          "target": "34-carpark-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-carpark-entrance",
      "name": "Carpark entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.504563580941827,
        "pitch": -0.018388591620485784,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -0.9969961304147716,
          "pitch": -0.021222932701089547,
          "rotation": 0,
          "target": "33-concierge-2"
        },
        {
          "yaw": 2.089249574583185,
          "pitch": 0.02480979209095935,
          "rotation": 0,
          "target": "35-outdoor-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9934848155827805,
          "pitch": -0.12370343677237017,
          "title": "Carpark",
          "text": "5 level car parks<br>Each unit is given 2 car parks"
        }
      ]
    },
    {
      "id": "35-outdoor-1",
      "name": "Outdoor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.949349914678354,
          "pitch": 0.03595207613857809,
          "rotation": 0,
          "target": "34-carpark-entrance"
        },
        {
          "yaw": -3.1146156528637334,
          "pitch": -0.011626828975781933,
          "rotation": 0,
          "target": "33-concierge-2"
        },
        {
          "yaw": 0.0023694269999854356,
          "pitch": 0,
          "rotation": 0,
          "target": "36-outdoor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-outdoor-2",
      "name": "Outdoor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 3.095945580845319,
        "pitch": 0.01786333697265796,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": 0.0021933760029551053,
          "pitch": -8.60651638845411e-9,
          "rotation": 0,
          "target": "35-outdoor-1"
        },
        {
          "yaw": -3.0309328416893138,
          "pitch": -0.01524488095417631,
          "rotation": 0,
          "target": "37-outdoor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-outdoor-3",
      "name": "Outdoor 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.7354507840394238,
        "pitch": -0.0074405464836608814,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -0.22639567543657435,
          "pitch": 0.03793203799969902,
          "rotation": 0,
          "target": "36-outdoor-2"
        },
        {
          "yaw": 2.2453759714621313,
          "pitch": 0.09577939690272075,
          "rotation": 0,
          "target": "38-outdoor-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-outdoor-4",
      "name": "Outdoor 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.139184180786673,
        "pitch": -0.3776824540000785,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -2.203603938343333,
          "pitch": -0.02057287211068015,
          "rotation": 0,
          "target": "37-outdoor-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5949355232786324,
          "pitch": -0.7879218651559032,
          "title": "Quick facts",
          "text": "Overall comprises 400 units of 24-storey towers located above Centrus Mall.<div><br></div><div>Consists of 320 units of type studio with built-up area of 450 sq ft and 80 units of Duplex units with built-up areas ranging from 795 to 993 sq ft.</div>"
        }
      ]
    }
  ],
  "name": "Centrus Soho Outside",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
