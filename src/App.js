import { Fragment } from "react";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import About from "./components/About/About";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <About />
    </Fragment>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello world</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
//         omnis!
//       </p>
//     </div>
//   );
// }
// import React from "react";

// }
// function App() {
//   return (
//     React.createElement("div", {
//       className: "App",
//       style: { color: "red" },
//       id: "Home",
//     }),
//     React.createElement("h1", null, "hello world"),
//     React.createElement("p", null, "hello Ajou")
//   );
// }

export default App;
