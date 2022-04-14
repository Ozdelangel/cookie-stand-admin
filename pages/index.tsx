import type { NextPage } from 'next'
import Head from '../components/head'
import Header from '../components/header'
import CreateForm from '../components/form'
import Footer from '../components/footer'
import Table from '../components/report-table'
import Image from 'next/image'

const Home: NextPage = () => {

  function formDataHandler(event){
    event.preventDefault();
    console.log(event.target.location.value);
    console.log(event.target.minimum.value);
    console.log(event.target.maximum.value);
    console.log(event.target.average.value);
    // minimum
    // maximum
    // average
  }
  return (
    <>
      <Head/>
      <Header/>
      <main>
      <CreateForm/>
      <Table/>
      </main>
      <Footer/>
    </>
  )
}

export default Home
