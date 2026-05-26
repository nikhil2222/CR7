import React from 'react';

export default function ContactUs() {
  return (
    <section
      id="contact-us"
      className="py-20 lg:py-24"
      style={{
        background: `
          radial-gradient(circle at 78% 42%, rgba(11,75,99,0.10) 0%, rgba(4,19,26,0.72) 24%, rgba(2,11,18,1) 58%),
          linear-gradient(180deg, #020B12 0%, #020B12 100%)
        `,
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-2xl">
            <h2 className="font-archivo text-[40px] font-normal leading-[1.08] tracking-[-0.01em] text-white lg:text-[53px]">
              Take the full advantage of going paper-less now.
            </h2>

            <p className="mt-8 max-w-xl font-archivo text-[16px] font-normal leading-[1.45] text-white/65">
              CB7 helps your financial institution improve the client experience,
              automate and optimize procedures, simplify banking operations
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <button className="min-w-[230px] rounded-[10px] border border-white/75 px-8 py-4 font-chivo text-[12px] font-medium uppercase tracking-[0.02em] text-white transition duration-300 hover:border-white hover:bg-white/5">
              CONTACT US
            </button>

            <button className="min-w-[230px] rounded-[10px] bg-gradient-to-r from-[#18A0FB] to-[#1248E8] px-8 py-4 font-chivo text-[12px] font-medium uppercase tracking-[0.02em] text-white shadow-[0_6px_24px_rgba(21,72,232,0.25)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(21,72,232,0.35)]">
              REQUEST DEMO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}