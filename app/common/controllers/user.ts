import { AbstractController } from './abstract'
import { LoggerService } from '../../services/logger/logger'
import { Request, Response, NextFunction, Router  } from 'express'
import { HTTPError } from '../../errors/api/error'


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
        if( !req?.body?.email || !req?.body?.password ) throw new HTTPError( 400, 'NO valid email or password - no REGISTRATION :-(... Try again plaese!' )
        else this.ok<string>(res, 'You have been REGISTERED SUCCESSFULLY!' )
    }
    login ( req: Request, res: Response, next: NextFunction )
    {
        if( !req?.body?.email || !req?.body?.password ) throw new HTTPError( 400, 'NO valid email or password - no LOGIN :-(... Try again plaese!' )
        else this.ok<string>(res, 'You have been LOGIN SUCCESSFULLY!' )
    }
    home ( req: Request, res: Response, next: NextFunction )
    {
        try {
            if( req.query.no === 'yes' ) throw new HTTPError( 404, 'NOT FOUND!',`${ req.originalUrl }` )
            this.ok<string>(res, 'You are on the Home Page!!!!' )
        } catch ( error ) {
            throw error
        }
    }
    user ( req: Request, res: Response, next: NextFunction )
    {
        if( !req.query.id ) throw new HTTPError( 400, 'No user ID - NO user page!')
        else this.ok<string>(res, 'You are on the User Page!!!!!!')
    }
}