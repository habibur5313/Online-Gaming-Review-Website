import React from "react";

const ReviewVideo = () => {
  return (
    <div>
      <h1 className="text-3xl mt-10 mb-5 uppercase font-semibold animate__animated animate__pulse animate__infinite	infinite text-purple-700 text-center">
        Review video from youtube
      </h1>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
        <iframe
          className="w-full h-96 rounded-xl"
          src="https://www.youtube.com/embed/ubj4qsvxRo0?si=bs9nxN8gINNoU67q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className="w-full h-96 rounded-xl"
          src="https://www.youtube.com/embed/IVzeF_wZBPk?si=5L0DJNfrmwkn3xVA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className="w-full h-96 rounded-xl"
          src="https://www.youtube.com/embed/qgWhKhL9Y_4?si=5tA5WrcFf2xhf0aL"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className="w-full h-96 rounded-xl"
          src="https://www.youtube.com/embed/e9rnG5UMYzA?si=zRyX2aEYddxKr7r8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default ReviewVideo;
