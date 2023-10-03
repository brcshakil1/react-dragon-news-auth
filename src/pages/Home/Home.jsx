import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import Header from "./../Shared/Header/Header";
import RightSideNav from "./../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
        <div className="col-span-1 border">
          <LeftSideNav />
        </div>
        <div className="md:col-span-2 border">
          <h2>news coming soon</h2>
        </div>
        <div className="col-span-1 border">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
