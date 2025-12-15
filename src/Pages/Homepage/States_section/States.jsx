import React from 'react'

const States = () => {
  return (
    <section className="bg-[#814fe8] text-white">
      <div className="max-w-5xl mx-auto px-4 py-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Trusted By Millions, Built For You
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div className="flex flex-col items-center">
            <p className="text-xs text-white/70 mb-2">Total Downloads</p>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">29.6M</h3>
            <p className="text-xs text-white/70">21% More Than Last Month</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-xs text-white/70 mb-2">Total Downloads</p>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">906K</h3>
            <p className="text-xs text-white/70">48% More Than Last Month</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-xs text-white/70 mb-2">Total Downloads</p>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">132+</h3>
            <p className="text-xs text-white/70">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default States
