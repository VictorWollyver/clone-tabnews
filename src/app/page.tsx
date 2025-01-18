import React from "react";

const Index = async ({
	searchParams,
}: { searchParams: Promise<{ name: string }> }) => {
	const { name } = await searchParams;
	return (
		<div className="grid place-items-center h-screen">
			<h1 className="text-5xl font-bold animate-bounce cursor-pointer">
				{name}
			</h1>
		</div>
	);
};

export default Index;
