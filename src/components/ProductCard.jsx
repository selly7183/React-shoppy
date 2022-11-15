import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, name, price }) {
	const navigate = useNavigate();
	return (
		<div
			onClick={() => {
				navigate(`/products/${product.name}`, {
					state: { product },
				});
			}}
		>
			<li>{name}</li>
			<li>{price}</li>
		</div>
	);
}
