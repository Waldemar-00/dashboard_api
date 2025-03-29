import { App } from './app'
import { LoggerService } from './services/logger/logger'
import { UserController } from './common/controllers/user'
import { Router } from 'express'
import { Exceptions } from './errors/exceptions'
async function bootstrap ()
{
    const logger = new LoggerService()
    await new App
    (
        logger,
        new UserController( logger, Router() ),
        new Exceptions( logger )
    ).init()
}
bootstrap ()