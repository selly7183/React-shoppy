import React from "react";

export default function PriceCard({ text, price }) {
	return (
		<div className="bg-gray-50 p-8 mx-2 rounded-2xl text-center max-md:p-1">
			<p className="text-xl max-md:text-sm">{text}</p>
			<p className="font-bold text-brand text-xl max-md:text-sm">
				￦{price}
			</p>
		</div>
	);
}
