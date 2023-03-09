import Footer from "components/layout/Footer";
import HeaderAdmin from "components/layout/HeaderAdmin";

const withAdmin = (WrappedComponent) => {
  const Layout = (props) => (
    <>
      <HeaderAdmin />
      <main className="text-sm text-gray-600" style={{ minHeight: "83vh" }}>
        <WrappedComponent {...props} />;
      </main>
      <Footer />
    </>
  );

  return Layout;
};

export default withAdmin;
