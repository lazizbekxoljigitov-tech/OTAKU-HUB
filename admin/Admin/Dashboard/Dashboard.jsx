import { useEffect, useMemo, useState } from "react";
import { api } from "../../../src/hooks/axios";
import Statis from "../../AdminComponents/statis/Statis";
import AnimeChart from "../../AdminComponents/statis/Animestatis";
import GenreChart from '../../AdminComponents/statis/GenreStatis';
function Dashboard() {
  const [data, setData] = useState([]);

  async function getApi() {
    try {
      const res = await api.get("/animes");
      const data = await res.data;

      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getApi();
    document.title = "OTAKU-HUB | Dashboard";
  }, []);

  console.log(data);

  return (
    <div>

    </div>
  );
}

export default Dashboard;
