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
        <Product img = '/images/newproduct/product2.png' info1="Cpt.Smith" info2="$CTP" price1="$15k" price2="+500%" />
        <Product img = '/images/newproduct/product3.png' info1="Slow Pulp" info2="$PULP" price1="$150k" price2="-25%" />
        <Product img = '/images/newproduct/product4.png' info1="Nirvana" info2="$KURT" price1="$166m" price2="+999%" />
        <Product img = '/images/newproduct/product5.png' info1="Bilk - F UP" info2="$BILK" price1="$2k" price2="-10%" />
        <Product img = '/images/newproduct/product6.png' info1="Desire - Fontaines DC" info2="$DC" price1="$122m" price2="+45%" />
      </div>
    </section>
  );
};

export default function HomeComponent() {
  return <MainLayout>
    <Home />
  </MainLayout>
};
