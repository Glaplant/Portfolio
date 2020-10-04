
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];



const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William'
];

 //Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const result = inventors.filter(list => list.year < 1600 && list.year >= 1500 );
const inventorList = document.querySelector('#inventorList');
//console.log(result);

for(let i=0;i<result.length;i++){
    
    const li = document.createElement("li");
    li.textContent = result[i].first + '    ' + result[i].last + ',   Born: ' + result[i].year + ' Died:  ' + result[i].passed ;
    inventorList.appendChild(li);
    

}

// }

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const inventorFirstLast = document.querySelector('#inventorFirstLast');
const inventorsMap = inventors.map( names =>  names.first + "  " + names.last);

for(let i = 0;i<inventorsMap.length;i++){
    
     const li = document.createElement('li');
     li.textContent = inventorsMap[i];
     inventorFirstLast.appendChild(li);

}
    
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

let yearSort = inventors.sort((a,b)=>{a=a.year; b=b.year; return b-a });
//console.log(yearSort);
const inventorAge = document.querySelector('#inventorAge');
for(let i = 0;i<yearSort.length;i++){
    
    const li = document.createElement('li');
    li.textContent = yearSort[i].first + "   " + yearSort[i].last  + "   " +  yearSort[i].year  + "   " + yearSort[i].passed;
    inventorAge.appendChild(li);
    //console.log(yearSort[i])

}

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const numbers = inventors.reduce((total,inventor) => {return total + (inventor.passed - inventor.years)},0);
console.log(numbers);

// 5. Sort the inventors by years lived

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// goto the link above and open the console. Paste the following two lines in.  That will create a list of links in memory that you can reference through the console. Use that list to finish the problem.
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));

// 7. sort Exercise
// Sort the people alphabetically by last name

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck'
];










