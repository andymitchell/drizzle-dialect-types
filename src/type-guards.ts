
import {PgDatabase } from 'drizzle-orm/pg-core';
import {BaseSQLiteDatabase } from 'drizzle-orm/sqlite-core';

import type { DdtDatabases, PgDdtDatabases, SqliteDdtDatabases } from "./types";

/**
 * Checks if the database instance belongs to the PostgreSQL dialect
 * @param db 
 * @returns 
 */
export function isDdtDialectPg(db:DdtDatabases):db is PgDdtDatabases {
    return db instanceof PgDatabase; //PG_DDT_DATABASES.some(x => db instanceof x);
}

/**
 * Checks if the database instance belongs to the SQLite dialect
 * @param db 
 * @returns 
 */
export function isDdtDialectSqlite( db:DdtDatabases):db is SqliteDdtDatabases {
    return db instanceof BaseSQLiteDatabase; //SQLITE_DDT_DATABASES.some(x => db instanceof x);
}