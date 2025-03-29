import { Logger, ILogObj } from 'tslog'
import { ILogger } from './interface'
export class LoggerService implements ILogger
{
    logger: Logger<ILogObj> = new Logger( {
        // name: 'tslog info' ,
        hideLogPositionForProduction: true,
    } )

    info ( ...args: unknown[] ): void
    {
        this.logger.info( ...args )
    }
    warn ( ...args: unknown[] ): void
    {
        this.logger.warn( ...args )
    }
    error ( ...args: unknown[] ): void
    {
        this.logger.error( ...args )
    }
}