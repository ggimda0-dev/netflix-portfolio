import React from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Contents from '../components/Contents/Contents'
import JoinCard from '../components/JoinCard/JoinCard'
import Question from '../components/Question/Question'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
        <div className='b-bg'>
            <Header />
            <Banner />
        </div>
        <Contents />
        <JoinCard />
        <Question />
        <Footer />
    </>
)
}

export default Home