import { Env, EnvVar } from "environmentality"
import dotenv from "dotenv"

dotenv.config()

@Env()
class Environment {
  @EnvVar({ required: true, type: "number" })
  readonly SWAGGER_PORT!: number

  @EnvVar({ required: true, type: "string" })
  readonly SWAGGER_ENDPOINT!: string

  @EnvVar({ required: true, type: "boolean" })
  readonly SWAGGER_ENDPOINT_TRY_ADD_VERSION!: boolean
}

const env = new Environment()
export default env
