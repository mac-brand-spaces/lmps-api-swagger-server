import env from "./env"
import express from "express"
import swaggerUi, { SwaggerOptions, SwaggerUiOptions } from "swagger-ui-express"
import { openapi } from "@mac-brand-spaces/lmps-api-swagger"

const app = express()

const swaggerOptions: SwaggerOptions = {
  defaultModelsExpandDepth: 3,
}
const swaggerUiOptions: SwaggerUiOptions = {
  isExplorer: false,
}

app.use(
  getSwaggerEndpoint(),
  swaggerUi.serve,
  swaggerUi.setup(openapi, swaggerOptions, swaggerUiOptions)
)

app.listen(env.SWAGGER_PORT, () => {
  console.log(
    `Swagger UI is running on http://localhost:${
      env.SWAGGER_PORT
    }${getSwaggerEndpoint()}`
  )
})

function getSwaggerEndpoint(): string {
  // get endpoint
  var endpoint = env.SWAGGER_ENDPOINT
  if (!endpoint.endsWith("/")) {
    endpoint += "/"
  }

  if (env.SWAGGER_ENDPOINT_TRY_ADD_VERSION) {
    var version =
      openapi && openapi.info && openapi.info.version
        ? openapi.info.version
        : undefined
    if (version) {
      if (!version.startsWith("v")) {
        version = "v" + version
      }
      endpoint += version + "/"
    }
  }
  return endpoint
}

// Path: src\index.ts
