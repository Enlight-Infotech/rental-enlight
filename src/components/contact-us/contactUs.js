import { Link } from "react-router-dom";
import "./contactUs.css";
import { useEffect } from "react";

const ContactUs = () => {
    useEffect(() => {
        document.title = `Enlight Rentals || Contact Us`; // Set the document title
    }, []); 
  return (
    <>
      <div style={{ overflowX: "clip" }} className="contact3">
        <div className="row no-gutters">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="card-shadow">
                  <img
                    src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg"
                    className="img-fluid"
                    alt="contact"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="contact-box ml-3">
                  <h1 className="font-weight-light mt-2">Contact Us</h1>

                  <form className="mt-4">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="name"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input
                            className="form-control"
                            type="email"
                            placeholder="email address"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="phone"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <textarea
                            className="form-control"
                            rows="3"
                            placeholder="message"
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <button
                          type="submit"
                          className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
                        >
                          <span> SUBMIT</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Contact Details */}
              <div className="col-lg-12">
                <div className="card mt-2 border-0 mb-2">
                  <div className="row">

                    {/* ADDRESS */}
                    <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center c-detail pl-0">
                        <div className="p-3 align-self-center">
                          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
                        </div>
                        <div>
                          <h6 className="font-weight-medium">Address</h6>
                          <p>
                            <Link
                              to='/map'
                              className="text-decoration-none"
                            >
                              Head Office:<br />
                              Plot no. 961, IT City, Sector 66B<br />
                              Mohali, Punjab – 160055
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* PHONE */}
                    <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center c-detail">
                        <div className="p-3 align-self-center">
                          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
                        </div>
                        <div>
                          <h6 className="font-weight-medium">Phone</h6>
                          <p>
                            <a href="tel:+919877282212"  className="d-block text-decoration-none">
                              +91-9877282212
                            </a>
                            <a href="tel:+919988772148" className="d-block text-decoration-none">
                              +91-9988772148
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* EMAIL */}
                    <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center c-detail">
                        <div className="p-3 align-self-center">
                          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                        </div>
                        <div>
                          <h6 className="font-weight-medium">Email</h6>
                          <p>
                            <a href="mailto:info@enlightinfotech.com" className="d-block text-decoration-none">
                              info@enlightinfotech.com
                            </a>
                            <a href="mailto:support@enlightinfotech.com" className="d-block text-decoration-none">
                              support@enlightinfotech.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
