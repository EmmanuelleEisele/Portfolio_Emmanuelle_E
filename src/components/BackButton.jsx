
import { IoArrowBackOutline } from "react-icons/io5";

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="text-gray-200 hover:scale-110 ease-in-out duration-200 w-fit"
    >
      <IoArrowBackOutline className="w-6 h-6" size={35}/>
    </button> 
  );
}