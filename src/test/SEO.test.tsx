import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { SEO } from '../components/SEO/SEO';

describe('SEO Component', () => {
  it('renders title tag', () => {
    const { container } = render(<SEO title="Test Title" />);
    const title = container.querySelector('title');
    expect(title).toHaveTextContent(/Test Title/);
  });

  it('renders meta description', () => {
    const { container } = render(<SEO description="Test description" />);
    const metaDescription = container.querySelector('meta[name="description"]');
    expect(metaDescription).toHaveAttribute('content', 'Test description');
  });

  it('renders Open Graph meta tags', () => {
    const { container } = render(<SEO title="OG Title" description="OG Description" />);
    const ogTitle = container.querySelector('meta[property="og:title"]');
    const ogDescription = container.querySelector('meta[property="og:description"]');

    expect(ogTitle).toHaveAttribute('content', /OG Title/);
    expect(ogDescription).toHaveAttribute('content', 'OG Description');
  });

  it('renders Twitter card meta tags', () => {
    const { container } = render(<SEO title="Twitter Title" />);
    const twitterCard = container.querySelector('meta[name="twitter:card"]');
    expect(twitterCard).toHaveAttribute('content', 'summary_large_image');
  });

  it('renders canonical URL', () => {
    const { container } = render(<SEO pathname="/test-page" />);
    const canonical = container.querySelector('link[rel="canonical"]');
    expect(canonical).toHaveAttribute('href', 'https://agustincastañol.com/test-page');
  });

  it('renders JSON-LD schema', () => {
    const { container } = render(<SEO />);
    const jsonLd = container.querySelector('script[type="application/ld+json"]');
    expect(jsonLd).toBeInTheDocument();

    const schema = JSON.parse(jsonLd?.textContent || '{}');
    expect(schema['@type']).toBe('Person');
    expect(schema.name).toBe('Agustín Castañol');
  });

  it('uses default values when props are not provided', () => {
    const { container } = render(<SEO />);
    const title = container.querySelector('title');
    expect(title).toHaveTextContent(/Agustín Castañol/);
  });

  it('allows custom author', () => {
    const { container } = render(<SEO author="Custom Author" />);
    const authorMeta = container.querySelector('meta[name="author"]');
    expect(authorMeta).toHaveAttribute('content', 'Custom Author');
  });
});
