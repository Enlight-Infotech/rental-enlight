import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const makePayment = async (price) => {
    const { data } = await axios.post("http://localhost:5500/api/payments/create-order", {
      amount: price
    });

    const order = data.order;
    debugger;

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY || 'rzp_test_RlegiRhA6hk2bV',
      amount: order.amount,
      currency: "INR",
      name: "My App",
      description: "Test Payment",
      order_id: order.id,

      handler: async function (response) {
        const verify = await axios.post("http://localhost:5500/api/payments/verify-payment", {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        });

        if (verify.data.success) {
          alert("Payment Successful!");
        } else {
          alert("Payment Verification Failed!");
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  async function getProducts() {
    const response = await axios.get("http://localhost:5500/api/admin/products/get");
    const products = response.data.resultData;
    setProductData(products);
  }

  useEffect(() => {
    document.title = `Enlight Rentals || Products`;
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ overflowX: 'clip' }} class="contact4 overflow-hiddedn position-relative">
      <div class="row no-gutters">
        {(productData && productData.length > 0) &&
          <div style={{}} class="d-flex flex-wrap">
            {productData.map((item) => (

              <div class="col-6 col-md-3 card">
                <div class="card-header">
                  {item.id}
                </div>
                <img src={item.imageUrl} class="card-img-top" alt="..." />

                <div class="card-body">
                  <h5 class="card-title">{item.productName}</h5>
                  <p class="card-text">{item.productDesc}</p>
                  <p class="card-text"><b>Rs.</b> <span style={{ textDecoration: 'line-through' }}>{item.productPrice}</span> <b>{item.discountPrice}</b></p>
                  <button onClick={() => makePayment(item.discountPrice)} class="btn btn-success">Pay Now</button>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Products;
