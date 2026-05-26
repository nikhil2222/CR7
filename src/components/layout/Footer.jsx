import React from 'react';

const addressColumns = [
  {
    title: 'London',
    lines: [
      'Linktia Infosystems Ltd – CB7,',
      '26 Main Road Sundridge,TN14 6EP,',
      'England, United Kingdom.',
    ],
  },
  {
    title: 'Dubai',
    lines: [
      'Linktia Infosystems Ltd –',
      'CB7,Jumeirah Business, Center 5',
      'Cluster W, Jumeirah Lakes Towers,',
      'Dubai, United Arab Emirates',
    ],
  },
  {
    title: 'London',
    lines: [
      'Linktia Infosystems Ltd –',
      'CB7,Nirmal, Anand Nagar,',
      'Suncity Road, Pune,',
      'Maharashtra, 411041, India',
    ],
  },
];

const solutionLinks = [
  'Core Banking CB7',
  'Digital Banking N7',
  'Open Banking',
  'Loan Origination System',
  'Loan Management System',
  'Digital Transformation',
];

const companyLinks = [
  'About Us',
  'Solutions',
  'Contact',
  'Company',
  'Careers',
  'Insights',
  'Core Team',
  'Brand Center',
];

const socialLinks = ['LinkedIn', 'X'];

function FooterArrowLink({ children }) {
  return (
    <a
      href="#"
      className="group flex items-start justify-between gap-4 font-archivo text-[16px] font-normal leading-[1.35] text-white/68 transition duration-300 hover:text-white"
    >
      <span>{children}</span>
      <span className="shrink-0 text-[#2490BB] transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

function FooterLogo() {
  return (
    <div className="w-full max-w-[420px]">
      <div
        className="font-archivo text-[180px] font-normal leading-[0.82] tracking-[-0.08em] text-transparent sm:text-[220px] lg:text-[260px]"
        style={{
          background: 'linear-gradient(180deg, #2CCBFF 0%, #0B8FFF 48%, #1B45FF 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
      >
        N7
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="overflow-hidden px-6 pb-10 pt-20 lg:px-16 lg:pt-24"
      style={{
        background: `
          radial-gradient(circle at 68% 78%, rgba(8, 71, 102, 0.14) 0%, rgba(4, 19, 26, 0.08) 28%, rgba(2, 11, 18, 0) 52%),
          linear-gradient(180deg, #020B12 0%, #031019 100%)
        `,
      }}
    >
      <div className="mx-auto max-w-[1380px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[420px_1fr] lg:gap-20">
          <div>
            <FooterLogo />
          </div>

          <div className="grid grid-cols-1 gap-12">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
              {addressColumns.map((item) => (
                <div key={item.title} className="max-w-[250px]">
                  <h3 className="font-archivo text-[18px] font-medium leading-[1.2] text-white">
                    {item.title}
                  </h3>

                  <div className="mt-5 space-y-1">
                    {item.lines.map((line, index) => (
                      <p
                        key={index}
                        className="font-archivo text-[16px] font-normal leading-[1.35] text-white/60"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
              <div className="max-w-[250px]">
                <h3 className="font-archivo text-[18px] font-medium leading-[1.2] text-white">
                  Solutions
                </h3>

                <div className="mt-5 space-y-3">
                  {solutionLinks.map((item) => (
                    <FooterArrowLink key={item}>{item}</FooterArrowLink>
                  ))}
                </div>
              </div>

              <div className="max-w-[250px]">
                <h3 className="font-archivo text-[18px] font-medium leading-[1.2] text-white">
                  N7 Banking
                </h3>

                <div className="mt-5 space-y-3">
                  {companyLinks.map((item) => (
                    <FooterArrowLink key={item}>{item}</FooterArrowLink>
                  ))}
                </div>
              </div>

              <div className="max-w-[250px]">
                <h3 className="font-archivo text-[18px] font-medium leading-[1.2] text-white">
                  Our Socials
                </h3>

                <div className="mt-5 space-y-3">
                  {socialLinks.map((item) => (
                    <FooterArrowLink key={item}>{item}</FooterArrowLink>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-10">
              <p className="max-w-[860px] font-archivo text-[14px] font-normal leading-[1.45] text-white/28">
                Copyright © 2022 by Linktia Infosystem Limited — [CB7 and N7 as Commercial Brand] —
                [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}