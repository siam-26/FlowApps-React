import React from 'react'
import { Play } from "lucide-react";
import bannerImg from "../../../assets/hero.png";


const Banner = () => {
  return (
    <section className="pt-20 bg-white">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl text-black font-bold mb-4">
          We Build <br /> <span className="text-[#814fe8]">Productive</span>
          &nbsp;Apps
        </h1>

        <p className="text-[#97a2ab] mb-8">
          At FlowApps, we craft innovative apps designed to make everyday life
          simpler, smarter and more existing. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex justify-center gap-4">
          {/* Google Play Button */}
          <button className="btn btn-outline">
            <Play size={20} />
            Google Play
          </button>

          {/* App Store Button */}
          <button className="btn btn-outline">
            <Play size={20} />
            App Store
          </button>
        </div>

        <div className="flex justify-center pt-6">
          <img src={bannerImg} alt="" className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default Banner
