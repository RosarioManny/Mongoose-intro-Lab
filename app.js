const prompt = require('prompt-sync')();
const mongoose = require('mongoose');
const Customer = require('./models/customer.js')
require('dotenv').config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        // console.log('Connected to MongoDB');
}   catch (err) {
        console.error('You fucked up mf', err);
}};

const username = prompt('Please enter your name.');
// prompt is a terminal based input. vv This is what will show after you have entered your input.
console.log(`Welcome ${username}!`);

const createCust = async () => {

    const custData = {
    text: "Learn JS",
      isComplete: false,node
    }
    
    const cust = await Customer.create(custData);
    console.log("New customer:", cust);
};




const createUser = async () => {
        const name = prompt("Enter new Username:");
        const age =  prompt("Enter you age:");
        const customer = new Customer({ name, age });
            await customer.save()
        console.log(`${customer.name}`)
        // console.log("What would you like to do next?")
        main()
};

const viewUser = async () => {
    const custId = await Customer.findOne({ name: "timlim" })
    console.log(`This is ${custId.name}. Their id is ${custId.id}`)
    console.log("What would you like to do next?")
    main()
}

// const updateUser

// const deleteUser

// const quitExit

const main = async () => { 
        await connect();
        console.log('What would you like to do next');
        console.log("1. Create User")
        console.log("2. View Users")
        console.log("3. Update Users")
        console.log("4. Delete Users")
        console.log("5. Exit")

const actions = prompt("Number of Actions to run: ") 
    if (actions === "1") {
        await createUser();
        mongoose.connection.close();
    } else if (actions === "2") {
        await viewUser();
        mongoose.connection.close()
    } else if (actions === "3") {
        await updateUser();
        mongoose.connection.close
    } else if (actions === "4") {
        await updateUser();
        mongoose.connection.close
    }else if (actions === "5") {
        await quitExit()
        mongoose.connection.close()
    }
};


main();
// Display welcome msg to user
