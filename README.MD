# Drizzle Dialect Types (Ddt)

Simplify writing code that works with any database driver, while also allowing you to handle driver-specific logic by detecting the database dialect when needed.

## Features

- **Database-Agnostic Function Parameters**: Write functions that accept any supported database type.
- **Conditional Logic**: Handle dialect-specific logic inside your functions using helper utilities.

## Installation

```bash
npm install @andyrmitchell/drizzle-dialect-types
```

## Usage

This package provides tools for handling Drizzle ORM database drivers in a database-agnostic way. It includes type mappings and utility functions for working with PostgreSQL and SQLite dialects.

### Writing Database-Agnostic Functions

Use the `DdtDatabases` type to write functions that accept any supported database driver, and handle conditional logic based on the database dialect:

```typescript
import { DdtDatabases, isDdtDialectPg, isDdtDialectSqlite } from "drizzle-dialect-tools";

function processDatabase(db: DdtDatabases) {
    if (isDdtDialectPg(db)) {
        // Logic specific to PostgreSQL
        console.log("This is a PostgreSQL database. Execute PostgreSQL-specific logic here.");
    } else if (isDdtDialectSqlite(db)) {
        // Logic specific to SQLite
        console.log("This is a SQLite database. Execute SQLite-specific logic here.");
    } else {
        console.error("Unsupported database type.");
    }
}
```

### Key Types

- `DdtDatabases`: Union type for all supported database drivers.
- `PgDdtDatabases`: Union type for PostgreSQL drivers.
- `SqliteDdtDatabases`: Union type for SQLite drivers.

### API

- `isDdtDialectPg(db: DdtDatabases): db is PgDdtDatabases`: Checks if a database instance belongs to the PostgreSQL dialect.
- `isDdtDialectSqlite(db: DdtDatabases): db is SqliteDdtDatabases`: Checks if a database instance belongs to the SQLite dialect.