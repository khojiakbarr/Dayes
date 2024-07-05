import { Carousel } from "flowbite-react";
import "../components/styles.css";
import KinoCard from "../components/KinoCard";
import { Link } from "react-router-dom";

export default function Home() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="flex flex-col">
      <div className=" w-full h-[400px] relative rounded-[20px] primiyerCard p-[10px]">
        <h1 className="font-[500] text-[35px] text-blue-500">PREMYERALAR</h1>
        <Link to={"kino"}>
          <Carousel className="h-[300px]">
            <img
              src="https://kinofilmcollection.com/userFiles/uploads/KFC_1920x1080_A.jpg"
              alt=""
            />
            <img
              src="https://kinofilmcollection.com/userFiles/uploads/KFC_1920x1080_A.jpg"
              alt=""
            />
            <img
              src="https://kinofilmcollection.com/userFiles/uploads/KFC_1920x1080_A.jpg"
              alt=""
            />
          </Carousel>
        </Link>
      </div>
      <div className="flex justify-between flex-wrap gap-[20px] mt-[40px] ">
        {arr.map((a) => (
          <Link to={"kino"}>
            <KinoCard key={a} />
          </Link>
        ))}
      </div>
    </div>
  );
}
{
  /* <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel indicators={true}>
          <img src={image} alt="..." />
          <img src={image} alt="..." />
          <img src={image} alt="..." />
          <img src={image} alt="..." />
          <img src={image} alt="..." />
        </Carousel>
      </div> */
}
