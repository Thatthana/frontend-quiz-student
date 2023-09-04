import React, { useEffect, useState } from 'react';

function DonationData() {
  const [donationData, setDonationData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    const apiUrl = 'https://donation-server-production.up.railway.app/donation';

   
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setDonationData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!donationData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render your data here */}
      <h1>Donation Data</h1>
      <pre>{JSON.stringify(donationData, null, 2)}</pre>
    </div>
  );
}

export default DonationData;