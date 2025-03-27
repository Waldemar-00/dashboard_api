import { App } from './app'
import { LoggerService } from './services/logger'
import { UserController } from './common/controllers/user'
import { Router } from 'express'
async function bootstrap ()
{
    await new App( new LoggerService(), new UserController( new LoggerService(), Router() ) ).init()
}
bootstrap ()