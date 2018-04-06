const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

const newUser = new User({
    email: 'sarath.sct@gmail.com'
});

newUser.save().then((doc) => {
    console.log('Saved user', doc);
}, (e) => {
    console.log('Unable to save user', e);
}) 

// const newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save Todo');
// });

// const otherTodo = new Todo({
//    // text: 'Study Mongo',
//     // completed: true,
//     // completedAt: 123
// });

// otherTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save Todo', e);
// });