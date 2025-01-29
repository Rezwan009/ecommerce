import Footer from "./Footer";
import Header from "./Header";
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
