//Object containing a method. It renders the index.ejs
module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    }
}