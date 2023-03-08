import style from "./loading.module.css";

function Loading({ text }) {
  return (
    <div className="fixed inset-0 z-50 bg-gray-700 opacity-60 flex flex-col items-center justify-center">
      <div
        className={`${style.loader} ease-linear rounded-full border-8 border-t-8 border-gray-50 h-16 w-16 mb-4`}
      ></div>
      <h2 className="text-center text-white text-2xl">{text}...</h2>
    </div>
  );
}

export default Loading;
