# love-travel
A travel planning app for multiple cities with top attraction information. Ruby on Rails backend, JavaScript/React frontend with Google Maps and Yelp APIs, Bcypt and JSON Web Tokens. 

![front-page-screencap](learn-love-travel-splash.png)

[Learn. Love. Travel. Demo](https://youtu.be/b1hBes6fejQ)

## Prerequisites

* Ruby v5.1.4
* PostgreSQL 10
* React

# How to Use
1. Clone this repo - https://github.com/brianabaker/love-travel
2. Navigate to love-travel-backend, complete backend setup
3. In a separate terminal window, navigate to love-travel-frontend, complete frontend setup

## Backend Setup
After navigating to love-travel-backend, in that directory: 
1. Install Gems `bundle install`
2. Setup Database `rake db:create` then `rake db:migrate`
3. Seed Database `rake db:seed`
4. Start your server `rails s`

## Frontend Setup
After navigating to love-travel-frontend, in that directory: 
1. Install dependencies `yarn install` 
2. Start your server `yarn start` 

## In Your Browser 
Navigate to the web address of your Node server [http://localhost:3001](http://localhost:3001) - or whatever yours is
