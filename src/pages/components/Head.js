// components/SEO.tsx

const SEO = () => {
  return (
    <>
      <title>Free Strong Password Generator | Xupyter Solutions</title>
      <meta
        name="description"
        content="Generate strong and secure passwords instantly with Xupyter's free password generator. 100% free SaaS tool with customization, no signup required."
      />
      <meta
        name="keywords"
        content="password generator, free password generator, strong password, generate secure password, Xupyter Solutions, free SaaS tool"
      />
      <meta name="author" content="Xupyter Solutions" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content="Free Strong Password Generator | Xupyter Solutions" />
      <meta
        property="og:description"
        content="Secure your accounts with Xupyter's free and powerful password generator tool."
      />
      <meta property="og:image" content="https://xupyter.sbs/og-image.png" />
      <meta property="og:url" content="https://password.xupyter.sbs/password-generator" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Free Strong Password Generator | Xupyter Solutions" />
      <meta name="twitter:description" content="Generate secure passwords with Xupyter’s free password generator SaaS tool." />
      <meta name="twitter:image" content="https://xupyter.sbs/og-image.png" />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Strong Password Generator",
            operatingSystem: "Web",
            applicationCategory: "SecurityApplication",
            offers: {
              "@type": "Offer",
              price: "0.00",
              priceCurrency: "USD",
            },
            publisher: {
              "@type": "Organization",
              name: "Xupyter Solutions",
              url: "https://xupyter.com",
              logo: {
                "@type": "ImageObject",
                url: "https://xupyter.com/logo.png",
              },
            },
            description:
              "Xupyter's Strong Password Generator is a free SaaS tool that helps you generate secure and customizable passwords instantly — no signup required.",
            url: "https://password.xupyter.sbs/",
            image: "https://xupyter.sbs/og-image.png",
          }),
        }}
      />
    </>
  );
};

export default SEO;
