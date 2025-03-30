const log = console.log
function AddName ( name: string, surname: string )
{
    log( 'AddName STARTED' )
    return function<T extends { new ( ...args: any[]): {} }> ( constructor: T )
    {
        return class extends constructor
        {
            name = name
            surname = surname
        }
    }
}

function Greeting (
    originMethod: ( ...args: any ) => string | void,
    context: ClassMethodDecoratorContext
    // ClassMethodDecoratorContext<User, (name: string) => string>
): any
{
    log('Greeting STARTED')
    function innerGreeting ( this: any, ...args: any )
        {
            log( context )
            const result: ( ...args: any ) => string | void = originMethod.call( this, ...args )
            log( 'Hello ' + args[0] )
            log( originMethod )
            return result
        }
    return innerGreeting
}


@AddName( 'Anna', 'Brown' )
export class User
{
    constructor ( public name: string )
    {
        this.name = name
    }
    @Greeting
    updateName ( name: string ): string
    {
        this.name = name
        return this.name
    }
}
const user = new User('Violla')
log( user.updateName( 'Mickle' ) )
