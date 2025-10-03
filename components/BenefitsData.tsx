const BenefitsData = () => {
  const benefits = [
    {
      metric: "32%",
      label: "Average Performance Improvement",
      description: "Users see measurable gains within 8 weeks"
    },
    {
      metric: "4.7/5",
      label: "User Satisfaction Score",
      description: "Based on 2,500+ verified reviews"
    },
    {
      metric: "89%",
      label: "Achieve Their Race Goals",
      description: "Complete their target race without injury"
    },
    {
      metric: "6 hrs/week",
      label: "Average Time Saved",
      description: "No more research paralysis or planning"
    }
  ];

  return (
    <section className="bg-base-200 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-neutral mb-4">
            Results that speak for themselves
          </h2>
          <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
            Data-driven optimization for ambitious professionals who value evidence over hype.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-base-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-5xl font-heading font-extrabold text-primary mb-3">
                {benefit.metric}
              </div>
              <div className="text-lg font-semibold text-neutral mb-2">
                {benefit.label}
              </div>
              <div className="text-sm text-neutral/60">
                {benefit.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsData;
