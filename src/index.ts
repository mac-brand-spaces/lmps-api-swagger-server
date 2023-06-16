import env from "./env"
import express from "express"
import swaggerUi, { SwaggerOptions, SwaggerUiOptions } from "swagger-ui-express"
import openapi from "./openapi"

const app = express()

const swaggerOptions: SwaggerOptions = {
  defaultModelsExpandDepth: 3,
  // oauth2RedirectUrl: "https://localhost/api-docs/oauth2-redirect",
}

const swaggerUiOptions: SwaggerUiOptions = {
  isExplorer: false,
  customJs: "/swagger-ui-custom.js",
}

let swagger_endpoint = env.SWAGGER_ENDPOINT
if (!swagger_endpoint.endsWith("/")) {
  swagger_endpoint += "/"
}

app.get(swagger_endpoint, (req, res) => {
  res.send(`
<html>
  <head>
    <title>Swagger UI</title>
  </head>
  <body>
    <h1>Swagger UI</h1>
    <p>Available versions:</p>
    <ul>
      ${env.SWAGGER_VERSIONS.map(
        (version) =>
          `<li><a href="${swagger_endpoint}${version}">${version}</a></li>`
      )}
    </ul>
  </body>
</html>
`)
})

env.SWAGGER_VERSIONS.forEach((v) => {
  app.use(
    `${swagger_endpoint}${v}`,
    swaggerUi.serve,
    swaggerUi.setup(openapi[v], swaggerOptions, swaggerUiOptions)
  )
})

app.listen(env.SWAGGER_PORT, () => {
  console.log(
    `Swagger UI listening on http://localhost:${env.SWAGGER_PORT}${env.SWAGGER_ENDPOINT}` +
      "\n" +
      `Swagger UI versions: ${env.SWAGGER_VERSIONS.join(", ")}`
  )
})

// Path: src\index.ts
