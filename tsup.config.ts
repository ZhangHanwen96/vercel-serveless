import { defineConfig } from "tsup";

export default defineConfig({
  // 后续会增加 entry
  entry: {
    app: "src/example.ts",
  },
  // 产物格式，包含 esm 和 cjs 格式
  format: ["cjs"],
  // 目标语法
  target: "es2020",
  // 生成 sourcemap
  sourcemap: false,
  // 没有拆包的需求，关闭拆包能力
  splitting: false,
});
