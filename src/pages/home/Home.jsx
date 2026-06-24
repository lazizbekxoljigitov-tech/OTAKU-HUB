import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "OTAKU-HUB | Home";
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="relative w-full h-[400px]">

        <h1>dnxx</h1>
      </div>
    </div>
  );
}

export default Home;
