import React from 'react';

const TrustSection = () => {
  const reasons = [
    {
      number: "01",
      title: "Human-Centered Design",
      description: "We prioritize clarity and user experience.",
      highlighted: true
    },
    {
      number: "02",
      title: "Scalable Tech",
      description: "Build once, grow fast. Our code is made to scale.",
      highlighted: false
    },
    {
      number: "03",
      title: "Fast Delivery",
      description: "Agile workflows = fast, quality development.",
      highlighted: false
    },
    {
      number: "04",
      title: "Long-Term Support",
      description: "We stick with you beyond the launch.",
      highlighted: false
    }
  ];

  return (
    <section className="w-full py-32 bg-transparent border-y border-black/[0.05] dark:border-white/[0.05] relative overflow-hidden z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-20">
        
        {/* Left Side: Title */}
        <div className="lg:sticky lg:top-40 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight leading-[1.2] text-black/80 dark:text-white/80">
            Why Tech Companies <br /><span className="text-black dark:text-white">Trust Us</span>
          </h2>
        </div>

        {/* Right Side: List */}
        <div className="flex-1 w-full space-y-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start gap-8 group">
              {/* Liquid Glass Number Box */}
              <div 
                className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-normal transition-all duration-500 backdrop-blur-xl ${
                  reason.highlighted 
                  ? 'bg-gradient-to-br from-[#7163E9] via-[#6052E5] to-[#4B3AD9] text-white shadow-[0_15px_40px_rgba(75,58,217,0.4)] scale-110 border-t border-white/20' 
                  : 'bg-white/70 dark:bg-white/[0.03] border border-white/90 dark:border-white/[0.08] text-black/60 dark:text-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-none group-hover:text-black dark:group-hover:text-white group-hover:border-white dark:group-hover:border-white/20'
                }`}
                style={!reason.highlighted ? {
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 50%, rgba(255,255,255,0.04) 100%)'
                } : {}}
              >
                {reason.number}
              </div>

              {/* Text Info */}
              <div className="pt-1">
                <h3 className="text-xl md:text-2xl font-normal mb-2 text-black/80 dark:text-white/80 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-black/40 dark:text-white/40 text-base md:text-lg leading-relaxed max-w-md group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
