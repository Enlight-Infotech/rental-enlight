import axios from "axios";
import { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const makePayment = async (price) => {
    const { data } = await axios.post("http://localhost:5500/api/payments/create-order", {
      amount: price,
    });

    const order = data.order;

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY || "rzp_test_RlegiRhA6hk2bV",
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

        alert(verify.data.success ? "Payment Successful!" : "Payment Verification Failed!");
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  async function getProducts() {
    const response = await axios.get("http://localhost:5500/api/admin/products/get");
    setProductData(response.data.resultData);
  }

  useEffect(() => {
    document.title = `Enlight Rentals || Products`;
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  const openFullDescription = (item) => {
    setSelectedProduct(item);
    setOpenDialog(true);
  };

  return (
    <div style={{ overflowX: "clip" }} className="contact4 overflow-hidden position-relative">
      <div className="row no-gutters">
        {productData?.length > 0 && (
          <div className="d-flex flex-wrap">
            {productData.map((item) => {
              const shortDesc =
                item.productDesc.length > 100
                  ? item.productDesc.substring(0, 100) + "..."
                  : item.productDesc;

              return (
                <div className="col-6 col-md-3 card" key={item.id}>
                  <div className="card-header">{item.id}</div>
                  <img src={item.imageUrl} className="card-img-top" alt="Product" />

                  <div className="card-body">
                    <h5 className="card-title">{item.productName}</h5>

                    {/* Shortened description */}
                    <p
                      className="card-text"
                      style={{ cursor: "pointer"}}
                      onClick={() => openFullDescription(item)}
                    >
                      {shortDesc}
                    </p>

                    <p className="card-text">
                      <b>Rs.</b>{" "}
                      <span style={{ textDecoration: "line-through" }}>{item.productPrice}</span>{" "}
                      <b>{item.discountPrice}</b>
                    </p>

                    <button
                      onClick={() => makePayment(item.discountPrice)}
                      className="btn btn-success"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
        {
          openDialog && 
                <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedProduct?.productName}</DialogTitle>
        <DialogContent>
          <img
            src={selectedProduct?.imageUrl}
            alt="Product"
            style={{ width: "100%", borderRadius: 10, marginBottom: 15 }}
          />

          <p style={{ whiteSpace: "pre-wrap", fontSize: "1rem" }}>
            {selectedProduct?.productDesc}
          </p>
        </DialogContent>
      </Dialog>
        }
    </div>
  );
};

export default Products;
