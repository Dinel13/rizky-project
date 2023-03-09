import Footer from "components/layout/Footer";
import Header from "components/layout/Header";

const withVideo = (WrappedComponent) => {
  const Layout = (props) => {
    const [isSidebarHidden, setIsSidebarHidden] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarHidden(!isSidebarHidden);
    };
  
    return (
      <div className="flex h-screen bg-gray-200">
        <div
          className={`flex flex-col w-64 bg-gray-800 ${
            isSidebarHidden ? 'hidden' : ''
          }`}
        >
          {/* Sidebar content here */}
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Main content here */}
          <button onClick={toggleSidebar}>Toggle Sidebar</button>
        </div>
      </div>
    );
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

export default withVideo;
