const Mission = () => {
  const MISSION_ARRAY = [
    {
      image:
        "https://global.sacap.edu.za/wp-content/uploads/2022/07/tips-effective-management-global-sacap.jpg",
      title: " Building a Better Future with Eco-Friendly Homes.",
      description:
        "The agency's mission is to provide clients with a selection of properties that meet high environmental standards, while also providing a comfortable and luxurious lifestyle.",
      buttonTitle: " Learn More",
      subHeading: "- Our Mission",
    },
    {
      image:
        "https://www.build-review.com/wp-content/uploads/2021/01/solar-panels.jpg",
      title: "Discover Sustainable Luxury Living with EcoHaven Realty.",
      description:
        "EcoHaven Realty is a real estate agency specialising in eco-friendly homes and sustainable living. We offer a range of eco-friendly properties, including energy-efficient homes, homes built with eco-friendly materials, and homes equipped with sustainable technologies such as solar panels.",
      buttonTitle: "Our Company",
      subHeading: "- Who We Are",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10 py-8 md:py-12 lg:py-16">
      {MISSION_ARRAY.map((_, i) => (
        <div key={i} className="w-full flex items-center justify-center">
          <div className="flex flex-col gap-12 lg:flex-row items-center justify-center border-b-[1px] border-gray-500 mb-12 h-96 lg:mb-0 pt-28 lg:pt-0">
            <div className={`${i === 0 ? "order-1" : "order-2"}`}>
              <img
                src={_.image}
                width={500}
                height={500}
                className="rounded-md ..."
                alt={"about image"}
              />
            </div>
            <div
              className={`lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl ${
                i === 0 ? "order-2" : "order-1"
              }`}
            >
              <div className="uppercase font-semibold text-sm text-green-900">
                {_.title}
              </div>
              <div className="font-semibold text-3xl mt-8 text-White uppercase">
                Building a Better Future with Eco-Friendly Homes.
              </div>
              <p className="text-WhiteGray text-sm mt-8 leading-7">
                {_.description}
              </p>
              <br />
              <button className="bg-green-900 hover:bg-green-700 text-white font-bold  py-2 px-4 rounded-full">
                {_.buttonTitle}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Mission;
