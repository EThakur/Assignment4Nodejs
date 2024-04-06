const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, // Optional but recommended
    useFindAndModify: false // Optional but recommended
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const commentRoutes = require('./routes/commentRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/users', userRoutes);
app.use('/carts', cartRoutes);
app.use('/comments', commentRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
