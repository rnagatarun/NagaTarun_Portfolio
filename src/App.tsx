import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'

function App() {

  return (
      <div className='App'>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <MyWork />

      </div>
  )
}

export default App
