import React, { useEffect, useState } from "react";
import "../App.css";
import { Button, Heading } from '@chakra-ui/react'
import axios from "axios";
// import ProductDetails from "./ProductDetails";
const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const [basket,setBasket]=useState(0);
  let id = "608";

  let num = Number(singleProduct.price) / 250;
  num = num.toFixed(2);

  // https://fakestoreapi.com/products/${id}
  const getSingleProduct = () => {
    axios
      .get(`http://localhost:3000/all_products/${id}`)
      .then((res) => setSingleProduct(res.data));
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const handleClick=(e)=>{
    setBasket((prev)=>prev+1);
    // console.log(e);
  }
  
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
          <button style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:"4px 10px",borderRadius:"5px"}}>Fresho</button>
          <h3 style={{ fontSize: "26px" }}>{singleProduct.title}</h3>
          <h3>
            Price: ₹ {singleProduct.price}{" "}
            <span style={{ fontWeight: "normal", fontSize: "14px" }}>
              {" "}
              (₹ {num}/g)
            </span>
          </h3>
          <p style={{ color: "red", fontSize:"20px" }}>
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
                padding: "12px 58px",
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
                padding: "10px 58px",
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
              <p style={{ fontWeight: "bold", fontSize: "16px" }}>
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
                padding: "10px 0 10px 10px",
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
                padding: "10px 0 10px 10px"
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
                padding: "10px 0 10px 10px"
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
      <div style={{marginTop:"16px",marginBottom:"14px"}}>
      <Heading as='h3' size='md'>
    Why Choose Bigbasket
  </Heading>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)",marginTop:"10px" }}>
          <div style={{textAlign:"center", display:"grid", gridTemplateColumns:"repeat(1,auto)",justifyContent:"center"}}>
            <img
              style={{ width: "100px" }}
              src="https://cdn-icons-png.flaticon.com/128/5959/5959993.png"
              alt=""
            />
            <Heading as='h5' size='sm'>Quality</Heading>
            <p style={{ fontSize: "14px" }}>You can trust</p>
          </div>
          <div style={{textAlign:"center", display:"grid", gridTemplateColumns:"repeat(1,auto)",justifyContent:"center"}}>
            <img
              style={{ width: "100px" }}
              src="https://cdn-icons-png.flaticon.com/128/86/86093.png"
              alt=""
            />
            <Heading as='h5' size='sm'>On time</Heading>
            <p style={{ fontSize: "14px" }}>Guarantee</p>
          </div>
          <div style={{textAlign:"center", display:"grid", gridTemplateColumns:"repeat(1,auto)",justifyContent:"center"}}>
            <img
              style={{ width: "100px" }}
              src="https://cdn-icons-png.flaticon.com/128/411/411776.png"
              alt=""
            />
            <Heading as='h5' size='sm'>Free</Heading>
            <p style={{ fontSize: "14px" }}>Delivery</p>
          </div>
          <div style={{textAlign:"center", display:"grid", gridTemplateColumns:"repeat(1,auto)",justifyContent:"center"}}>
            <img
              style={{ width: "100px" }}
              src="https://cdn-icons-png.flaticon.com/128/9408/9408601.png"
              alt=""
            />
            <Heading as='h5' size='sm'>Return Policy</Heading>
            <p style={{ fontSize: "14px" }}>No Question asked</p>
          </div>
        </div>
      </div>

      <Heading as='h3' size='md' >{singleProduct.title}</Heading>
      <div style={{ border: "1px solid gray", padding: "0px 5px", marginTop:"10px" }}>
        <div>
        <Heading as='h6' size='sm' mb="10px">About the Product</Heading>
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
        <Heading as='h5' size='sm' mb="10px">Ingredients</Heading>
          <p style={{ textAlign: "justify", fontSize: "14px" }}>
            Malt Extract (50%), Sugar, Milk Solids, Maltodextrin, Cocoa Solids,
            Emulsifiers (471, 322), Raising agent (500(ii)), Vitamins, Minerals,
            Salt. Contains Permitted Natural Colour (150 c) and Added flavour
            (Natural Identical Flavouring Substances).
          </p>
        </div>
        <hr />
        <div>
        <Heading as='h5' size='sm' > Nutritional Facts</Heading>
          <p style={{ textAlign: "justify", fontSize: "16px" }}>
            {" "}
            Values per 100 gm
          </p>
          <ul
            style={{
              textAlign: "justify",
              fontSize: "12px",
              marginLeft:"18px"
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
        <Heading as='h5' size='sm' mb="10px">How to Use</Heading>
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
        <Heading as='h5' size='sm' mb="4px">Other Product Info</Heading>
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
        <div style={{ display: "grid", gridTemplateColumns: "400px 780px",marginTop:"20px", }}>
          <div
            style={{
              width: "280px",
              
              height: "240px",
              border: "1px solid gray",
              display: "grid",
              justifyContent:"center",
              alignItems:"center",
              padding:"20px 0px",
              marginBottom:"20px"
            }}
          >
            <Heading as='h3' size='lg' color= "rgb(7, 111, 7)" mt="-10px">4.2 *</Heading>
            <p style={{ marginTop: "-20px",marginBottom:"-10px" }}>814 reviews & 21 reviews</p>
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
            <Heading as='h5' size='sm' mb="10px">Product Reviews</Heading>
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
                  <Heading as='h5' size='sm' ml="10px">  very tasty and healthy drink</Heading>
                  
                  
                </div>
                <p >
                  an excellent healthy and tasty energy drink
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "50% 10%",
                    justifyContent: "space-between",
                    alignItems:"center"
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
                  <Heading as='h5' size='sm' ml="10px">  I like this product</Heading>
                  </div>
                <p>Awesome Product ?</p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "50% 10%",
                    justifyContent: "space-between",
                    alignItems:"center"
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
                  <Heading as='h5' size='sm' ml="10px">Average Product</Heading>
                </div>
                <p>
                  product received on MRP, it is not consumer friendly
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "50% 10%",
                    justifyContent: "space-between",
                    alignItems:"center"
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
                  <Heading as='h5' size='sm' ml="10px">I am fully satisfied</Heading>
                </div>
                <p>Very very good service</p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "50% 10%",
                    justifyContent: "space-between",
                    alignItems:"center"
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
      <Heading as='h3' size='md' mb="10px" textAlign="center">You may like to view more in</Heading>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
          <Button style={{ padding: "10px 20px", borderRadius: "20px" }}>
            COUNTRY OF ORIGIN: India{" "}
          </Button>
          <Button borderRadius="16px">
            FOOD PREFERENCE :Vegetarian
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
