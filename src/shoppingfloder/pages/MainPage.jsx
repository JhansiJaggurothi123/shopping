import React ,{useState}from 'react'
import Collections from '../components/Collections'
import Header from '../components/Header'
import Banner from '../components/Banner'
import footer from '../components/footer'
import { Boys } from '../data'
const MainPage = () => {
 const [BoysFashion,setBoysFashion]=useState(Boys)
 console.log(Boys);
  return (
    <div>
      <Header/>
      <Banner/>
      <Collections BoysFashion={BoysFashion}/>
      <footer/>
    </div>
  )
}

export default MainPage
