import React, { useState, useEffect } from 'react';
import happeningImage1 from '../../assets/happeningimage1.png';

const caseStudies = [
  {
    id: 1,
    category: 'GETTING STARTED',
    title: 'How we help brand reach out to more people',
    company: 'Zoomerr',
    image: happeningImage1,
  },
  {
    id: 2,
    category: 'GETTING STARTED',
    title: 'How we help brand reach out to more people',
    company: 'Zoomerr',
    image: happeningImage1,
  },
  {
    id: 3,
    category: 'GETTING STARTED',
    title: 'How we help brand reach out to more people',
    company: 'Zoomerr',
    image: happeningImage1,
  },
  {
    id: 4,
    category: 'GETTING STARTED',
    title: 'How we help brand reach out to more people',
    company: 'Zoomerr',
    image: happeningImage1,
  },
];

function ZoomerrLogo() {
  return (
    <div className="flex items-center gap-3 text-[#7D8FA0]">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7D8FA0] text-[#04131A] sm:h-10 sm:w-10">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M13.4 2L5 13.4H11.3L10.6 22L19 10.6H12.7L13.4 2Z" fill="currentColor" />
        </svg>
      </span>
      <span className="font-archivo text-[16px] font-medium sm:text-[18px]">Zoomerr</span>
    </div>
  );
}

function CaseCard({ item, active, isMobile }) {
  return (
    <div
      className={`relative shrink-0 rounded-[10px] bg-[#04131A] transition-all duration-500 ${
        active ? 'scale-100 opacity-100' : isMobile ? 'scale-100 opacity-100' : 'scale-[0.94] opacity-30'
      }`}
      style={{
        width: '100%',
        boxShadow: active
          ? '0 0 0 1px rgba(255,255,255,0.03), 0 24px 70px rgba(11, 75, 99, 0.14)'
          : '0 0 0 1px rgba(255,255,255,0.02)',
      }}
    >
      <div className="grid grid-cols-1 overflow-hidden rounded-[10px] lg:min-h-[430px] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="p-4 sm:p-6 lg:p-7">
          <div className="h-full w-full rounded-[8px] bg-[#12225A] p-4 sm:p-5 lg:p-6">
            <img
              src={item.image}
              alt="Case study visual"
              className="h-full w-full rounded-[8px] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between p-5 sm:p-7 lg:p-12">
          <div>
            <p className="font-chivo text-[11px] font-medium uppercase tracking-[0.08em] text-[#2D86AA] sm:text-[12px]">
              {item.category}
            </p>

            <h3 className="mt-4 max-w-[520px] font-archivo text-[26px] font-normal leading-[1.15] text-[#E9F4F9] sm:text-[30px] lg:mt-5 lg:text-[43px]">
              {item.title}
            </h3>

            <div className="mt-6 lg:mt-8">
              <ZoomerrLogo />
            </div>
          </div>

          <button className="mt-8 w-full rounded-[8px] border border-white/35 px-5 py-3 font-chivo text-[11px] font-medium uppercase tracking-normal text-white/60 transition duration-300 hover:border-white/60 hover:text-white sm:text-[12px] lg:mt-10 lg:px-6 lg:py-4">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="case-studies"
      className="overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        background: `
          radial-gradient(circle at 78% 42%, rgba(11,75,99,0.10) 0%, rgba(4,19,26,0.72) 24%, rgba(2,11,18,1) 58%),
          linear-gradient(180deg, #020B12 0%, #020B12 100%)
        `,
      }}
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <h2 className="text-center font-archivo text-[34px] font-normal leading-[1.1] text-[#E9F4F9] sm:text-[48px] lg:text-[64px]">
          Our Case Studies
        </h2>

        <div className="relative mt-12 overflow-hidden lg:mt-16">
          <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-40 bg-gradient-to-r from-[#020B12] via-[#020B12]/92 to-transparent lg:block" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-40 bg-gradient-to-l from-[#020B12] via-[#020B12]/92 to-transparent lg:block" />

          <div
            className="flex items-stretch transition-transform duration-500 ease-out"
            style={{
              transform: isMobile
                ? `translateX(-${activeIndex * 100}%)`
                : `translateX(calc(50% - ${(activeIndex * 76) + 38}%))`,
              gap: isMobile ? '0px' : '40px',
            }}
          >
            {caseStudies.map((item, index) => (
              <div
                key={item.id}
                className="w-full shrink-0 lg:w-[76%]"
              >
                <CaseCard item={item} active={index === activeIndex} isMobile={isMobile} />
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-10 flex flex-col items-center gap-6 sm:mt-12 lg:flex-row lg:justify-center">
          <div className="flex items-center gap-5 sm:gap-8">
            <button
              onClick={goPrev}
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#2490BB] text-[#2490BB] transition duration-300 hover:bg-[#2490BB] hover:text-white sm:h-[44px] sm:w-[44px]"
            >
              <span className="text-[20px] leading-none sm:text-[22px]">←</span>
            </button>

            <div className="flex items-center gap-3">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-[10px] rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-10 bg-[#2490BB]'
                      : 'w-[10px] border border-[#586E84] bg-transparent'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#2490BB] text-[#2490BB] transition duration-300 hover:bg-[#2490BB] hover:text-white sm:h-[44px] sm:w-[44px]"
            >
              <span className="text-[20px] leading-none sm:text-[22px]">→</span>
            </button>
          </div>

          <a
            href="#"
            className="group inline-flex items-center gap-2 font-chivo text-[13px] font-medium uppercase tracking-[-0.01em] text-[#2490BB] sm:text-[14px] lg:absolute lg:right-0"
          >
            <span className="relative pb-1">
              VIEW ALL
              <span className="absolute bottom-0 left-0 h-px w-10 bg-[#2490BB] transition-all duration-300 group-hover:w-full" />
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}