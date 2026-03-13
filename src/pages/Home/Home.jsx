import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Features from '../../components/Features'
import Menu from '../../components/Menu'
import Story from '../../components/Story'
import Footer from '../../components/Footer'
import './Home.scss'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Menu />
        <Story />
      </main>
      <Footer />
    </>
  )
}

export default Home
