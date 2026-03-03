import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeaderComponent from '../components/HeaderComponent';

describe('HeaderComponent', () => {
  it('renders the name', () => {
    render(<HeaderComponent />);
    expect(screen.getByText(/Agustin Castanol/i)).toBeInTheDocument();
  });

  it('renders the role', () => {
    render(<HeaderComponent />);
    expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument();
  });

  it('renders the greeting', () => {
    render(<HeaderComponent />);
    expect(screen.getByText(/Hello I'm/i)).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(<HeaderComponent />);
    expect(screen.getByText(/Download CV/i)).toBeInTheDocument();
    expect(screen.getByText(/Let's Talk/i)).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(<HeaderComponent />);
    const linkedinLink = screen.getByLabelText(/LinkedIn Profile/i);
    const githubLink = screen.getByLabelText(/GitHub Profile/i);
    const instagramLink = screen.getByLabelText(/Instagram Profile/i);

    expect(linkedinLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
  });

  it('renders the scroll down link', () => {
    render(<HeaderComponent />);
    expect(screen.getByText(/Scroll Down/i)).toBeInTheDocument();
  });

  it('renders the header in a header element', () => {
    render(<HeaderComponent />);
    const header = document.querySelector('header');
    expect(header).toBeInTheDocument();
  });
});
