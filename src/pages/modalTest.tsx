'use client'
// import the Buddy Offer Element and the useConfig hook
import BuddyOfferElement, { useConfig } from '@buddy-technology/offer-component';
import React, { useState } from 'react';
import Modal from '../components/modal';
  // example prefill data, make sure the start date is in the future :)
  const demodata = {
    policy: {
      meta: {
        partner: 'Renew',
        // companionMode: false
      },
      renters: {
        address: {
          line1: '3505 Barkley Rd',
          line2: '',
          postalCode: '29154',
          state: 'SC',
          city: 'Sumter'
        }
      }
    },
    customer: {
      firstName: 'Jennifer',
      lastName: 'James',
      dob: '04/04/1990',
      email: 'enterYourEmail@gmail.com',
      phone: '+18049186025',
      address: {
        line1: '123 E Main St',
        line2: '',
        city: 'West Chicago',
        state: 'IL',
        postalCode: '60185'
      },
    }
  };

  function OfferElement() {
  // useConfig hook to retrieve configuration options
  const { config, isLoading } = useConfig(
    "https://staging.embed.buddy.insure/allstate/renters/allstate-renters-prefill-config-react.js"
  );

  // This pattern holds the component in a loading state till the configuration loads.
  if (isLoading || !config) return null;

  // Once we have the configuration we return the Offer Component.
  return (
    <div className="App w-full">
              {/* The div the offer element loads into */}
              <div id="buddy_offer" />
                <BuddyOfferElement
                  ion="ALLSTATE_RENTERS_PREFILL"
                  partnerID="p-buddytest"
                  stage="STAGING"
                  data={demodata}
                  theme={config.themeBase}
                  onUserEvent={config.userEvents}
                  onCustomMessage={config.handleCustomMessage}
                />
    </div>
  );
}

export default function Staging() {
  const [currentContent, setCurrentContent] = useState<number>(0);

   // Function to handle continue button click
   const continueCopy = ['Continue', 'Configure Payment', ''];
   const modalCopy = ['Your Lease Requires Rental Insurance', 'Add Insurance to Your Lease', ''];
   const handleContinue = () => {
    setCurrentContent(currentContent + 1);
  };

  const [showModal, setShowModal] = useState(true);
  const openModal = () => {
    console.log('open modal');
    setShowModal(prev => !prev);
  }

  const closeModal = () => {
    console.log('close modal');
    setShowModal(prev => !prev);
    setCurrentContent(0);
  }

  const renderContent = () => {
    switch (currentContent) {
      case 0:
        return (
          <div>
              <p>You are required to get renters insurance to complete the lease process. We've partnered with Allstate to provide you with quick and hassle free insurance.</p>
              <p className="disclaimer-copy">By selecting "CONTINUE" you authorize Avail to share your personal information (name, address, email, etc) with Allstate and its affiliates to allow it to contact you regarding insurance products and services. Avail is not a licensed insurance agent or broker and any solicitations or other communications relating to the pricing, quality or terms and conditions of insurance are being made by Allstate. You also agree to Allstate's <a href="TOC">Terms of Service</a>.</p>
              <button className='full-width-button' onClick={handleContinue}>{continueCopy[currentContent]}</button>
              <button className="small-copy-button" onClick={closeModal}>No thanks, I'll look for insurance on my own</button>
          </div>
        );
      case 1:
        return (
          <div>
            <div className="center">
              <p className='light-grey-bg'>Provided by <img src="https://s3.amazonaws.com/staging.embed.buddy.insure/allstate/renters/Allstate-Logo-Dark.png" /></p>
              <p className="uppercase">What's Included</p>
              <p className='light-grey-bg'>
                <ul>
                  <li> $10k Personal Property</li>
                  <li> $100k Personal Liability</li>
                  <li> $250 Deductible</li>
                </ul>
              </p>
              </div>
              <button className='full-width-button' onClick={handleContinue}>{continueCopy[currentContent]}</button>
              <button className="small-copy-button" onClick={closeModal}>Summary only. <a href="">Read policy here</a> for all coverages.</button>
          </div>
        );
      case 2:
        return <OfferElement />;
      default:
        return (
          <div>
            <p>
              <img src="https://staging.embed.buddy.insure/test/modalSlide1.png" /></p>
              <button className='full-width-button' onClick={handleContinue}>Continue</button>
          </div>
        );
    };
};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" id="availBody">
      <div className="relative flex place-items-center w-full">
      <h1>staging</h1>
            <Modal show={showModal} onClose={closeModal} modalTitleContent={modalCopy[currentContent]}>
              {renderContent()}
            </Modal>
            {/* <button onClick={openModal}>Open Modal</button>
            number: {currentContent} */}
      </div>
    </main>
  )
}
