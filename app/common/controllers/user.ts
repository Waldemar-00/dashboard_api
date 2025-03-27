import { AbstractController } from './abstract'
import { LoggerService } from '../../services/logger'
import { Request, Response, NextFunction, Router  } from 'express'


export class UserController extends AbstractController<LoggerService, Router>
{
    constructor ( logger: LoggerService, router: Router )
    {
        super( logger, router )
        this.bindRouters( [
            {
                path: '/',
                method: 'get',
                func: this.home
            },
            {
                path: '/user',
                method: 'get',
                func: this.user
            },
            {
                path: '/user/register',
                method: 'post',
                func: this.register
            },
            {
                path: '/user/login',
                method: 'post',
                func: this.login
            },
        ])
    }
    register (req: Request, res: Response, next: NextFunction)
    {
        this.ok<string>(res, 'You have been REGISTERED SUCCESSFULLY!')
    }
    login ( req: Request, res: Response, next: NextFunction )
    {
         this.ok<string>(res, 'You have been LOGIN SUCCESSFULLY!')
    }
    home ( req: Request, res: Response, next: NextFunction )
    {
         this.ok<string>(res, 'You are on the Home Page!!!!')
    }
    user ( req: Request, res: Response, next: NextFunction )
    {
         this.ok<string>(res, 'You are on the User Page!!!!!!')
    }
}