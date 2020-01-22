module.exports = app =>{
    app.use('/',(req,res)=>{
        res.send('<h1>Hola</h1>')
    });
}