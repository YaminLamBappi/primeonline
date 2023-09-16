import React from "react";
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          <div className="h2">
            Welcome to Prime Online - Your Ultimate Shopping Destination!
          </div>{" "}
          In the fast-paced digital era we live in, shopping has transcended
          traditional boundaries, bringing convenience and choice right to your
          fingertips. At Prime Online, we've harnessed the power of technology
          to create an unparalleled shopping experience that redefines the way
          you browse, choose, and purchase products.
          <br />
          <br />
          Our vision is simple yet profound: to be your go-to destination for
          all your shopping needs, where you can find an extensive range of
          high-quality products, all in one place. Whether you're on the hunt
          for the latest fashion trends, cutting-edge electronics, household
          essentials, or unique gifts, Prime Online is your gateway to a world
          of endless possibilities.
          <br />
          <br />
          With a commitment to customer satisfaction, we prioritize offering a
          seamless and secure shopping platform. From our user-friendly website
          to our mobile app, we've designed every aspect of Prime Online to make
          your shopping journey smooth, enjoyable, and hassle-free. Shop
          confidently knowing that your personal information is protected, your
          orders are handled with care, and your expectations are exceeded.
          <br />
          <br />
          But Prime Online is not just about shopping; it's about creating a
          community of like-minded individuals who share a passion for quality
          and innovation. We're dedicated to providing you with valuable
          insights, trend updates, and expert advice to help you make informed
          choices and stay ahead of the curve.
          <br />
          <br />
          Join us on this exciting journey as we revolutionize online shopping.
          Discover new products, explore the latest trends, and experience the
          convenience of shopping from the comfort of your home or on-the-go. At
          Prime Online, you're not just a shopper; you're a valued member of our
          ever-growing family.
          <br />
          <br />
          Thank you for choosing Prime Online. Your satisfaction is our
          priority, and we can't wait to serve you. Start shopping smarter,
          easier, and better with Prime Online today!
          <br />
          <br />
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <a href="./Product">
                <img
                  className="card-img-top img-fluid"
                  src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  height={160}
                />
              </a>

              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <a href="./Product">
                <img
                  className="card-img-top img-fluid"
                  src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  height={160}
                />
              </a>
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <a href="./Product">
                <img
                  className="card-img-top img-fluid"
                  src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  height={160}
                />
              </a>
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <a href="./Product">
                <img
                  className="card-img-top img-fluid"
                  src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  height={160}
                />
              </a>
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
