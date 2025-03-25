import { App } from './app'
import { LoggerService } from './services/logger'
async function bootstrap ()
{
    await new App( new LoggerService() ).init()
}
bootstrap ()