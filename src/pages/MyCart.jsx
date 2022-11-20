import React from "react";
import CartItem from "../components/CartItem";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import PriceCard from "../components/PriceCard";
import Button from "../components/ui/Button";
import useCarts from "../hooks/useCarts";

const SHIPPING = 3000;
export default function Mycart() {
	const {
		cartQuery: { isLoading, data: products },
	} = useCarts();

	{
		isLoading && <p>Loading...</p>;
	}
	const hasProducts = products && products.length > 0;
	const totalPrice =
		products &&
		products.reduce(
			(prev, current) =>
				prev + parseInt(current.price) * current.quantity,
			0
		);

	return (
		<section className="py-4 flex flex-col mb-20">
			<p className="text-2xl text-center font-bold pb-4 border-b border-gray-300 max-md:text-base max-md:pb-3 max-md:-mt-1">
				내 장바구니
			</p>
			{!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
			{hasProducts && (
				<>
					<ul className="border-b border-gray-300 mb-8 p-4 px-8 max-md:px-0">
						{products &&
							products.map((product) => (
								<CartItem key={product.id} product={product} />
							))}
					</ul>
					<div className="flex items-center justify-between px-2 mb-4 md:px-8 lg:px-16">
						<PriceCard text="상품 총액" price={totalPrice} />
						<BsFillPlusCircleFill className="shrink-0" />
						<PriceCard text="배송액" price={SHIPPING} />
						<FaEquals className="shrink-0" />
						<PriceCard
							text="총 가격"
							price={totalPrice + SHIPPING}
						/>
					</div>
					<Button text="주문하기" />
				</>
			)}
		</section>
	);
}
