import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function CartStatus() {
	const { uid } = useAuthContext();
	const { data: products } = useQuery(["carts"], () => getCart(uid));

	return (
		<div className="relative">
			<AiOutlineShoppingCart className="text-3xl max-md:text-2xl" />
			{products && (
				<p className="w-6 h-6 text-center flex justify-center items-center bg-brand text-white font-bold rounded-full absolute -top-2 -right-2 max-md:w-4 max-md:h-4 max-md:-top-1 max-md:text-xs">
					{products.length}
				</p>
			)}
		</div>
	);
}
