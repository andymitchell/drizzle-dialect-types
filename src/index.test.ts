import { isTypeExtended, typeHasKeys } from "@andyrmitchell/utils";
import type { DdtDialect, DdtDialectDatabaseMap, PgDdtDatabases, SqliteDdtDatabases } from "./types";
import type { Dialect } from "drizzle-orm";
import {test} from 'vitest';

import { PGlite } from "@electric-sql/pglite";
import { drizzle as drizzlePg } from "drizzle-orm/pglite";
import { drizzle as drizzleBetterSqlite} from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { isDdtDialectPg, isDdtDialectSqlite } from "./type-guards";

test('Types satisfied', () => {
    isTypeExtended<DdtDialect, Dialect>(true); // Verify DdtDialects is a subset of drizzle-orms's Dialects
    typeHasKeys<DdtDialectDatabaseMap, DdtDialect>(true); // Verify coverage of the map includes all DdtDialects    


    expect(true).toBe(true);
})


function pgTester(db:PgDdtDatabases) {}
function sqliteTester(db:SqliteDdtDatabases) {}

test('PgLite can be passed as a PG param', async () => {
    const client = new PGlite();
    const db = drizzlePg(client);

    pgTester(db); // OK
    //sqliteTester(db); // Expect fails
})

test('Sqlite can be passed as a Sqlite param', async () => {
    const client = new Database(":memory:", {timeout: 5000});
    const db = drizzleBetterSqlite({client});

    //pgTester(db); // Expect fails
    sqliteTester(db); // OK
})

test('PgLite passes PG type guard', async () => {
    const client = new PGlite();
    const db = drizzlePg(client);

    expect(isDdtDialectPg(db)).toBe(true);
    expect(isDdtDialectSqlite(db)).toBe(false);
})

test('BetterSQLite passes SQLite type guard', async () => {
    
    const client = new Database(":memory:", {timeout: 5000});
    const db = drizzleBetterSqlite({client});


    expect(isDdtDialectPg(db)).toBe(false);
    expect(isDdtDialectSqlite(db)).toBe(true);
})