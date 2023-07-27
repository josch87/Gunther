import Head from "next/head";

export default function DefaultHead({ pageTitle, ogImage, ogDescription }) {
  const ogTitle = pageTitle ? "yes" : "no";

  return (
    <Head>
      <title>
        {pageTitle
          ? `Gunther – ${pageTitle}`
          : "Gunther – Personal Relationship Management"}
      </title>
      <meta
        name="description"
        content="Efficient management of personal contacts for optimal nurturing of social interactions."
      />

      {pageTitle ? (
        <meta property="og:title" content={`${pageTitle}`} />
      ) : (
        <meta
          property="og:title"
          content="Gunther – Personal Relationship Management"
        />
      )}
      {ogDescription ? (
        <meta property="og:description" content={`${ogDescription}`} />
      ) : (
        <meta
          property="og:description"
          content="Efficient management of personal contacts for optimal nurturing of social interactions."
        />
      )}
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={ogImage ? ogImage : "/open-graph/og-default-image.jpg"}
      />
      <meta property="og:locale" content="en_US" />

      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#4dabf7"></meta>
    </Head>
  );
}