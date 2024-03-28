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
        case "AL": 
          return {
              line1: '904 Shagbark Rd',
              line2: '',
              postalCode: '36535',
              state: 'AL',
              city: 'Foley'
          };
          case "AZ":
            return {
              line1: '9032 E Karen Dr', // 9032 E Karen Dr
                  line2: '',
                  postalCode: '85260',
                  state: 'AZ',
                  city: 'Scottsdale' // Scottsdale
            };  
        case "AR":
          return {
              line1: '2418 W 17th St',
              line2: '',
              postalCode: '72202',
              state: 'AR',
              city: 'Little Rock'
          };
        case "CA":
            return {
              line1: '3705 Haines St',
                line2: '',
                postalCode: '92109',
                state: 'CA',
                city: 'San Diego'
            };
        case "CO":
            return {
                 line1: '3600 N Garfield St',
          line2: 'Apt. 2 #45',
          postalCode: '80205',
          state: 'CO',
          city: 'Denver'
            };
        case "DE":
              return {
                   line1: '361 New London Rd',
            line2: '',
            postalCode: '19711',
            state: 'DE',
            city: 'Newark'
              };
        case "IL": 
          return {
              line1: '8226 S Langley Ave',
            line2: '',
            postalCode: '60619',
            state: 'IL',
            city: 'Chicago'
          };
        case "IN":
            return {
                 line1: '2839 N Talbott St',
          line2: 'Apt 3',
          postalCode: '46205',
          state: 'IN',
          city: 'Indianapolis'
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
        case "ME":
          return {
            line1: '74 Sidney St',
            line2: '',
            postalCode: '04401',
            state: 'ME',
            city: 'Bangor'
          };
          case "MO":
            return {
                 line1: '3195 W Montclair St',
          line2: '',
          postalCode: '65807',
          state: 'MO',
          city: 'Springfield'
            };
        case "MS":
          return {
            line1: '1701 Fox Chase Rd',
          line2: '',
          postalCode: '38834',
          state: 'MS',
          city: 'Corinth'
          }
        case "MT":
            return {
              line1: '169 Arcadia Ln',
              line2: '',
              postalCode: '59715',
              state: 'MT',
              city: 'Bozeman'
            };
        case "ND":
              return {
                line1: '362 9th Ave S',
                line2: '',
                postalCode: '58012',
                state: 'ND',
                city: 'Casselton'
              };        
        case "NM":
            return {
              line1: '8420 Tierra Morena Pl NE',
              line2: '',
              postalCode: '87122',
              state: 'NM',
              city: 'Albuquerque'
            };
        case "OR":
              return {
                  line1: '8420 Tierra Morena Pl NE',
                  line2: 'Unit 3',
                  postalCode: '97202',
                  state: 'OR',
                  city: 'Portland'
              };
        case "PA":
                return {
                    line1: '1858 Main St',
                    line2: '',
                    postalCode: '15412',
                    state: 'PA',
                    city: 'Allenport'
                };
        case "SC":
            return {
                line1: '3505 Barkley Rd',
                line2: '',
                postalCode: '29154',
                state: 'SC',
                city: 'Sumter'
            };
        case "SD":
          return {
            line1: '828 N Indiana Ave',
            line2: '',
            postalCode: '5805710312',
            state: 'SD',
            city: 'Sioux Falls'
          };
          
        case "TN":
            return {
              line1: '4427 Deerland St',
              line2: '',
              postalCode: '38109',
              state: 'TN',
              city: 'Memphis'
            };
            case "TX":
              return {
                  line1: '5956 Hopkins Dr',
          line2: '',
          postalCode: '76227',
          state: 'TX',
              };
        case "UT":
          return {  
            line1: '1860 Lucky John Dr',
            line2: '',
            postalCode: '84060',
            state: 'UT',
            city: 'Park City'
          };
          case "WI":
            return {  
                 line1: '618 Milky Way',
          line2: '',
          postalCode: '53718',
          state: 'WI',
          city: 'Madison'
            }
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
        companionMode: companionModeOverride,
        testMode: '0607'
      },
      renters: {
        address: rentalAddress
      },
    },
    customer: {
      firstName: initialData.customer.firstName,
      lastName: initialData.customer.lastName,
      // lastName: selectedLastName,
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
