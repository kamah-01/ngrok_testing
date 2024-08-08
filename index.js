const express = require('express')

const app = express()
app.use( express.json() )

app.get( '/', ( req, resp ) => {
    resp.status(200).json({status: "running"})
} )

app.post( '/test', ( req, resp ) => {
    console.log( req.body );
    resp.status( 200 ).json( {
        api: "local",
        data: {
            name: "john",
            occupation: "programmer"
        }
    })
})


app.listen( 8000, ( error ) => {
    if ( error ) console.log( error );
    console.log('Server started on 8000')
})