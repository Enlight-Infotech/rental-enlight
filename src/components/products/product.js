import { useParams } from "react-router-dom";

const Products = ({ productData }) => {
  const { type } = useParams(); // computers, printers, etc.

  const product = productData.find((item) => item.id === type);

  if (!product) return <h2>Product Not Found</h2>;

  return (
           <div style={{overflowX: 'clip'}} class="contact4 overflow-hiddedn position-relative">
            <div class="row no-gutters">
                    {(product.key % 2 === 0) && <div class="responsiveImgContainer col-lg-6 left-image p-r-0">
                        <img className="responsiveImg" alt="product" src={product.productImg} />
                    </div>}
                    <div class="col-lg-6 contact-box mb-4 mb-md-0">
                        <div class="">
                            <h1 class="title f-25 mt-2"><b>{product.productName}</b></h1>
                            <p className="f-16">{product.productDesc}</p>
                        </div>
                    </div>
                    {(product.key % 2 !== 0) && <div class="responsiveImgContainer col-lg-6 right-image p-r-0">
                        <img className="responsiveImg" alt="product" src={product.productImg} />
                    </div>}
                </div>
            </div>
  );
};

export default Products;