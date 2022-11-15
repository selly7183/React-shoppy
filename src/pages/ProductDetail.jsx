import React from "react";
import { useLocation } from "react-router-dom";

export default function ProductDetail() {
	const {
		state: { product },
	} = useLocation();

	return (
		<div>
			<p>{`${product.name}`}</p>
			<p>{`${product.price}`}</p>
		</div>
	);
}
