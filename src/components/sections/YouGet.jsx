import React from 'react';
import yourGetImage from '../../assets/yougetimage.png';

const leftPoints = [
  'Customer-On Boarding',
  'Managing deposits and withdrawals',
  'Transaction management',
  'Interest Calculation',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
];

const rightPoints = [
  'CRM Activities',
  'Configuring New Banking Products',
  'Loan disbursal and Loan management',
  'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
];

function CheckItem({ text }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0D5BFF] text-[12px] text-white shadow-[0_0_12px_rgba(13,91,255,0.35)]">
        ✓
      </span>
      <span className="font-archivo text-[16px] font-normal leading-[1.35] text-white/76">
        {text}
      </span>
    </li>
  );
}

export default function YouGet() {
  return (
    <section
      id="youget"
      className="py-20 lg:py-24"
      style={{
        backgroundImage: `
          radial-gradient(circle at 82% 70%, rgba(13, 42, 74, 0.12) 0%, rgba(13, 42, 74, 0.06) 18%, rgba(7, 21, 37, 0.03) 34%, rgba(4, 13, 23, 0) 50%),
          radial-gradient(ellipse at 70% 50%, #0d2a4a 0%, #071525 40%, #040d17 100%)
        `,
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: 'cover, cover',
        backgroundPosition: 'center, center',
      }}
    >
      <div className="mx-auto flex max-w-[1440px] flex-col-reverse items-center gap-14 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-16">
        <div className="w-full max-w-[880px]">
          <img
            src={yourGetImage}
            alt="Core banking system dashboard"
            className="w-full object-contain"
            loading="lazy"
          />
        </div>

        <div className="w-full max-w-[700px]">
          <h2 className="max-w-[650px] font-archivo text-[27px] font-normal leading-[1.35] tracking-[-0.01em] text-white">
            Run a more efficient, flexible,and digitally connected corebanking system
          </h2>

          <h3 className="mt-14 font-archivo text-[16px] font-medium leading-[1.3] text-white">
            What you will get:
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-2 sm:grid-cols-2">
            <ul className="space-y-6">
              {leftPoints.map((point) => (
                <CheckItem key={point} text={point} />
              ))}
            </ul>

            <ul className="space-y-6">
              {rightPoints.map((point) => (
                <CheckItem key={point} text={point} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}