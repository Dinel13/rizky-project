import ModalLogin from "components/admin/ModalLogin";
import Footer from "components/layout/Footer";
import HeaderAdmin from "components/layout/HeaderAdmin";
import { useAuth } from "store/context";

const withAdmin = (WrappedComponent) => {
  const Layout = (props) => {
    const { token } = useAuth();

    return (
      <>
        {!token && <ModalLogin />}
        <HeaderAdmin />
        <main className="text-sm text-gray-600" style={{ minHeight: "83vh" }}>
          <WrappedComponent {...props} />;
        </main>
        <Footer />
      </>
    );
  };

  return Layout;
};

export default withAdmin;
