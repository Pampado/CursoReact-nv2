import 'reflect-metadata'
import 'dotenv/config'
<<<<<<< HEAD
import cors from 'cors'
=======
>>>>>>> 14a38b9d68e6616c16f66da9ada3f5126f03cd6e

import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'

import routes from './routes'
import AppError from './errors/AppError'

import createConnection from './database'

createConnection()
const app = express()

<<<<<<< HEAD
app.use(cors())
=======
>>>>>>> 14a38b9d68e6616c16f66da9ada3f5126f03cd6e
app.use(express.json())
app.use(routes)

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    })
  }

<<<<<<< HEAD
  // console.error(err)
=======
  console.error(err)
>>>>>>> 14a38b9d68e6616c16f66da9ada3f5126f03cd6e

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
})

export default app
