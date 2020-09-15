var weeks= new Array("wk01","wk02","wk03","wk04","wk05","wk06","wk07","wk08","wk09","wk010","wk011","wk012","wk013","wk014");




// }


var ol = document.querySelector('ol');

let arrayLength = weeks.length;
for(i=0;i<arrayLength;i++){
var li = document.createElement('li');
var a = document.createElement('a');
var week = i+1;
a.textContent = 'Week 0'+ week;
ol.appendChild(li);
li.appendChild(a);
li.style.listStyle= "none";
li.classList.add("main_links" , "wk_links");
a.href='views/'+ weeks[i] +'.html';
}
