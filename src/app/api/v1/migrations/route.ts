export async function GET(request: Request): Promise<Response> {
	return Response.json("Erro ao aplicar migrações", { status: 200 });
}
