const moongose = require('moongose');
const Schema = moongose.Schema;

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    displayName: { type: String, required: true },
    birthday:  {type: Date},
    gender: {type: String, required: true},
    emails: [{ type: String, required: true }],
    image: {type: String, required: false},
    language: {type: String},
    role: {type: String, default: 'user', required: true},
    created_at: Date,
    updated_at: Date
});

userSchema.pre('save', function(next){
    const currentDate = new Date();
    this.updated_at = currentDate;

    if (!this.created_at) {
        this.created_at = currentDate;
    }
        
    next();
})

const User = moongose.model('User', userSchema);
module.exports = User;