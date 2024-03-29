'use client'
// import the Buddy Offer Element and the useConfig hook
import BuddyOfferElement, { useConfig } from '@buddy-technology/offer-component';

// use query string with incoming data to construct this object

function OfferElement() {
  const demodata = {
    policy: {
      meta: {
        partner: 'Buddy',
        // companionMode: false
      },
      renters: {
        // address: {
        //   line1: '3505 Barkley Rd',
        //   line2: '',
        //   postalCode: '29154',
        //   state: 'SC',
        //   city: 'Sumter'
        // }
                address: {
          line1: '3703 3rd St', // 3703 3rd St
          line2: '',
          postalCode: '50313',
          state: 'IA',
          city: 'Des Moines' // Des Moines
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

  // This pattern holds the component in a loading state till the configuration loads.
  if (isLoading || !config) return null;

  // Once we have the configuration we return the Offer Component.
  return (
    <div className="App w-full">
      {/* The div the offer element loads into */}
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
      </div>
    </main>
  )
}
