import 'reflect-metadata'
const log = console.log
//! meta via a symbol
function Metadata<This extends new ( ...args: any[] ) => {}> (
    constructor: This,
    context: ClassDecoratorContext<This>
)
{
    const meta = Symbol( 'meta' )
    return class extends constructor
    {
       [ meta ] = 111000
    }

}
function Prop (
    _target: undefined,
    context: ClassFieldDecoratorContext
)
{
    return function ( initialValue: string )
    {
        return initialValue = 'Decorator for property'
    }
}

@Metadata
class Meta
{
    @Prop prop: string
    constructor( public name: string = 'Reflect'){}
}

const meta = new Meta()
log( meta )
const sym = Object.getOwnPropertySymbols( meta )[0]
log( meta[ sym ] )
log( ...Object.keys( meta ) )

//! via Reflect
log('__________________VIA REFLECT')
function MetadataR( constructor: Function )
{
    Reflect.defineMetadata( 'some', '777790', constructor )
    log( Reflect.getMetadata( 'some', constructor ))
}
@MetadataR
class MetaR
{
    constructor ( public name: string = 'Reflect' )
    {
        Reflect.defineMetadata( 'something', 1234567, this )
    }
}
const metaR = new MetaR()
log( metaR )
log( Object.keys( metaR ) ) //! only name
log( Reflect.hasMetadata( 'some', metaR ) )
log( Reflect.hasMetadata( 'something', metaR ) )

log( Reflect.hasMetadata( 'some', MetaR ) )
