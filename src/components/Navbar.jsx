import React from "react";
import { Link } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi";
import { BsFillPencilFill } from "react-icons/bs";
import User from "../components/User";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";
import CartStatus from "./CartStatus";

export default function Navbar() {
	const { user, login, logout } = useAuthContext();
	return (
		<header className="flex justify-between border-b border-gray-300 pt-2 pb-4 max-md:pb-2 max-md:pt-0">
			<Link
				to="/"
				className="flex items-center text-4xl text-brand font-semibold"
			>
				<HiShoppingBag className="max-md:text-2xl" />
				<h1 className="max-md:text-xl">Shoppy</h1>
			</Link>

			<nav className="flex items-center gap-4 font-semibold max-md:gap-2 ">
				<Link to="/products" className="max-md:text-sm">
					Products
				</Link>
				{user && (
					<Link to="/carts">
						<CartStatus />
					</Link>
				)}
				{user && user.isAdmin && (
					<Link
						to="/products/new"
						className="text-2xl max-md:text-lg"
					>
						<BsFillPencilFill />
					</Link>
				)}
				{user && <User user={user} />}
				{!user && <Button text={"Login"} onClick={login}></Button>}
				{user && <Button text={"Logout"} onClick={logout}></Button>}
			</nav>
		</header>
	);
}
