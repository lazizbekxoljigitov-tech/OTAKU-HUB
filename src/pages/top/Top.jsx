import { Heart } from "lucide-react";
import { useEffect } from "react";
import img1 from "../login/img/one.jpg";

function Top() {
  useEffect(() => {
    document.title = "OTAKU-HUB | Top";
  });
  return (
    <div className="w-[100%]">
      <table className="w-full border-separate border-spacing-2 text-white">
        <tbody>
          <tr>
            <td className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 ">
              T/r
            </td>
            <td className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              img
            </td>
            <td className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              nomi
            </td>
            <td className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              rating 10/?
            </td>
            <td className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              like
            </td>
          </tr>
          <tr className=" w-[100px]">
            <td className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 h-full">
              1
            </td>
            <td className="h-full">
              <img
                src={img1}
                alt="Anime-topPhoto"
                className="w-[140px] h-[100%] rounded-xl h-full"
              />
            </td>
            <td className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 h-full">
              <p className="text-[30px]">One Peice</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                deserunt eaque vero assumenda. Nihil vel, quam commodi repellat
                esse sint necessitatibus, facilis nesciunt rerum reiciendis
              </p>
            </td>
            <td className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 h-full">
              10/4
            </td>
            <td className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 h-full">
              <Heart />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Top;
