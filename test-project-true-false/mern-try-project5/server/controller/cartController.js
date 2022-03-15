const cartModel = require("../models/cartModel");

const getCart = async (req, res) => {
  const carts = await cartModel.find();

  res.status(200).json(carts);
};

const addCart = async (req, res) => {
  const { title, price, description } = req.body;

  const carts = await cartModel.create({ title, price, description });

  res.status(200).json(carts);
};

const updateCart = async (req, res) => {
  const cartId = await cartModel.findById(req.params.id);
  const updateCart = await cartModel.findByIdAndUpdate(cartId, req.body, {
    new: true,
  });

  res.status(200).json(updateCart);
};

const deleteCart = async (req, res) => {
  const cartId = await cartModel.findById(req.params.id);

  await cartModel.remove(cartId);

  res.status(200).json({ id: req.params.id });
};

module.exports = { getCart, addCart, updateCart, deleteCart };
