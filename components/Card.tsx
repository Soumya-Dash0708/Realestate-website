import React from 'react'

const Card = () => {
  return (
   
    <div className="flex flex-col space-y-7 pt-12 items-center text-center h-98 bg-[#E4E5DF]">
          <div className="font-semibold text-3xl mt-8  text-White">
          Benefits of owning an eco-friendly home.
          </div>
          <p className="text-WhiteGray text-sm mt-8 leading-7 max-w-3xl">
            I specialize in developing custom web applications that cater to
            diverse business needs, from e-commerce platforms to data
            visualization dashboards, using the latest technologies and agile
            methodologies to deliver exceptional user experiences and measurable
            business outcomes.
          </p>
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  </div>
          </div>
        
  )
}

export default Card