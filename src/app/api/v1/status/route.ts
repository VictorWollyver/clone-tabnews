import query from "@/infra/database";

export async function GET(request: Request): Promise<Response> {
	const result = await query("SELECT 1 + 1;");
	console.log(result);
	return Response.json({ data: "data" }, { status: 200 });
}
