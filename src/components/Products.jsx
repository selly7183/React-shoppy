import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/firebase";
import ProductCard from "./ProductCard";

export default function Products() {
	const {
		isLoading,
		error,
		data: products,
	} = useQuery(["products"], () => getProduct());
	return (
		<>
			{isLoading && <p>Loading...</p>}
			{error && <p>{error}</p>}
			<ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</ul>
		</>
	);
}
