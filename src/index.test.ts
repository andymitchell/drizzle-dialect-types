import { isTypeExtended, typeHasKeys } from "@andyrmitchell/utils";
import type { DdtDialect, DdtDialectDatabaseMap } from ".";
import type { Dialect } from "drizzle-orm";


isTypeExtended<DdtDialect, Dialect>(true); // Verify DdtDialects is a subset of drizzle-orms's Dialects
typeHasKeys<DdtDialectDatabaseMap, DdtDialect>(true); // Verify coverage of the map includes all DdtDialects