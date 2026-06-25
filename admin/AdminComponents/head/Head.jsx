import img1 from "../../../src/pages/login/img/one.jpg";

function Head() {
  return (
    <div className="w-[100%] pt-[10px]">
      <div className="w-[130px] flex justify-between">
        <div className="flex p-[6px] backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl gap-[10px] items-center ">
          <div
            className="admin overflow-hidden rounded-[50%] h-[40px] w-[40px]
          "
          >
            <img src={img1} alt="admin photo" className="w-[100px]" />
          </div>
          <p className="text-white">Admin</p>
        </div>

      </div>
    </div>
  );
}

export default Head;
