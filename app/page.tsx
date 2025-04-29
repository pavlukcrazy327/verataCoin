'use client'
import MainLayout from "@/src/Layouts/MainLayout/MainLayout";
import Product from "@/src/Components/Product/Product";
import './landing.scss';

const Home = () => {
  return (
    <section>
      <div className="flex landing-top">
        <button className="btn-third">0x7 bought 10 ETH $KURT</button>
        <button className="btn-secondary">0x7 bought 10 ETH $KURT</button>
        <button className="btn-primary">Login</button>
      </div>
      <div className="flex landing-second">
        <input 
          type="text"
          placeholder="Search for token..."
          />
        <button className="btn-primary">Search</button>
      </div>
      <div className="product-section">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default function HomeComponent() {
  return <MainLayout>
    <Home />
  </MainLayout>
};
