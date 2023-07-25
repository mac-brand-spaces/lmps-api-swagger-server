import openapi from "./openapi"
import { Env, EnvVar } from "environmentality"
import dotenv from "dotenv"

@Env()
class Environment {
  @EnvVar({ required: true, type: "number" })
  readonly SWAGGER_PORT!: number

  @EnvVar({ required: true, type: "string" })
  readonly SWAGGER_ENDPOINT!: string

  @EnvVar({
    type: "string",
    array: true,
    default: Object.keys(openapi),
    enumValues: Object.keys(openapi),
  })
  readonly SWAGGER_VERSIONS!: string[]
}

dotenv.config()

const env = new Environment()
export default env
