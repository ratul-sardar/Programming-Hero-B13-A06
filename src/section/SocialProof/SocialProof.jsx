//
function countTabs(info, text) {
  return (
    <>
      <div className="text-center w-full max-w-100">
        <p className="font-extrabold text-white text-[3.75rem]">{info}</p>
        <p className="text-2xl text-white font-medium">{text}</p>
      </div>
    </>
  );
}

export default function SocialProof() {
  return (
    <>
      <section id="SocialProof" className="bg-main-linear">
        <div className="cssContainer flex max-md:flex-col max-md:gap-8 justify-center items-center py-10 md:py-15">
          {countTabs("50K+", "Happy Clients")}
          <div className="w-70 md:w-px text-white bg-white h-25 max-md:h-px"></div>
          {countTabs("200+", "Premium Tools")}
          <div className="w-70 md:w-px text-white bg-white h-25 max-md:h-px"></div>
          {countTabs("4.9", "Rating")}
        </div>
      </section>
    </>
  );
}
