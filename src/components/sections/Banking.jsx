import React from 'react';
import coreBankingBg from '../../assets/corebankingbg.png';
import coreBankingImage from '../../assets/corebanking.png';

export default function Banking() {
  return (
    <section
      id="banking"
      className="relative overflow-hidden py-20 lg:py-24"
      style={{
        backgroundImage: `
          linear-gradient(rgba(4, 13, 23, 0.72), rgba(4, 13, 23, 0.72)),
          url(${coreBankingBg}),
          radial-gradient(circle at 82% 70%, rgba(13, 42, 74, 0.12) 0%, rgba(13, 42, 74, 0.06) 18%, rgba(7, 21, 37, 0.03) 34%, rgba(4, 13, 23, 0) 50%),
          radial-gradient(ellipse at 70% 50%, #0d2a4a 0%, #071525 40%, #040d17 100%)
        `,
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat',
        backgroundSize: 'cover, cover, cover, cover',
        backgroundPosition: 'center, center, center, center',
      }}
    >
      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center gap-14 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <div className="w-full max-w-[560px] lg:pl-4">
          <h2 className="max-w-[530px] font-archivo text-[42px] font-normal leading-[1.14] tracking-[-0.01em] text-white sm:text-[48px] lg:text-[53px]">
            A complete cloud-based core banking.
          </h2>

          <p className="mt-8 max-w-[430px] font-archivo text-[16px] font-normal leading-[1.45] text-white/72 sm:text-[17px]">
            Faster time to market with our cloud-based core banking services
          </p>

          <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
            <button className="flex h-[56px] min-w-[292px] items-center justify-center rounded-[10px] bg-gradient-to-r from-[#18A0FB] to-[#1248E8] px-8 font-chivo text-[20px] font-medium uppercase tracking-[-0.01em] text-white transition duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(24,160,251,0.22)]">
              REQUEST DEMO
            </button>

            <a
              href="#"
              className="group inline-flex items-center gap-2 font-chivo text-[14px] font-medium uppercase tracking-[-0.01em] text-[#1A9CFF]"
            >
              <span className="relative pb-1">
                LEARN MORE
                <span className="absolute bottom-0 left-0 h-px w-[38px] bg-[#1A9CFF] transition-all duration-300 group-hover:w-full" />
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <div className="w-full max-w-[980px] lg:max-w-[1030px]">
          <img
            src={coreBankingImage}
            alt="Core banking dashboard"
            className="w-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}