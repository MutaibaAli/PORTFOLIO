// components/Footer.js
import React from 'react';

const FooterIcon = ({ href, iconPath, label }) => (
  <a
    href={href}
    className="flex items-center hover:text-pink-500 transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg className="h-6 w-6 mr-1" fill="currentColor" viewBox="0 0 24 24">
      <path d={iconPath} />
    </svg>
    {label}
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h4 className="text-lg font-bold">Mutaiba Ali</h4>
            <p className="text-sm text-gray-400">Creating innovative web solutions</p>
          </div>

          <div className="flex space-x-6">
            <FooterIcon
              href="mailto:mutaiba.ali1191@gmail.com"
              label="Email"
              iconPath="M2.5 3A2.5 2.5 0 000 5.5v13A2.5 2.5 0 002.5 21h19a2.5 2.5 0 002.5-2.5v-13A2.5 2.5 0 0021.5 3h-19zm19 1.5a.5.5 0 01.5.5v.202L12 11.689 2 5.202V5.5a.5.5 0 01.5-.5h19zm-19 15a.5.5 0 01-.5-.5v-11.3l9.76 6.81a.75.75 0 00.98 0L21.5 7.7v11.3a.5.5 0 01-.5.5h-19z"
            />
            <FooterIcon
              href="https://www.linkedin.com/in/mutaiba-ali-189441328/"
              label="LinkedIn"
              iconPath="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.5h5V24H0V8.5zm7.5 0h4.69v2.14h.06c.65-1.2 2.24-2.47 4.6-2.47 4.92 0 5.82 3.24 5.82 7.46v8.87h-5v-7.85c0-1.87-.03-4.28-2.61-4.28-2.61 0-3.01 2.04-3.01 4.14v7.99H7.5V8.5z"
            />
            <FooterIcon
              href="https://github.com/MutaibaAli"
              label="GitHub"
              iconPath="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.21 6.84 9.54.5.09.68-.22.68-.49 0-.24-.01-.99-.01-1.8-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.61.07-.6.07-.6 1.01.07 1.54 1.03 1.54 1.03.89 1.52 2.33 1.08 2.91.83.09-.64.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.02a9.586 9.586 0 012.5-.33c.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.43.2 2.49.1 2.75.64.7 1.03 1.6 1.03 2.69 0 3.82-2.33 4.68-4.56 4.93.36.31.68.93.68 1.88 0 1.36-.01 2.45-.01 2.77 0 .27.18.59.69.49C21.13 20.21 24 16.42 24 12c0-5.52-4.48-10-10-10z"
            />
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Mutaiba Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


