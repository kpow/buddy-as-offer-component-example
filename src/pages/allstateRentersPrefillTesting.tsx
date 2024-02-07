'use client'
// import the Buddy Offer Element and the useConfig hook
import BuddyOfferElement, { useConfig } from '@buddy-technology/offer-component';
import React, { useState, useEffect } from 'react';

const initialData = {
  policy: {
    renters: {
      address: {
        line1: '6613 Fairpark Ave',
        line2: '',
        postalCode: '45216',
        state: 'OH',
        city: 'Cincinnati' // Cincinnati
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

const OfferElement = ({selectedState}: {selectedState: string}) => {
  const { config, isLoading } = useConfig(
    "https://staging.embed.buddy.insure/allstate/renters/allstate-renters-prefill-config-react.js"
  );

  const checkState = (state: string) => {
    if (state === "OH") {
      return {
        line1: '6613 Fairpark Ave',
        line2: '',
        postalCode: '45216',
        state: 'OH',
        city: 'Cincinnati'
      };
    } else if (state === "SC") {
      return {
        line1: '3505 Barkley Rd',
        line2: '',
        postalCode: '29154',
        state: 'SC',
        city: 'Sumter'
      };
    } else {
      return {
        line1: '6613 Fairpark Ave',
        line2: '',
        postalCode: '45216',
        state: state,
        city: 'Cincinnati'
      };
    }
  };
  const rentalAddress = checkState(selectedState);
  const [formData, setFormData] = useState({
    policy: {
      renters: {
        address: rentalAddress
      }
    },
    customer: {
      firstName: initialData.customer.firstName,
      lastName: initialData.customer.lastName,
      dob: initialData.customer.dob,
      email: initialData.customer.email,
      phone: initialData.customer.phone,
      address: {
        line1: initialData.customer.address.line1,
        line2: initialData.customer.address.line2,
        city: initialData.customer.address.city,
        state: initialData.customer.address.state,
        postalCode: initialData.customer.address.postalCode
      },
    }
  });

  useEffect(() => {
    console.log('Selected state changed:', selectedState);
  }, [selectedState]);

  // This pattern holds the component in a loading state till the configuration loads.
  if (isLoading || !config) return null;

  // Once we have the configuration we return the Offer Component.
  return (
    <div className="App w-full">
      <div id="buddy_offer" />
      <BuddyOfferElement
        ion="ALLSTATE_RENTERS_PREFILL"
        partnerID="p-buddytest"
        stage="TESTING"
        data={formData}
        theme={config.themeBase}
        onUserEvent={config.userEvents}
        onCustomMessage={config.handleCustomMessage}
      />
            {selectedState !== 'other' ? (
        <div className="fixed inset-x-0 bottom-0 bg-allstate-blue text-white text-center py-2"><h1>Current rental address: {formData.policy.renters.address.line1}, {formData.policy.renters.address.city}, {formData.policy.renters.address.state} {formData.policy.renters.address.postalCode}</h1></div>
      ) : null}
    </div>
  );
}

export default function Staging({selectedState}: {selectedState: string}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:w-auto mx:auto p-6 md:p-12">
      {/* <div className="relative flex place-items-center w-full"> */}
      <div className="w-full">
        <OfferElement selectedState={selectedState} />
      </div>
    </main>
  )
}