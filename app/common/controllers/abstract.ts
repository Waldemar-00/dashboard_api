import { LoggerService } from '../../services/logger'
import { IControllerRoute } from '../interfaces/route.interface'
import { Router, Response } from 'express'

export abstract class AbstractController<L extends LoggerService, R extends Router>
{
    constructor ( protected logger: L, protected  _router: R )
    {
        this._router = _router
        this.logger = logger
    }
    get router () { return this.router }

    protected bindRouters (routers: IControllerRoute[])
    {
        routers.forEach( route =>
        {
            this.logger.info( `${ route.method } ${ route.path }` )
            this.router[route.method]( route.path, route.func.bind( this ) )
        })
    }

    public created ( res: Response )
    {
        return res.sendStatus( 201 )
    }
    public send<M> ( res: Response, code: number,  message: M )
    {
        res.type( 'application/json' )
        return res.status( code ).json( message )
    }
    public ok<M> ( res: Response, message: M )
    {
        return this.send<M>( res, 200, message )
    }
}