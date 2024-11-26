import { startServer } from "@gotpop-platform/package-server"

startServer()

const { env } = process
// console.log("env :", env)
const envEntries = Object.entries(env)
const npmEnvArray = envEntries.filter(([key]) => key.startsWith("npm_package_config"))
const npmEnv = Object.fromEntries(npmEnvArray)

console.log(npmEnv)
