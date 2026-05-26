import React, { useState } from 'react';

const navLinks = [
  { label: 'SOLUTIONS', target: 'solutions', hasArrow: true },
  { label: 'RESOURCES', target: 'happening', hasArrow: true },
  { label: 'ABOUT US', target: 'contact-us', hasArrow: false },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 92;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMobileOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1160px] rounded-[18px] bg-[#2B2B2B]">
        <div className="flex h-[64px] items-center justify-between px-5 sm:px-6 lg:px-7">
          <button
            onClick={() => handleScroll('banner')}
            className="font-chivo text-[28px] font-medium leading-none text-white sm:text-[30px]"
          >
            N7
          </button>

          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleScroll(link.target)}
                className="group inline-flex items-center gap-2 font-chivo text-[12px] font-medium leading-[1.3] tracking-normal text-white transition duration-300 hover:text-[#d7e9ff]"
              >
                <span>{link.label}</span>
                {link.hasArrow && (
                  <svg
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    className="translate-y-[1px]"
                  >
                    <path
                      d="M1 1.25L7.5 7.25L14 1.25"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button
              onClick={() => handleScroll('contact-us')}
              className="flex h-[42px] min-w-[196px] items-center justify-center rounded-[12px] border border-white px-6 font-chivo text-[12px] font-medium leading-[1.3] tracking-normal text-white transition duration-300 hover:bg-white hover:text-[#2B2B2B]"
            >
              REQUEST DEMO
            </button>
          </div>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/20 text-white lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              {mobileOpen ? (
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path d="M4 7H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M4 12H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 px-4 pb-4 pt-4 sm:px-6 lg:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => handleScroll(link.target)}
                  className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-left font-chivo text-[12px] font-medium text-white transition duration-300 hover:bg-white/10"
                >
                  <span>{link.label}</span>
                  {link.hasArrow && <span className="text-sm">⌄</span>}
                </button>
              ))}

              <button
                onClick={() => handleScroll('contact-us')}
                className="mt-1 rounded-xl border border-white px-4 py-3 font-chivo text-[12px] font-medium text-white transition duration-300 hover:bg-white hover:text-[#2B2B2B]"
              >
                REQUEST DEMO
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}