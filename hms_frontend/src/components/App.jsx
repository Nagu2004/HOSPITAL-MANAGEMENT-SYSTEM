import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '../assets/vite.svg'
// import '../css/App.css'
import Header from './Header'
import Mainpage from './Mainpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Mainpage />
    </>
  )
}

export default App;
