// When starting a front end, it is usual to first separate out the functions which will be implemented by
// a web service. This module demonstrates how such a “mock” service can look. Note how the external interface
// of the final ApiService object matches the one in api.js. That’s because, in reality, this file is actually
// how api.js _starts_, and it morphs into the final api.js when you connect to the web service for real.
(() => {
  const searchUserID = (username) => Promise.resolve({
    "uid": "f826e2dacdbe4s796921a58eeba996b6e",
    "username": username,
    "platforms": [
      "pc",
      "xb1"
    ],
    "seasons": [
      "season6"
    ]
  })

  // TODO: add parameter for userID?
  const searchStats = (uid, platform, window) => Promise.resolve({
    "cached": false,
    "uid": uid,
    "username": "DeluxeHazard",
    "platform": platform,
    "timestamp": 1539842544,
    "window": window,
    "stats": {
      "kills_solo": 560,
      "placetop1_solo": 3,
      "placetop10_solo": 63,
      "placetop25_solo": 124,
      "matchesplayed_solo": 436,
      "kd_solo": 1.29,
      "winrate_solo": 0.69,
      "score_solo": 62861,
      "minutesplayed_solo": 0,
      "lastmodified_solo": 1539655329,
      "kills_duo": 837,
      "placetop1_duo": 9,
      "placetop5_duo": 67,
      "placetop12_duo": 186,
      "matchesplayed_duo": 668,
      "kd_duo": 1.27,
      "winrate_duo": 1.35,
      "score_duo": 111691,
      "minutesplayed_duo": 0,
      "lastmodified_duo": 1539658798,
      "kills_squad": 972,
      "placetop1_squad": 46,
      "placetop3_squad": 106,
      "placetop6_squad": 200,
      "matchesplayed_squad": 775,
      "kd_squad": 1.33,
      "winrate_squad": 5.94,
      "score_squad": 166981,
      "minutesplayed_squad": 0,
      "lastmodified_squad": 1539480089
    },
    "totals": {
      "kills": 2369,
      "wins": 58,
      "matchesplayed": 1879,
      "minutesplayed": 0,
      "hoursplayed": 0,
      "score": 341533,
      "winrate": 3.09,
      "kd": 1.3,
      "lastupdate": 1539655329
    }
  })

  const searchShop = () => Promise.resolve({
    "date_layout": "day-month-year",
    "lastupdate": 1540252811,
    "date": "23-10-18",
    "rows": 12,
    "vbucks": "https://fortnite-public-files.theapinetwork.com/fortnite-vbucks-icon.png",
    "items": [
      {
        "itemid": "4864757-102dcac-0c083d4-a4a2ae9",
        "name": "Stage Dive",
        "cost": "800",
        "featured": 1,
        "refundable": 1,
        "lastupdate": 1540252805,
        "item": {
          "image": "https://fortnite-public-files.theapinetwork.com/glider/97dad874358a5cfa61598821361586ed.png",
          "images": {
            "transparent": "https://fortnite-public-files.theapinetwork.com/glider/97dad874358a5cfa61598821361586ed.png",
            "background": "https://fortnite-public-files.theapinetwork.com/image/4864757-102dcac-0c083d4-a4a2ae9.png",
            "featured": {
              "transparent": null,
              "background": null
            }
          },
          "captial": "glider",
          "type": "glider",
          "rarity": "rare",
          "obtained_type": "vbucks"
        }
      },
      {
        "itemid": "8c421fe-05b74d8-00d8bb9-d7bc8ac",
        "name": "Power Chord",
        "cost": "2000",
        "featured": 1,
        "refundable": 1,
        "lastupdate": 1540252805,
        "item": {
          "image": "https://fortnite-public-files.theapinetwork.com/outfit/6992695641a65a77c8e4633ce1a61144.png",
          "images": {
            "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/6992695641a65a77c8e4633ce1a61144.png",
            "background": "https://fortnite-public-files.theapinetwork.com/image/8c421fe-05b74d8-00d8bb9-d7bc8ac.png",
            "featured": {
              "transparent": "https://fortnite-public-files.theapinetwork.com/featured/8c421fe-05b74d8-00d8bb9-d7bc8ac.png",
              "background": "https://fortnite-public-files.theapinetwork.com/image/8c421fe-05b74d8-00d8bb9-d7bc8ac/featured.png"
            }
          },
          "captial": "outfit",
          "type": "outfit",
          "rarity": "legendary",
          "obtained_type": "vbucks"
        }
      },
      {
        "itemid": "8490067-024d217-5f39ca7-1a3f25f",
        "name": "Flying Saucer",
        "cost": "1200",
        "featured": 1,
        "refundable": 1,
        "lastupdate": 1540252805,
        "item": {
          "image": "https://fortnite-public-files.theapinetwork.com/glider/ff333e7ed900fe25bc067461efdab066.png",
          "images": {
            "transparent": "https://fortnite-public-files.theapinetwork.com/glider/ff333e7ed900fe25bc067461efdab066.png",
            "background": "https://fortnite-public-files.theapinetwork.com/image/8490067-024d217-5f39ca7-1a3f25f.png",
            "featured": {
              "transparent": null,
              "background": null
            }
          },
          "captial": "glider",
          "type": "glider",
          "rarity": "epic",
          "obtained_type": "vbucks"
        }
      },
      {
        "itemid": "3a3f590-00dbd5b-a4d4091-7019365",
        "name": "Anarchy Axe",
        "cost": "800",
        "featured": 1,
        "refundable": 1,
        "lastupdate": 1540252805,
        "item": {
          "image": "https://fortnite-public-files.theapinetwork.com/pickaxe/cf57c3a410a08e081aabda409b422c9b.png",
          "images": {
            "transparent": "https://fortnite-public-files.theapinetwork.com/pickaxe/cf57c3a410a08e081aabda409b422c9b.png",
            "background": "https://fortnite-public-files.theapinetwork.com/image/3a3f590-00dbd5b-a4d4091-7019365.png",
            "featured": {
              "transparent": null,
              "background": null
            }
          },
          "captial": "pickaxe",
          "type": "pickaxe",
          "rarity": "rare",
          "obtained_type": "vbucks"
        }
      },
      {
        "itemid": "ab408ac-42a6265-c49344f-4080e88",
        "name": "Patty Whacker",
        "cost": "500",
        "featured": 1,
        "refundable": 1,
        "lastupdate": 1540252804,
        "item": {
          "image": "https://fortnite-public-files.theapinetwork.com/pickaxe/29b5665e1fdae53577a5b819dce170f7.png",
          "images": {
            "transparent": "https://fortnite-public-files.theapinetwork.com/pickaxe/29b5665e1fdae53577a5b819dce170f7.png",
            "background": "https://fortnite-public-files.theapinetwork.com/image/ab408ac-42a6265-c49344f-4080e88.png",
            "featured": {
              "transparent": null,
              "background": null
            }
          },
          "captial": "pickaxe",
          "type": "pickaxe",
          "rarity": "uncommon",
          "obtained_type": "vbucks"
        }
      },
      {
        "itemid": "f86b3d5-a88f224-dad1a85-638e91d",
        "name": "Beef Boss",
        "cost": "1500",
        "featured": 1,
        "refundable": 1,
        "lastupdate": 1540252803,
        "item": {
          "image": "https://fortnite-public-files.theapinetwork.com/outfit/f17e004ca8e022a5aa0cfcb86aa981f8.png",
          "images": {
            "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/f17e004ca8e022a5aa0cfcb86aa981f8.png",
            "background": "https://fortnite-public-files.theapinetwork.com/image/f86b3d5-a88f224-dad1a85-638e91d.png",
            "featured": {
              "transparent": "https://fortnite-public-files.theapinetwork.com/featured/f86b3d5-a88f224-dad1a85-638e91d.png",
              "background": "https://fortnite-public-files.theapinetwork.com/image/f86b3d5-a88f224-dad1a85-638e91d/featured.png"
            }
          },
          "captial": "outfit",
          "type": "outfit",
          "rarity": "epic",
          "obtained_type": "vbucks"
        }
      },
      {
        "itemid": "b28cb22-3fb1d68-1ed5467-d131ce5",
        "name": "Dance Therapy",
        "cost": "800",
        "featured": 0,
        "refundable": 1,
        "lastupdate": 1540252811,
        "item": {
          "image": "https://fortnite-public-files.theapinetwork.com/emote/05ddc2d567987f0a7346ecac15c58fc4.png",
          "images": {
            "transparent": "https://fortnite-public-files.theapinetwork.com/emote/05ddc2d567987f0a7346ecac15c58fc4.png",
            "background": "https://fortnite-public-files.theapinetwork.com/image/b28cb22-3fb1d68-1ed5467-d131ce5.png",
            "featured": {
              "transparent": null,
              "background": null
            }
          },
          "captial": "emote",
          "type": "emote",
          "rarity": "epic",
          "obtained_type": "vbucks"
        }
      },
      {
        "itemid": "afaddfe-d960ef0-02b0c0f-6b2c862",
        "name": "Starry Flight",
        "cost": "800",
        "featured": 0,
        "refundable": 1,
        "lastupdate": 1540252810,
        "item": {
          "image": "https://fortnite-public-files.theapinetwork.com/glider/21bdad0d5dda22716550153ccda0844a.png",
          "images": {
            "transparent": "https://fortnite-public-files.theapinetwork.com/glider/21bdad0d5dda22716550153ccda0844a.png",
            "background": "https://fortnite-public-files.theapinetwork.com/image/afaddfe-d960ef0-02b0c0f-6b2c862.png",
            "featured": {
              "transparent": null,
              "background": null
            }
          },
          "captial": "glider",
          "type": "glider",
          "rarity": "rare",
          "obtained_type": "vbucks"
        }
      },
      {
        "itemid": "fc54dd4-2432261-0a75ef6-6ff0597",
        "name": "Burnout",
        "cost": "1500",
        "featured": 0,
        "refundable": 1,
        "lastupdate": 1540252810,
        "item": {
          "image": "https://fortnite-public-files.theapinetwork.com/outfit/e725c09e7c2b55bf8cee6730a5b0f6f7.png",
          "images": {
            "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/e725c09e7c2b55bf8cee6730a5b0f6f7.png",
            "background": "https://fortnite-public-files.theapinetwork.com/image/fc54dd4-2432261-0a75ef6-6ff0597.png",
            "featured": {
              "transparent": null,
              "background": null
            }
          },
          "captial": "outfit",
          "type": "outfit",
          "rarity": "epic",
          "obtained_type": "vbucks"
        }
      },
      {
        "itemid": "7d4f589-3abf17a-8aa2a38-973a98a",
        "name": "Take 14",
        "cost": "200",
        "featured": 0,
        "refundable": 1,
        "lastupdate": 1540252808,
        "item": {
          "image": "https://fortnite-public-files.theapinetwork.com/emote/73ad3e3c76f42be2c75b754892c1cb90.png",
          "images": {
            "transparent": "https://fortnite-public-files.theapinetwork.com/emote/73ad3e3c76f42be2c75b754892c1cb90.png",
            "background": "https://fortnite-public-files.theapinetwork.com/image/7d4f589-3abf17a-8aa2a38-973a98a.png",
            "featured": {
              "transparent": null,
              "background": null
            }
          },
          "captial": "emote",
          "type": "emote",
          "rarity": "uncommon",
          "obtained_type": "vbucks"
        }
      },
      {
        "itemid": "0e6f7ba-243f46e-494e1aa-f246fd7",
        "name": "Cliffhanger",
        "cost": "800",
        "featured": 0,
        "refundable": 1,
        "lastupdate": 1540252807,
        "item": {
          "image": "https://fortnite-public-files.theapinetwork.com/pickaxe/49ddea37c8c827f96c8e7c5f24b3fafd.png",
          "images": {
            "transparent": "https://fortnite-public-files.theapinetwork.com/pickaxe/49ddea37c8c827f96c8e7c5f24b3fafd.png",
            "background": "https://fortnite-public-files.theapinetwork.com/image/0e6f7ba-243f46e-494e1aa-f246fd7.png",
            "featured": {
              "transparent": null,
              "background": null
            }
          },
          "captial": "pickaxe",
          "type": "pickaxe",
          "rarity": "rare",
          "obtained_type": "vbucks"
        }
      },
      {
        "itemid": "7e7ec6a-0ec6229-5b3667d-f7c2d49",
        "name": "Jack Gourdon",
        "cost": "1500",
        "featured": 0,
        "refundable": 1,
        "lastupdate": 1540598408,
        "item": {
          "image": "https://fortnite-public-files.theapinetwork.com/outfit/9f12ea212296f9fe66e0dc486f654fd3.png",
          "images": {
            "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/9f12ea212296f9fe66e0dc486f654fd3.png",
            "background": "https://fortnite-public-files.theapinetwork.com/image/7e7ec6a-0ec6229-5b3667d-f7c2d49.png",
            "featured": {
              "transparent": null,
              "background": null
            }
          },
          "captial": "outfit",
          "type": "outfit",
          "rarity": "epic",
          "obtained_type": "vbucks"
        }
      }
    ]
  })

  const searchChallenges = () => Promise.resolve({
    "language": "en",
    "season": 6,
    "currentweek": 5,
    "star": "https://fortnite-public-files.theapinetwork.com/fortnite-br-challenges-star.png",
    "challenges": [
      {
        "week": 1,
        "value": "Week 1",
        "entries": [
          {
            "identifier": "7f39f83-17fbdb1-988ef4c-628eba0",
            "challenge": "Pick up a Legendary Item in different matches",
            "total": 3,
            "stars": 5,
            "difficulty": "normal"
          },
          {
            "identifier": "7f39f83-17fbdb1-988ef4c-628eba0",
            "challenge": "Regain health from a Cozy Campfire",
            "total": 150,
            "stars": 5,
            "difficulty": "normal"
          },
          {
            "identifier": "7f39f83-17fbdb1-988ef4c-628eba0",
            "challenge": "Stage 1: Search Chests",
            "total": 3,
            "stars": 3,
            "difficulty": "normal"
          },
          {
            "identifier": "7f39f83-17fbdb1-988ef4c-628eba0",
            "challenge": "Apply Shields",
            "total": 500,
            "stars": 5,
            "difficulty": "normal"
          },
          {
            "identifier": "7f39f83-17fbdb1-988ef4c-628eba0",
            "challenge": "Stage 1: Land at Junk Junction",
            "total": 1,
            "stars": 5,
            "difficulty": "normal"
          },
          {
            "identifier": "7f39f83-17fbdb1-988ef4c-628eba0",
            "challenge": "Dance under different Streetlight Spotlights",
            "total": 7,
            "stars": 10,
            "difficulty": "hard"
          },
          {
            "identifier": "7f39f83-17fbdb1-988ef4c-628eba0",
            "challenge": "Eliminate opponents in different Named Locations",
            "total": 5,
            "stars": 10,
            "difficulty": "hard"
          }
        ]
      },
      {
        "week": 2,
        "value": "Week 2",
        "entries": [
          {
            "identifier": "44f683a-84163b3-523afe5-7c2e008",
            "challenge": "Visit all of the Corrupted Areas",
            "total": 7,
            "stars": 5,
            "difficulty": "normal"
          },
          {
            "identifier": "44f683a-84163b3-523afe5-7c2e008",
            "challenge": "Use a Shadow Stone in different matches",
            "total": 3,
            "stars": 5,
            "difficulty": "normal"
          },
          {
            "identifier": "44f683a-84163b3-523afe5-7c2e008",
            "challenge": "Stage 1: Deal damage with standard Assault Rifles to opponents",
            "total": 200,
            "stars": 3,
            "difficulty": "normal"
          },
          {
            "identifier": "44f683a-84163b3-523afe5-7c2e008",
            "challenge": "Eliminate an opponent from at least 50m away",
            "total": 1,
            "stars": 5,
            "difficulty": "normal"
          },
          {
            "identifier": "44f683a-84163b3-523afe5-7c2e008",
            "challenge": "Deal damage with Pistols to opponents",
            "total": 500,
            "stars": 5,
            "difficulty": "normal"
          },
          {
            "identifier": "44f683a-84163b3-523afe5-7c2e008",
            "challenge": "SMG Eliminations",
            "total": 3,
            "stars": 10,
            "difficulty": "hard"
          },
          {
            "identifier": "44f683a-84163b3-523afe5-7c2e008",
            "challenge": "Stage 1: Deal damage with Hunting Rifles to opponents",
            "total": 200,
            "stars": 3,
            "difficulty": "normal"
          }
        ]
      },
      {
        "week": 3,
        "value": "Week 3",
        "entries": [
          {
            "identifier": "03afdbd-66e7929-b125f85-97834fa",
            "challenge": "Revive a player in different matches",
            "total": 5,
            "stars": 5,
            "difficulty": "normal"
          },
          {
            "identifier": "03afdbd-66e7929-b125f85-97834fa",
            "challenge": "Stage 1: Search a Chest in Lonely Lodge",
            "total": 1,
            "stars": 1,
            "difficulty": "normal"
          },
          {
            "identifier": "03afdbd-66e7929-b125f85-97834fa",
            "challenge": "Damage Trap Elimination",
            "total": 1,
            "stars": 10,
            "difficulty": "hard"
          },
          {
            "identifier": "03afdbd-66e7929-b125f85-97834fa",
            "challenge": "Stage 1: Visit Risky Reels and Wailing Woods in a single match",
            "total": 2,
            "stars": 1,
            "difficulty": "normal"
          },
          {
            "identifier": "03afdbd-66e7929-b125f85-97834fa",
            "challenge": "Hit a player with a Tomato 15m away or more",
            "total": 1,
            "stars": 5,
            "difficulty": "normal"
          },
          {
            "identifier": "03afdbd-66e7929-b125f85-97834fa",
            "challenge": "Complete timed trials",
            "total": 3,
            "stars": 10,
            "difficulty": "hard"
          },
          {
            "identifier": "03afdbd-66e7929-b125f85-97834fa",
            "challenge": "Eliminate an opponents in different matches",
            "total": 10,
            "stars": 10,
            "difficulty": "hard"
          }
        ]
      },
      {
        "week": 4,
        "value": "Week 4",
        "entries": [
          {
            "identifier": "ea5d2f1-c460823-2e07d3a-a3d998e",
            "challenge": "Dance with others to raise the Disco Ball near Loot Lake",
            "total": 1,
            "stars": 5,
            "difficulty": "normal"
          },
          {
            "identifier": "ea5d2f1-c460823-2e07d3a-a3d998e",
            "challenge": "Search an Ammo Box in different Named Locations",
            "total": 7,
            "stars": 5,
            "difficulty": "normal"
          },
          {
            "identifier": "ea5d2f1-c460823-2e07d3a-a3d998e",
            "challenge": "Deal damage to opponents in a single match",
            "total": 1000,
            "stars": 10,
            "difficulty": "hard"
          },
          {
            "identifier": "ea5d2f1-c460823-2e07d3a-a3d998e",
            "challenge": "Land at Greasy Grove",
            "total": 1,
            "stars": 1,
            "difficulty": "normal"
          },
          {
            "identifier": "ea5d2f1-c460823-2e07d3a-a3d998e",
            "challenge": " Dance on top of a Clock Tower",
            "total": 7,
            "stars": 1,
            "difficulty": "normal"
          },
          {
            "identifier": "ea5d2f1-c460823-2e07d3a-a3d998e",
            "challenge": "Complete timed trials",
            "total": 5,
            "stars": 10,
            "difficulty": "hard"
          },
          {
            "identifier": "ea5d2f1-c460823-2e07d3a-a3d998e",
            "challenge": "Eliminate opponents near any of the Corrupted Areas",
            "total": 3,
            "stars": 10,
            "difficulty": "hard"
          }
        ]
      },
      {
        "week": 5,
        "value": "Week 5",
        "entries": [
          {
            "identifier": "fc490ca-45c00b1-249bbe3-554a4fd",
            "challenge": "Record a speed of 27 or more on different Radar Signs",
            "total": 5,
            "stars": 5,
            "difficulty": "normal"
          },
          {
            "identifier": "fc490ca-45c00b1-249bbe3-554a4fd",
            "challenge": "Jump trough flaming hoops with a Shopping Cart or ATK",
            "total": 5,
            "stars": 5,
            "difficulty": "normal"
          },
          {
            "identifier": "fc490ca-45c00b1-249bbe3-554a4fd",
            "challenge": "Deal damage with Tractical Shotguns to opponents",
            "total": 200,
            "stars": 3,
            "difficulty": "normal"
          },
          {
            "identifier": "fc490ca-45c00b1-249bbe3-554a4fd",
            "challenge": "Eliminate an opponent from closer than 5m away",
            "total": 2,
            "stars": 5,
            "difficulty": "normal"
          },
          {
            "identifier": "fc490ca-45c00b1-249bbe3-554a4fd",
            "challenge": "Deal damage with SMGs to opponents",
            "total": 500,
            "stars": 5,
            "difficulty": "normal"
          },
          {
            "identifier": "fc490ca-45c00b1-249bbe3-554a4fd",
            "challenge": "Minigun Eliminations",
            "total": 2,
            "stars": 10,
            "difficulty": "hard"
          },
          {
            "identifier": "fc490ca-45c00b1-249bbe3-554a4fd",
            "challenge": "Deal damage with standard Pistols to opponents",
            "total": 200,
            "stars": 3,
            "difficulty": "normal"
          }
        ]
      },
      {
        "week": 6,
        "value": "Week 6"
      },
      {
        "week": 7,
        "value": "Week 7"
      },
      {
        "week": 8,
        "value": "Week 8"
      },
      {
        "week": 9,
        "value": "Week 9"
      },
      {
        "week": 10,
        "value": "Week 10"
      }
    ]
  })

  window.ApiService = {
    apiHost: () => {}, // No-op in our mock version.
    searchStats,
    searchShop,
    searchChallenges,
    searchUserID
  }
})()
