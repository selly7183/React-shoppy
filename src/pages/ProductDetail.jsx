import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { addOrUpdateToCart } from "../api/firebase";
import Button from "../components/ui/Button";
import { useAuthContext } from "../context/AuthContext";

export default function ProductDetail() {
	const { uid } = useAuthContext();
	const {
		state: {
			product: {
				id,
				image,
				title,
				description,
				category,
				price,
				options,
			},
		},
	} = useLocation();

	const [selected, setSelected] = useState(options && options[0]);
	const handleSelect = (e) => setSelected(e.target.value);

	const handleClick = (e) => {
		const product = {
			id,
			image,
			title,
			price,
			option: selected,
			quantity: 1,
		};
		addOrUpdateToCart(uid, product);
	};

	return (
		<>
			<p className="font-bold mx-12 mt-4 text-gray-700 max-md:mx-8 max-md:text-sm ">
				{category}
			</p>
			<section className="flex flex-col md:flex-row p-4">
				<img
					className="w-full px-4 basis-7/12 max-lg:w-10  max-md:w-full"
					src={image}
					alt={title}
				/>
				<div className="w-full basis-5/12 flex flex-col p-4 ">
					<h2 className="text-3xl font-bold py-2 break-keep max-md:text-xl max-md:py-0">
						{title}
					</h2>
					<p className="text-2xl font-bold py-2 border-b border-gray-400  max-md:text-lg">
						￦{price}
					</p>
					<p className="py-4 text-md break-keep  max-md:text-sm max-md:pb-1">
						{description}
					</p>
					<div className="flex items-center mb-3">
						<label
							htmlFor="select"
							className="text-brand font-bold  max-md:text-sm"
						>
							옵션:
						</label>
						<select
							id="select"
							onChange={handleSelect}
							value={selected}
							className="p-2 my-4 ml-4 flex-1 max-md:text-sm border-2 border-dashed border-brand outline-none  max-md:p-1"
						>
							{options &&
								options.map((option, index) => (
									<option
										key={index}
										className=" max-md:text-sm"
									>
										{option}
									</option>
								))}
						</select>
					</div>
					<Button
						text="장바구니에 추가"
						onClick={handleClick}
					></Button>
				</div>
			</section>
		</>
	);
}
