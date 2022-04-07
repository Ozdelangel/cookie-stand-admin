import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='flex items-center p-4 text-4xl bg-green-500'> 
        <h1 className='font-bold'>Cookie Stand Admin</h1>
      </header>

      <main>
        
      </main>

      <footer className='bg-green-500 p-4 mt-8'>
        <h4>2021</h4>
      </footer>
    </div>
  )
}

export default Home
