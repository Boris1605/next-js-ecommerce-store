import 'server-only';
import { unstable_noStore as noStore } from 'next/cache';
import postgres, { Sql } from 'postgres';
import { setEnvironmentVariables } from '../util/config';

setEnvironmentVariables();

declare module globalThis {
  let postgresSqlClient: Sql;
}

function connectOneTimeToDatabase() {
  if (!('postgresSqlClient' in globalThis)) {
    globalThis.postgresSqlClient = postgres({
      transform: {
        ...postgres.camel,
        undefined: null,
      },
    });
  }
  return ((
    ...sqlParameters: Parameters<typeof globalThis.postgresSqlClient>
  ) => {
    noStore();
    return globalThis.postgresSqlClient(...sqlParameters);
  }) as typeof globalThis.postgresSqlClient;
}

export const sql = connectOneTimeToDatabase();
