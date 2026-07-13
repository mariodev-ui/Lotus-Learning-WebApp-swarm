const mongoose = require('mongoose');
const User = require('../models/User');

async function seedDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

        // Drop existing users collection
        await User.collection.drop();

        // Create sample users
        const users = [
            {
                email: 'user1@example.com',
                password: 'password123',
                name: 'User One'
            },
            {
                email: 'user2@example.com',
                password: 'password456',
                name: 'User Two'
            }
        ];

        await User.insertMany(users);

        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close();
    }
}

seedDatabase();
