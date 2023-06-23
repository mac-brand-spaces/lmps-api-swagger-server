import { JsonObject } from "swagger-ui-express"
import { openapi as v0 } from "lmps-api-swagger-v0"
import { openapi as v1 } from "lmps-api-swagger-v1"
import { openapi as v2 } from "lmps-api-swagger-v2"

export default {
  v0: v0,
  v1: v1,
  v2: v2,
} as { [version: string]: JsonObject }
