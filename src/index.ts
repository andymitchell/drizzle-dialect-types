
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { PgliteDatabase } from "drizzle-orm/pglite";
import { LibSQLDatabase } from 'drizzle-orm/libsql';
import {BetterSQLite3Database} from 'drizzle-orm/better-sqlite3';


import {PgDatabase } from 'drizzle-orm/pg-core';
import { isTypeExtended, typeHasKeys } from "@andyrmitchell/utils";
import type { Dialect } from "drizzle-orm";


export const DT_DIALECTS = ['pg', 'sqlite'] as const;
export type DdtDialect = typeof DT_DIALECTS[number];
isTypeExtended<DdtDialect, Dialect>(true);


export type DdtDialectDatabaseMap = {
    'pg': PgDdtDatabases,
    'sqlite': SqliteDdtDatabases
}
typeHasKeys<DdtDialectDatabaseMap, DdtDialect>(true);


const sqliteDdtDatabases = [LibSQLDatabase, BetterSQLite3Database];
export type SqliteDdtDatabases = LibSQLDatabase | BetterSQLite3Database;

const pgDdtDatabases = [PgliteDatabase, PgDatabase, PostgresJsDatabase];
export type PgDdtDatabases = PgliteDatabase | PgDatabase<any> | PostgresJsDatabase;

export type DdtDatabases = SqliteDdtDatabases | PgDdtDatabases;

/**
 * Checks if the database instance belongs to the PostgreSQL dialect
 * @param db 
 * @returns 
 */
export function isDdtDialectPg(db:DdtDatabases):db is PgDdtDatabases {
    return pgDdtDatabases.some(x => db instanceof x);
}

/**
 * Checks if the database instance belongs to the SQLite dialect
 * @param db 
 * @returns 
 */
export function isDdtDialectSqlite( db:DdtDatabases):db is SqliteDdtDatabases {
    return sqliteDdtDatabases.some(x => db instanceof x);
}


export type DdtSqliteTransactionModes = 'deferred' | 'immediate' | 'exclusive';