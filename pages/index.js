import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer.";
import Image from "next/image";
import heroRectangle from "../assets/heroRectangle.png";
import im9 from '../assets/partners/im9.png'
import im10 from '../assets/partners/im10.png'
import im11 from '../assets/partners/im11.png'
import im12 from '../assets/partners/im12.png'
import im13 from '../assets/partners/im13.png'
import im14 from '../assets/partners/im14.png'
import im15 from '../assets/partners/im15.png'
import im16 from '../assets/partners/im16.png';

const images=[
  {id:1, source:im9},
  {id:2, source:im10},
  {id:3, source:im11},
  {id:4, source:im12},
  {id:5, source:im13},
  {id:6, source:im14},
  {id:7, source:im15},
  {id:8, source:im16},
]

const index = () => {

  return (
    <>
      <Header />

      <div className="p-2 mx-24">

      <section>
      <div className="flex flex-row">
        <div className="w-1/2"> 
          <p className="text-4xl font-bold">Hey Business Owners <br/> Go Digital Effortlessly</p>
          <p className="font-semibold mt-8" style={{width:"88%"}}>
            Stop being static! Scale your business by going digital, the easy
            way, with NDE. We’re technology-enabled and structured for speed and
            efficiency to meet the ever-changing needs of today’s business.
          </p>
          <button className="font-semibold h-14 w-44 mt-8 text-white text-center justify-center items-center" style={{backgroundColor:"#0011FF",borderRadius:"50px"}}>
          Get Started <span className="ml-2">{">"}</span>
          </button>
        </div>

        <div>
          <Image src={heroRectangle} alt="Picture of the author" height={400} width={450} />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-14">
        <p className="font-semibold">12,000+ global businesses trust us to transform & grow digitally</p>
        <div className="flex flex-row space-x-14 > * + * mt-10">
         {images.map((image)=>(
          <Image height={70} src={image.source} alt="partner_logo"/>
         ))}
        </div>
      </div>
      </section>

      <section className="flex flex-col justify-center items-center mt-14">
        <p className="text-4xl font-bold text-center"> <span style={{color:"#0011FF"}}> Build </span> Your Business In One <br/> Single Platform</p>

        <div className="felx flex-row">

          <div className="flex flex-col">
             <div>
              <p>Mails Now</p>
             </div>
             
             <div>
              <p>Simple Emails Better Conversions</p>
              <p>Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain warm-up, and in-depth analytics.</p>
              <a href="https://www.google.com">Know More</a>

             </div>
          </div>

        </div>


      </section>

      </div>
    </>
  );
};

export default index;
