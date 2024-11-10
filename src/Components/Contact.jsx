import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <>
      <div>
        <h3 className="p-6 font-bold text-2xl"> ClothHub: Your Ultimate Destination for Trendy and Affordable Fashion</h3>
        <p className="p-6 text-xl">
          Welcome to ClothHub, where style meets affordability! Discover an
          extensive collection of clothing for every occasion—whether you’re
          looking for casual wear, work essentials, or statement pieces for a
          night out, ClothHub has you covered. Our curated selection combines
          quality and the latest trends, making it easy to find styles that fit
          your personality and budget. With user-friendly browsing, detailed
          sizing guides, and a seamless checkout experience, shopping for your
          favorite looks has never been easier. Join ClothHub and elevate your
          wardrobe with pieces that make you look and feel great!
        </p>
      </div>
    <div className="flex gap-4 justify-center mt-10 p-6 flex-wrap">

      <a href="https://www.instagram.com/clothhub03/" className="flex gap-2 text-2xl items-center">
        <h1>Instagram</h1>
        <InstagramIcon fontSize="large" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61568254901212&mibextid=LQQJ4d" className="flex gap-2 text-2xl items-center">
        <h1>FaceBook</h1>
        <FacebookIcon fontSize="large" />
      </a>
      <a href="mailto:clothinghub67@gmail.com" target="_blank" className="flex gap-2 text-2xl items-center">
        <h1>Email</h1>
        <EmailIcon fontSize="large" />
      </a>
    </div>
    </>
  );
};

export default Contact;
