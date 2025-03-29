export class HTTPError extends Error
{
    constructor ( public status: number, public message: string, public context?: string )
    {
        super( message )
        this.status = status
        this.name = 'ERROR API'
        this.context = context
    }
}
