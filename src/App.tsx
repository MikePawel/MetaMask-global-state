import './App.global.css'
import styles from './App.module.css'

import { Navigation } from './components/Navigation'
import { Display } from './components/Display'
import { MetaMaskError } from './components/MetaMaskError'
import { MetaMaskContextProvider } from './hooks/useMetaMask'
import { Routes, Route } from "react-router-dom"
import Test from './pages/Test/Test'

export const App = () => {

  return (
    <MetaMaskContextProvider>
      <div className={styles.appContainer}>
        <Navigation />
        <Routes>
          <Route path='/test' element={<Test />} />
          <Route path='/' element={<Display />} />
        </Routes>
        <MetaMaskError />
      </div>
    </MetaMaskContextProvider>
  )
}