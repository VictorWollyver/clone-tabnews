test("GET to /api/v1/status should return status 200", async () => {
	const response = await fetch("http://localhost:3000/api/v1/status", {
		method: "GET",
	});
	expect(response.status).toBe(200);

	const responseBody = await response.json();

	expect(responseBody.updated_at).toBeDefined();

	const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
	expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

	expect(responseBody.dependencies.database.postgres_version).toEqual("16.0");

	expect(responseBody.dependencies.database.max_connections).toEqual(100);
	expect(responseBody.dependencies.database.used_connections).toEqual(1);
});
