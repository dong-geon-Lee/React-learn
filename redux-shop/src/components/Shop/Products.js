import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const itemList = [
    {
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
      title: "Test2",
      price: 5,
      description: "This is a second product - amazing!",
    },
    {
      title: "Test3",
      price: 4,
      description: "This is a three product - amazing!",
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {itemList.map((item) => (
          <ProductItem items={item} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
