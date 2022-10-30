var people = [{
  id: 0,
  name: "Creola Katherine Johnson",
  profession: "Mathematician",
  accomplishment: "Spaceflight calculations",
  image_src: "../images/kate.jpg"
}, {
  id: 1,
  name: "Mario Jose Molina-Pasquel Henriquez",
  profession: "Chemist",
  accomplishment: "discovery of Arctic ozone hole",
  image_src: "../images/mario.jpg"
}, {
  id: 2,
  name: "Mohammed Abdus Salam",
  profession: "Physicist",
  accomplishment: "electromagnetism theory",
  image_src: "../images/abdus.jpg"
}, {
  id: 3,
  name: "Percy Lavon Julian",
  profession: "Chemist",
  accomplishment: "pioneering cortisone drugs, steroids and birth control pills",
  image_src: "../images/lavon.jpg"
}, {
  id: 4,
  name: "Subrhmanyan Chandrasekhar",
  profession: "Astrophysicist",
  accomplishment: "white dwarf star mass calculations",
  image_src: "../images/chandra.jpg"
}];

// -----> filter() <-------
function ChemistPeople() {
  // returns the whole object of the person whose profession is a chemist
  var chemists = people.filter(function (person) {
    return person.profession === "Chemist";
  });

  // mapping over the chemists array to display each person's name from the object items
  var listChemists = chemists.map(function (person) {
    return React.createElement(
      "li",
      { key: person.id },
      React.createElement("img", { src: person.image_src, alt: person.name }),
      React.createElement(
        "p",
        null,
        React.createElement(
          "b",
          null,
          person.name,
          ":"
        ),
        " " + person.profession + " known for " + person.accomplishment
      )
    );
  });

  return React.createElement(
    "ul",
    null,
    listChemists
  );
}

function NotChemists() {
  var otherScientists = people.filter(function (person) {
    return person.profession !== "Chemist";
  });
  var otherList = otherScientists.map(function (person) {
    return React.createElement(
      "li",
      { key: person.name },
      React.createElement("img", { src: person.image_src, alt: person.name }),
      React.createElement(
        "p",
        null,
        React.createElement(
          "b",
          null,
          person.name,
          ":"
        ),
        " " + person.profession + " known for " + person.accomplishment
      )
    );
  });

  return React.createElement(
    "ul",
    null,
    otherList
  );
}

// -----> map() <-------
function AllScientists() {
  var listOfPeople = people.map(function (person) {
    return React.createElement(
      "li",
      { key: person.id },
      React.createElement("img", { src: person.image_src, alt: person.name }),
      React.createElement(
        "p",
        null,
        React.createElement(
          "b",
          null,
          person.name,
          ":"
        ),
        " " + person.profession + " known for " + person.accomplishment
      )
    );
  });

  return React.createElement(
    "ul",
    null,
    listOfPeople
  );
}

export default function App() {
  return React.createElement(
    "div",
    { className: "app" },
    React.createElement(
      "h1",
      null,
      "Filtering and Mapping a Scientists List"
    ),
    React.createElement(
      "h2",
      null,
      "Chemist Scientists"
    ),
    React.createElement(ChemistPeople, null),
    React.createElement(
      "h2",
      null,
      "Other Scientists"
    ),
    React.createElement(NotChemists, null),
    React.createElement(
      "h2",
      null,
      "All Scientists"
    ),
    React.createElement(AllScientists, null)
  );
}
// react
var rootNode = document.getElementById("react_root_node");
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App, null));

// NOTES
// You will often need to show several instances of the same component
// ...using different data when building interfaces
// E.G. lists of comments & galleries of profile images
// you can move/store that data in JavaScript objects and arrays
// ...and use methods like map() and filter() to render lists of components from them

// 4 steps to creating <li> components from an array: (MAPPING COMPONENTS)
// move the data into an array & give each array item an 'id' to use as the list item key
// create a map array variable & map the original array to create a <li> item of each item in the array
// give each <li> item the key you assigned them before
// return your mapped items variable containing all mapped list items & place it in a <ul></ul>

// ** map() creates a new array; it doesn't modify the original array
// to filter out/ serach out data from an array of items, use filter() method
// filter() => takes an array of items and passes each item thro a test (depending on whata you were searching for)...
// ...the test returns true/false (checking if the item meets the condition you are searching for)
// ...filter then returns a new array containing items that returned true | those that passed the test
// ...i.e the items you actually searched for

// FILTERING COMPONENTS steps
// create a filter array variable
// filter the original array with the condition you want; the array items that pass the test/ condition will be returned in the filter array
// create a new map array: map the filtered array to return <li> items of the filtered array
// return this mapped array variable in a <ul></ul> to diaplay the list

// the arraow function automatically returns the expresion after the '=>' symbol in a single line of code
// ...so you don't have to manually write return
// however, if you use '{}' '=>', you MUST include the return keyword
//  {} means you'll be using more than one line of code

// You need to give each array item a key
// ...a string or a number that uniquely identifies it among other items in the array
// JSX elements directly inside a map() call always need keys
// Keys tell React which array item each component corresponds to...so it can track it if any changes occur to it
// this is important if your array involves editing, adding & deleting items
// A well-chosen key helps React know what exactly has happened
// hence helping it make the correct updates to the DOM tree
// ***always include keys in your data (array) rather than creating them on the go

// when you need your mapped list item rendered in several DOM nodes, just wrap it all up in a single <div> or
// ...use <since Fragment> since <></> doesn't take in attributes like the much needed key in our case
// fragments disappear from the DOM so it will just render the components inside

// Rules of keys
// Keys must be unique among siblings.
//=> (However, it’s okay to use the same key types for JSX nodes in DIFFERENT arrays)
// Keys must not change! Don’t generate them while rendering.
// keys let us uniquely identify & tell apart an item among its siblings
// /the index the item has in the array may change making it harder to identify it over time
// ...but keys are tagged on the item for life
// generating keys on the fly with e.g Math.random() is bad because the key will never match with itself every time there's a render
// just manually create a key ID in the item's data, that you can use