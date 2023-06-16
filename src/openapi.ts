import { JsonObject } from "swagger-ui-express"
import { openapi as v0_0_2 } from "lmps-api-swagger-v0.0.2"
import { openapi as v1_0_0 } from "lmps-api-swagger-v1.0.0"

export default {
  "v0.0.2": v0_0_2,
  "v1.0.0": v1_0_0,
} as { [version: string]: JsonObject }