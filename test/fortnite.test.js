// CHOOSE PLATFORM DROPDOWN TEST
describe('Fortnite choose-platform dropdown example', () => {
  beforeEach(() => {
    fixture.setBase('test')
    fixture.load('fortnite.fixture.html')
  })
  
  afterEach(() => fixture.cleanup())

  describe('changing platform', () => {
    let platformDropdown
  
    beforeEach(() => {
      platformDropdown = $('#choose-platform')
    })
  
    it('should change value of dropdown correctly', () => {
      platformDropdown.val('ps4').trigger('change')
      expect(platformDropdown.val()).toBe('ps4')
      platformDropdown.val('pc').trigger('change')
      expect(platformDropdown.val()).toBe('pc')
      platformDropdown.val('xb1').trigger('change')
      expect(platformDropdown.val()).toBe('xb1')
    })
  })

})

// SEARCH BAR TEST
describe('Fortnite search example', () => {
  beforeEach(() => {
    fixture.setBase('test')
    fixture.load('fortnite.fixture.html')
    window.FortniteSearchController.init()
  })
  
  afterEach(() => fixture.cleanup())

  const FETCH_COMPLETION_DELAY = 250
  
  it('should start with an empty search field', () => expect($('#search-name').val()).toBe(''))
  it('should start with a disabled search button', () => expect($('#search-button').prop('disabled')).toBe(true))
  
  describe('search button', () => {
    let searchName
    let searchButton
  
    beforeEach(() => {
      searchName = $('#search-name')
      searchButton = $('#search-button')
    })
  
    it('should be enabled when the search field is not blank', () => {
      searchName.val('i can haz unit tests').trigger('input')
      expect(searchButton.prop('disabled')).toBe(false)
    })
  
    it('should be disabled when the search field is blank', () => {
      searchName.val('').trigger('input')
      expect(searchButton.prop('disabled')).toBe(true)
    })
    
    it('should not populate the username or stats container', done => setTimeout(() => {
      expect($('#username-container').children().length).toBe(0)
      expect($('#stats-container').children().length).toBe(0)
      done()
    }, FETCH_COMPLETION_DELAY))
  })


  
  describe('API calls', () => {
    beforeEach(() => {
      sinon.stub(window.ApiService, 'searchStats')
      window.ApiService.searchStats.returns(Promise.resolve({
        "username": "DeluxeHazard",
        "totals": {
          "kills": 2369,
          "wins": 58,
          "matchesplayed": 1879,
          "kd": 1.3,
        }
      }))
  
      $('#search-name').val('DeluxeHazard')
      $('#search-button').click()
    })
  
    afterEach(() => window.ApiService.searchStats.restore())
  
    it('should populate the userStats containers when search results arrive via click', done => setTimeout(() => {
      expect($('#username-container').children().length).toBe(1)
      expect($('#username').text().toLowerCase()).toBe('deluxehazard')
      expect($('#stats-container').children().length).toBe(4)
      done()
    }, FETCH_COMPLETION_DELAY))
  })

  const simulateEnterKey = (keyCode) => {
    $('#search-name').trigger({
      type: 'keypress',
      which: keyCode
    })
  }

  describe('using key other than enter', () => {
    beforeEach(() => {
      sinon.stub(window.ApiService, 'searchStats')
      window.ApiService.searchStats.returns(Promise.resolve({
        "username": "DeluxeHazard",
        "totals": {
          "kills": 2369,
          "wins": 58,
          "matchesplayed": 1879,
          "kd": 1.3,
        }
      }))

      $('#search-name').val('DeluxeHazard')
      const DKey = 68
      simulateEnterKey(DKey)
    })
  
    afterEach(() => window.ApiService.searchStats.restore())
  
    it('should not populate the userStats containers when search results arrive via enter button', done => setTimeout(() => {
      expect($('#username-container').children().length).toBe(0)
      expect($('#stats-container').children().length).toBe(0)
      done()
    }, FETCH_COMPLETION_DELAY))
  })

  describe('API calls', () => {
    beforeEach(() => {
      sinon.stub(window.ApiService, 'searchStats')
      window.ApiService.searchStats.returns(Promise.resolve({
        "username": "DeluxeHazard",
        "totals": {
          "kills": 2369,
          "wins": 58,
          "matchesplayed": 1879,
          "kd": 1.3,
        }
      }))

      $('#search-name').val('DeluxeHazard')
      const enterkey = 13
      simulateEnterKey(enterkey)
    })
  
    afterEach(() => window.ApiService.searchStats.restore())
  
    it('should populate the userStats containers when search results arrive via enter button', done => setTimeout(() => {
      expect($('#username-container').children().length).toBe(1)
      expect($('#username').text().toLowerCase()).toBe('deluxehazard')
      expect($('#stats-container').children().length).toBe(4)
      done()
    }, FETCH_COMPLETION_DELAY))
  })
  
  describe('failed API calls', () => {
    beforeEach(() => {
      sinon.stub(window.ApiService, 'searchUserID')
      window.ApiService.searchUserID.returns(Promise.reject('Mock failure'))
  
      $('#search-name').val('Not DeluxeHazard')
      $('#search-button').click()
    })
  
    afterEach(() => window.ApiService.searchUserID.restore())
  
    it('should display an alert when the API call fails', done => setTimeout(() => {
      expect($('#username-container').find('.alert.alert-danger').length).toBe(1)
      done()
    }, FETCH_COMPLETION_DELAY))
  })

  describe('failed API calls', () => {
    beforeEach(() => {
      sinon.stub(window.ApiService, 'searchStats')
      window.ApiService.searchStats.returns(Promise.reject('Mock failure'))
  
      $('#search-name').val('Not DeluxeHazard')
      $('#search-button').click()
    })
  
    afterEach(() => window.ApiService.searchStats.restore())
  
    it('should display an alert when the API call fails', done => setTimeout(() => {
      expect($('#username-container').find('.alert.alert-danger').length).toBe(1)
      done()
    }, FETCH_COMPLETION_DELAY))
  })
})
  
// SHOP TEST
describe('Fortnite shop example', () => {
  beforeEach(() => {
    fixture.setBase('test')
    fixture.load('fortnite.fixture.html')
  })
  
  afterEach(() => fixture.cleanup())
  
  const FETCH_COMPLETION_DELAY = 250
  
  describe('API calls', () => {
    beforeEach(() => {
      sinon.stub(window.ApiService, 'searchShop')
      window.ApiService.searchShop.returns(Promise.resolve({
        "items": [
          {
            "name": "Flying Saucer",
            "cost": "1200",
            "item": {
              "images": {
                "background": "https://fortnite-public-files.theapinetwork.com/image/8490067-024d217-5f39ca7-1a3f25f.png"
              }
            }
          },
          {
            "name": "Jack Gourdon",
            "cost": "1500",
            "item": {
              "images": {
                "background": "https://fortnite-public-files.theapinetwork.com/image/7e7ec6a-0ec6229-5b3667d-f7c2d49.png"
              }
            }
          }
        ]
      }))
      window.FortniteSearchController.init()
    })
  
    afterEach(() => window.ApiService.searchShop.restore())
  
    it('should populate the shop container', done => setTimeout(() => {
      expect($('#shop-container').children().length).toBe(2)
      done()
    }, FETCH_COMPLETION_DELAY))
  })
  
  describe('failed API calls', () => {
    beforeEach(() => {
      sinon.stub(window.ApiService, 'searchShop')
      window.ApiService.searchShop.returns(Promise.reject('Mock failure'))
      window.FortniteSearchController.init()
    })
  
    afterEach(() => window.ApiService.searchShop.restore())
  
    it('should display an alert when the API call fails', done => setTimeout(() => {
      expect($('#shop-container').find('.alert.alert-danger').length).toBe(1)
      done()
    }, FETCH_COMPLETION_DELAY))
  })
})

// CHALLENGES
describe('Fortnite challenges example', () => {
  beforeEach(() => {
    fixture.setBase('test')
    fixture.load('fortnite.fixture.html')
  })
  
  afterEach(() => fixture.cleanup())
  
  const FETCH_COMPLETION_DELAY = 250
  
  describe('API calls', () => {
    beforeEach(() => {
      sinon.stub(window.ApiService, 'searchChallenges')
      window.ApiService.searchChallenges.returns(Promise.resolve({
        "currentweek": 1,
        "star": "https://fortnite-public-files.theapinetwork.com/fortnite-br-challenges-star.png",
        "challenges": [
          {
            "week": 1,
            "entries": [
              {
                "challenge": "Pick up a Legendary Item in different matches",
                "total": 3,
                "stars": 5,
              },
              {
                "challenge": "Regain health from a Cozy Campfire",
                "total": 150,
                "stars": 5,
              },
              {
                "challenge": "Stage 1: Search Chests",
                "total": 3,
                "stars": 3,
              },
              {
                "challenge": "Apply Shields",
                "total": 500,
                "stars": 5,
              },
              {
                "challenge": "Stage 1: Land at Junk Junction",
                "total": 1,
                "stars": 5,
              },
              {
                "challenge": "Dance under different Streetlight Spotlights",
                "total": 7,
                "stars": 10,
              },
              {
                "challenge": "Eliminate opponents in different Named Locations",
                "total": 5,
                "stars": 10,
              }
            ]
          }
        ]
      }))
      window.FortniteSearchController.init()
    })
  
    afterEach(() => window.ApiService.searchChallenges.restore())
  
    it('should populate the challenge container', done => setTimeout(() => {
      // @DONDI should have 7 children since there are 7 children, but it says it only produces 1 child
      expect($('#challenge-container').children().length).toBe(7)
      done()
    }, FETCH_COMPLETION_DELAY))
  })
  
  describe('failed API calls', () => {
    beforeEach(() => {
      sinon.stub(window.ApiService, 'searchChallenges')
      window.ApiService.searchChallenges.returns(Promise.reject('Mock failure'))
      window.FortniteSearchController.init()
    })
  
    afterEach(() => window.ApiService.searchChallenges.restore())
  
    it('should display an alert when the API call fails', done => setTimeout(() => {
      expect($('#challenge-container').find('.alert.alert-danger').length).toBe(1)
      done()
    }, FETCH_COMPLETION_DELAY))
  })
})