import React from "react";
import ReactDOM from "react-dom/client";
// const parent = React.createElement("div", {id: "parent"}, [
//     React.createElement("div", {id: "child1"},[
//         React.createElement("h1",{id: "heading_1"}, "Heading 1"),
//         React.createElement("h2",{id :"heading_2"}, "Heading 2"),
//     ]),
//     React.createElement("div", {id:"child2"},[
//         React.createElement("h1", {id: "heading_1"}, "Heading 1"),
//         React.createElement("h2", {id: "heading_2"}, "Heading 2"),
//     ])
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// ---------------------------------------------------------------------------------------------------------------------
import React from "react";
import ReactDOM from "react-dom/client";

// Creating a h1 Element using React.createElement
// const heading = React.createElement("h1", {id: "heading"}, "Hello World From React by Himanshu")
// Using ReactDOM.createRoot to render the element
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// ---------------------------------------------------------------------------------------------------------------------
// JSX Element

// const root = ReactDOM.createRoot(document.getElementById("root"));
// Creating a JSX element
// const jsxHeading = <h1 id="heading"> Namaste React Using JSX</h1>;
// Rendering the JSX element
// root.render(jsxHeading);

// ---------------------------------------------------------------------------------------------------------------------
// Arrow Function in JavaScript
// Defined a fn1 function using arrow function 
const fn1 = () =>{
    return true;
}

// Defined a fn2 function using normal function
const fn2 =() => true;
const root = ReactDOM.createRoot(document.getElementById("root"));

// ---------------------------------------------------------------------------------------------------------------------

// Define a functional component named as HeadingComponent1
const HeadingComponent1 = () => <div><h1 id="heading">Namaste React from HeadingComponent1</h1></div>;
// root.render(<HeadingComponent1/>);

const Title1 = () => (
    <h1 className="title1">I am Title 1</h1>
)

const Title2 = function () {
    return (
        <h1 className="title2">I am Title 2</h1>
    )
}
number = 10;
// Component Composition
const HeadingComponent2 = () => (
<div>
        <HeadingComponent1 />
        <Title1 />
        <Title2 />
        {Title1()}  
        <h1 id="heading">Namaste React from HeadingComponent2</h1>
        <h5>{number*number+90}</h5>

    </div>
);
root.render(<HeadingComponent2/>);
// ---------------------------------------------------------------------------------------------------------------------

