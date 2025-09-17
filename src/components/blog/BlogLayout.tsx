import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface BlogLayoutProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl?: string;
  schemaMarkup?: object;
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  schemaMarkup,
  children
}) => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="The Opera House" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* Canonical URL */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

        {/* Schema Markup */}
        {schemaMarkup && (
          <script type="application/ld+json">
            {JSON.stringify(schemaMarkup)}
          </script>
        )}

        {/* Additional SEO */}
        <meta name="author" content="The Opera House" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Noida" />
      </Helmet>

      <Navigation />

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogLayout;