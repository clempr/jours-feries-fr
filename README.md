# jours-feries-fr

Ceci est une librairie permettant de générer la liste des jours fériés pour une année donnée. Cette liste sera de type ["Set"](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Set) et les jours seront des string au format voulu.

Cette librairie est une implémentation nodejs avec les définitions typescript.


## Installer
````bash
// Pour NodeJS
$ npm install jours-feries-fr
// ou installez et enregistrez sur package.json 
$ npm install --save jours-feries-fr
````

## Comment utiliser
le [format](https://day.js.org/docs/en/display/format) des dates est celui utilisé par [day.js](https://day.js.org/en/)
````Typescript
//version typescript
import getJoursFeries from "jours-feries-fr";

const jours:Set<string> = getJoursFeries(2021);
const joursWithFullMonth:Set<string> = getJoursFeries(2021,'DD MMMM YYYY');
````


````Javascript
//version javascript
const getJoursFeries = require("jours-feries-fr");

const jours = getJoursFeries(2021);
const joursWithFullMonth = getJoursFeries(2021,'DD MMMM YYYY');
````