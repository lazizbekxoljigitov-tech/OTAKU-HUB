import { useEffect } from "react";
import AnimeChart from '../../AdminComponents/statis/Animestatis';
import UsersChart from '../../AdminComponents/statis/Statis';
import GenreChart from '../../AdminComponents/statis/GenreStatis';

function AdminStatus() {
  useEffect(() => {
    document.title = "OTAKU-HUB | Status";
  });
  return (
    <div>
      <div className="head">
        <div className="text-white flex w-full gap-[20px] pr-[20px] ">
          <div className="grow w-full bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl justify-center items-center h-full ">
            <UsersChart />
          </div>
          <div className=" bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl grow">
            <div className="flex flex-col items-center justify-center h-full">
              <AnimeChart />
            </div>
          </div>
          <div className=" bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl grow">
            <div className="flex flex-col items-center justify-center h-full">
              <GenreChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminStatus;
