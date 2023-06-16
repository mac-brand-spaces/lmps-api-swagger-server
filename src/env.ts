import openapi from "./openapi"
import { Env, EnvVar } from "environmentality"
import dotenv from "dotenv"

dotenv.config()

@Env()
class Environment {
  @EnvVar({ required: true, type: Number })
  readonly SWAGGER_PORT!: number

  @EnvVar({ required: true, type: String })
  readonly SWAGGER_ENDPOINT!: string

  @EnvVar({
    type: String,
    array: true,
    default: Object.keys(openapi),
    enumValues: Object.keys(openapi),
  })
  readonly SWAGGER_VERSIONS!: string[]
}

const env = new Environment()
export default env
