const mongoose = require('mongoose');
const categories = require('./categories');
const productSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true, 'Name'],
        trim: true,
        maxLength:[100, 'not more than 100 characters']
    },
    price:{
        type:Number,
        required:[true, 'Price'],
        default:0.0
    },
    description:{
        type: String,
        maxLength:[100, 'not more than 100 characters']
    },
    ratings:{
        type:Number,
        default:0
    },
    images:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }],
    category:{
        type:String,
        required:[true, 'Please select the category for the product.'],
        enum:{
            values: [
                'Electronics',
                'Clothing',
                'Books'],
            message: 'Please select the correct Category'
        }
    },
    seller:{
        type: String,
        required: [true,'Please enter the seller']
    },
    stock:{
        type:Number,
        required:true,
        maxLength: [3, 'Max quantity 999'],
        default:0
    },
    totalReviews:{
        type: Number,
        default:0
    },
    reviews:{
        name: {
            type:String,
        },
        rating:{
            type: Number,
        },
        comment:{
            type:String,
        }
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema)