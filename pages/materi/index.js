/* eslint-disable @next/next/link-passhref */
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
      <h1 className="text-3xl font-bold mb-4 text-main">List materi pembelajaran</h1>
      {!loading && (!data || data.length == 0) && (
        <p className="py-20 text-xl text-gray-700 text-center">
          Tidak ada data
        </p>
      )}
      {loading && <Spinner />}
      {error && <p className="text-red-500 text-xs">{error}</p>}
      {data && data.length > 0 && (
        <div className="flex flex-wrap -mx-4">
          {data.map((v) => (
            <div
              key={v.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-2"
            >
              <Link
                href={"/materi/" + v.url}
                className="rounded-xl bg-gradient-to-bl from-indigo-700 to-pink-700 px-6 py-3.5 hover:scale-102 block"
              >
                <p className="text-gray-200 text-xl">{v.judul}</p>
                <p className="text-gray-400 mt-2 text-base">{v.deskripsi}</p>
                <div className="btn-ter py-1.5 px-5 mt-3 inline-block">
                  Lihat semua materi{" "}
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default withLayout(Materi);
