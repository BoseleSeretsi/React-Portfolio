// import { Navbar,Footer ,  Home ,Skills} from "./components";
// import Routing from "./routing";
// import { Router,  } from 'react-router-dom'


// function App() {
//   return (
//     <>
    
//       <Navbar />
//       <Home />
//       <Skills />
//       <Routing/>
    
//       <Footer />
//     </>
//   );
// }

// export default App;


import React from "react";
// import { Navbar } from "./components";
import { About, Contact, Footer, Home, Navbar, Projects, Skills, Testimonial } from './components'
// import { Home } from "./components";
// import {Projects }from "./components";
// import {About }from "./components";
// import {Testimonial }from "./components";
// import {Footer} from "./components";
import {
  Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
// import { Contact  } from './components/Contact'
export default function BasicExample() {
  return (
    // <Router>
    //   <div>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">Work</Link>
    //       </li>
    //       <li>
    //         <Link to="/dashboard">About Me</Link>
    //       </li>

       
    //         <Link to="/">Contact</Link>
          
    //     </ul>

    //     <hr />

    //     {/*
    //       A <Switch> looks through all its children <Route>
    //       elements and renders the first one whose path
    //       matches the current URL. Use a <Switch> any time
    //       you have multiple routes, but you want only one
    //       of them to render at a time
    //     */}
        
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/dashboard">
    //         <Dashboard />
    //       </Route>

    //       <Route path="/dashboard">
    //         <Dashboard />
    //       </Route>
       
    //   </div>
    // </Router>

    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About />}/>

      <Route path="/Projects" element={<Projects />}/>

      <Route path="/Contact" element={<Contact />}/>

      <Route path="/Skills" element={<Skills/>}/>
      {/* <Route path="/Contact" element={<Contact/>}/> */}
      {/* <Route path="/" element={Home}/> */}
    </Routes>
    {/* <Portfolio></Portfolio>
    <Skills/>
    <Testimonial/> */}
    <Footer/>
    </>
  );
}

// You can think of these components as "pages"
// in your app.

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

