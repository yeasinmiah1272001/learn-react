import React from "react";
import head from "../../assets/head.jpg";
import rois from "../../assets/rois.jpg";

const TwoTeacher = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {/* First Teacher Card */}
        <div className="hero min-h-screen bg-base-200 shadow-lg rounded-lg">
          <div className="hero-content flex flex-col lg:flex-row p-6 space-y-6 lg:space-y-0 lg:space-x-6 rounded-lg shadow-2xl bg-white">
            <div>
              <h1 className="text-5xl font-bold text-yellow-400">
                School Administrator
              </h1>
              <h2 className="text-4xl font-bold text-black">
                Rois Uddin Ahmed
              </h2>
              <p className="py-6 text-black">
                কিশোরগঞ্জ জেলার মিঠামইন উপজেলাধীন কাটখাল কাটখাল ইউনিয়ন এর
                একমাত্র শিক্ষা প্রতিষ্ঠান
                <br /> ”কাটখাল উচ্চ বালিকা বিদ্যালয়”। এই বিদ্যালয়টি ১৯৮৫
                খ্রিস্টাব্দ তারিখ হইতে ৬ষ্ঠ হইতে ১০ম শ্রেনি
                <br />
                পর্যন্ন নিম্নমাধ্যমিক বিদ্যালয় হিসেবে একাডেমি স্বীকৃতির অনুমতি
                লাভ করেন। এই বিদ্যালয়ে জেএসসি
                <br /> এবং এসএসসি পূর্ণাঙ্গ পরীক্ষা কেন্দ্র স্থাপনের মধ্য দিয়ে
                বিদ্যালয়টি সুচারুরূপে পরিচালিত হয়ে আসছে।
              </p>
              <button className="btn btn-primary">More</button>
            </div>
            <img
              src={rois}
              className="max-w-sm rounded-full w-40  shadow-2xl"
              alt="President Abdul Hamid"
            />
          </div>
        </div>

        {/* Second Teacher Card */}
        <div className="hero min-h-screen bg-base-200 shadow-lg rounded-lg">
          <div className="hero-content flex flex-col lg:flex-row p-6 space-y-6 lg:space-y-0 lg:space-x-6 rounded-lg shadow-2xl bg-white">
            <div>
              <h1 className="text-5xl font-bold text-yellow-400">
                Head Teacher
              </h1>
              <h2 className="text-4xl font-bold text-black">
                Enayet Hossen Bahar
              </h2>
              <p className="py-6 text-black">
                কিশোরগঞ্জ জেলার মিঠামইন উপজেলাধীন কাটখাল কাটখাল ইউনিয়ন এর
                একমাত্র শিক্ষা প্রতিষ্ঠান
                <br /> ”কাটখাল উচ্চ বালিকা বিদ্যালয়”। এই বিদ্যালয়টি ১৯৮৫
                খ্রিস্টাব্দ তারিখ হইতে ৬ষ্ঠ হইতে ১০ম শ্রেনি
                <br />
                পর্যন্ন নিম্নমাধ্যমিক বিদ্যালয় হিসেবে একাডেমি স্বীকৃতির অনুমতি
                লাভ করেন। এই বিদ্যালয়ে জেএসসি
                <br /> এবং এসএসসি পূর্ণাঙ্গ পরীক্ষা কেন্দ্র স্থাপনের মধ্য দিয়ে
                বিদ্যালয়টি সুচারুরূপে পরিচালিত হয়ে আসছে।
              </p>
              <button className="btn btn-primary">More</button>
            </div>
            <img
              src={head}
              className="max-w-sm rounded-full w-40  shadow-2xl"
              alt="President Abdul Hamid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoTeacher;
