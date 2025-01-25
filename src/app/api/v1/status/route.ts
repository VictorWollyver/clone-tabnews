export async function GET(request: Request): Promise<Response> {
	return Response.json({ data: "data" }, { status: 200 });
}
