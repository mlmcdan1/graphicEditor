import React from 'react'
import logoImage2 from '../assets/images/logoDesignStockImages/LogoDesignStock2.jpeg'
import logoImage6 from '../assets/images/logoDesignStockImages/LogoDesignStock6.jpeg'
import aiLogo from '../assets/images/logoDesignStockImages/aiLogo.jpeg'

import videoStockIMG from '../assets/images/VideoStockImg/VideoStockImgMain.jpeg'

const LandingPage = () => {
    return (
        <>
        <header className="text-black text-center p-8">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Design Made Simple, Brilliance Made Possible <br/> <span className='text-blue-600 dark:text-blue-500'>Unleash Your Creativity with Our Intuitive Platform        </span></h1>
          <p className="mt-6 text-lg">
          Empower your creativity. Effortlessly design, collaborate, and achieve brilliance.          </p>
        </header>
        
        {/* Logo Design */}
        <section className="container mx-auto my-2">
        <div className="flex flex-wrap justify-center ">
          <div className="m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
            <img
              src={logoImage2}
              alt="LogoDesignStockImg2"
              className="w-full h-auto"
            />
          </div>
         
        </div>
        </section>

        {/* Video Editor Section*/}   
        <section className="container mx-auto my-8 mt-9">
          {/* Your other sections and content go here */}
          <h2 className="text-3xl font-bold text-center mb-4">Edit videos effortlessly with our straightforward tools.</h2>
          <p className='text-center'>Add a splash of fun to your videos with our easy-peasy editing tools – creativity made enjoyable</p>
          <div className="m-4">
          <img
                src={videoStockIMG} /* Adjusted size to 100x75 */
                alt="VideoEditorStockIMG"
                className="w-full h-auto"
              />
            </div>
        </section>

        {/* Photo Edit */}
        <section className="container mx-auto my-8 mt-10">
          {/* Your other sections and content go here */}
          <h2 className="text-3xl font-bold text-center mb-4">Transform your photos into masterpieces with our easy and enjoyable editing features.</h2>
          <p className='text-center'>Spice up your photos, the easy and fun way!</p>
          <div className="flex flex-wrap justify-center lg:flex">
            {/* Two images side by side, not stacked on larger screens */}
            <div className="m-4 w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
              <img
                src= {logoImage6}
                alt="PhotoDesign"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* AI Section */}
        <div className='justify-content text-center mt-10'>
        <h2 className="text-3xl font-bold mb-4">Enhanced with AI</h2>

        <section className="container mx-auto my-8 flex flex-wrap items-center justify-center">
        {/* Text and button on the right */}
        
        <div className="w-full md:w-1/2 p-4 text-center md:text-left">
          <p className="mb-4">
            Explore endless possibilities on our feature-rich site, simplifying your creative journey.
          </p>

          {/* Add your button here */}
          <div className="flex justify-end md:justify-start">
            <button
              className="bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded border"
              onClick={() => {
                // Handle button click logic
              }}
            >
              Explore
            </button>
          </div>
        </div>

        {/* Image on the left */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src={aiLogo}
            alt="AI Generator"
            className="w-full h-auto"
          />
        </div>
        </section>
        </div>



        {/* Sign Up Button */}
        <section className="container mx-auto my-8 mt-10">
          <div className="text-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
              onClick={() => {
                // Handle sign-up logic or navigation here
              }}
            >
              Sign Up
            </button>
          </div>
        </section>



        </>
      );
}

export default LandingPage