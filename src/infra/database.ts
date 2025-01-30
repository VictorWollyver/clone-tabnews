import { Client } from "pg";

async function query(query: string | { text: string; values: string[] }) {
	const client = new Client({
		host: process.env.POSTGRES_HOST,
		user: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DB,
		port: Number(process.env.POSTGRES_PORT),
	});

	try {
		await client.connect();
		const result = await client.query(query);
		return result;
	} catch (error) {
		console.error("Error executing query", error);
    throw error;
	} finally {
		await client.end();
	}
}

export default query;
