'use client'
// import the Buddy Offer Element and the useConfig hook
import BuddyOfferElement, { useConfig } from '@buddy-technology/offer-component';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
// import Link from 'next/link';

// use query string with incoming data to construct this object

function OfferElement() {
  const router = useRouter()
  const { id } = router.query;
  console.log('id', id);
  const demodata = {
    policy: {
      meta: {
        partner: 'Buddy',
        companionMode: true
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
      firstName: 'Test',
      lastName: 'User',
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

  // useConfig hook to retrieve configuration options
  const { config, isLoading } = useConfig(
    "https://staging.embed.buddy.insure/allstate/renters/allstate-renters-prefill-config-react.js"
  );

  interface EventData {
    [x: string]: unknown,
    timestamp: number,
  }
  interface EventObject {
    eventType: string,
    data: EventData,
  }
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (window.Buddy) {
        window.Buddy.partnerUserEvents = (payload: EventObject) => {
          console.log('partnerUserEvents', payload);
        };
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId); // Clean up the interval
  }, []);

  // This pattern holds the component in a loading state till the configuration loads.
  if (isLoading || !config) return null;

  // Once we have the configuration we return the Offer Component.
  return (
    <div className="App w-full">
      {/* The div the offer element loads into */}
      <h1>Allstate Companion ION loads here </h1>
      {/* <Link href="/">
        Go home
      </Link> */}
        <BuddyOfferElement
          ion="ALLSTATE_RENTERS_PREFILL"
          partnerID="p-buddytest"
          stage="TESTING"
          data={demodata}
          theme={config.themeBase}
          onUserEvent={config.userEvents}
          onCustomMessage={config.handleCustomMessage}
        />
    </div>
  );
}

export default function Staging() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center w-full">
        <OfferElement />

        {/* Encryption id: {id} */}
      </div>
    </main>
  )
}
