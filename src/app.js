const people = [
    {
        id: 0,
        name: "Creola Katherine Johnson",
        profession: "Mathematician",
        accomplishment: "Spaceflight calculations",
        image_src: "../images/kate.jpg"
    },
    {
        id: 1,
        name: "Mario Jose Molina-Pasquel Henriquez",
        profession: "Chemist",
        accomplishment: "discovery of Arctic ozone hole",
        image_src: "../images/mario.jpg"
    },
    {
        id: 2,
        name: "Mohammed Abdus Salam",
        profession: "Physicist",
        accomplishment: "electromagnetism theory",
        image_src: "../images/abdus.jpg"
    },
    {
        id: 3,
        name: "Percy Lavon Julian",
        profession: "Chemist",
        accomplishment: "pioneering cortisone drugs, steroids and birth control pills",
        image_src: "../images/lavon.jpg"
    },
    {
        id: 4,
        name: "Subrhmanyan Chandrasekhar",
        profession: "Astrophysicist",
        accomplishment: "white dwarf star mass calculations",
        image_src: "../images/chandra.jpg"
    }
];

// -----> filter() <-------
function ChemistPeople() {
    // returns the whole object of the person whose profession is a chemist
    const chemists = people.filter((person) => person.profession === "Chemist");

    // mapping over the chemists array to display each person's name from the object items
    const listChemists = chemists.map(person =>
        <li key={person.id}>
            <img
                src={person.image_src}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>{` ${person.profession} known for ${person.accomplishment}`}
            </p>
        </li>
    );

    return <ul>{listChemists}</ul>
}

// -----> map() <-------
function AllScientists() {
    const listOfPeople = people.map((person) =>
        <li key={person.id}>
            <img
                src={person.image_src}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>{` ${person.profession} known for ${person.accomplishment}`}
            </p>
        </li>);

    return <ul>{listOfPeople}</ul>;
}

export default function App() {
    return (
        <div className="app">
            <h1>Filtering and Mapping a Scientists List</h1>
            <h2>All Scientists</h2>
            <AllScientists />
            <h2>Chemist Scientists</h2>
            <ChemistPeople />
        </div>
    );
}
// react
const rootNode = document.getElementById('react_root_node');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);

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