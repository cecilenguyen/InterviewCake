/* Given information about active users on the network, find the shortest route for a message from one user (the sender) to another (the recipient). Return an array of users that make up this route.

There might be a few shortest delivery routes, all with the same length. For now, let's just return any shortest route.

Your network information takes the form of an object where keys are usernames and values are arrays of other users nearby:

  var network = {
    'Min'     : ['William', 'Jayden', 'Omar'],
    'William' : ['Min', 'Noam'],
    'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
    'Ren'     : ['Jayden', 'Omar'],
    'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
    'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
    'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
    'Noam'    : ['Nathan', 'Jayden', 'William'],
    'Omar'    : ['Ren', 'Min', 'Scott'],
    ...
};

For the network above, a message from Jayden to Adam should have this route:

  ['Jayden', 'Amelia', 'Adam']

*/

function shortestRoute(start, end, network) { 
  let visitedPeople = {};
  visitedPeople[start] = {
    visited: false,
    lastContact: null
  };
  let queue = [start]; 
  
  
  while (queue.length > 0) {
    let person = queue.shift();                    
    let contacts = network[person]; 
    for (let i = 0; i < contacts.length; i++) { 
      let contact = contacts[i];
      
      addLastContact(contact, person, visitedPeople);
      
      if (contact === end) {
        return traceBackRoute(contact, visitedPeople);
      } 
      
      if (!visitedPeople[contact].visited) {
        queue.push(contact);
      }
    }
    
    visitedPeople[person].visited = true;
  }
  
  return 'No route between ' + start + ' and ' + end;
}


function addLastContact(contact, person, visitedPeople) {
  if (!visitedPeople.hasOwnProperty(contact)) {
    visitedPeople[contact] = {
      visited: false,
      lastContact: person
    }
  }
}

function traceBackRoute(contact, visitedPeople) {
  let route = [];
  let currPerson = contact;
  while (currPerson) {
    route.push(currPerson);
    currPerson = visitedPeople[currPerson].lastContact;
  }
  return route.reverse();
}




let network = {
    'Min'     : ['William', 'Jayden', 'Omar'],
    'William' : ['Min', 'Noam'],
    'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
    'Ren'     : ['Jayden', 'Omar'],
    'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
    'Adam'    : ['Amelia', 'Miguel'],
    'Miguel'  : ['Amelia', 'Adam'],
    'Noam'    : ['Jayden', 'William'],
    'Omar'    : ['Ren', 'Min']
};

console.log(shortestRoute('Jayden', 'Adam', network));

network = {
    'Min'     : ['William', 'Jayden', 'Omar'],
    'William' : ['Min', 'Noam'],
    'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
    'Ren'     : ['Jayden', 'Omar'],
    'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
    'Adam'    : ['Amelia', 'Miguel'],
    'Miguel'  : ['Amelia', 'Adam'],
    'Noam'    : ['Jayden', 'William'],
    'Omar'    : ['Ren', 'Min', 'Liz'],
    'Liz'     : ['Omar'],
    'John'    : ['Ren']
};

console.log(shortestRoute('Liz', 'John', network));