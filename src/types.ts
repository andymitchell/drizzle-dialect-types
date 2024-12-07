import type {PgDatabase } from 'drizzle-orm/pg-core';
import type {BaseSQLiteDatabase } from 'drizzle-orm/sqlite-core';

export const DT_DIALECTS = ['pg', 'sqlite'] as const;
export type DdtDialect = typeof DT_DIALECTS[number];

export type DdtDialectDatabaseMap = {
    'pg': PgDdtDatabases,
    'sqlite': SqliteDdtDatabases
}

export type SqliteDdtDatabases = BaseSQLiteDatabase<any, any, any, any>; //LibSQLDatabase | BetterSQLite3Database;

export type PgDdtDatabases = PgDatabase<any>; //PgliteDatabase | PgDatabase<any> | PostgresJsDatabase;

export type DdtDatabases = SqliteDdtDatabases | PgDdtDatabases;



export type DdtPgDriver = 'pg' | 'pglite' | 'postgres';
export type DdtSqliteDriver = 'libsql' | 'better-sqlite3';
export type DdtSqliteTransactionMode = 'deferred' | 'immediate' | 'exclusive';

/**
 * Map
 * 
 * Because annoyingly, Drizzle's dialects are different between drizzle-orm and drizzle-kit. 
 */
export const DDT_DIALECT_TO_DRIZZLEKIT_DIALECT:Record<DdtDialect, "sqlite" | "postgresql" | "mysql" | "turso"> = {
    'pg': 'postgresql',
    'sqlite': 'sqlite'
}