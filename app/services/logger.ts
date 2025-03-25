import { Logger, ILogObj } from 'tslog'

export class LoggerService
{
    private logger: Logger<ILogObj> = new Logger( {
        // name: 'tslog info' ,
        hideLogPositionForProduction: true,
    } )

    log ( ...args: unknown[] ): void
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