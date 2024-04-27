import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer.";
import Image from "next/image";
import heroRectangle from "../assets/heroRectangle.png";
import im9 from "../assets/partners/im9.png";
import im10 from "../assets/partners/im10.png";
import im11 from "../assets/partners/im11.png";
import im12 from "../assets/partners/im12.png";
import im13 from "../assets/partners/im13.png";
import im14 from "../assets/partners/im14.png";
import im15 from "../assets/partners/im15.png";
import im16 from "../assets/partners/im16.png";
import communication from "../assets/communication.png";
import CardBg from "../assets/cardBg.png";
import Gateway from "../assets/Gateway.png";
import Anadh from "../assets/Testimonial/Anadh.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Quote from "../assets/Testimonial/Quote.png";
import Safe from "../assets/safe.png"
import Tool from "../assets/tools.png"
import Pricing from "../assets/pricing.png"
import Experience from "../assets/experience.png"
import Customer from "../assets/customers.png"


const images = [
  { id: 1, source: im9 },
  { id: 2, source: im10 },
  { id: 3, source: im11 },
  { id: 4, source: im12 },
  { id: 5, source: im13 },
  { id: 6, source: im14 },
  { id: 7, source: im15 },
  { id: 8, source: im16 },
];

const cardData = [
  { icon: Safe, name: "Safe and Secure" },
  { icon: Tool, name: "User Friendly Tools" },
  { icon: Pricing, name: "Budget-Friendly Pricing" },
  { icon: Experience, name: "10+ Years Experience" },
  { icon: Customer, name: "12,000+ Customers" },
];

const index = () => {
  return (
    <>
      <Header />

      <div className=" ">
        <section className="" style={{background: 'linear-gradient(90.37deg, #D2D5FD 0.32%, #D8DAF8 22.3%, #EFE8E7 49.57%, #FEF3E2 99.68%)'}}>
          <div className="flex mx-24 flex-row  pt-10 pb-10 ">
            <div className="w-1/2 " style={{flex:1}}>
              <p className="text-4xl font-bold">
                Hey Business Owners <br /> Go Digital Effortlessly
              </p>
              <p className="font-semibold mt-8" style={{ width: "88%" }}>
                Stop being static! Scale your business by going digital, the
                easy way, with NDE. We’re technology-enabled and structured for
                speed and efficiency to meet the ever-changing needs of today’s
                business.
              </p>
              <button
                className="font-semibold h-14 w-44 mt-8 text-white text-center justify-center items-center"
                style={{ backgroundColor: "#0011FF", borderRadius: "50px" }}
              >
                Get Started <span className="ml-2">{">"}</span>
              </button>
            </div>

            <div flex flex-wrap  style={{flex:1}}>
              <Image
                src={heroRectangle}
                alt="Picture of the author"
                // height={400}
                // width={450}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-14">
            <p className="font-semibold ">
              12,000+ global businesses trust us to transform & grow digitally
            </p>
            <div className="flex flex-row gap-16 flex-wrap mb-14 mt-10" >
              {images.map((image) => (
                <Image height={60} src={image.source} alt="partner_logo" />
              ))}
            </div>
          </div>
        </section>

        {/* slider */}
        {/* slider */}
        {/* slider */}

        <section className="flex flex-col justify-center items-center mt-14 mx-24">
          <p className="text-4xl font-bold text-center">
            {" "}
            <span style={{ color: "#0011FF" }}> Build </span> Your Business In
            One <br /> Single Platform
          </p>
          <div className="flex flex-row mt-10" style={{ width: "33%" }}>
            <div className="felx flex-row rounded-lg  ">
              <div className="flex flex-col pl-12 pr-12 rounded-lg ">
                <div
                  className="flex flex-row justify-between  items-center p-2 "
                  style={{
                    backgroundImage: `url(${CardBg.src})`,
                    backgroundSize: "fit",
                    backgroundPosition: "center",
                  }}
                >
                  <p className="font-bold">Mails Now</p>
                  <div
                    className="bg-white-300 p-1 flex justify-center"
                    style={{ borderRadius: "50%", background: "white" }}
                  >
                    <Image
                      height={70}
                      src={communication}
                      alt="communication_logo"
                    />
                  </div>
                </div>

                <div
                  className="pl-2"
                  style={{
                    background:
                      "linear-gradient(90.37deg, #CCCFFF 0.32%, #DBDEFF 22.3%, #E5E7FF 49.57%, #F5F5FF 99.68%)",
                  }}
                >
                  <p className="font-bold">Simple Emails Better Conversions</p>
                  <p>
                    Sending emails made easy! MailsNow has it all - creating
                    email templates, robust personalisation and automation
                    options, dedicated IP, unlimited domain warm-up, and
                    in-depth analytics.
                  </p>
                  <a href="https://www.google.com">Know More</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* success
        success
        success
        success
        success */}

        <section className="mt-14 mx-24">
          <h1
            className="text-6xl font-bold text-center mt-10"
            style={{ color: "#000333" }}
          >
            Gateway to Digital Success
          </h1>
          <p
            className="text-1xl  text-center mt-2 mb-10 font-bold"
            style={{ color: "#000333" }}
          >
            'Create' your digital footprint seamlessly, 'Manage' your operations
            and connections effectively, and 'Grow' your outreach exponentially.
            Experience the power of streamlined solutions designed to Launch,
            Organize, and Amplify your business in the digital landscape.
          </p>
          <div>
            <Image src={Gateway} alt="communication_logo" />
          </div>
        </section>

        {/* 
        testimonial
        testimonial
        testimonial
        testimonial */}
        <section className="mt-14 mx-24">
          <div>
            <p className="text-1xl font-bold" style={{ color: "#494F57" }}>
              People just love working with us!
            </p>
            <p className="text-2xl font-bold" style={{ color: "#212529" }}>
              Digitalized Business Happy Customers That’s Impact
            </p>
          </div>
          <div className="flex flex-row gap-1 ">
            <div
              className="pb-6"
              style={{
                flex: 0.6,
                paddingLeft: "20px",
                background:
                  "linear-gradient(90.37deg, #CCCFFF 0.32%, #DBDEFF 22.3%, #E5E7FF 49.57%, #F5F5FF 99.68%)",
              }}
            >
              <div className="flex flex-row justity-between ">
                <div style={{ flex: 0.75 }} className="pt-2">
                  <Image src={Quote} height={25} />
                  <p>
                    “Now Digital Easy has the best customer support I have ever
                    experienced. Their team is very responsive and
                    knowledgeable. I highly recommend their products and
                    services.”
                  </p>
                </div>
                <div style={{ flex: 0.25 }}>
                  <Image src={Anadh} />
                </div>
              </div>
              <div>
                <p className="text-1xl font-bold">Anandh Michel</p>
                <p className="text-1xl ">Sales Co-ordinator</p>
              </div>
            </div>
            <div
              style={{
                flex: 0.4,
                paddingLeft: "20px",
                background:
                  "linear-gradient(90.37deg, #CCCFFF 0.32%, #DBDEFF 22.3%, #E5E7FF 49.57%, #F5F5FF 99.68%)",
              }}
            >
              <div className="flex flex-row justity-between">
                <div style={{ flex: 0.75 }} className="pt-2">
                  <Image src={Quote} height={25} />
                  <p>
                    “Now Digital Easy has the best customer support I have ever
                    experienced. Their team is very responsive and
                    knowledgeable. I highly recommend their products and
                    services.”
                  </p>
                </div>
                <div style={{ flex: 0.25 }}>
                  <Image src={Anadh} />
                </div>
              </div>
              <div>
                <p className="text-1xl font-bold">Anandh Michel</p>
                <p className="text-1xl ">Sales Co-ordinator</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-1 mt-2">
            <div
              className="pb-6"
              style={{
                flex: 0.4,
                paddingLeft: "20px",
                background:
                  "linear-gradient(90.37deg, #CCCFFF 0.32%, #DBDEFF 22.3%, #E5E7FF 49.57%, #F5F5FF 99.68%)",
              }}
            >
              <div className="flex flex-row justity-between">
                <div style={{ flex: 0.75 }} className="pt-2">
                  <Image src={Quote} height={25} />
                  <p>
                    “Now Digital Easy has the best customer support I have ever
                    experienced. Their team is very responsive and
                    knowledgeable. I highly recommend their products and
                    services.”
                  </p>
                </div>
                <div style={{ flex: 0.25 }}>
                  <Image src={Anadh} />
                </div>
              </div>
              <div>
                <p className="text-1xl font-bold">Anandh Michel</p>
                <p className="text-1xl ">Sales Co-ordinator</p>
              </div>
            </div>
            <div
              className="pb-6"
              style={{
                flex: 0.6,
                paddingLeft: "20px",
                background:
                  "linear-gradient(90.37deg, #CCCFFF 0.32%, #DBDEFF 22.3%, #E5E7FF 49.57%, #F5F5FF 99.68%)",
              }}
            >
              <div className="flex flex-row justity-between">
                <div style={{ flex: 0.75 }} className="pt-2">
                  <Image src={Quote} height={25} />
                  <p>
                    “Now Digital Easy has the best customer support I have ever
                    experienced. Their team is very responsive and
                    knowledgeable. I highly recommend their products and
                    services.”
                  </p>
                </div>
                <div style={{ flex: 0.25 }}>
                  <Image src={Anadh} />
                </div>
              </div>
              <div>
                <p className="text-1xl font-bold">Anandh Michel</p>
                <p className="text-1xl ">Sales Co-ordinator</p>
              </div>
            </div>
          </div>
        </section>

        {/* results
        results
        results
        results */}
        <section className="mt-14 mx-24">
          <h1
            className="text-6xl font-bold text-center mt-10"
            style={{ color: "#363b4c" }}
          >
            Business hire us because of the result of we provide.
          </h1>

          <div className="flex justify-center">
            <p
              className="text-1xl  text-center mt-2 mb-10 font-semibold "
              style={{ color: "#363b4c", width: "60%" }}
            >
              We transform businesses wholly, across all the digital
              touch-points with targeted, highly relevant and personalized
              experiences.
            </p>
          </div>
          <div className="flex flex-row gap-5">
            <div
              style={{
                flex: 0.7,
                background:
                  " radial-gradient(50% 65.66% at 50% 48.3%, #E5E7FF 0%, #FFFFFF 100%) ",
              }}
            ></div>
            <div style={{ flex: 0.3 }} className="flex flex-col gap-1">
              {cardData.map((card, index) => (
                <div key={index} className="flex flex-row  px-10 py-5 gap-3"
                style={{background:'#f8f9fa', borderRadius:16}}>
                  <Image src={card.icon} height={30}/>
                  <div className="font-bold">{card.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
