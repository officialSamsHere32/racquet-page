import Logo from "../assets/Presslogo.svg";
import Logo2 from "../assets/Presslogo1.svg";
import Logo3 from "../assets/Presslogo2.svg";
import Logo4 from "../assets/Presslogo3.svg";
import Logo5 from "../assets/Presslogo4.svg";
import imageAbout1 from "../assets/BannerBackground.png";
import imageAbout2 from "../assets/Img2.png";
import imageAbout3 from "../assets/Img3.png";

export { Logo, Logo2, Logo3, Logo4, Logo5 };

export const cardRContent = () => [
  {
    id: "1",
    nama: "Networking through sport",
    image: imageAbout1,
    objectPosition: "object-top", // ← Cuma yang ini aja
    textTransform: "",
  },
  {
    id: "2",
    nama: "Inter company leagues",
    image: imageAbout2,
    objectPosition: "object-cover", // ← Tetap default
    textTransform: "",
  },
  {
    id: "3",
    nama: "Competitive tournaments",
    image: imageAbout3,
    objectPosition: "object-cover", // ← Tetap default
    textTransform: "",
  },
];
