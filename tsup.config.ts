import { defineConfig } from "tsup";
 
export default defineConfig({
  entry: ["src/index.ts"],
  publicDir: false,
  clean: true,
  minify: false,
  target: ['esnext'],
  external: ["drizzle-orm"],
  format: ['esm'], 
  dts: true
});



