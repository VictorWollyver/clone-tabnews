import query from "@/infra/database";

export async function GET(request: Request): Promise<Response> {
	const updatedAt = new Date().toISOString();
	const databaseName = process.env.POSTGRES_DB;
	if (!databaseName) {
		throw new Error("POSTGRES_DB environment variable is not defined");
	}
	try {
		const postgresVersion = await query("SHOW server_version;");
		const maxConnections = await query("SHOW max_connections;");
		const usedConnectionsQuery =
			"SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;";
		const usedConnections = await query({
			text: usedConnectionsQuery,
			values: [databaseName],
		});

		if (!maxConnections || !postgresVersion || !usedConnections) {
			throw new Error("Error fetching max connections");
		}

		const maxConnectionsValue = maxConnections.rows[0].max_connections;
		const postgresVersionFormatted = postgresVersion.rows[0].server_version;
		const usedConnectionsCount = usedConnections.rows[0].count;

		return Response.json(
			{
				updated_at: updatedAt,
				dependencies: {
					database: {
						postgres_version: postgresVersionFormatted,
						max_connections: Number(maxConnectionsValue),
						used_connections: usedConnectionsCount,
					},
				},
			},
			{ status: 200 },
		);
	} catch (error: unknown) {
		console.error("Error fetching database information", error);
		if (error instanceof Error) {
			return Response.json(
				{
					error: error.message,
				},
				{ status: 500 },
			);
		}
		return Response.json(
			{
				error: "An unexpected error occurred",
			},
			{ status: 500 },
		);
	}
}
