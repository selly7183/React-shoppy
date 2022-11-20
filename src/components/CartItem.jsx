import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import useCarts from "../hooks/useCarts";

const ICON_CLASS =
	"transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1 max-md:text-lg";

export default function CartItem({
	product,
	product: { id, image, title, option, quantity, price },
}) {
	const { addOrUpdateItem, removeItem } = useCarts();
	const handleMinus = () => {
		if (quantity < 2) return;
		addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
	};
	const handlePlus = () => {
		addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });
	};
	const handleDelete = () => removeItem.mutate(id);

	return (
		<li className="flex justify-between my-2 items-center">
			<div className="flex items-center">
				<img
					className="w-48 rounded-lg mr-4 max-md:w-30"
					src={image}
					alt={title}
				/>
				<div className="basis-3/5">
					<p className="text-lg font-bold break-keep max-md:text-sm">
						{title}
					</p>
					<p className="text-xl font-medium text-brand mb-3 mt-1 max-md:text-sm max-md:mb-2 max-md:mt-0">
						{option}
					</p>
					<p className="font-medium text-lg max-md:text-sm">
						￦{price}
					</p>
				</div>
			</div>

			<div className="flex items-center text-2xl">
				<AiOutlineMinusSquare
					className={ICON_CLASS}
					onClick={handleMinus}
				/>
				<span className="max-md:text-lg">{quantity}</span>
				<AiOutlinePlusSquare
					className={ICON_CLASS}
					onClick={handlePlus}
				/>
				<RiDeleteBin5Fill
					className={ICON_CLASS}
					onClick={handleDelete}
				/>
			</div>
		</li>
	);
}
