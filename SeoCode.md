import JsonLd from '@/components/JsonLd';
import Pricing from '@/components/pricing';
import metaData from '@/utils/metaData';

export async function generateMetadata() {
    return {
        title: metaData.pricing.title,
        description: metaData.pricing.description,
        keywords: metaData.pricing.keywords,
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_MAIN_APP_URL}/pricing`,
        },
        twitter: {
            card: 'summary_large_image',
            title: metaData.pricing.title,
            description: metaData.pricing.description,
        },
        openGraph: {
            title: metaData.pricing.title,
            description: metaData.pricing.description,
            url: `${process.env.NEXT_PUBLIC_MAIN_APP_URL}/pricing`,
        },
    };
}

export default function PricingPage() {
    const jsonLdData = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: metaData.pricing.title,
        description: metaData.pricing.description,
        url: `${process.env.NEXT_PUBLIC_MAIN_APP_URL}/pricing`,
    };
    return <><JsonLd data={jsonLdData}/><Pricing /></>;
}


//this is json ld

import React from 'react';
import Script from 'next/script';

export default function JsonLd({ data }) {
  return (
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
