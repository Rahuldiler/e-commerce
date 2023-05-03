import React from "react";
import bannermain from "./images/bannermain.png";
import Layout from "./reusable/Layout";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CarouselSlider from "./reusable/Carousel";
import { Carousel } from "react-bootstrap";
const Div = styled.div`
    position:absolute;
    top:50%;
    text-align:center;
    right:0%;
    transform:translate(-10%,-50%);
    background:transparent;
    padding:2rem 5rem;
  > h2 {
    font-size: 4rem;
    font-family: "SignikaSemiBold";
    color:#184375;
    margin-bottom:2rem;
  }
  >a{
    background:#fff;
    color:#333;
    font-size:16px;
    font-family: "SignikaSemiBold";
    padding:8px 20px;
  }
  @media (max-width: 768px) {
    transform:translate(-10%,-50%);
     > h2 {
    font-size: 2rem;
    margin-bottom:0.5rem;
    }
  }
  @media (max-width: 568px) {
      top:50%
      padding:0;
      left:50%
      transform:translate(-50%,-50%);
     > h2 {
    margin-bottom:0.5rem;
    }
    >a{
    font-size:14px;
    padding:6px 20px;
  }
  }
  
 
`;

const Home = () =>
{
  return (
    <Layout>
      <section className="banner_section">
        <img src={bannermain} className="w-100" alt="manProductBannner" />
        <Div>
          <h2>
            Fall & Winter
          </h2>
          <NavLink to="/products">Shop Now</NavLink>
        </Div>
      </section>
      <section className="top_trending">
        <CarouselSlider />
      </section>

      <section className="what_we_do">

        <div className="container-fluid">
          <h3>What Our Customer Says</h3>
          <Carousel>
            <Carousel.Item>
              <div className="row g-0">
                <div className="col-sm-6">
                  <img class="d-block w-100" src={bannermain} alt="bannermain slide" />
                </div>
                <div className="col-sm-6 what_right">
                  <h2>Rohan Rashtogi</h2>
                  <p>
                    <span>
                      "
                    </span>
                    <span className="ps-1">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Impedit omnis eveniet incidunt deserunt autem magnam
                      voluptatibus eaque facere ab cumque architecto maiores odit,
                      voluptas minus veniam est iure, vitae accusantium! "
                    </span>
                  </p>
                  <div className="reviews_wrapper">
                    <div className="rating">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row g-0">
                <div className="col-sm-6">
                  <img class="d-block w-100" src={bannermain} alt="bannermain slide" />
                </div>
                <div className="col-sm-6 what_right">
                  <h2>Adarsh Singh</h2>
                  <p>
                    <span>
                      "
                    </span>
                    <span className="ps-1">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Impedit omnis eveniet incidunt deserunt autem magnam
                      voluptatibus eaque facere ab cumque architecto maiores odit,
                      voluptas minus veniam est iure, vitae accusantium! "
                    </span>
                  </p>
                  <div className="reviews_wrapper">
                    <div className="rating">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                    {/* <div className="comments">
                        <p>
                          <Link class="btn" href="#" onClick={(event) =>
                          {
                            event.preventDefault()
                            setVisible(!visible)
                          }}>
                            View Comment
                          </Link>
                        </p>
                        <div class="collapse" visible={visible}>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson cred
                          nesciunt sapiente ea proident.
                        </div>
                      </div> */}
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row g-0">
                <div className="col-sm-6">
                  <img class="d-block w-100" src={bannermain} alt="bannermain slide" />
                </div>
                <div className="col-sm-6 what_right">
                  <h2>Shilpi Gupta</h2>
                  <p>
                    <span>
                      "
                    </span>
                    <span className="ps-1">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Impedit omnis eveniet incidunt deserunt autem magnam
                      voluptatibus eaque facere ab cumque architecto maiores odit,
                      voluptas minus veniam est iure, vitae accusantium! "
                    </span>
                  </p>
                  <div className="reviews_wrapper">
                    <div className="rating">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

    </Layout>
  );
};

export default Home;
