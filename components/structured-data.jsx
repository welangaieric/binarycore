export function OrganizationSchema() {
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Binary Core Systems",
      url: "https://binarycoresystems.com",
      logo: "https://binarycoresystems.com/images/logo.png",
      sameAs: [
        "https://twitter.com/binarycoresys",
        "https://www.linkedin.com/company/binary-core-systems",
        "https://www.facebook.com/binarycoresystems",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+254110517055",
        contactType: "customer service",
        availableLanguage: ["English"],
      },
    }
  
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
  }
  
  export function WebsiteSchema() {
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Binary Core Systems",
      url: "https://binarycoresystems.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://binarycoresystems.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }
  
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
  }
  
  