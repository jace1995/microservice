import { startMicroservice } from './server'
import { startHttpMicroservice } from './server-http'
import { startSocketMicroservice } from './server-socket'

import { connectMicroservice, Microservice } from './client'
import { connectMicroserviceHttp, MicroserviceHttp } from './client/http'
import { connectMicroserviceSocket, MicroserviceSocketClient } from './client/socket'

export {
  startMicroservice,
  startHttpMicroservice,
  startSocketMicroservice,

  connectMicroservice, Microservice,
  connectMicroserviceHttp, MicroserviceHttp,
  connectMicroserviceSocket, MicroserviceSocketClient,
}
