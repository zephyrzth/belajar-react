import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = () => {
  const [data, setData] = useState({
    name: "Randy",
    age: 20
  });
  // const handleChangedName = (newName) => {
  //   setName(newName);
  // }
  const handleChangedName = (newName) => {
    setData({
      name: newName
    });
  }

  return (
    <div className="App">
      <h1>Hi it's new work! {data.name}</h1>
      <button onClick={() => handleChangedName('Lukman')}>Button</button>

      <Person data={data}/>
    </div>
  );
}

// class ExampleClassComponent extends React.Component {
//   // state = {
//   //   active: false,
//   // }

//   constructor(props) {
//     super(props);
//     this.state = {
//       active: false
//     }
//   }

//   render() {
//     return <div>I am {this.state.active ? "active" : "not active"}</div>;
//   }
// }

// function HookedActive() {
//   const [active, setActive] = React.useState(false);
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
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

// class App extends Component {
//   state = {
//     name: "Randy"
//   }

//   switchNameHandler = (newName) => {
//     this.setState({
//       name: newName
//     });
//   }

//   nameChangedHandler = (event) => {
//     this.setState({
//       name: event.target.value
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hi, I'm {this.state.name}</h1>
//         <p>Trust me it's work!</p>
//         <button
//           onClick= {
//             () => this.switchNameHandler('Lukman')
//           }
//         >Switch Instruktur
//         </button>
        
//         <Person
//           name={this.state.name}
//           changed={this.nameChangedHandler} />

//         <Person name={this.state.name} />
//         {/* <Person name="Dhana" />
//         <Person name="Budi" />
//         <Person name="Manca">
//           Kata-kata mutiara
//         </Person> */}
//       </div>
//     );
//   }
// }

export default App;
