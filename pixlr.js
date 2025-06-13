alert("WARNING: This will remove all current projects!");
// clear local storage
localStorage.clear(),sessionStorage.clear(),indexedDB.databases().then(e=>{e.forEach(e=>{indexedDB.deleteDatabase(e.name)})}),document.cookie.split(";").forEach(e=>{let a=e.indexOf("="),$=a>-1?e.substr(0,a):e;document.cookie=$+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"});
// refresh
window.location=window.location
