
import mongoose from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type: String,
        required : true
    },

    password:{
        type:String,
        required: true
    },
    wokerGroup:{
        type:String,
        required: false
    },

    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },

    role:{
        type:String,
        enum: ['admin','member' ],
        default:'member'

    },
    address:{
        type:String,
        required:false
    }

},
{
    timestamps:true
}

)

const eventSchema = new Schema({
    title:{
        type:String,
        required:true
    },

    Image:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:true
    },
    startDate:{
        type: Date,
        required:true
    },
    endDate:{
        type:Date,
        required:false
    }

},
    {timestamps:true}

)

const User = mongoose.model('User', userSchema)

const Event = mongoose.model('Event', eventSchema)

export {User, Event}