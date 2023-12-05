'use client'

// import the Buddy Offer Element and the useConfig hook
import BuddyOfferElement, { useConfig } from '@buddy-technology/offer-component';

// example prefill data, makem sure the start date is in the future :)
const demodata = {
  policy: {
    headlinePrefill: "Prefill view headline for larger screens",
    headlinePrefillMobile: "Prefill view Mobile headline",
    headlineIntro: "Headline for larger screens",
    headlineIntroMobile: "Mobile headline",
    headlineCoverages:
      "We have options for you to find the right renters coverage for your needs.",
    headlineCoveragesMobile: "We've got options for you",
    startDate: "12/30/2023",
    renters: {
      address: {
        line1: "8226 S Langley Ave",
        line2: "",
        postalCode: "60619",
        state: "IL",
        city: "Chicago"
      }
    }
  },
  customer: {
    firstName: "Jennifer",
    lastName: "James",
    dob: "04/04/1990",
    email: "enterYourEmail@gmail.com",
    phone: "+18049186025",
    address: {
      line1: "123 E Main St",
      line2: "",
      city: "West Chicago",
      state: "IL",
      postalCode: "60185"
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
        stage="TESTING"
        data={demodata}
        theme={config.themeBase}
        onUserEvent={config.userEvents}
      // onCustomMessage={config.handleCustomMessage}
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
