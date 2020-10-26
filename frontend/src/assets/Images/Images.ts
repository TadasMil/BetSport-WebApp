import { ISliderImage } from "../../Interfaces/ISliderImage";

export const Images: ISliderImage[] = [
  {
    id: 1,
    url: process.env.PUBLIC_URL + "images/home-slider.png",
    text: "Nepralošk savo santaupų!",
  },
  {
    id: 2,
    url: process.env.PUBLIC_URL + "images/home-slider1.png",
    text: "Pakviesk draugą ir gauk papilodmų taškų!",
  },
  {
    id: 3,
    url: process.env.PUBLIC_URL + "images/home-slider2.png",
    text: "Žaisk ir laimėk!",
  },
];
