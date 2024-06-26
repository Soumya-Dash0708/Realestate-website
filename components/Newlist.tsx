import React from "react";
import { BiBed } from "react-icons/bi";
import { AiTwotoneStar } from "react-icons/ai";

const Newlist = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      {PROPERTY_ARRAY.map((item, index) => (
        <div key={index} className="relative mx-auto w-full">
          <a
            href="#"
            className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
          >
            <div className="shadow p-4 rounded-lg bg-white">
              <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                  <div className="absolute inset-0 bg-black opacity-10"></div>
                  <div className="h-full">
                    <img src={item.image} alt="" className="" />
                  </div>
                </div>

                <div className="absolute flex justify-center bottom-0 mb-3">
                  <div className="flex bg-white px-4 py-1 gap-x-5 rounded-lg overflow-hidden shadow ">
                    <p className="flex text-lg items-center font-medium text-gray-800">
                      <BiBed className="text-xl" />3 + 1
                    </p>

                    <p className="flex items-center font-medium text-gray-800">
                      <svg
                        className="w-5 h-5 fill-current mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 480 512"
                      >
                        <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
                      </svg>
                      2
                    </p>

                    <p className="flex items-center font-medium text-gray-800">
                      <svg
                        className="w-5 h-5 fill-current mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M504,256H64V61.25a29.26,29.26,0,0,1,49.94-20.69L139.18,65.8A71.49,71.49,0,0,0,128,104c0,20.3,8.8,38.21,22.34,51.26L138.58,167a8,8,0,0,0,0,11.31l11.31,11.32a8,8,0,0,0,11.32,0L285.66,65.21a8,8,0,0,0,0-11.32L274.34,42.58a8,8,0,0,0-11.31,0L251.26,54.34C238.21,40.8,220.3,32,200,32a71.44,71.44,0,0,0-38.2,11.18L136.56,18A61.24,61.24,0,0,0,32,61.25V256H8a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H32v96c0,41.74,26.8,76.9,64,90.12V504a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V480H384v24a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V474.12c37.2-13.22,64-48.38,64-90.12V288h24a8,8,0,0,0,8-8V264A8,8,0,0,0,504,256ZM228.71,76.9,172.9,132.71A38.67,38.67,0,0,1,160,104a40,40,0,0,1,40-40A38.67,38.67,0,0,1,228.71,76.9ZM448,384a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V288H448Z"></path>
                      </svg>
                      3
                    </p>
                    <p className="flex items-center font-medium text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </p>
                  </div>
                </div>

                <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-full z-10 bg-green-900 text-sm font-medium text-white select-none">
                  {item.badge}
                </span>
              </div>

              <div className="mt-4">
                <h2
                  className="font-medium text-base md:text-lg text-green-900 line-clamp-1"
                  title="New York"
                >
                  {item.propertyName}
                </h2>
                <p
                  className="mt-2 text-sm text-green-900 line-clamp-1"
                  title="New York, NY 10004, United States"
                >
                  {item.city} {item.address} {item.country}
                </p>
              </div>

              <div className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                {[...Array(5)].map((_, i) => (
                  <div key={i}>
                    <AiTwotoneStar
                      className={`${
                        i >= Number(item.rating)
                          ? "text-gray-400"
                          : " text-yellow-400"
                      } text-lg`}
                    />
                  </div>
                ))}
                <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                  <svg
                    className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.5883 7.872H16.4286L16.7097 8.99658H6.74743V10.1211H17.4309C17.5163 10.1211 17.6006 10.1017 17.6774 10.0642C17.7542 10.0267 17.8214 9.97222 17.874 9.90487C17.9266 9.83753 17.9631 9.75908 17.9808 9.6755C17.9986 9.59192 17.997 9.5054 17.9763 9.42251L17.5883 7.872ZM17.5883 4.49829H16.4286L16.7097 5.62286H6.74743V6.74743H17.4309C17.5163 6.74742 17.6006 6.72794 17.6774 6.69046C17.7542 6.65299 17.8214 6.59851 17.874 6.53116C17.9266 6.46381 17.9631 6.38537 17.9808 6.30179C17.9986 6.2182 17.997 6.13168 17.9763 6.04879L17.5883 4.49829ZM17.4309 0H0.562286C0.413158 0 0.270139 0.0592407 0.16469 0.16469C0.0592407 0.270139 0 0.413158 0 0.562286L0 2.81143C0 2.96056 0.0592407 3.10358 0.16469 3.20903C0.270139 3.31448 0.413158 3.37372 0.562286 3.37372H4.49829V5.62286H1.28271L1.56386 4.49829H0.404143L0.0175714 6.04879C-0.00313354 6.13162 -0.00470302 6.21808 0.012982 6.30161C0.0306671 6.38514 0.0671423 6.46355 0.119641 6.53088C0.172139 6.59822 0.239283 6.65271 0.315978 6.69023C0.392673 6.72775 0.476905 6.74731 0.562286 6.74743H4.49829V8.99658H1.28271L1.56386 7.872H0.404143L0.0175714 9.42251C-0.00313354 9.50534 -0.00470302 9.5918 0.012982 9.67533C0.0306671 9.75886 0.0671423 9.83727 0.119641 9.9046C0.172139 9.97193 0.239283 10.0264 0.315978 10.0639C0.392673 10.1015 0.476905 10.121 0.562286 10.1211H4.49829V14.7228C4.12312 14.8554 3.80693 15.1164 3.60559 15.4596C3.40424 15.8028 3.33072 16.2062 3.39801 16.5984C3.4653 16.9906 3.66907 17.3464 3.9733 17.6028C4.27754 17.8593 4.66265 18 5.06057 18C5.4585 18 5.84361 17.8593 6.14784 17.6028C6.45208 17.3464 6.65585 16.9906 6.72314 16.5984C6.79043 16.2062 6.7169 15.8028 6.51556 15.4596C6.31422 15.1164 5.99803 14.8554 5.62286 14.7228V3.37372H17.4309C17.58 3.37372 17.723 3.31448 17.8285 3.20903C17.9339 3.10358 17.9932 2.96056 17.9932 2.81143V0.562286C17.9932 0.413158 17.9339 0.270139 17.8285 0.16469C17.723 0.0592407 17.58 0 17.4309 0V0ZM5.06057 16.8686C4.94936 16.8686 4.84065 16.8356 4.74818 16.7738C4.65572 16.712 4.58365 16.6242 4.54109 16.5215C4.49853 16.4187 4.4874 16.3057 4.50909 16.1966C4.53079 16.0875 4.58434 15.9873 4.66298 15.9087C4.74162 15.8301 4.8418 15.7765 4.95088 15.7548C5.05995 15.7331 5.17301 15.7443 5.27575 15.7868C5.3785 15.8294 5.46631 15.9014 5.5281 15.9939C5.58988 16.0864 5.62286 16.1951 5.62286 16.3063C5.62286 16.4554 5.56362 16.5984 5.45817 16.7039C5.35272 16.8093 5.2097 16.8686 5.06057 16.8686ZM16.8686 2.24914H1.12457V1.12457H16.8686V2.24914Z"></path>
                  </svg>
                  <span className="mt-2 xl:mt-0">{item.furnishingStatus}</span>
                </p>
                <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                  <svg
                    className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z"></path>
                  </svg>
                  <span className="mt-2 xl:mt-0">{item.area}</span>
                </p>
              </div>

              <div className="grid grid-cols-2 mt-8">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="ml-2 text-gray-800 line-clamp-1">
                    {item.dop} ago
                  </p>
                </div>

                <div className="flex justify-end">
                  <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                    <span className="text-sm uppercase">$</span>
                    <span className="text-lg">{item.propertyPrice}</span>/m
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Newlist;

const PROPERTY_ARRAY = [
  {
    propertyName: "Demo",
    propertyPrice: "9000",
    address: "demo address",
    country: "India",
    city: "Bbsr",
    dop: "3 months",
    furnishingStatus: "furnished",
    area: "1200sqft",
    rating: "4",
    priceStandard: "month",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/bristow-mews-coach-house-exterior-1676468203.jpg",
    badge: "for sale",
    bedrooms: "2",
    bathroom: "2",
    parking: "2",
  },

  {
    propertyName: "Demo",
    propertyPrice: "9000",
    address: "demo address",
    country: "India",
    city: "Bbsr",
    dop: "3 months",
    furnishingStatus: "furnished",
    area: "1200sqft",
    rating: "4",
    priceStandard: "month",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/bristow-mews-coach-house-exterior-1676468203.jpg",
    badge: "for sale",
    bedrooms: "2",
    bathroom: "2",
    parking: "2",
  },

  {
    propertyName: "Demo",
    propertyPrice: "9000",
    address: "demo address",
    country: "India",
    city: "Bbsr",
    dop: "3 months",
    furnishingStatus: "furnished",
    area: "1200sqft",
    rating: "4",
    priceStandard: "month",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/bristow-mews-coach-house-exterior-1676468203.jpg",
    badge: "for sale",
    bedrooms: "2",
    bathroom: "2",
    parking: "2",
  },

  {
    propertyName: "Demo",
    propertyPrice: "9000",
    address: "demo address",
    country: "India",
    city: "Bbsr",
    dop: "3 months",
    furnishingStatus: "furnished",
    area: "1200sqft",
    rating: "4",
    priceStandard: "month",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/bristow-mews-coach-house-exterior-1676468203.jpg",
    badge: "for sale",
    bedrooms: "2",
    bathroom: "2",
    parking: "2",
  },
];
