import  React from 'react';
import ReactDOM from 'react-dom/client';

/* const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React !!!"
);
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]); 
const jsxheading = <h1>Apoorva is here !!!</h1>*/

const TitleComponent = () =>{ 
    return <h1 className='heading'>Welcome to Namaste React Course</h1>
}
const temp =1000;
const HeaderComponent = () => {
     return (
     <div className="container">
      {TitleComponent()}
     <TitleComponent />
     <TitleComponent></TitleComponent>
     {temp + 200}
     {console.log("Everything works inside and jsx")}
     <h1>Namaste from Functional Component !!!</h1>
     </div>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />); 