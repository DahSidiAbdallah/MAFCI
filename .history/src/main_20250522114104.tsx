import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <section id="about" className="py-20 bg-gray-50 about-bg">
    <section id="services" className="py-20 bg-gray-50 services-bg">
    <section id="realisations" className="py-20 bg-white projects-bg">
    <section id="contact" className="py-20 bg-white contact-bg">
    <App />
  </StrictMode>
);
