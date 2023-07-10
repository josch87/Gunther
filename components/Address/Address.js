export default function Address({ street, zipCode, city, country }) {
  return (
    <>
      {street && (
        <>
          {street}
          <br />
        </>
      )}
      {(zipCode || city) && (
        <>
          {zipCode} {city}
          <br />
        </>
      )}
      {country && <>{country}</>}
    </>
  );
}
