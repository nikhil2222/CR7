import React from 'react';
import digitalBankingBg from '../../assets/digitalbankingpg.png';
import digitalBankingImg1 from '../../assets/digitalbankingimg1.png';
import digitalBankingImg2 from '../../assets/digitalbankingimg2.png';
import digitalBankingImg3 from '../../assets/digitalbanking img3.png';
import digitalBankingImageDownBg from '../../assets/digitalbankingimagedownbg.png';

const topFeatures = [
  'Pre-integrated Security System',
  'Fully Compliant With Regulatory Requirement',
  'Digitally Connected Core',
];

const middleFeatures = [
  'Adaptive & Intelligent API monetization',
  'Ambient User Experience',
  'Cloud-native With lower TCO',
];

const bottomFeatures = [
  'Branchless & Paperless Banking',
  'Digital Transformation Capability',
  'Optimized, Adoptable and Scalable',
];

function CheckList({ items }) {
  return (
    <ul className="mt-8 space-y-5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0C79FF] text-[11px] text-white">
            ✓
          </span>
          <span className="font-archivo text-[16px] font-normal leading-[1.35] text-black/72">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function LearnMore() {
  return (
    <a
      href="#"
      className="group mt-8 inline-flex items-center gap-2 font-chivo text-[14px] font-medium uppercase tracking-[-0.01em] text-[#128BFF]"
    >
      <span className="relative pb-1">
        LEARN MORE
        <span className="absolute bottom-0 left-0 h-px w-[38px] bg-[#128BFF] transition-all duration-300 group-hover:w-full" />
      </span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </a>
  );
}

function BottomCtaCard() {
  return (
    <div className="mt-24">
      <div
        className="relative overflow-hidden rounded-[28px] px-8 py-12 sm:px-10 md:px-14 lg:px-16 lg:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(6,18,26,0.68), rgba(6,18,26,0.68)), url(${digitalBankingImageDownBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <h3 className="font-archivo text-[36px] font-normal leading-[1.1] text-white sm:text-[46px] lg:text-[58px]">
              Take the full advantage of going paper-less now.
            </h3>

            <p className="mt-8 max-w-xl font-archivo text-[16px] font-normal leading-[1.5] text-white/72 sm:text-[18px]">
              N7 helps your financial institution improve the client experience,
              automate and optimize procedures, simplify banking operations
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <button className="min-w-[210px] rounded-[10px] border border-white/70 px-8 py-4 font-chivo text-[12px] font-medium uppercase tracking-normal text-white transition duration-300 hover:border-white hover:bg-white/5">
              CONTACT US
            </button>

            <button className="min-w-[210px] rounded-[10px] bg-gradient-to-r from-[#18A0FB] to-[#1248E8] px-8 py-4 font-chivo text-[12px] font-medium uppercase tracking-normal text-white transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(24,160,251,0.28)]">
              REQUEST DEMO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DigitalBanking() {
  return (
    <section
      id="digital-banking"
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${digitalBankingBg})` }}
    >
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-16 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-[360px_1fr_320px] lg:gap-x-12">
          <div className="justify-self-start self-start">
            <div className="max-w-[320px]">
              <h2 className="font-archivo text-[42px] font-normal leading-[1.08] tracking-[-0.01em] text-[#0A0A0A] sm:text-[48px] lg:text-[53px]">
                Digital banking out-of-the-box
              </h2>

              <p className="mt-6 max-w-[300px] font-archivo text-[16px] font-normal leading-[1.45] text-black/60">
                N7 helps your financial institution improve the client experience, automate and optimize procedures
              </p>

              <button className="mt-10 rounded-[10px] bg-gradient-to-r from-[#18A0FB] to-[#1248E8] px-8 py-4 font-chivo text-[12px] font-medium uppercase tracking-normal text-white transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(24,160,251,0.24)]">
                REQUEST DEMO
              </button>

              <LearnMore />
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={digitalBankingImg1}
              alt="Digital banking mobile app overview"
              className="w-full max-w-[360px] object-contain"
              loading="lazy"
            />
          </div>

          <div className="justify-self-start self-start lg:pt-20">
            <div className="max-w-[285px]">
              <h3 className="font-archivo text-[16px] font-medium leading-[1.35] text-[#0A0A0A]">
                Fully compliant with regulatory requirement
              </h3>

              <p className="mt-6 font-archivo text-[16px] font-normal leading-[1.45] text-black/60">
                The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank’s operational-risk protocols and procedures.
              </p>

              <CheckList items={topFeatures} />
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 items-center gap-y-16 lg:grid-cols-[360px_1fr_320px] lg:gap-x-12">
          <div className="justify-self-start self-start lg:col-start-2 lg:pt-16">
            <div className="max-w-[285px]">
              <h3 className="font-archivo text-[16px] font-medium leading-[1.35] text-[#0A0A0A]">
                No legacy IT systems
              </h3>

              <p className="mt-6 font-archivo text-[16px] font-normal leading-[1.45] text-black/60">
                Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
              </p>

              <CheckList items={middleFeatures} />
            </div>
          </div>

          <div className="flex justify-center lg:col-start-3">
            <img
              src={digitalBankingImg2}
              alt="Digital banking transactions mobile screen"
              className="w-full max-w-[360px] object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 items-center gap-y-16 lg:grid-cols-[360px_1fr_320px] lg:gap-x-12">
          <div className="flex justify-center lg:col-start-2">
            <img
              src={digitalBankingImg3}
              alt="Digital banking profile mobile screen"
              className="w-full max-w-[360px] object-contain"
              loading="lazy"
            />
          </div>

          <div className="justify-self-start self-start lg:col-start-3 lg:pt-16">
            <div className="max-w-[285px]">
              <h3 className="font-archivo text-[16px] font-medium leading-[1.35] text-[#0A0A0A]">
                No traditional branches
              </h3>

              <p className="mt-6 font-archivo text-[16px] font-normal leading-[1.45] text-black/60">
                Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimizing operational costs for a seamless branchless experience.
              </p>

              <CheckList items={bottomFeatures} />
            </div>
          </div>
        </div>

        <BottomCtaCard />
      </div>
    </section>
  );
}