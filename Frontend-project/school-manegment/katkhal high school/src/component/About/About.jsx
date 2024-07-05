import asler from "../../assets/423224566_874677531054990_6719235430676765307_n.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 shadow-lg">
      <div className="hero-content flex-col lg:flex-row p-6 space-x-6 rounded-lg shadow-2xl bg-white">
        <img
          src={asler}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="School Image"
        />
        <div>
          <h1 className="text-5xl font-bold text-yellow-400">Welcome To</h1>
          <h2 className="text-4xl font-bold text-black">
            Katakhal High School
          </h2>
          <p className="py-6 text-black space-x-2">
            কিশোরগঞ্জ জেলার মিঠামইন উপজেলাধীন কাটখাল কাটখাল ইউনিয়ন এর একমাত্র
            শিক্ষা প্রতিষ্ঠান <br /> ”কাটখাল উচ্চ বালিকা বিদ্যালয়”। এই
            বিদ্যালয়টি ১৯৮৫ খ্রিস্টাব্দ তারিখ হইতে ৬ষ্ঠ হইতে ১০ম শ্রেনি <br />
            পর্যন্ন নিম্নমাধ্যমিক বিদ্যালয় হিসেবে একাডেমি স্বীকৃতির অনুমতি লাভ
            করেন। এই বিদ্যালয়ে জেএসসি <br /> এবং এসএসসি পূর্ণাঙ্গ পরীক্ষা
            কেন্দ্র স্থাপনের মধ্য দিয়ে বিদ্যালয়টি সুচারুপে পরিচালিত হয়ে আসছে।
          </p>
          <button className="btn btn-primary">More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
