const moongose = require('moongose');
const Schema = moongose.Schema;

const projectSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {type: String, required: true}, 
    description: { type: String, required: true },
    start_date: { type: Date },
    end_date: { type: Date}, 
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    contributors: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    created_at: Date,
    updated_at: Date

});

projectSchema.pre('save', function (next) {
    const currentDate = new Date();
    this.updated_at = currentDate;

    if (!this.created_at) {
        this.created_at = currentDate;
    }
        
    if(!this.start_date) {
        this.start_date = currentDate;
    }

    next();
})

const Project = moongose.model('Project', projectSchema);
module.exports = Project;