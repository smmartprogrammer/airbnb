import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../Components/Header"
import Banner from "../Components/Banner"

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      
      

    </div>
  )
}

export default Home
