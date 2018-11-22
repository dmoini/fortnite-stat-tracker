# Fortnite Stat Tracker

This is a web application that uses the [Fortnite API](https://fortniteapi.com/) to search for player stats, view items in the daily shop, and view weekly challenges from any week.

To get an API key, please sign up at https://fortniteapi.com. To use the API key, within **apikey-template.js** replace **YOUR_API_KEY** with the provide API key.
```Javascript
const API_KEY = 'YOUR_API_KEY'
```
Then rename **apikey-template.js** to **apikey.js**.

To perform development tasks such as testing and linting, you need to have [Node.js](https://nodejs.org) installed. In order to get going, run `npm install`:

    $ cd fortnite-stat-tracker
    $ npm install

The installation allows you to run the web app locally. At this folder’s location, just type `npm start`:

    $ cd fortnite-stat-tracker
    $ npm start
