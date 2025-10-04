

// import React from "react";
// // import Header from "./Header";
// import Header from "../Components/header";
// import Footer from "../Components/footer";
// // import Slider from "../Components/Slider";
// import Body from "../Components/body";

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <Header />

//       <div className="dashboard-container">
//         <div className="dashboard-body">
//           <Body />
//         </div>

//         {/* <Slider /> */}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Dashboard;





import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import Body from "../Components/body";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />

      <div className="dashboard-container">
        <div className="dashboard-body">
          <Body />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
