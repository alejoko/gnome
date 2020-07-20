# Brastlewark Citizens Search App

The App was made thinking of the possibility to load citizens in the meanwhile the user is typing the input search. That loaded citizens obviously are matching the needle of the search.

Once localized the one we are interested, just clicked on it, and we can go to visit the detail section, wich displays the whole information about our person. Moreover, we can see who are their friends and click on them to display their data.

## Architecture Decisions

* React-Redux: Decided to use React and Redux for the possibility of the control of the state (as unique source of truth), and React because the trusted libreries to increase the performace (as react-virtualized)

* Redux-Ducks: I used Ducks to apply with success, a modular organization of my redux elements.

* TypeScript: I took the decision to use TypeScript for increase hardyness and sturdiness to faults, and because writing types makes it easier to write and read the code.

* react-virtualized: This react library provides virtualization to just render information that encloses the viewport (on screen). So performance increases a lot without rendereing the whole lists elements.

* react-lazy-load-image-component: This libary allows to load images just when it shows in viewport (with the help of virtualized), so it is a good point to increase performance.

* Mobile-first: Design of application is optimized for mobile devices.

* Cypress.io: Decided to use Cypress e2e test, and not to use jest/enzyme beacuse the react-virtualized lib. introduces several test complexity for unit test library, wich is a high isolated environment, but it is perfect to be managed by a e2e like Cypress because the reproduction of human behavior. Also we have Dummy static data, that is a good condition for use e2e and look for integration.

## How to run ?

* App: `yarn start`

* test: `yarn cy:open` (and after that, need lo localize search.spec.ts on the window opened and click it )


