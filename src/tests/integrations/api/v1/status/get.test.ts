test("GET to /api/v1/status should return status 200", async () => {
	const response = await fetch("http://localhost:3000/api/v1/status", {
		method: "GET",
	});
	expect(response.status).toBe(200);
});