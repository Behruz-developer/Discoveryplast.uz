import { Outlet } from "react-router";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import Form from "../Components/Form/Form";
import Map from "../Components/Map/Map";

const HomeLoyout = () => {
  return (
    <div>
      <Nav />

      <Outlet />
      <Form />
      <Map />
      <Footer />
    </div>
  );
};

export default HomeLoyout;
