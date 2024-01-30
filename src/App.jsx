import Clients from './components/Clients'
import Footer from './components/Footer'
import Free from './components/Free'
import Home from './components/Home'
import Like from './components/Like'
import Navbar from './components/Navbar'
import Release from './components/Release'
import ScrollToTop from './components/ScrollToTop'
import Signup from './components/Signup'
import SuperRare from './components/SuperRare'


// Styles
import "./scss/index.scss"

export default function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <Home />
      <Free />
      <Clients />
      <SuperRare />
      <Release />
      <Like />
      <Signup />
      <Footer />
    </div>
  )
}
