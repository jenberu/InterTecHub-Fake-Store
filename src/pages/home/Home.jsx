import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/productCard/ProductCard';
import Filter from '../../components/Filter/Filter';
import { fetchProducts, fetchCategories } from '../../api';
import './home.scss'
const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('default');

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

  // Filter by category
  useEffect(() => {
    let updatedProducts = [...products];

    if (selectedCategory) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort products
    if (sortOption === 'price-low-to-high') {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high-to-low') {
      updatedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'alphabetical') {
      updatedProducts.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredProducts(updatedProducts);
  }, [selectedCategory, sortOption, products]);

  // Add to cart handler
  const handleAddToCart = (product) => {
    console.log('Add to cart:', product);
  };

  return (
    <div className={'container'}>
      <h1 className={'title'}>Products</h1>

      <div className={'filter'}>
        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onSortChange={setSortOption}
        />
      </div>

      <div className='products-grid'>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
