
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/testDB')
  .then(() => {
    console.log(' MongoDB connected');
    run();
  })
  .catch(err => console.error(' Connection error:', err));

const userSchema = new mongoose.Schema({
  name: String,
  city: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

async function run() {

  
  await User.insertMany([
    { name: 'alia', city: 'Lahore', age: 20},
    { name: 'Sara', city: 'Karachi', age: 25 },
    { name: 'Zara', city: 'Lahore', age: 19 },
    { name: 'maham', city: 'Islamabad', age: 22 },
    { name: 'Rimsha', city: 'Karachi', age: 18 }
  ]);
  console.log(' Sample users added');


  const result = await User.aggregate([
    {

         $match : {
             age: { $gt: 24}
         }
    }
  ]);

  //  Show result
  console.log('\n Users per city:');
  console.log(result);

  mongoose.disconnect();
}
