import React, { useEffect } from "react";

function Top() {
  useEffect(() => {
    document.title = "OTAKU-HUB | Top";
  });
  return (
    <div className="w-[100%]">
      <table className="w-full border-separate border-spacing-2">
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
          <tr>
            <td className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              index berilsin
            </td>
            <td className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              img berilsin
            </td>
            <td className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              Yolg`izlikda daaraja ko`tarish
            </td>
            <td className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              10/4
            </td>
            <td className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              layk bosilgan yoki yo`q`
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Top;
