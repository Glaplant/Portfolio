
//document.addEventListener('DOMContentLoaded',init);


export async function getJSON(url){
 
try{
  const response = await fetch(url);
 // console.log(response);
  const data = await response.json();
 // console.log(data);
  return data;
}
catch(err){
    alert(err);
 }
}


export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};


