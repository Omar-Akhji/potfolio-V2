import React from "react";

interface TimelineItem {
  title: string;
  period: string;
  description: string;
}

interface ResumeTimelineProps {
  title: string;
  items: TimelineItem[];
}

export const ResumeTimeline: React.FC<ResumeTimelineProps> = ({ title, items }) => {
  return (
    <div className="relative space-y-0">
      {items.map((item) => (
        <div key={item.title} className="group relative flex gap-4 md:gap-6">
          {/* Timeline Column */}
          <div className="flex w-10 shrink-0 flex-col items-center">
            <div className="flex h-6 flex-col items-center justify-center">
              <div className="bg-orange ring-orange/20 z-10 h-4 w-4 shrink-0 rounded-full shadow-[0_0_15px_rgba(255,165,0,0.4)] ring-4" />
            </div>
            <div className="bg-orange/20 group-hover:bg-orange/40 my-3 w-0.5 grow rounded-full transition-colors" />
          </div>

          {/* Content Column */}
          <div className="pb-8 text-sm sm:text-[0.9375rem]">
            <h4 className="text-text mb-1 flex min-h-6 items-center text-sm leading-tight font-medium sm:text-[0.9375rem]">
              {item.title}
            </h4>
            <time className="text-yellow/70 mb-2 block text-[0.8125rem] leading-relaxed font-normal sm:text-[0.9375rem]">
              {item.period}
            </time>
            <div className="text-text-muted text-[0.8125rem] leading-relaxed font-light sm:text-[0.9375rem]">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumeTimeline;
