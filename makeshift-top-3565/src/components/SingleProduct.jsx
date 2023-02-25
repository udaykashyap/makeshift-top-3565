import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
// import ProductDetails from "./ProductDetails";
const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const [basket,setBasket]=useState(0);
  let id = 2;

  let num = Number(singleProduct.price) / 250;
  num = num.toFixed(2);

  // https://fakestoreapi.com/products/${id}
  const getSingleProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setSingleProduct(res.data));
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const handleClick=(e)=>{
    setBasket((prev)=>prev+1);
    console.log(e);
  }
  console.log()
  return (
    <div style={{ width: "70%", margin: "auto", marginTop: "20px" }}>
      <div style={{ display: "flex", gap: "40px" }}>
        <div
          style={{
            width: "420px",
            height: "520px",
            border: "0.5px solid gray",
          }}
        >
          <img
            className="singleProductImage"
            style={{ width: "90%", height: "90%" }}
            src={singleProduct.image}
            alt=""
          />
        </div>
        <div style={{ textAlign: "left" }}>
          <button>Fresho</button>
          <p style={{ fontSize: "22px" }}>{singleProduct.title}</p>
          <h3>
            Price: ₹ {singleProduct.price}{" "}
            <span style={{ fontWeight: "normal", fontSize: "14px" }}>
              {" "}
              (₹ {num}/g)
            </span>
          </h3>
          <p style={{ color: "red" }}>
            You Save {Math.round(Number(Math.random() * 40))}%
          </p>
          <p>Inclusive of all taxes</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <button
              style={{
                color: "white",
                fontWeight: "bold",
                borderRadius: "4px",
                padding: "20px 58px",
                backgroundColor: "red",
                border: "none",
              }}
              onClick={(e)=>handleClick(e)}
            >
              ADD TO BASKET
            </button>
            <button
              style={{
                display: "flex",
                gap: "6px",
                backgroundColor: "white",
                padding: "5px 58px",
                border: "1px solid gray",
                alignItems: "center",
              }}
            >
              {" "}
              <img
                style={{ width: "30px", height: "24px" }}
                src="https://cdn-icons-png.flaticon.com/128/5662/5662990.png"
                alt=""
              />
              <p style={{ fontWeight: "bold", fontSize: "14px" }}>
                Save for later
              </p>
            </button>
          </div>

          <div
            style={{
              color: "gray",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              style={{ width: "25px", height: "20px" }}
              src="https://cdn-icons-png.flaticon.com/128/819/819438.png"
              alt=""
            />
            <p>Standard: 28 Feb, 7:30AM - 10:30AM</p>
          </div>
          <p>Pack Sizes</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1,auto)",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
                cursor: "pointer",
                border: "1px solid gray",
                width: "98%",
                justifyContent: "space-between",
                padding: "0 0 0 10px",
              }}
            >
              <p>250 g</p>
              <p>
                Rs 9.25{" "}
                <span>
                  MRP:{" "}
                  <span style={{ textDecoration: "line-through" }}>
                    Rs 12.17
                  </span>
                </span>
              </p>
              <p style={{ color: "red" }}>24% Off</p>
              <button style={{ border: "none", backgroundColor: "white" }}>
                <img
                  style={{ width: "32px" }}
                  src="https://cdn-icons-png.flaticon.com/128/6459/6459980.png"
                  alt=""
                />
              </button>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                cursor: "pointer",
                border: "1px solid gray",
                width: "98%",
                justifyContent: "space-between",
                padding: "0 0 0 10px",
              }}
            >
              <p>1 kg</p>
              <p>
                Rs 37{" "}
                <span>
                  MRP:{" "}
                  <span style={{ textDecoration: "line-through" }}>
                    Rs 12.17
                  </span>
                </span>
              </p>
              <p style={{ color: "red" }}>24% Off</p>
              <button style={{ border: "none", backgroundColor: "white" }}>
                <img
                  style={{ width: "32px" }}
                  src="https://cdn-icons-png.flaticon.com/128/6459/6459980.png"
                  alt=""
                />
              </button>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                cursor: "pointer",
                border: "1px solid gray",
                width: "98%",
                justifyContent: "space-between",
                padding: "0 0 0 10px",
              }}
            >
              <p>500 g</p>
              <p>
                Rs 18.50{" "}
                <span>
                  MRP:{" "}
                  <span style={{ textDecoration: "line-through" }}>
                    Rs 12.17
                  </span>
                </span>
              </p>
              <p style={{ color: "red" }}>24% Off</p>
              <button style={{ border: "none", backgroundColor: "white" }}>
                <img
                  style={{ width: "32px" }}
                  src="https://cdn-icons-png.flaticon.com/128/6459/6459980.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <button
            style={{
              textDecoration: "underline",
              border: "none",
              backgroundColor: "white",
            }}
          >
            +2 More Combos{" "}
          </button>
        </div>
        {/* <SingleProduct title={singleProduct.title}/> */}
      </div>
      <hr />
      <div>
        <h4>Why choose Bigbasket?</h4>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          <div>
            <img
              style={{ width: "100px" }}
              src="https://cdn-icons-png.flaticon.com/128/5959/5959993.png"
              alt=""
            />
            <h5 style={{ marginBottom: "-10px" }}>Quality</h5>
            <p style={{ fontSize: "14px" }}>You can trust</p>
          </div>
          <div>
            <img
              style={{ width: "100px" }}
              src="https://cdn-icons-png.flaticon.com/128/86/86093.png"
              alt=""
            />
            <h5 style={{ marginBottom: "-10px" }}>On time</h5>
            <p style={{ fontSize: "14px" }}>Guarantee</p>
          </div>
          <div>
            <img
              style={{ width: "100px" }}
              src="https://cdn-icons-png.flaticon.com/128/411/411776.png"
              alt=""
            />
            <h5 style={{ marginBottom: "-10px" }}>Free</h5>
            <p style={{ fontSize: "14px" }}>Delivery</p>
          </div>
          <div>
            <img
              style={{ width: "100px" }}
              src="https://cdn-icons-png.flaticon.com/128/9408/9408601.png"
              alt=""
            />
            <h5 style={{ marginBottom: "-10px" }}>Return Policy</h5>
            <p style={{ fontSize: "14px" }}>No Question asked</p>
          </div>
        </div>
      </div>

      <h3>{singleProduct.title}</h3>
      <div style={{ border: "1px solid gray", padding: "0px 5px" }}>
        <div>
          <p
            style={{ color: "black", textAlign: "left", marginBottom: "-10px" }}
          >
            About the Product
          </p>
          <p style={{ textAlign: "justify", fontSize: "14px" }}>
            {singleProduct.title} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nesciunt, possimus quos. Natus assumenda suscipit
            perspiciatis ad ducimus nulla. Debitis, cumque cupiditate saepe
            exercitationem consequatur deleniti dolore esse amet possimus
            perferendis. Rerum numquam qui, non, ullam eos, doloribus magni
            architecto dignissimos blanditiis ut voluptatem quod iure ipsam
            fuga. Rem incidunt sed voluptates consequuntur quae, doloribus cum,
            laudantium modi non praesentium voluptatibus.
          </p>
        </div>
        <hr />
        <div>
          <p style={{ marginBottom: "-10px", textAlign: "left" }}>Ingrdients</p>
          <p style={{ textAlign: "justify", fontSize: "14px" }}>
            Malt Extract (50%), Sugar, Milk Solids, Maltodextrin, Cocoa Solids,
            Emulsifiers (471, 322), Raising agent (500(ii)), Vitamins, Minerals,
            Salt. Contains Permitted Natural Colour (150 c) and Added flavour
            (Natural Identical Flavouring Substances).
          </p>
        </div>
        <hr />
        <div>
          <p style={{ marginBottom: "-10px", textAlign: "left" }}>
            Nutritional Facts
          </p>
          <p style={{ textAlign: "justify", fontSize: "14px" }}>
            {" "}
            Values per 100 gm
          </p>
          <ul
            style={{
              textAlign: "justify",
              fontSize: "12px",
              marginTop: "-10px",
            }}
          >
            <li>Energy (kcal) - 391</li>
            <li>Fat(g) - 1.4</li>
            <li>Protein (g) - 7</li>
            <li>Carbohydrates (g) - 87-6</li>
          </ul>
        </div>
        <hr />
        <div>
          <p style={{ marginBottom: "10px", textAlign: "left" }}>How to use</p>
          <ul
            style={{
              textAlign: "justify",
              fontSize: "12px",
              marginTop: "-10px",
            }}
          >
            <li>
              Blend 2 teaspoon with milk and ice cream to make a chocolate
              milkshake.
            </li>
            <li>
              {" "}
              Recommended 2 serves per day as part of a balanced diet and a
              healthy lifestyle.
            </li>
          </ul>
        </div>
        <hr />
        <div style={{ fontSize: "12px", textAlign: "left" }}>
          <p style={{ fontSize: "14px", marginBottom: "-10px" }}>
            Other Product Info
          </p>
          <p>
            EAN Code: 7622201766191
            <br />
            Country of origin: India
            <br />
            Manufacturer Name & Address: Mondelez India Food Pvt. Ltd, Unit No.
            2001, 20th Floor, Tower-3 (Wing C), Indiabulls Finance Centre,
            Parel, Mumbai, Maharashtra - 400013
            <br />
            Best before 25-08-2023
            <br />
            For queries call 1860 123 1000
          </p>
        </div>
      </div>
      <div style={{ color: "rgb(24, 23, 23)", textAlign: "left" }}>
        <h3>Rating and Reviews</h3>
        <p
          style={{
            border: "0.5px solid gray",
            padding: "5px",
            fontSize: "14px",
          }}
        >
          Want to rate this product? You can rate or review this product only
          after purchasing from bigbasket
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "400px 780px" }}>
          <div
            style={{
              width: "180px",
              height: "180px",
              border: "1px solid gray",
              display: "grid",
              padding: "0px 80px 80px",
            }}
          >
            <h2 style={{ color: "rgb(7, 111, 7)", fontSize: "32px" }}>4.2 *</h2>
            <p style={{ marginTop: "-20px" }}>814 reviews & 21 reviews</p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(1,auto)",
                gap: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "180px",
                  border: "1px solid gray",
                  height: "10px",
                  borderRadius: "4px",
                }}
              >
                <p
                  style={{
                    width: "70%",
                    height: "10px",
                    backgroundColor: "green",
                    marginTop: "0px",
                  }}
                ></p>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "180px",
                  border: "1px solid gray",
                  height: "10px",
                  borderRadius: "4px",
                }}
              >
                <p
                  style={{
                    width: "50%",
                    height: "10px",
                    backgroundColor: "green",
                    marginTop: "0px",
                  }}
                ></p>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "180px",
                  border: "1px solid gray",
                  height: "10px",
                  borderRadius: "4px",
                }}
              >
                <p
                  style={{
                    width: "40%",
                    height: "10px",
                    backgroundColor: "green",
                    marginTop: "0px",
                  }}
                ></p>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "180px",
                  border: "1px solid gray",
                  height: "10px",
                  borderRadius: "4px",
                }}
              >
                <p
                  style={{
                    width: "8%",
                    height: "10px",
                    backgroundColor: "yellow",
                    marginTop: "0px",
                  }}
                ></p>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "180px",
                  border: "1px solid gray",
                  height: "10px",
                  borderRadius: "4px",
                }}
              >
                <p
                  style={{
                    width: "10%",
                    height: "10px",
                    backgroundColor: "red",
                    marginTop: "0px",
                  }}
                ></p>
              </div>
            </div>
          </div>
          <div
            style={{
              border: "1px solid gray",
              display: "grid",
              gridTemplateColumns: "repeat(1,fr)",
              padding: "10px 20px",
            }}
          >
            <h3>Product Reviews</h3>
            <div>
              <div>
                <div style={{ display: "flex" }}>
                  <h4
                    style={{
                      background: "green",
                      width: "30px",
                      textAlign: "center",
                      borderRadius: "10px",
                    }}
                  >
                    5*
                  </h4>
                  <h4 style={{ color: "black", marginLeft: "16px" }}>
                    very tasty and healthy drink
                  </h4>
                </div>
                <p style={{ marginTop: "-10px" }}>
                  an excellent healthy and tasty energy drink
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "50% 10%",
                    justifyContent: "space-between",
                    marginTop: "-18px",
                  }}
                >
                  <p style={{ color: "gray", fontSize: "12px" }}>
                    Maaz Asjad, (2 months ago)
                  </p>
                  <div style={{ width: "100%", display: "flex", gap: "10px" }}>
                    <button
                      style={{
                        width: "40%",
                        height: "40px",
                        border: "none",
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        style={{ width: "80%%", height: "70%" }}
                        src="https://cdn-icons-png.flaticon.com/128/9758/9758347.png"
                        alt=""
                      />
                    </button>
                    <button
                      style={{
                        width: "40%",
                        height: "40px",
                        borderRadius: "50%",
                        border: "none",
                      }}
                    >
                      <img
                        style={{ width: "70%", height: "70%" }}
                        src="https://cdn-icons-png.flaticon.com/128/2814/2814368.png"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <div style={{ display: "flex" }}>
                  <h4
                    style={{
                      background: "green",
                      width: "30px",
                      textAlign: "center",
                      borderRadius: "10px",
                    }}
                  >
                    4*
                  </h4>
                  <h4 style={{ color: "black", marginLeft: "16px" }}>
                    I like this product
                  </h4>
                </div>
                <p style={{ marginTop: "-10px" }}>Awesome Product ?</p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "50% 10%",
                    justifyContent: "space-between",
                    marginTop: "-18px",
                  }}
                >
                  <p style={{ color: "gray", fontSize: "12px" }}>
                    Prasad Rao, (5 months ago)
                  </p>
                  <div style={{ width: "100%", display: "flex", gap: "10px" }}>
                    <button
                      style={{
                        width: "40%",
                        height: "40px",
                        border: "none",
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        style={{ width: "80%%", height: "70%" }}
                        src="https://cdn-icons-png.flaticon.com/128/9758/9758347.png"
                        alt=""
                      />
                    </button>
                    <button
                      style={{
                        width: "40%",
                        height: "40px",
                        borderRadius: "50%",
                        border: "none",
                      }}
                    >
                      <img
                        style={{ width: "70%", height: "70%" }}
                        src="https://cdn-icons-png.flaticon.com/128/2814/2814368.png"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <div style={{ display: "flex" }}>
                  <h4
                    style={{
                      background: "green",
                      width: "30px",
                      textAlign: "center",
                      borderRadius: "10px",
                    }}
                  >
                    5*
                  </h4>
                  <h4 style={{ color: "black", marginLeft: "16px" }}>
                    average
                  </h4>
                </div>
                <p style={{ marginTop: "-10px" }}>
                  product received on MRP, it is not consumer friendly
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "50% 10%",
                    justifyContent: "space-between",
                    marginTop: "-18px",
                  }}
                >
                  <p style={{ color: "gray", fontSize: "12px" }}>
                    Parshuram, Surat(4 months ago)
                  </p>
                  <div style={{ width: "100%", display: "flex", gap: "10px" }}>
                    <button
                      style={{
                        width: "40%",
                        height: "40px",
                        border: "none",
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        style={{ width: "80%%", height: "70%" }}
                        src="https://cdn-icons-png.flaticon.com/128/9758/9758347.png"
                        alt=""
                      />
                    </button>
                    <button
                      style={{
                        width: "40%",
                        height: "40px",
                        borderRadius: "50%",
                        border: "none",
                      }}
                    >
                      <img
                        style={{ width: "70%", height: "70%" }}
                        src="https://cdn-icons-png.flaticon.com/128/2814/2814368.png"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <div style={{ display: "flex" }}>
                  <h4
                    style={{
                      background: "green",
                      width: "30px",
                      textAlign: "center",
                      borderRadius: "10px",
                    }}
                  >
                    5*
                  </h4>
                  <h4 style={{ color: "black", marginLeft: "16px" }}>
                    I am fully satisfied
                  </h4>
                </div>
                <p style={{ marginTop: "-10px" }}>Very very good service</p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "50% 10%",
                    justifyContent: "space-between",
                    marginTop: "-18px",
                  }}
                >
                  <p style={{ color: "gray", fontSize: "12px" }}>
                    Debasis Banerjee, Kolkata Rural(3 months ago)
                  </p>
                  <div style={{ width: "100%", display: "flex", gap: "10px" }}>
                    <button
                      style={{
                        width: "40%",
                        height: "40px",
                        border: "none",
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        style={{ width: "80%%", height: "70%" }}
                        src="https://cdn-icons-png.flaticon.com/128/9758/9758347.png"
                        alt=""
                      />
                    </button>
                    <button
                      style={{
                        width: "40%",
                        height: "40px",
                        borderRadius: "50%",
                        border: "none",
                      }}
                    >
                      <img
                        style={{ width: "70%", height: "70%" }}
                        src="https://cdn-icons-png.flaticon.com/128/2814/2814368.png"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "40px" }}>
        <h2 style={{ textAlign: "center" }}>You may like to view more in</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
          <button style={{ padding: "10px 20px", borderRadius: "20px" }}>
            COUNTRY OF ORIGIN: India{" "}
          </button>
          <button style={{ padding: "10px 20px", borderRadius: "20px" }}>
            FOOD PREFERENCE :Vegetarian
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
