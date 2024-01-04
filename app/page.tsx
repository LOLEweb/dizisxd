import Image from 'next/image'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default function Home() {
  return (
    // https://ellw.art/ - ref
    <>
      <div className='bg-[#1a202c] min-h-screen flex flex-col'>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}
