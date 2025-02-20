import query from "@/infra/database";

async function cleanDatabase() {
	await query("DROP schema public cascade; create schema public");
}

beforeAll(cleanDatabase);

test("GET to /api/v1/migrations should return 200", async () => {
	console.log(process.env.DATABASE_URL);
	const response = await fetch("http://localhost:3000/api/v1/migrations");
	expect(response.status).toBe(200);

	// const responseBody = await response.json();

	// expect(Array.isArray(responseBody)).toBe(true);
});
