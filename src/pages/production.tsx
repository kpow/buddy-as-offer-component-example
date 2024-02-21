import React, { useState } from 'react';
import Production from './allstateRentersPrefillProduction';

const ParentComponent = () => {
  const [selectedState, setSelectedState] = useState('');

  const handleSelectionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedState(event.target.value);
    console.log('selectedState', selectedState)
  };
  const handleRefresh = () => { window.location.reload() }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-12">
      <div className="relative flex place-items-center w-full">
        <div className="App w-full text-center">
          <div>
            {selectedState === '' ? (
              <div className="relative inline-block text-left">
                <select onChange={handleSelectionChange} value={selectedState} className="appearance-none px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none pr-10">
                  <option value="">Please select a state</option>
                  <option value="OH">Ohio</option>
                  {/* <option value="OK">Oklahoma</option> */}
                  <option value="SC">South Carolina</option>
                  {/* <option value="TN">Tennessee</option> */}
                  <option value="other">Other state</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                </div>
              </div>
            ) : (
              <div className='text-white text-center p-4'>
                {/* rounded-lg shadow-md */}
                <h3 className="text-lg font-semibold">Please refresh your browser to try another state</h3>
                {/* animate-pulse  */}
                <button className="mt-2 px-4 py-2 bg-allstate-blue hover:bg-blue-600 text-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={handleRefresh}>
                  Refresh
                </button>
              </div>
            )}
          </div>
          {selectedState && <Production selectedState={selectedState} />}
        </div>
      </div>
    </main>
  );
};

export default ParentComponent;
