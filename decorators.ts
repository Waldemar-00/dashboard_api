const log = console.log
function AddName<T extends { new( ...args: any[] ): {} }> (
    constructor: T,
    context: ClassDecoratorContext
)
    {
        log( context )
        return class extends constructor
        {
            surname = 'Some_Name'
        }
    }


function Greeting<T> (
    originMethod: ( ...args: any ) => string | void,
    context: ClassMethodDecoratorContext<T , ( ...args: any ) => string | void>
): any
{
    function innerGreeting ( this: any, ...args: any )
    {
        log( 'Hello ' + args[0] )
        return originMethod.call( this, ...args )
    }
    context.addInitializer( function ()
    {
        this[ context.name ] = this[ context.name ].bind( this )
        log( 'This BOUND to the method!')
    })
    return innerGreeting
}
function isAdmin (
    originMethod: ( truth: boolean ) => void,
    context: ClassSetterDecoratorContext
)
{
    return function ( this: any, truth: boolean )
    {
        if ( typeof truth === 'boolean' ) return originMethod.call( this, truth )
        else log( 'Value of Admin must be a boolean' )
    }

}
function Prop<This> (
    _target: undefined,
    context: ClassFieldDecoratorContext<This>
)
{
    log( context )
    return function ( initialValue: number )
    {
        return initialValue + 111
    }
}

@AddName
export class User
{
    @Prop
    public id: number = 0
    public _admin = false
    constructor ( public name: string )
    {
        this.name = name
    }
    @Greeting<User>
    updateName ( name: string ): string
    {
        this.name = name
        return this.name
    }
    @isAdmin
    set admin ( truth: boolean )
    {
        this._admin = truth
    }
}
const user = new User('Violla')
log( user.updateName( 'Mickle' ) )
log( user.id )
user._admin = true
log( user._admin )
 //* context - {
    //*     kind: 'method',
    //*     name: 'updateName',
    //*     static: false,
    //*     private: false,
    //*     access: { has: [Function: has], get: [Function: get] }, - only if instance of class is being
    //*     metadata: undefined,
    //*     addInitializer: [Function (anonymous)]
    // *}*