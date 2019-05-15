(() => {
  const setupEventListeners = () => {
    const platformDropdown = $('#choose-platform')
    const searchName = $('#search-name')
    const searchButton = $('#search-button')
    const chooseChallenge = $('#choose-challenge')

    // CHOOSE PLATFORM
    platformDropdown.change(function () {
      let selectedPlatform = $(this).find("option:selected").val()
      platformDropdown.attr('value', selectedPlatform)
    })

    searchName.bind('input', () => searchButton.prop('disabled', !searchName.val()))

    searchButton.click(
      () => {
        let username = searchName.val()
        let platform = platformDropdown.val()
        const season = "alltime"
        getUserID(username, platform, season)
      }
    )

    const getUserID = (username, platform, season) => {
      if (username.toLowerCase() === "rick astley") {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
      }
      window.ApiService.searchUserID({'username': username})
        .then(result => getStats(result.uid, platform, season))
        .catch(() => $('#username-container').empty().append(
          displayAlert(defaultAlertClasses, 
            'This user does not exist or is not available.')
        ))
    }

    const getStats = (uid, platform, season) => {
      window.ApiService.searchStats({'user_id': uid, 'platform': platform, 'window': season})
        .then(result => displayUsernameAndStats(result))
        .catch(() => $('#username-container').empty().append(
          displayAlert('col-md-6 offset-md-3 col-sm-8 offset-sm-2 alert alert-danger text-center',
            'Could not find this user. Please make sure you entered the correct Epic Games username ' + 
            'and chose the correct platform.')
        ))
    }

    // SEARCH VIA ENTER KEY
    searchName.keypress(function (e) {
      e.which === 13 && searchName.val().length > 0 ? searchButton.click() : jQuery.noop()
    })

    // CHANGE WEEKLY CHALLENGE
    chooseChallenge.change(function () {
      let sIndex = chooseChallenge.val().indexOf('s')
      let wIndex = chooseChallenge.val().indexOf('w')
      let season = chooseChallenge.val().substring(sIndex + 1, wIndex)
      let chosenWeek = chooseChallenge.val().substring(wIndex + 1)
      window.ApiService.searchChallenges({'season': season})
        .then(result => filterChallenges(result.challenges, chosenWeek, result.star))
        .catch(() => $('#challenge-container').empty().append(
          displayAlert(defaultAlertClasses, 
            'Sorry, but could not display challenges.')
        ))
    })
  }

  const defaultAlertClasses = 'col alert alert-danger text-center'
  const displayAlert = (classes, alertMessage) => {
    return $('<div></div>').addClass(classes).text(alertMessage)
  }

  // USERNAME AND STATS
  const displayUsernameAndStats = usernameAndStats => {
    removeSearchBarBottomMargin()
    displayUsername(usernameAndStats.username)
    displayStats(usernameAndStats.totals)
  }

  const removeSearchBarBottomMargin = () => $('#searchbar-container').removeClass('mb-5').children().removeClass('mb-3')

  const displayUsername = username => $('#username-container').empty().append(
    $('<div></div>').addClass('row p-1 justify-content-center').append(
      $('<div></div>').addClass('pt-2 fortnite-font text-white').attr({
        id: 'username'
      }).text(username)
    )
  )

  const displayStats = totalStats => $('#stats-container').addClass('text-white pb-3 fortnite-font').empty().append(
    $('<div></div>').addClass('row p-1 justify-content-center').append(
      $('<div></div>').addClass('stats').html(`Total matches: ${totalStats.matchesplayed}`)
    )
  ).append(
    $('<div></div>').addClass('row p-1 justify-content-center').append(
      $('<div></div>').addClass('stats').html(`Total wins: ${totalStats.wins}`)
    )
  ).append(
    $('<div></div>').addClass('row p-1 justify-content-center').append(
      $('<div></div>').addClass('stats').html(`Total kills: ${totalStats.kills}`)
    )
  ).append(
    $('<div></div>').addClass('row p-1 justify-content-center').append(
      $('<div></div>').addClass('stats').html(`K/D: ${totalStats.kd}`)
    )
  )

  const loadShopAndChallenges = () => {
    displayShop()
    displayChallenges()
  }

  // DAILY SHOP
  const displayShop = () => {
    console.log("DISPLAY SHOP")
    window.ApiService.searchShop()
      .then(result => displayShopItems(result.items, result.vbucks))
      .catch(() => $('#shop-container').empty().append(
        displayAlert(defaultAlertClasses,
          'Sorry, but could not display the shop.')
      ))
  }

  const displayShopItems = (items, vbucks) => $('#shop-container').empty().append(
    items.map(
      element => { return shopElement(element, vbucks) }
    )
  )

  const shopElement = (element, vbucks) => $('<div></div>').addClass('m-1 card').append(
    $('<img/>').addClass('thumbnail card').attr({
      src: element.item.images.background,
      alt: element.name
    })
  ).append(
    $('<div></div>').addClass('card-img-overlay text-white').append(
      $('<div></div>').attr({
        id: 'itemdesc'
      }).append(
        $('<h5></h5>').addClass('card-title itemname fortnite-font').text(element.name)
      ).append(
        $('<p></p>').text(`${element.cost} `).addClass('card-text itemprice fortnite-font').append(
          $('<img/>').attr({
            src: vbucks
          })
        )
      )
    )
  )

  // CHALLENGES
  const displayChallenges = () => {
    window.ApiService.searchChallenges({'season': 'current'})
      .then(result => {
        loadChallengesAndSelect(result.challenges, result.season, result.currentweek, result.star)
      }).catch(() => {
        $('#challenge-container').empty().append(
          displayAlert(defaultAlertClasses, 
            'Sorry, but could not display challenges.')
        )
      })
  }

  const loadChallengesAndSelect = (challenges, season, currentWeek, star) => {
    loadChallengeSelect(season, currentWeek)
    filterChallenges(challenges, currentWeek, star)
  }

  const loadChallengeSelect = (season, currentWeek) => {
    let currentSeason = true
    for (let s = season; s > 2; s--) {
      for (let c = 10; c > 0; c--) {
        if (currentSeason) {
          c = currentWeek
          currentSeason = false
        }
        if (c === 10 && s !== season) {
          addChallengeDivider()
        }
        addChallengeToSelect(s, c)
      }
    }
  }

  const chooseChallenge = $('#choose-challenge')
  const addChallengeToSelect = (season, currentWeek) => {
    chooseChallenge.append(
      $('<option></option>').attr({
        value: `s${season}w${currentWeek}`
      }).text(`Season ${season} Week ${currentWeek}`)
    )
  }

  const addChallengeDivider = () => chooseChallenge.append(
    $('<option></option>').attr({
      disabled: true
    }).text('──────────')
  )

  const cleanChallenges = (challenges) => {
    for (let week in challenges) {
      if (challenges[week].length === 0) {
        delete challenges[week]
      }
    }
    return challenges
  }

  const filterChallenges = (challenges, currentWeek, star) => {
    const availableChallenges = cleanChallenges(challenges)
    const cws = currentWeek - 1
    displayChallengeItems(availableChallenges[cws], star)
  }

  const displayChallengeItems = (week, star) => {
    $('#challenge-container').empty().append(
      week.entries.map(entry => {
        return challengeElement(entry, star) 
      })
    )
  }

  const challengeElement = (entry, star) => {
    return $('<div></div>').addClass('challenge my-2').append(
      $('<span></span>').text(entry.challenge)
    ).append($('<br>')).append(
      $('<span></span>').text(`0 / ${entry.total} - ${entry.stars}`)
    ).append(
      $('<img/>').attr({
        src: star
      }).addClass('mb-1 ml-2')
    )
  }

  const init = () => {
    window.ApiService.apiHost('https://fortnite-public-api.theapinetwork.com/prod09/')
    setupEventListeners()
    loadShopAndChallenges()
  }

  window.FortniteSearchController = {
    init
  }
})()