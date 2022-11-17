import React from "react";

export default function Button({ text, onClick }) {
	return (
		<button
			className="bg-brand py-2 px-4 pt-1 text-white rounded-sm hover:brightness-110 max-md:text-sm max-md:px-2 max-md:py-1"
			onClick={onClick}
		>
			{text}
		</button>
	);
}
