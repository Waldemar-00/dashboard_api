import { NextFunction, Response, Request } from 'express'
import { LoggerService } from '../services/logger/logger'
import { HTTPError } from './api/error'

export class Exceptions implements Exceptions
{
    constructor ( private logger: LoggerService )
    {
        this.logger = logger
    }
    catch ( err: Error | HTTPError, req: Request, res: Response, next: NextFunction )
    {
        if ( err instanceof Error )
        {
            this.logger.error( err.stack )
            res.status( 500 ).json( { ERROR: err.message } )
        }
        if ( err instanceof HTTPError )
        {
            this.logger.error( err.context, err.stack )
            res.status( err.status ).json( { ERROR: err.message, CONTEXT: err?.context } )
        }
    }
}