import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import FormField from './components/FormField';

class App extends Component {

  
  render() {
    return (
      <div>
         NavBar
     <div>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
     <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      
     </div>
      </div>
     
      
     
    )
  }
}

export default App;


// render() {
//   return (
//     <div>
//       <div>
//        NavBar
//     </div>
   
//    <div>
//      
//    </div>
//     </div>
    
   
//   )
// }
// }

function validBraces(braces){
  for ( i = 0; i <= braces; i++ ) {
if ((braces[i] == braces.length -1)){
return true;
}else {
return false;
}
  }
}
