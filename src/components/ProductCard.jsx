import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
	product,
	product: { id, image, title, category, price },
}) {
	const navigate = useNavigate();
	return (
		<li
			onClick={() => navigate(`/products/${id}`, { state: { product } })}
			className="mb-2 overflow-hidden cursor-pointer transition-all hover:shadow-md hover:rounded-lg  max-md:mb-0"
		>
			<img src={image} alt={title} className="w-full" />
			<div className="mt-2 px-2 text-lg flex justify-between items-center">
				<h3 className="truncate font-semibold max-md:text-sm">
					{title}
				</h3>
				<p className="font-serif max-md:text-sm">{`￦${price}`}</p>
			</div>
			<p className="mb-2 px-2 text-gray-600 max-md:text-sm">{category}</p>
		</li>
	);
}
