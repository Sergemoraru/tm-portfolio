import Image from 'next/image'
import { Header } from './components/navbar'
import  Footer from './components/Footer'
import Aboutme from './aboutme/page'
import Projects from './projects/page'

export default function Home() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div>
      <Aboutme />
      </div>
    <div>
      <Projects />
    </div>
      <footer>
        <Footer />
        </footer>
    </main>
  )
}
