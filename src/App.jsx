import React from 'react'

import { Navbar, Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer } from "./sections";

const App = () => {
  return (
    <main className='relative dark:bg-slate-900 dark:text-white '>
      <Navbar />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding '>
        <PopularProducts />
      </section>
      <section className='padding '>
        <SuperQuality />
      </section>
      <section className='padding-x py-10 '>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='padding bg-pale-blue dark:bg-rich-black '>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}

export default App