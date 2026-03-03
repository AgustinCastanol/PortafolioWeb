import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Hello I'm/i)).toBeInTheDocument();
  });

  it('renders the header component', () => {
    render(<App />);
    expect(screen.getByText(/Agustin Castanol/i)).toBeInTheDocument();
  });

  it('renders the navigation', () => {
    render(<App />);
    const nav = document.querySelector('nav');
    expect(nav).toBeInTheDocument();
  });

  it('renders the about section', () => {
    render(<App />);
    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  });

  it('renders the portfolio section', () => {
    render(<App />);
    expect(screen.getByText(/Portafolio/i)).toBeInTheDocument();
  });

  it('has proper SEO title', () => {
    render(<App />);
    const title = document.querySelector('title');
    expect(title).toBeInTheDocument();
  });

  it('has skip to main content link', () => {
    render(<App />);
    const skipLink = screen.getByText(/Skip to main content/i);
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main');
  });

  it('has main landmark for accessibility', () => {
    render(<App />);
    const main = document.getElementById('main');
    expect(main).toBeInTheDocument();
  });
});
