# Lambda Build Week Project - I'll Serve Soup

## Why "I'll Serve Soup"

### Pitch
A simple soup kitchen management software that allows inventory tracking and easy user sign up.

### MVP Features Breakdown
Login page: simple form for a user login flow. Users can enter username and password and login or sign up as a soup kitchen manager.
Home Page: a grid list of inventory items, (uncategorized for MVP, stretch will be to add categories) that a soup kitchen manager can use to track units, weights, quantities etc.
Add inventory item page: User can add a new item in their inventory to create an item. i.e. potatoes: '20lbs'
Edit inventory item: user can edit the quantity, amount, weight or value of an item in their kitchen.
If an inventory item reaches a '0' (or low threshold) quantity, make sure to indicate to the manager that they need to restock the item by showing that item as out of stock etc.

## Requirements
To run this application locally, you will need [Node.js](https://nodejs.org/en/download/) installed

## Run application

    $ git clone https://github.com/i-ll-serve-soup-bweu/Frontend.git
    $ cd into PROJECTNAME/serve-soup-inventory-mgt
    $ npm install
    $ npm start

The application will automaticatically start in your browser.

## Run Storybook

The get a feel of the various components in the application, from with the app's folder, run

    $ npm run storybook

## Languages & tools

### JavaScript

- [React](http://reactjs.org) for the UI
- [Styled Components](styled-components.com) for the styling
- [Storybook](https://storybook.js.org) for 'telling a story' about our components
- [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start) for client-side routing

## Team

- [Elisa Martin](https://github.com/elisamartin) - Team Lead, User Interface & Back-end Architect
- [Yusuf Abdulkarim](https://github.com/haywhyze) - Front-end Architect
- [Martin Twum Mensah](https://github.com/twumm) - Front-end Architect
