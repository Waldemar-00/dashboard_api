const log = console.log

function Greeting<This, Args extends any[], Return> (
    originMethod: ( this: This, ...args: Args ) => Return,
    context: ClassMethodDecoratorContext<This, ( this: This, ...args: Args ) => Return>
): ( this: This, ...args: Args ) => Return
{
    context.addInitializer( function ()
    {
        this[ context.name ] = this[ context.name ].bind( this )
        log( 'This BOUND to the method!' )
    } )
    return function( this: This, ...args: Args ): Return
    {
        log( 'Hello ' + args[ 0 ] )
        return originMethod.call( this, ...args )
    }
}
function isAdmin<This, Args extends boolean, Return> (
    originMethod: ( truth: Args ) => Return,
    context: ClassSetterDecoratorContext<This, Args>
): ( this: This, truth: Args ) => Return
{
    return function ( this: This, truth: Args )
    {
        if ( typeof truth === 'boolean' ) return originMethod.call( this, truth )
        else log( 'Value of Admin must be a boolean' )
    }

}
function Prop<This> (
    _target: undefined,
    context: ClassFieldDecoratorContext<This, number>
): ( initialValue: number ) => number
{
    log( context )
    return function ( initialValue: number )
    {
        return initialValue + 111
    }
}
function AddName< U extends new( ...args: any[] ) => {} > (
    constructor: U,
    context: ClassDecoratorContext<U>
)
{
    log( context )
    return class extends constructor
    {
        surname = 'Some_Name'
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
    @Greeting
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