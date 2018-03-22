console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
 // create a section tag with an id of middle-earth
 let section = document.createElement('section')
 section.setAttribute('id','middle-earth')
 // add each land as an article tag
 for(let i = 0; i < lands.length; i++) {
   let land = document.createElement('article')
   let h1 = document.createElement('h1')
   h1.innerHTML = lands[i]
   land.appendChild(h1)
   // land.innerHTML = '<h1>' + lands[i] + '</h1>'
   section.appendChild(land)
   //let h1 = document.createElement('h1')
   // h1.innerHTML = lands[i]
 }
 // inside each article tag include an h1 with the name of the land
 // append middle-earth to your document body
 body.appendChild(section)
}



makeMiddleEarth();


// template to add & remove a class

// // First we detect the click event
// document.getElementById('the-box').addEventListener('click', function () {
//   // Using an if statement to check the class
//   if (this.classList.contains('bad')) {
//     // The box that we clicked has a class of bad so let's remove it and add the good class
//    this.classList.remove('bad');
//    this.classList.add('good');
//   } else {
//     // The user obviously can't follow instructions so let's alert them of what is supposed to happen next
//     alert("You can proceed!");
//   }
// });


// Part 2

// functions makeHobbits() and keepItSecretKeepItSafe() is NOT CALLED

var theShire = body.querySelectorAll('article')[0];
var rivendell = body.querySelectorAll('article')[1];
var mordor = body.querySelectorAll('article')[2];


function makeHobbits() {
 let hobbitList = document.createElement('ul')
 for(let i = 0; i <  hobbits.length; i++) {
   // i have a ul that needs some children....how do we add those children?
   let hobbit = document.createElement('li')
   hobbit.innerHTML = hobbits[i]
   hobbitList.appendChild(hobbit)
 }
 let shire = document.querySelector('#middle-earth')
 shire.firstElementChild.appendChild(hobbitList)
 // display an unordered list of hobbits in the shire (which is the second article tag on the page)
 // give each hobbit a class of hobbit
}

  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit

makeHobbits();


// Part 3

var frodo = body.querySelectorAll('li')[0];

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement('div');
  theRing.setAttribute('id', 'the-ring');
  // give the div a class of 'magic-imbued-jewelry'
  theRing.setAttribute('class', 'magic-imbued-jewelry');
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.addEventListener('click', nazgulScreech);
  // add the ring as a child of Frodo
  frodo.appendChild(theRing);
}

keepItSecretKeepItSafe();



// Part 4

function makeBuddies() {
  // create an aside tag
  var aside = document.createElement('aside');
  var buddyList = document.createElement('ul');
  for(let i = 0; i < buddies.length; i++) {
    // attach an unordered list of the 'buddies' in the aside
    let buddy = document.createElement('li');
    buddy.textContent = buddies[i];
    buddyList.appendChild(buddy);
  }
  // insert your aside as a child element of rivendell
  aside.appendChild(buddyList);
  rivendell.appendChild(aside);
}
makeBuddies();


// function makeBuddies() {
//   // create an aside tag
//   var aside = document.querySelectorAll('aside');
//   // attach an unordered list of the 'buddies' in the aside
//   var buddyList = document.querySelectorAll('ul');
//   // create a for loop to print buddies

//   for(var i = 0; i < buddies.length; i++) {
//     var buddy = document.createElement('li');
//     // reference the index of buddies array
//     buddy.textContent = buddies[i];
//     buddyList.appendChild(buddy);
//   }
//   // insert your aside as a child element of rivendell
//   aside.appendChild(buddyList);
//   rivendell.appendChild(aside);
// }

// makeBuddies();



// Part 5

var strider = rivendell.querySelectorAll('li')[3];

function beautifulStranger() {
  strider.textContent = 'Aragorn';
  // change the 'Strider' textnode to 'Aragorn'

  // var textNode = document.createTextNode('Aragorn');
  // var item = document.getElementById()

}


beautifulStranger();



// Part 6

var hobbits = theShire.querySelector('ul');

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell

  rivendell.appendChild(hobbits)

}

leaveTheShire();
var fellowshipMembers = rivendell.querySelectorAll('li');

// function forgeTheFellowShip() {
//   // create a new div called 'the-fellowship' within rivendell
//   var theFellowship = document.createElement('div');
//   // set the attribute to id and the-fellowship
//   theFellowship.setAttribute('id', 'the-fellowship');
//   for(var i = 0, len = fellowshipMembers.length; i < len; i++){
//     theFellowship.appendChild(fellowshipMembers[i]);
//     // alert(fellowshipMembers[i].textContent + ' has joined the fellowship!');
//     // var w = window.open('','','width=100,height=100')
//     // w.document.write(fellowshipMembers[i].textContent + ' has joined the fellowship!')
//     // w.focus()
//     // setTimeout(function() {w.close();}, 5000)
//   }
//   // add each hobbit and buddy one at a time to 'the-fellowship'
//   // after each character is added make an alert that they have joined your party
//   rivendell.appendChild(theFellowship);
// }

// forgeTheFellowShip();




  // para.appendChild(node);
  // parent.replaceChild(para,child);


// Part 7




function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var theFellowship = document.createElement('div');
  theFellowship.setAttribute('id', 'the-fellowship');
  for(let i = 0; i < fellowshipMembers.length; i++) {
    theFellowship.appendChild(fellowshipMembers[i]);
    // alert(fellowshipMembers[i].textContent + ' has joined the fellowship!');

    // windows pop up
    // var w = window.open('','','width=100,height=100')
    // w.document.write(fellowshipMembers[i].textContent + ' has joined the fellowship!')
    // w.focus()
    // setTimeout(function() {w.close();}, 10000)
  }
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  rivendell.appendChild(theFellowship);
}

forgeTheFellowShip();



// Part 8


var gandalf = fellowshipMembers[0];

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  gandalf.textContent = 'Gandalf the White';
  // apply style to the element
  gandalf.style.border = '3px solid gray';
  // make the background 'white', add a grey border
  gandalf.style.backgroundColor = 'white';
}

theBalrog();


// Part 9

var boromir = fellowshipMembers[4];

function hornOfGondor() {
  alert('the horn of gondor has blown');
  // pop up an alert that the horn of gondor has been blown
  // put a linethrough on boromir's name
  boromir.style.textDecoration = 'line-through';
  // Boromir's been killed by the Uruk-hai!
  // Remove Boromir from the Fellowship
  boromir.parentNode.removeChild(boromir)

}

hornOfGondor();


// Part 10

var sam = fellowshipMembers[6];

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  mordor.appendChild(frodo);
  mordor.appendChild(sam);
  var mountDoom = document.createElement('div');
  // add a div with an id of 'mount-doom' to Mordor
  mountDoom.setAttribute('id', 'mount-doom');
  mordor.appendChild(mountDoom);

}

itsDangerousToGoAlone();


// Part 11

var gollum, theRing;

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  gollum = document.createElement('div');
  gollum.setAttribute('id', 'gollum');
  theRing = frodo.querySelector('#the-ring');
  gollum.appendChild(theRing);
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var mountDoom = mordor.querySelector('#mount-doom');
  mountDoom.appendChild(gollum);
  theRing.appendChild(gollum);
}

weWantsIt();


// Part 12

function thereAndBackAgain() {
  gollum.parentElement.removeChild(gollum);
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  var hobbitUl = document.createElement('ul');
  var hobbits = body.querySelectorAll('.hobbit');
  for(var i = 0, len = hobbits.length; i < len; i++){
    hobbitUl.appendChild(hobbits[i]);
  }
  theShire.appendChild(hobbitUl);
  // Move all the hobbits back to the shire
}

thereAndBackAgain();
