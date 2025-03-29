import {  Request, Response, NextFunction } from 'express'
import { LoggerService } from '../../services/logger'

export interface IExceptions
{
    logger: LoggerService,
    catch: ( err: Error, req: Request, res: Response, next: NextFunction) => void
}