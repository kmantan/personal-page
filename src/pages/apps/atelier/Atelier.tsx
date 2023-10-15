import ScrollForMore from "../../../commonFunctionalities/ScrollForMore.jsx";

export default function Atelier() {
  return (
    <>
      <h2
        className="mb-10"
        onClick={() => window.open("https://github.com/kmantan/Atelier")}
      >
        Atelier
      </h2>
      <div className="relative w-full flex flex-col items-center justify-center overflow-hidden h-full">
        <div className="container">
          <iframe
            className="responsive-iframe"
            src="https://www.youtube.com/embed/7eDj7nY_trY"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </>
  );
}
