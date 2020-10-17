const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let out =false;
  if(!(Array.isArray(members)))return out;

  members = members.filter((el) => {
    let compaundFilter = (typeof (el) === 'string' ) && (!(Array.isArray(el))) && (el !== 'undefined');

    return compaundFilter;
  })
  
  const arrMap = members.map(el => el.trim().toUpperCase()).sort().map(el => {
    return el[0]
  }).join('');
 
  out = arrMap;
  return out;
};