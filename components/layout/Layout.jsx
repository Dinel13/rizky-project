import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  const router = useRouter();
  const tryout = router.asPath.split("/")[1] === "try-out";

  return (
    <>
      <Header />
      <main className="text-sm text-gray-600" style={{ minHeight: "83vh" }}>
        {props.children}
      </main>
      <a
        href="https://api.whatsapp.com/send?phone=6285242868145&text=Halo%20Ruki.%0ASaya%20ingin%20bertanya%20tentang%20tryout%20di%20ruki"
        className={`${
          tryout ? "bottom-20" : "bottom-7"
        } fixed right-5 z-30 rounded-full bg-green-600 flex flex-co 
        justify-center items-center shadow-lg border-green-700 shadow-slate-500`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/images/wa.png" width={52} height={52} alt="wa" />
        {/* <div className="pr-2.5">
          <p className="text-white text-sm leading-4">Hubungi</p>
          <p className="text-white text-sm leading-4">admin</p>
        </div> */}
      </a>
      <Footer />
    </>
  );
}

export default Layout;
