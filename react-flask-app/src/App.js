import logo from './logo.svg';
import './App.css';
import USAMap from './usa_map.js';
import WorldMap from './WorldMap.js';
// import * as d3 from 'd3'


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2> Ryan Goggins </h2>
//         <div> Vaccine Dissemination </div>
//         <WorldMap />
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <div class="centered-more">
      <WorldMap  class="centered-ext"/>
    </div>
  )
}


export default App;
