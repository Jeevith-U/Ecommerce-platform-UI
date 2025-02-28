import { useState } from 'react'
import { IoAccessibility } from "react-icons/io5";
import './App.css'
import Product from './Components/Produc';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
            <Product/>
       </div>
    </>
  )
}

export default App
