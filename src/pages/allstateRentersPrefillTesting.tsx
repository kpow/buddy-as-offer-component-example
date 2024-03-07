'use client'
// import the Buddy Offer Element and the useConfig hook
import BuddyOfferElement, { useConfig } from '@buddy-technology/offer-component';
import React, { useState } from 'react';

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
    firstName: 'Sally',
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

const OfferElement = ({selectedState, selectedPartner, companionMode}: {selectedState: string, selectedPartner: string, companionMode: string}) => {
  const { config, isLoading } = useConfig(
    "https://staging.embed.buddy.insure/allstate/renters/allstate-renters-prefill-config-react.js"
  );
const stage = "TESTING";
const checkState = (state: string) => {
    switch (state) {
        case "CA":
            return {
              line1: '3705 Haines St',
                line2: '',
                postalCode: '92109',
                state: 'CA',
                city: 'San Diego'
            };
        case "OH":
            return {
                line1: '6613 Fairpark Ave',
                line2: '',
                postalCode: '45216',
                state: 'OH',
                city: 'Cincinnati'
            };
        case "OK":
            return {
              line1: '625 Foss Dr',
              line2: '',
              postalCode: '73025',
              state: 'OK',
              city: 'Edmond'
            };
        case "SC":
            return {
                line1: '3505 Barkley Rd',
                line2: '',
                postalCode: '29154',
                state: 'SC',
                city: 'Sumter'
            };
        case "TN":
            return {
              line1: '4427 Deerland St',
              line2: '',
              postalCode: '38109',
              state: 'TN',
              city: 'Memphis'
            };
        default:
            return {
                // line1: '6613 Fairpark Ave',
                // line2: '',
                // postalCode: '45216',
                // state: state,
                // city: 'Cincinnati'

          line1: '8226 S Langley Ave', // 8226 S Langley Ave
          line2: '',
          postalCode: '60619',
          state: 'IL',
          city: 'Chicago' // Chicago

            };
    }
};
const convertCompanionMode = (companionMode: string) => {
  if (companionMode === 'True') {
    return true;
  } else {
    return false;
  }
}
  const rentalAddress = checkState(selectedState);
  const companionModeOverride = convertCompanionMode(companionMode)
  const [formData, setFormData] = useState({
    policy: {
      meta: {
        partner: selectedPartner,
        companionMode: companionModeOverride
      },
      renters: {
        address: rentalAddress
      },
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

  // This pattern holds the component in a loading state till the configuration loads.
  if (isLoading || !config) return null;

  // Once we have the configuration we return the Offer Component.
  return (
    <div className="App w-full">
      <BuddyOfferElement
        ion="ALLSTATE_RENTERS_PREFILL"
        partnerID="p-buddytest"
        stage={stage}
        data={formData}
        theme={config.themeBase}
        onUserEvent={config.userEvents}
        onCustomMessage={config.handleCustomMessage}
      />
      {selectedState !== 'other' ? (
        <div className="fixed inset-x-0 bottom-0 bg-allstate-blue text-white text-center py-2"><h1>Partner: {selectedPartner} / Rental address: {formData.policy.renters.address.line1}, {formData.policy.renters.address.city}, {formData.policy.renters.address.state} {formData.policy.renters.address.postalCode} / Stage: {stage}</h1></div>
        // / Companion Mode: {companionMode} 
      ) : null}
    </div>
  );
}


export default function Staging({selectedState, selectedPartner, companionMode}: {selectedState: string, selectedPartner: string, companionMode: string}) {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:w-auto mx:auto p-6 md:p-12">
      {/* <div className="relative flex place-items-center w-full"> */}
      <div className="w-full">
        <OfferElement selectedState={selectedState} selectedPartner={selectedPartner} companionMode={companionMode} />
      </div>
    </main>
  )
}
