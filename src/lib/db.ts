import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "process";

const connectionString = env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const queryClient = postgres(connectionString);
export const db = drizzle(queryClient);