import { useEffect } from 'react';
import './App.css';

import * as mathjs from "mathjs";

function App() {

  useEffect(() => {
    // functions and constants
    console.log(mathjs.round(mathjs.e, 3));            // 2.718
    console.log(mathjs.atan2(3, -3)); // mathjs.pi          // 0.75
    console.log(mathjs.log(10000, 10));                  // 4
    console.log(mathjs.sqrt(-4));                        // 2i
  
    // [[7, 0], [0, 7]]

  
  }, [])

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
