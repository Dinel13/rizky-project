import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import HeaderAdmin from "components/layout/HeaderAdmin";
import { useAuth } from "store/context";

const withLayout = (WrappedComponent) => {
  const Layout = (props) => {
    const { token } = useAuth();
    return (
      <>
        {!token ? <Header /> : <HeaderAdmin />}
        <main className="text-sm text-gray-600" style={{ minHeight: "83vh" }}>
          <WrappedComponent {...props} />;
        </main>
        <Footer />
      </>
    );
  };

  return Layout;
};

export default withLayout;
