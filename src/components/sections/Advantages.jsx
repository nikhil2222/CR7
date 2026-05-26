import React from 'react';
import advantageBg from '../../assets/advantagebg.png';

export default function Advantages() {
  return (
    <section
      id="advantages"
      className="overflow-hidden px-6 py-16 lg:px-16 lg:py-24"
      style={{
        background: `
          radial-gradient(circle at 78% 42%, rgba(11,75,99,0.10) 0%, rgba(4,19,26,0.72) 24%, rgba(2,11,18,1) 58%),
          linear-gradient(180deg, #020B12 0%, #020B12 100%)
        `,
      }}
    >
      <div className="mx-auto max-w-[1380px]">
        <div
          className="relative overflow-hidden rounded-[18px] px-8 py-14 sm:px-10 md:px-14 lg:px-16 lg:py-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(3,16,25,0.94) 0%, rgba(3,16,25,0.88) 36%, rgba(3,16,25,0.74) 58%, rgba(3,16,25,0.62) 100%),
              url(${advantageBg})
            `,
            backgroundRepeat: 'no-repeat, no-repeat',
            backgroundSize: 'cover, cover',
            backgroundPosition: 'center, center',
          }}
        >
          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="max-w-[720px]">
              <h2 className="font-archivo text-[40px] font-normal leading-[1.08] tracking-[-0.01em] text-white lg:text-[53px]">
                Take the full advantage of going paper-less now.
              </h2>

              <p className="mt-8 max-w-[610px] font-archivo text-[16px] font-normal leading-[1.45] text-white/65">
                CB7 helps your financial institution improve the client experience,
                automate and optimize procedures, simplify banking operations
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end lg:gap-6">
              <button className="flex h-[50px] min-w-[214px] items-center justify-center rounded-[10px] border border-white/75 bg-transparent px-8 font-chivo text-[12px] font-medium uppercase tracking-[0.02em] text-white transition duration-300 hover:border-white hover:bg-white/5">
                CONTACT US
              </button>

              <button className="flex h-[50px] min-w-[214px] items-center justify-center rounded-[10px] bg-gradient-to-r from-[#18A0FB] to-[#1248E8] px-8 font-chivo text-[12px] font-medium uppercase tracking-[0.02em] text-white shadow-[0_6px_24px_rgba(21,72,232,0.22)] transition duration-300 hover:scale-[1.01] hover:shadow-[0_8px_28px_rgba(21,72,232,0.32)]">
                REQUEST DEMO
              </button>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,255,255,0))]" />
        </div>
      </div>
    </section>
  );
}