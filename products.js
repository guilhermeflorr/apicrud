let products = [];

const getProducts = (req, res) => {
    res.status(200).json(products);
};

const getProductById = (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === parseInt(id));
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
};

const createProduct = (req, res) => {
    const { name, price } = req.body;
    const id = products.length ? products[products.length - 1].id + 1 : 1;
    const newProduct = { id, name, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const product = products.find(p => p.id === parseInt(id));
    if (!product) return res.status(404).json({ message: 'Product not found' });
    product.name = name || product.name;
    product.price = price || product.price;
    res.status(200).json(product);
};

const deleteProduct = (req, res) => {
    const { id } = req.params;
    const index = products.findIndex(p => p.id === parseInt(id));
    if (index === -1) return res.status(404).json({ message: 'Product not found' });
    products.splice(index, 1);
    res.status(204).end();
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
