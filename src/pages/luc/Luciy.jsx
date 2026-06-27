import { useEffect, useState } from "react";
import { api } from "../../hooks/axios";

function Luciy() {
  async function getapi() {
    try {
      const res = await api.get("/animes");
      const data = await res.data;

      setData(data);
    } catch (error) {}
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    document.title = "OTAKU-HUB | Random Anime";
  });

  useEffect(() => {
    getapi();
  }, []);
  return (
    <div>
      <div className=" bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-[20px]">
        <p className="text-yellow-300 text-1xl">
          |"Tasavvur qiling... Siz sevgan animengizni endigina tugatdingiz.
          Kayfiyatingiz a'lo, lekin endi bitta savol paydo bo'ladi: "Keyingi
          qaysi animeni ko'raman?" Narutomi? Bleachmi? Yoki boshqa bir anime?
          Tanlovlar juda ko'p. Har birini ko'rib chiqishga vaqt ketadi va
          oxir-oqibat qaysi birini tanlashni bilmay qolasiz. Shu sababli Lucky
          yaratildi."|
        </p>
        <h2 className="text-4xl text-gray-300 ">Bu page nima qiladi?</h2>
      </div>
      <div className="flex bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-3 gap-[10px]">
        {data.map((item) => {
          return (
            <div
              className=" flex flex-col  justify-between items-center  bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg "
              key={item.id}
            >
              <img
                src={item.image}
                alt=""
                className=" w-[240px] rounded-2xl h-full"
              />
            </div>
          );
        })}
      </div>
      <button className="flex bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg">
        click
      </button>
    </div>
  );
}

export default Luciy;
