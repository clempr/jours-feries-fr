export = getJoursFeries;
/**
 * @description Calcule des jours fériés d'une année donnée
 * @param {number} annee
 * @param {format} [format="DD/MM/YYYY"] - format des jours fériés en retour (defaut : "DD/MM/YYYY")
 * @returns {Set<string>} Set contenant les liste des jours fériés 
 */
declare function getJoursFeries(annee: number, format?:string): Set<string>;