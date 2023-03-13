import withLayout from "@hoc/withLayout";
import Spinner from "components/icon/Spinner";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Materi() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllMateri = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/materi`);
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || defaultError);
        }
        setData(data.data);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getAllMateri();
  }, []);

  return (
    <div className="wrapper">
      {!loading && (!data || data.length == 0) && (
        <p className="py-20 text-xl text-gray-700 text-center">
          Tidak ada data
        </p>
      )}
      {loading && <Spinner />}
      {data && data.length > 0 && (
        <div>
          {data.map((v) => (
            // eslint-disable-next-line @next/next/link-passhref
            <Link href={"/materi/"+v.url} key={v.id} className="border rounded-xl bg-gradient-to-r from-second to-indigo-900 px-6 py-3.5 mb-6 hover:scale-102 block">
              <p className="text-gray-200 text-xl">{v.judul}</p>
              <p className="text-gray-400 mt-2 text-base">{v.deskripsi}</p>
              <div className="btn-ter py-1.5 px-5 mt-3 inline-block">Lihat semua materi </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default withLayout(Materi);
