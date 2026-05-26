import React from 'react';
import solutionIcon1 from '../../assets/solutionicon1.png';
import solutionIcon2 from '../../assets/solutionicon2.png';
import solutionIcon3 from '../../assets/solutionicon3.png';
import solutionIcon4 from '../../assets/solutionicon4.png';
import solutionIcon5 from '../../assets/solutionicon5.png';

const solutions = [
  {
    icon: solutionIcon1,
    tag: null,
    title: 'Core Banking CB7',
    description:
      'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
  },
  {
    icon: solutionIcon2,
    tag: null,
    title: 'Digital Banking N7',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
  },
  {
    icon: solutionIcon3,
    tag: null,
    title: 'Open Banking',
    description:
      'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
  },
  {
    icon: solutionIcon4,
    tag: 'NBFC',
    title: 'Loan Origination System',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
  },
  {
    icon: solutionIcon5,
    tag: 'NBFC',
    title: 'Loan Management System',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
  },
];

function LearnMore() {
  return (
    <a
      href="#"
      className="group mt-7 inline-flex w-fit items-center gap-2 font-chivo text-[14px] font-medium uppercase tracking-[-0.01em] text-[#1B9DFF]"
    >
      <span className="relative pb-1">
        LEARN MORE
        <span className="absolute bottom-0 left-0 h-px w-[38px] bg-[#1B9DFF] transition-all duration-300 group-hover:w-full" />
      </span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </a>
  );
}

function SolutionCard({ icon, tag, title, description }) {
  return (
    <div className="flex flex-col pb-10">
      <div className="mb-5 flex items-start justify-between">
        <img
          src={icon}
          alt={title}
          className="h-10 w-10 object-contain opacity-80"
          loading="lazy"
        />
        {tag && (
          <span className="font-chivo text-[14px] font-medium uppercase tracking-[-0.01em] text-white/55">
            {tag}
          </span>
        )}
      </div>

      <h3 className="font-archivo text-[22px] font-normal leading-[1.2] text-white">
        {title}
      </h3>

      <p className="mt-7 max-w-[300px] font-archivo text-[16px] font-normal leading-[1.45] text-white/65">
        {description}
      </p>

      <LearnMore />
    </div>
  );
}

export default function Solutions() {
  const leftCol = solutions.slice(0, 2);
  const rightCol = solutions.slice(2, 4);
  const bottomCard = solutions[4];

  return (
    <section
      id="solutions"
      className="relative w-full overflow-hidden px-6 py-20 lg:px-16"
     style={{
  background: `
    radial-gradient(ellipse at 70% 50%, #0d2a4a 0%, #071525 40%, #040d17 100%),
    radial-gradient(circle at 82% 70%, rgba(13, 42, 74, 0.12) 0%, rgba(13, 42, 74, 0.06) 18%, rgba(7, 21, 37, 0.03) 34%, rgba(4, 13, 23, 0) 50%)
  `,
}}
    >
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
        <div className="flex flex-col justify-start pt-2">
          <h2 className="max-w-[360px] font-archivo text-[37px] font-normal leading-[1.15] tracking-[-0.01em] text-white">
            All of our solutions are tailor-made to your needs
          </h2>

          <button className="mt-12 flex h-[44px] w-fit min-w-[197px] items-center justify-center rounded-[10px] border border-white/70 px-7 font-chivo text-[12px] font-medium uppercase tracking-normal text-white transition duration-300 hover:border-white hover:bg-white/5">
            REQUEST DEMO
          </button>
        </div>

        <div className="grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2">
          {leftCol.map((s) => (
            <SolutionCard key={s.title} {...s} />
          ))}

          {rightCol.map((s) => (
            <SolutionCard key={s.title} {...s} />
          ))}

          <div className="sm:col-span-1">
            <SolutionCard {...bottomCard} />
          </div>
        </div>
      </div>
    </section>
  );
}