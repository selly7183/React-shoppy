import React, { useState } from "react";
import { uploadImage } from "../api/uploader";
import Button from "../components/ui/Button";
import useProducts from "../hooks/useProducts";

const INPUT = "max-md:p-1 max-md:text-xs max-md:pl-2";
export default function NewProduct() {
	const [product, setProduct] = useState({});
	const [file, setFile] = useState();
	const [isUploading, setIsUploading] = useState(false);
	const [success, setSuccess] = useState();
	const { addProduct } = useProducts();

	const handleChange = (e) => {
		const { name, value, files } = e.target;
		if (name === "file") {
			setFile(files && files[0]);
			return;
		}
		setProduct((product) => ({ ...product, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsUploading(true);
		uploadImage(file) //
			.then((url) => {
				addProduct.mutate(
					{ product, url },
					{
						onSuccess: () => {
							setSuccess("성공적으로 제품이 추가되었습니다.");
							setTimeout(() => {
								setSuccess(null);
							}, 4000);
						},
					}
				);
			})
			.finally(() => setIsUploading(false));
	};
	return (
		<section className="w-full text-center mb-20">
			<h2 className="text-2xl font-bold my-4 max-md:text-base max-md:my-3">
				새로운 제품 등록
			</h2>
			{success && <p className="my-2">✅ {success}</p>}
			{file && (
				<img
					className="w-96 mx-auto mb-2 max-md:w-42"
					src={URL.createObjectURL(file)}
					alt="local file"
				/>
			)}
			<form
				className="flex flex-col px-12 max-md:px-0"
				onSubmit={handleSubmit}
			>
				<input
					type="file"
					accept="image/*"
					name="file"
					required
					onChange={handleChange}
					className={INPUT}
				/>
				<input
					type="text"
					name="title"
					value={product.title ?? ""}
					placeholder="제품명"
					required
					onChange={handleChange}
					className={INPUT}
				/>
				<input
					type="text"
					name="price"
					value={product.price ?? ""}
					placeholder="가격"
					required
					onChange={handleChange}
					className={INPUT}
				/>
				<input
					type="text"
					name="category"
					value={product.category ?? ""}
					placeholder="카테고리"
					required
					onChange={handleChange}
					className={INPUT}
				/>
				<input
					type="text"
					name="description"
					value={product.description ?? ""}
					placeholder="제품 설명"
					required
					onChange={handleChange}
					className={INPUT}
				/>
				<input
					type="text"
					name="options"
					value={product.options ?? ""}
					placeholder="옵션들(콤마(,)로 구분)"
					required
					onChange={handleChange}
					className={INPUT}
				/>
				<Button
					text={isUploading ? "업로드중..." : "제품 등록하기"}
					disabled={isUploading}
				/>
			</form>
		</section>
	);
}
