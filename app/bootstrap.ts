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
bootstrap()

// const AppContainer = new Container()
// AppContainer.bind<ILogger>( PIECES.ILogger ).to( LoggerService )
// AppContainer.bind<Exceptions>( PIECES.IExceptions ).to( Exceptions )
// AppContainer.bind<UserController>( PIECES.UserController ).to( UserController )
// AppContainer.bind<App>( PIECES.App ).to( App )
// const APP = AppContainer.get<App>( PIECES.App )
// APP.init()

// export { AppContainer, APP }