import { Config } from "drizzle-kit";

export default {
  schema: "./schema",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString:
      "postgresql://postgres:oNtDUc5c@FSkU&qa@db.zszswnacfyjwzdcaaoap.supabase.co:5432/postgres",
  },
} satisfies Config;
