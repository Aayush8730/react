import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      axios
        .get(`/api/products/?search=${search}`)
        .then((res) => {
          if (Array.isArray(res.data)) {
            setProducts(res.data);
          } else {
            console.log("product not found..try search with different keyword");
            setProducts([]);
          }
        })
        .catch((err) => {
          console.log("Error fetching products", err);
          setProducts([]);
        });
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [search]);

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search your product..."
      />

      <ul>
        {products.length > 0 ? (
          products.map((prod) => <li key={prod._id}>{prod.name}</li>)
        ) : (
          <p>No products found</p>
        )}
      </ul>
    </>
  );
}

export default App;
