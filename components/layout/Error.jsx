import Link from "next/link";

const Error = ({ value, error }) => (
  <>
    <h3 className="text-lg text-center mx-auto my-20">
      Gagal mendapatkan data {value}, coba lagi nanti
    </h3>
    {error && <h2 className="text-lg text-center mx-auto my-20">{error}</h2>}
    <div className="flex justify-center">
      <Link href="/">
        <a className="px-4 py-2 btn-3">Kembali ke beranda</a>
      </Link>
    </div>
  </>
);
export default Error;
