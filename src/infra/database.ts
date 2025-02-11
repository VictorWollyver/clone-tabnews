import { Client } from "pg";

async function query(query: string | { text: string; values: string[] }) {
	let client: Client | null = null;
	try {
		client = await getNewClient();
		const result = await client.query(query);
		return result;
	} catch (error) {
		console.error("Error executing query", error);
		throw error;
	} finally {
		if (client) {
			await client.end();
		}
	}
}

export async function getNewClient() {
	const client = new Client({
		host: process.env.POSTGRES_HOST,
		user: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DB,
		port: Number(process.env.POSTGRES_PORT),
		ssl: process.env.NODE_ENV === "production",
	});

	await client.connect();
	return client;
}

export default query;
