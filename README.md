# Drone Shak


## About the app

## Installation and setup

* Install npm packages: `npm run install` 
* Start webserver: `npm run start`
* Run "Unreliable API": in a new terminal run `npm run mockserver`
* Install and start Redis locally. Useful links:
 [Download Redis](https://redis.io/download) and
 [Install and config Redis on Mac OS X via Homebrew](https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298)
 
## Run happy path
 * Make sure unreliable API is running
 * Hit http://localhost:3000/ in browser

## Run sad path

 * Make sure to stop unreliable API 
 * Hit http://localhost:3000/ in browser


## Todos 

* TDD
* Refactore drone controller functions to be more consistant (currently is combination of Promise and async await)
* Import file path is anti pattern fix it to be absolute!
* Add route versioning, in a way that it's seamless to the end user but it will maintenance. 
* Do more functional programming 
* Add e2e test
* Add better error handling
* Add analytics to measure to log response time. 
* Fix lint errors

