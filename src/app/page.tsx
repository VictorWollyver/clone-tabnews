import NameAnimation from "@/components/NameAnimation";

const Index = async ({
	searchParams,
}: { searchParams: Promise<{ name: string }> }) => {
	const { name } = await searchParams;

	return (
		<div className="grid place-items-center h-screen">
			<NameAnimation name={name} />
		</div>
	);
};

export default Index;
