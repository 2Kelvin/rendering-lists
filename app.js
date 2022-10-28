var people = [{
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "Mathematician"
}, {
    id: 1,
    name: "Mario Jose Molina-Pasquel Henriquez",
    profession: "Chemist"
}, {
    id: 2,
    name: "Mohammed Abdus Salam",
    profession: "Physicist"
}, {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "Chemist"
}, {
    id: 4,
    name: "Subrhmanyan Chandrasekhar",
    profession: "Astrophysicist"
}];

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
            person.name
        );
    });

    return React.createElement(
        "ul",
        null,
        listChemists
    );
}

// function PeopleList() {
//     const listOfPeople = people.map((person) =>
//         <li key={person.id}>
//             {person.name}
//         </li>);

//     return <ul>{listOfPeople}</ul>;
// }

export default function App() {
    return React.createElement(
        "div",
        { className: "app" },
        React.createElement(
            "h1",
            null,
            "Scientists List"
        ),
        React.createElement(ChemistPeople, null)
    );
}
// react
var rootNode = document.getElementById('react_root_node');
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App, null));

// NOTES
// You will often need to show several instances of the same component 
// ...using different data when building interfaces
// E.G. lists of comments & galleries of profile images
// you can move/store that data in JavaScript objects and arrays 
// ...and use methods like map() and filter() to render lists of components from them

// 4 steps to creating <li> components from an array:
// move the data into an array & give it an 'id' to use as the list item key
// map the array & create a <li> item of each item in the array
// return your listItems variable containing all mapped list items & place it in a <ul></ul>
//

// ** map() creates a new array; it doesn't modify the original array
// to filter out/ serach out data from an array of items, use filter() method
// filter() => takes an array of items and passes each item thro a test (depending on whata you were searching for)...
// ...the test returns true/false (checking if the item meets the condition you are searching for)
// ...filter then returns a new array containing items that returned true | those that passed the test
// ...i.e the items you actually searched for