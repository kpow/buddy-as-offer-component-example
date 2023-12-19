'use client'
// import the Buddy Offer Element and the useConfig hook
import BuddyOfferElement, { useConfig } from '@buddy-technology/offer-component';

// example prefill data, makem sure the start date is in the future :)
const demodata = {
  policy: {
    startDate: "12/30/2023",
    renters: {
      address: {
        line1: "2949 Parkwood Blvd",
        line2: "Apt 239",
        city: "Frisco",
        state: "TX",
        postalCode: "75034"
      }

    }
  },
  customer: {
    firstName: "Gautam",
    lastName: "Sonthalia",
    dob: "",
    email: "Gautam.sonthalia@gmail.com",
    phone: "+18473400850",
    address: {
      line1: "2949 Parkwood Blvd",
      line2: "Apt 239",
      city: "Frisco",
      state: "TX",
      postalCode: "75034"
    }
  }
};


// This is the Buddy Offer Element
// There are 2 main parts
// 1. The useConfig hook 
// 2. The Offer Component

function OfferElement() {
  // useConfig hook to retrieve configuration options
  const { config, isLoading } = useConfig(
    "https://embed.buddy.insure/allstate/renters/allstate-renters-prefill-config-react.js"
  );

  // This pattern holds the component in a loading state till the configuration loads.
  if (isLoading || !config) return null;

  // Once we have the configuration we return the Offer Component.
  return (
    <div className="App w-full">
      {/* The div the offer element loads into */}
      <h1>production</h1>
      <div id="buddy_offer" />

      <BuddyOfferElement
        ion="ALLSTATE_RENTERS_PREFILL"
        partnerID="p-19g6ilex299lc"
        stage="PRODUCTION"
        data={demodata}
        theme={config.themeBase}
        onUserEvent={config.userEvents}
        onCustomMessage={config.handleCustomMessage}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center w-full">
        <OfferElement />
      </div>
    </main>
  )
}
