import { SwiperSlide, Swiper } from "swiper/react";
import img1 from "../../pages/login/img/one.jpg";
import img2 from "../../pages/login/img/two.jpg";
import { Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { TrendingUp, Clock, Sparkles } from "lucide-react";
const Hero = () => {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   try {
  //     const res = api.get("animes");
  //     setData(res.data)
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // });
  return (
    <div className="w-[100%]  h-[480px] p-[20px] rounded-4xl bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl  ">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        speed={400}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        className="w-full h-[490px] rounded-3xl"
      >
        <SwiperSlide className="h-full flex rounded-4xl">
          <div className="flex w-full justify-between  rounded-4xl p-[10px] gap-[90px]">
            <img
              src={img1}
              alt="Anime Photo"
              className="w-[260px] h-[400px] rounded-4xl transition-all duration-200 "
            />
            <div className="flex flex-col items-end gap-[30px] p-[30px]   bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl">
              <h1 className="text-[50px] text-white font-bold">One Peice</h1>
              <p className="text-white ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                eveniet libero illo atque debitis maxime sed necessitatibus hic
                placeat impedit, aliquid exercitationem error, optio beatae
                earum consectetur quod esse? Aliquid cum repellendus ab
                architecto temporibus, deserunt quasi nulla amet eligendi
                aperiam in quis atque deleniti possimus harum repudiandae earum
                quisquam vitae labore aliquam placeat eaque.
              </p>
              <div className="flex gap-[20px] items-center">
                <div className="flex gap-[20px]">
                  <div className="flex gap-[7px] rounded-4xl bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl p-[6px]">
                    <TrendingUp color="white" />
                    <p className="text-white">8.3</p>
                  </div>
                  <div className="flex gap-[7px] rounded-4xl bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl p-[6px]">
                    <Clock color="white" />
                    <p className="text-white">24</p>
                  </div>
                  <div className="flex gap-[7px] rounded-4xl bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl p-[6px]">
                    <Sparkles color="white" />
                    <p className="text-white">Yangi</p>
                  </div>
                </div>
                <NavLink
                  className={
                    "text-[20px] text-white border-white border-[0.1px] p-[10px] rounded-4xl cursor-pointer transition duration-200 hover:bg-gray-600 "
                  }
                >
                  Anime About
                </NavLink>
                <NavLink
                  className={
                    "text-[20px] text-white border-white border-[0.1px] p-[10px] rounded-4xl cursor-pointer transition duration-200 hover:bg-amber-600 "
                  }
                >
                  Watch Anime
                </NavLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full flex rounded-4xl">
          <div className="flex w-full justify-between  rounded-4xl p-[10px] gap-[90px]">
            <img
              src={img2}
              alt="Anime Photo"
              className="w-[260px] h-[400px] rounded-4xl transition-all duration-200 "
            />
            <div className="flex flex-col items-end gap-[30px] p-[30px]  rounded-4xl bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl">
              <h1 className="text-[50px] text-white font-bold">One Peice</h1>
              <p className="text-white ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                eveniet libero illo atque debitis maxime sed necessitatibus hic
                placeat impedit, aliquid exercitationem error, optio beatae
                earum consectetur quod esse? Aliquid cum repellendus ab
                architecto temporibus, deserunt quasi nulla amet eligendi
                aperiam in quis atque deleniti possimus harum repudiandae earum
                quisquam vitae labore aliquam placeat eaque.
              </p>
              <div className="flex gap-[20px]">
              <div className="flex gap-[20px] items-center">
                <div className="flex gap-[7px] rounded-4xl bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl p-[6px]">
                  <TrendingUp color="white" />
                  <p className="text-white">8.3</p>
                </div>
                <div className="flex gap-[7px] rounded-4xl bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl p-[6px]">
                  <Clock color="white" />
                  <p className="text-white">24</p>
                </div>
                <div className="flex gap-[7px] rounded-4xl bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl p-[6px]">
                  <Sparkles color="white" />
                  <p className="text-white">Yangi</p>
                </div>
              </div>
                <NavLink
                  className={
                    "text-[20px] text-white border-white border-[0.1px] p-[10px] rounded-4xl cursor-pointer transition duration-200 hover:bg-gray-600 "
                  }
                >
                  Anime About
                </NavLink>
                <NavLink
                  className={
                    "text-[20px] text-white border-white border-[0.1px] p-[10px] rounded-4xl cursor-pointer transition duration-200 hover:bg-amber-600 "
                  }
                >
                  Watch Anime
                </NavLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Hero;
