import React from "react";

export default function Banner() {
	return (
		<section className="h-96 bg-yellow-900 relative mt-5 mb-2 max-md:mt-3 max-md:mb-0">
			<div className="w-full h-full bg-cover bg-banner opacity-80 bg-no-repeat bg-center max-md:bg-center"></div>
			<div className="absolute w-full top-40 text-center text-gray-50 drop-shadow-2xl">
				<h2 className="text-6xl mb-2 font-semibold max-md:text-4xl max-md:mb-1">
					Shop With US
				</h2>
				<p className="text-2xl italic font-light max-md:text-sm max-md:font-normal">
					Best Products, High Quality
				</p>
			</div>
		</section>
	);
}
