import React, { useRef } from "react";

function ListItems() {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer programming",
    "Reverberation",
    "Movie musicals",
    "India national cricket team",
    "News",
    "Mixes",
    "1990s",
    "Telugu cinema",
    "Live",
    "Dramedy",
    "Dubbing",
    "Indian soap opera",
    "Cricket",
    "Football",
    "Learn Coding",
  ];

  const scrollRef = useRef(null);

  // Handlers for mouse and touch events
  const onDragStart = (e) => {
    const pageX = e.pageX || e.touches[0].pageX;
    scrollRef.current.isDragging = true;
    scrollRef.current.startX = pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeftStart = scrollRef.current.scrollLeft;
  };

  const onDragEnd = () => {
    scrollRef.current.isDragging = false;
  };

  const onDragMove = (e) => {
    if (!scrollRef.current.isDragging) return;
    e.preventDefault();
    const pageX = e.pageX || e.touches[0].pageX;
    const moveDistance = pageX - scrollRef.current.startX;
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeftStart - moveDistance;
  };

  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-scroll scrollbar-none px-4 mt-20 z-50"
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onMouseMove={onDragMove}
      onTouchStart={onDragStart}
      onTouchEnd={onDragEnd}
      onTouchMove={onDragMove}
    >
      <div className="flex space-x-3 flex-nowrap">
        {categories.map((category) => (
          <div
            key={category}
            className="mb-4 flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 text-sm cursor-pointer"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListItems;
