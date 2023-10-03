import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import QZone from "../../../assets/qZone1.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl font-semibold pb-3">Login with</h2>
        <div className="space-y-2">
          <button className="w-full flex items-center justify-center py-2 text-[#1D78D2] rounded-md gap-2 border border-[#1D78D2]">
            <FaGoogle />
            Login With Google
          </button>
          <button className="w-full flex items-center justify-center py-2 text-gray-700 rounded-md gap-2 border border-gray-700">
            <FaGithub />
            Login With Github
          </button>
        </div>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl font-semibold pb-3">Find Us On</h2>
        <div className="">
          <a
            href=""
            className="flex items-center gap-1 p-4 border rounded-t-lg"
          >
            <FaFacebook />
            Facebook
          </a>
          <a href="" className="flex items-center gap-1 p-4 border-x">
            <FaTwitter />
            Twitter
          </a>
          <a
            href=""
            className="flex items-center gap-1 p-4 border rounded-b-lg"
          >
            <FaInstagram />
            Instagram
          </a>
        </div>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl font-semibold pb-3">Login with</h2>
        <div className="space-y-2">
          <img src={QZone} alt="" />
          <img src={QZone} alt="" />
          <img src={QZone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
