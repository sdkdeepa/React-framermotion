import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Fillings from './components/Fillings';
import Order from './components/Order';

function App() {
  const [pie, setPie] = useState({ base: "", fillings: [] });

  const addBase = (base) => {
    setPie({ ...pie, base })
  }
  
  const addFilling = (filling) => {
    let newFillings;
    if(!pie.fillings.includes(filling)){
      newFillings = [...pie.fillings, filling];
    } else {
      newFillings = pie.fillings.filter(item => item !== filling);
    }
    setPie({ ...pie, fillings: newFillings });
  }

  return (
    <>
      <Header />
      <Switch>
        <Route path="/base">
          <Base addBase={addBase} pie={pie} />
        </Route>
        <Route path="/fillings">
          <Fillings addFilling={addFilling} pie={pie} />
        </Route>
        <Route path="/order">
          <Order pie={pie} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;

// import React, { useState } from 'react';
// import { Route, Switch } from "react-router-dom";
// import Header from './components/Header';
// import Home from './components/Home';
// import Base from './components/Base';
// import Fillings from './components/Fillings'
// import Order from './components/Order';

// function App() {
//   const [pie, setPie] = useState({ base: "", fillings: [] });

//   const addBase = (base) => {
//     setPie({ ...pie, base })
//   }
  
//   const addFilling = (filling) => {
//     let newFillings;
//     if(!pie.fillings.includes(filling)){
//       newFillings = [...pie.fillings, filling];
//     } else {
//       newFillings = pie.fillings.filter(item => item !== filling);
//     }
//     setPie({ ...pie, fillings: newFillings });
//   }

//   return (
//     <>
//       <Header />
//       <Switch>
//         <Route path="/base">
//           <Base addBase={addBase} pie={pie} />
//         </Route>
//         <Route path="/fillings">
//           <fillings addfilling={addFilling} pie={pie} />
//         </Route>
//         <Route path="/order">
//           <Order pie={pie} />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </>
//   );
// }

// export default App;