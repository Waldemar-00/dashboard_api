import { App } from './app'

async function bootstrap ()
{
    await new App().init()
}
bootstrap ()