var people = ["Creola Katherine Johnson: Mathematician", "Mario Jose Molina-Pasquel Henriquez: Chemist", "Mohammed Abdus Salam: Physicist", "Percy Lavon Julian: Chemist", "Subrhmanyan Chandrasekhar: Astrophysicist"];

function PeopleList() {
    var listOfPeople = people.map(function (person) {
        return React.createElement(
            "li",
            null,
            person
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
            "Scientists List"
        ),
        React.createElement(PeopleList, null)
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