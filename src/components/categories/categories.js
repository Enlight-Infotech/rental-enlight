import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Products = ({ productData }) => {
    const { type } = useParams(); // computers, printers, etc.

    debugger;
    const product = productData.find((item) => item.id === type);
    useEffect(() => {
        document.title = `Enlight Rentals || Categories || ${product.categoryName}`; // Set the document title
    }, [product]); 
    if (!product) return <h2>Product Not Found</h2>;

    return (
        <div style={{ overflowX: 'clip' }} class="contact4 overflow-hiddedn position-relative">
            <div class="row no-gutters">
                {(product.key % 2 === 0) && <div class="responsiveImgContainer col-lg-6 left-image p-r-0">
                    <img className="responsiveImg" alt="product" src={product.imageUrl} />
                </div>}
                <div class="col-lg-6 contact-box mb-4 mb-md-0">
                    <div class="">
                        <h1 class="title f-25 mt-2"><b>{product.categoryName}</b></h1>
                        <p className="f-16">{product.categoryDesc}</p>
                    </div>
                </div>
                {(product.key % 2 !== 0) && <div class="responsiveImgContainer col-lg-6 right-image p-r-0">
                    <img className="responsiveImg" alt="product" src={product.imageUrl} />
                </div>}
            </div>
        </div>
    );
};

export default Products;