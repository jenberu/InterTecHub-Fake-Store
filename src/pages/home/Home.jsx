import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import CategoryFilter from "../../components/Filter/CategoryFilter";
import SortOptions from "../../components/Filter/SortFilter";
import { fetchProducts, fetchCategories } from "../../api";
import "./home.scss";
import headingImage from "../../assets/images/headingImage.png";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import DiamondIcon from "@mui/icons-material/Diamond";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [showAll, setShowAll] = useState(false);
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, SetSeconds] = useState("");

  const defaultProductLimit = 3; // Default number of products to display

  // Fetch products and categories
  useEffect(() => {
    const loadData = async () => {
      const [productResponse, categoryResponse] = await Promise.all([
        fetchProducts(),
        fetchCategories(),
      ]);
      setProducts(productResponse.data);
      setFilteredProducts(productResponse.data);
      setCategories(categoryResponse.data);
    };
    loadData();
  }, []);

  // Filter by category and sort products
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setDays(String(now.getDate()).padStart(2, "0"));
      setHours(String(now.getHours()).padStart(2, "0"));
      setMinutes(String(now.getMinutes()).padStart(2, "0"));
      SetSeconds(String(now.getSeconds()).padStart(2, "0"));
    }, 1000);
    let updatedProducts = [...products];

    if (selectedCategory) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (sortOption === "price-low-to-high") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high-to-low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "alphabetical") {
      updatedProducts.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredProducts(updatedProducts);
  }, [selectedCategory, sortOption, products]);

  // Add to cart handler
  const handleAddToCart = (product) => {
    console.log("Add to cart:", product);
  };

  // Toggle between limited and all products
  const handleSeeAllProducts = () => {
    setShowAll(!showAll); // Toggle the state
  };

  // Get products to display based on the showAll state
  const productsToDisplay = showAll
    ? filteredProducts
    : filteredProducts.slice(0, defaultProductLimit);

  //   if (products.length === 0) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <div className="home-container">
      <div className="home-top">
        <div className="category">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
        <div className="heading-image">
          <img src={headingImage} alt="heading image" />
        </div>
      </div>
      <div className="title-container">
        {/* <h1 className="day">Today's</h1> */}
        <div className="title-date">
          {/* <p>Days<br />{ days}:</p>
            <p>Hours<br />{ hours}:</p>
            <p>Minutes<br />{ minutes}:</p>
            <p>Seconds<br />{ seconds}:</p> */}
        </div>
      </div>
      <div className="main-content">
        <div class="categories-container ">
          <h1>Browse By Catogory</h1>
          <div class="categories">
            {categories.map((category) => (
              <span
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`category ${
                  selectedCategory === category ? "active" : ""
                }`}
              >
                {category === "electronics" && (
                  <DevicesOtherIcon style={{ fontSize: 50 }} />
                )}
                {category === "jewelery" && (
                  <DiamondIcon style={{ fontSize: 50 }} />
                )}
                {category === "men's clothing" && (
                  <ManIcon style={{ fontSize: 50 }} />
                )}
                {category === "women's clothing" && (
                  <WomanIcon style={{ fontSize: 50 }} />
                )}
                {category}
              </span>
            ))}
          </div>
        </div>
        <div className="products-section">
          <SortOptions onSortChange={setSortOption} />
          <h1 className="title">
            {selectedCategory ? selectedCategory : "All Products"}
          </h1>

          <div className="products-grid">
            {productsToDisplay.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>

        {/* See All Products Button */}
      </div>

      <button className="see-all-btn" onClick={handleSeeAllProducts}>
        {showAll ? "View Fewer Products" : "View All Products"}
      </button>
    </div>
  );
};

export default Home;
