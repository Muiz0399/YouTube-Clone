import React from "react";
import Sidebar from "./Sidebar";
import Video from "./Video";
import ListItems from "./ListItems";
import { useAuth } from "../context/AuthProvider";

function Home() {
  const { data, loading } = useAuth();
  console.log(data);
  return (
    <div className="flex">
      <Sidebar/>
      <div className="h-[calc(100vh)] overflow-y-scroll overflow-x-hidden scrollbar-none">
        <ListItems />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-5">
          {!loading &&
            data.map((item) => {
              if (item.type !== "video") return false;
              return <Video key={item.id} video={item?.video} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
