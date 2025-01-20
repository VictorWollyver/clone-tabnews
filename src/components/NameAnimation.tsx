"use client";
import React from "react";
import { useEffect, useState } from "react";

const colors = [
	"text-red-500",
	"text-blue-500",
	"text-green-500",
	"text-yellow-500",
	"text-purple-500",
	"text-pink-500",
	"text-indigo-500",
	"text-gray-500",
	"text-white",
	"text-rose-950",
];

const NameAnimation = ({ name }: { name: string }) => {
	const [color, setColor] = useState(colors[0]);

	useEffect(() => {
		const interval = setInterval(() => {
			setColor(colors[Math.floor(Math.random() * colors.length)]);
		}, 950);

		return () => clearInterval(interval);
	}, []);

	return (
		<h1 className={`text-5xl font-bold animate-bounce cursor-pointer ${color}`}>
			{name}
		</h1>
	);
};

export default NameAnimation;