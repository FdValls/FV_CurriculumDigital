import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./style.css";
import Home from './components/Home'
import NavBar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)
  const [stop, setStop] = useState(true)
  const [timeoutId, setTimeoutId] = useState(null)

  useEffect(() => {
    if (stop) {
      // Limpiar el temporizador al detenerse
      clearTimeout();
    } else {
      // Iniciar un nuevo temporizador
      setTimeout(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1500);

      // Guardar el identificador del temporizador
      setTimeoutId();
    }

    // Limpiar el temporizador al desmontar el componentex
    return () => clearTimeout();
  }, [count, stop]);

  const handleReset = () => {
    // Limpiar el temporizador al reiniciar
    clearTimeout()
    setCount(0)
  }

  const handleStartStop = () => {
    setStop(!stop)
  }


  return (
    <>
      {/* <NavBar /> */}
        <Home />
    </>
  )
}

export default App
