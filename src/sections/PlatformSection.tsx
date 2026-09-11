import React from 'react';
import AiInsightCard from '../components/cards/feature/AiInsightCard';
import UnifiedDataCard from '../components/cards/feature/UnifiedDataCard';
import RealTimeAnalyticsCard from '../components/cards/feature/RealTimeAnalyticsCard';
import AutomatedReportsCard from '../components/cards/feature/AutomatedReportsCard';

export const PlatformSection: React.FC = () => {
  return (
    <section className="w-ful py-20 px-4 sm:px-6 lg:px-8 text-slate-100 font-sans">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            PLATFORM
          </span>
          <h2 className="text-3xl md:text-4xl font-normal text-slate-300 italic tracking-tight">
            Everything between raw data and a good decision.
          </h2>
        </div>

        {/* Platform Feature Cards */}
        <AiInsightCard />
        <UnifiedDataCard />
        <RealTimeAnalyticsCard />
        <AutomatedReportsCard />
      </div>
    </section>
  );
};

export default PlatformSection;