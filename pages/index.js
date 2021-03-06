import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Importing Components 

import HeroSection from '../components/HomePage/HeroSection'
import ReliableCustomers from '../components/HomePage/ReliableCustomers'
import OurServicesSection from '../components/Services/OurServices'
import ContactUs from '../components/Contactus/Contactus'


import SplitLine from '../components/Utility/SplitLine'

const HomePage = () => {
  return (
    <div className='w-full'>
      <HeroSection />
      <ReliableCustomers />
      <OurServicesSection />
      <div className='text-center mb-5 '>
        <h3 className='font-semibold text-2xl mb-4'>Got a new <span className='text-red-600 '>Project Idea?</span></h3>
        <div>
          <p className='text-sm text-gray-600 mb-2'>Call use for fast support at</p>
          <p className='text-sm text-orange-600 mb-4'>+92-318-783-4096</p>
        </div>
        <SplitLine text='or' />
      </div>
      <ContactUs />
    </div>
  )
}


export default HomePage