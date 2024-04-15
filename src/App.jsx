import { useState } from 'react'
import './App.css'
import pyrite from './assets/pyrite.jpg'

const useFullScreen = () => {

  // eslint-disable-next-line no-unused-vars
  const [isFullScreen, setIsFullScreen] = useState(true)

  const toggleFullScreen = () => {}

  return { isFullScreen, toggleFullScreen }

}

function App() {
  const { isFullScreen, toggleFullScreen } = useFullScreen()

  return (
    <>
      <button onClick={toggleFullScreen}>
        { isFullScreen ? "Закрыть полноэкранный режим" : "Открыть полноэкранный режим" }
      </button>
      <img src={pyrite} alt="pyrite" />
    </>
  )
}

export default App
