import Footer from "components/layout/Footer";
import Header from "components/layout/Header";

const withLayout = (WrappedComponent) => {
  const Layout = (props) => (
    <>
      <Header />
      <main className="text-sm text-gray-600" style={{ minHeight: "83vh" }}>
        <WrappedComponent {...props} />;
      </main>
      <Footer />
    </>
  );

  return Layout;
};

export default withLayout;
