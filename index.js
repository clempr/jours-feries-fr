"use strict";
const dayjs = require("dayjs");
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)
/**
 * @description Calcule des jours fériés d'une année donnée
 * @param {number} annee
 * @param {string} [format="DD/MM/YYYY"] - format des jours fériés en retour (defaut : "DD/MM/YYYY")
 * @returns {Set<string>} Set contenant les liste des jours fériés 
 */
function getJoursFeries(annee, format = "DD/MM/YYYY") {
  const { jour: jourPaques, mois: moisPaques, } = calculPaquesGregorienne(annee);
  const formatDay = ((format) => (date) => date.format(format))(format);
  const jours = new Set([
    formatDay(dayjs(`01/01/${annee}`, 'DD/MM/YYYY')),                   // Jour de l'an  
    formatDay(dayjs(new Date(annee, moisPaques - 1, jourPaques + 1))),  // Lundi de Pâques
    formatDay(dayjs(`01/05/${annee}`, 'DD/MM/YYYY')),                   // Fête du travail
    formatDay(dayjs(`08/05/${annee}`, 'DD/MM/YYYY')),                   // Victoire des alliés
    formatDay(dayjs(new Date(annee, moisPaques - 1, jourPaques + 39))),  // Ascension
    formatDay(dayjs(new Date(annee, moisPaques - 1, jourPaques + 50))), // Lundi de Pentecôte
    formatDay(dayjs(`14/07/${annee}`, 'DD/MM/YYYY')),                   // Fête Nationale
    formatDay(dayjs(`15/08/${annee}`, 'DD/MM/YYYY')),                   // Assomption
    formatDay(dayjs(`01/11/${annee}`, 'DD/MM/YYYY')),                   // toussaint
    formatDay(dayjs(`11/11/${annee}`, 'DD/MM/YYYY')),                   // Armistice
    formatDay(dayjs(`25/12/${annee}`, 'DD/MM/YYYY'))                   // Noel
    
  ]);
  return jours;
}
/**
 * Algorithme de GAUSS
 * @param annee
 */
function calculPaquesGregorienne(annee) {
  const val1 = (19 * (annee % 19) + 24) % 30;
  const val2 = (2 * (annee % 4) + 4 * (annee % 7) + 6 * val1 + 5) % 7;
  const sum = val1 + val2;
  let jourPaques;
  let moisPaques;
  if (sum <= 9) {
    jourPaques = sum + 22;
    moisPaques = 3;
  }
  else {
    jourPaques = sum - 9;
    moisPaques = 4;
  }
  return { jour: jourPaques, mois: moisPaques };
}

module.exports = getJoursFeries;