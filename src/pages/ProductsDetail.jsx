import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


  
  const ProductsDetail = () => {
    const { id } = useParams();
    const [products, setProducts] = useState({});
    //const [rate, setRate] = useState(1);
    //const dispatch = useDispatch();
    //const allNews = useSelector((state) => state.news);
    //const newsFiltered = allNews.filter((news) => news.id !== Number(id));
  
    useEffect(() => {
      axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}/`).then((resp) => {
        console.log(resp.data)
        setProducts(resp.data)
        //dispatch(filterCategoryThunk(resp.data.category.id));
      })
    }, [])

    return (
      <div>
        <h1>Products Details</h1>
      </div>
    )
  }

  export default ProductsDetail