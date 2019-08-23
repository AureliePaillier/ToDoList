const Product = require('../models/product.model');

/*exports.home = function(req, res){
    res.json('ca marche');
}*/
///////////////////////// CREATE /////////////////////////////////////////////
exports.product_create = function(req, res){
    let product = new Product({
        name: req.body.name,
        prix: req.body.prix
    })

    product.save(err=>{
        if(err){
            return next(err);
        }
        res.json({'message':'Produit cree'})
    })
}
///////////////////////// READ /////////////////////////////////////////////
exports.product_list = function(req, res){
    Product.find({}, function(err, products){
        if(err){
            res.send(err);
        }
        res.json(products)
    });
}

///////////////////////// UPDATE /////////////////////////////////////////////
exports.product_update = function(req, res){
    let productUpdate = new Product({
        name: req.body.name,
        prix: req.body.prix
    })
    Product.findByIdAndUpdate(req.body._id, productUpdate,{new: true}, err, product) => {
        if(err){
            return next(err)
        }
        res.json({'products':product})
    });
}

///////////////////////// DELETE /////////////////////////////////////////////
exports.product_delete = function(req,res){
    Product.findByIdAndDelete(req.body._id,(err,product)=>{
        if(err){
            return next(err)
        }
        res.json({'message':'Produit delete'})
    })
}
