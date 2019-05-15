// This is a pre-ES6 module “module.” Really it is a global object that is initialized privately.
// At this writing, web browsers _do_ support modules natively, but for now it remains beneficial
// to be aware of this older mechanism.
(() => {
  let api = 'https://fortnite-public-api.theapinetwork.com/prod09/'

  const apiHost = host => { api = host }
  const urlFor = resource => `${api}${resource}`

  const HTTP_OK = 200

  const throwResponseError = response => {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }

  const emitNativeError = error => {
    throw error
  }

  const statusCheck = successStatuses => response => {
    if (successStatuses.includes(response.status)) {
      return response
    } else {
      throwResponseError(response)
    }
  }

  const okCheck = statusCheck([HTTP_OK])

  const paramsWithApiKey = params => {
    const result = new URLSearchParams(params)
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        result.set(key, params[key])
      }
    }
    return result
  }

  // The fetch function initiates a connection to the web service.
  // fetch returns a _promise_: an object that represents a future result.
  // Thus, the function actually returns right away. However, when the
  // anticipated result does show up, the code specifies what to do using
  // either `then` or `catch`. Both functions accept another function,
  // to be called upon a successful or failed promise, respectively.
  // Furthermore, then `then` function can be chained: its return result
  // is passed to the next `then` function as an argument. Here, the initial
  // handler converts the raw result into JSON. That JSON then goes to the
  // next handler, which does the actual work of putting the result on the
  // web page.
  //
  // The design of fetch allows this entire sequence to be rendered in a
  // _single statement_, thus obviating the need for curly braces but
  // resulting in what many will view to be a decrease in readability
  // (for those who aren’t used to functional-style programming). YMMV
  const query = (resource, params) => fetch(`${urlFor(resource)}?${paramsWithApiKey(params)}`, {
    headers
  }).then(okCheck, emitNativeError)
    .then(response => response.json())

  const searchUserID = params => query('users/id', params)
  const searchStats = params => query('users/public/br_stats', params)
  const searchShop = params => query('store/get', params)
  const searchChallenges = params => query('challenges/get', params)

  window.ApiService = {
    apiHost,
    searchUserID,
    searchStats,
    searchShop,
    searchChallenges
  }
})()
