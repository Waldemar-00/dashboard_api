import { AbstractController } from './abstract'
import { LoggerService } from '../../services/logger'
import { IControllerRoute } from '../interfaces/route.interface'
import { Router, Response } from 'express'
export class UserController extends AbstractController<LoggerService, Router>
{
    constructor ()
    {
        super( new LoggerService(), Router() )
    }
}