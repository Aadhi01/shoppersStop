const Product = require('../models/product')

exports.getProducts =(req, res, next) =>{
    res.status(200).json({
        success: true,
        message:"Some random response"
    })
}

exports.addProduct = async(req, res, next)=>{
    const product = await Product.create(req.body);
    res.status(201).json({
        success:true, 
        message: 'Product created',
        product
    })
}
exports.removeProduct = async(req, res, next)=>{
    await Product.findOneAndDelete({name: req.body.name},function (err, docs) {
        if(err) console.log(err);
        if(docs)
            res.status(201).json({
                success:true, 
                message: `removed ${req.body.name}`,
        })
        else{
            res.status(400).json({success:false, message: 'no records deleted'})
        }
    }).clone();
}
exports.removeProductById = async(req, res, next)=>{
    // const product
    try{
        await Product.findByIdAndRemove(req.params.id, function (err, docs) {
            console.log(err)
            console.log(docs)
            console.log(req.params.id)
            if (err){
                console.log(err)
            }
            else{
                if(docs){
                    res.status(201).json({
                        success:true, 
                        message: `removed by Id ${req.params.id}`,
                    })
                }
                else
                    res.status(400).json({success:false, message: 'no records deleted'})
            }
        }).clone();
    }catch(ex){
        console.log(ex);
    }
}
//TODO: need to check on this.
// exports.addProductBulk = async(req, res, next)=>{
//     let retObject = [];
//     req.body.forEach(item =>{
//         const product = await Product.create(item);
//         retObject.push()
//     });
//     res.status(201).json({
//         success:true, 
//         message: 'Products created',
//         retObject
//     })
// }