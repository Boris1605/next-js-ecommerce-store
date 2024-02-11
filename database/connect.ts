import 'server-only';
import { unstable_noStore as noStore } from 'next/cache';
import postgres, { Sql } from 'postgres';
import { setEnvironmentVariables } from '../util/config';

setEnvironmentVariables();

// Extending globalThis to include postgresSqlClient
declare module globalThis {
  let postgresSqlClient: Sql;
}

// Function to connect one time to the database
function connectOneTimeToDatabase() {
  // Checking if the postgresSqlClient is already initialized
  if (!('postgresSqlClient' in globalThis)) {
    // Initializing postgresSqlClient if not already initialized
    globalThis.postgresSqlClient = postgres({
      transform: {
        ...postgres.camel, // Converting column names to camel case
        undefined: null, // Converting undefined values to null
      },
    });
  }
  // Returning a function that executes SQL queries with the initialized postgresSqlClient
  return ((
    ...sqlParameters: Parameters<typeof globalThis.postgresSqlClient>
  ) => {
    noStore(); // Preventing caching of the SQL queries
    return globalThis.postgresSqlClient(...sqlParameters); // Executing the SQL queries
  }) as typeof globalThis.postgresSqlClient;
}

// Exporting a constant named sql which is the initialized database connection function
export const sql = connectOneTimeToDatabase();
