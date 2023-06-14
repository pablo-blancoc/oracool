import React from 'react';

export default function HistoricalDataPage({secondaryNavbar}) {
  return (
    <>
      {secondaryNavbar}
      <div>Welcome to the Home Page</div>;
      <iframe src="https://www.formula1.com" title="F1 Website" width="100%" height="600"></iframe>
    </>

  );
}
