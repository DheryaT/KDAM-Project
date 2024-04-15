import React from "react";

const Feed = () => {
  return (
    <>
      <div className="bg-white w-4/5 m-auto h-auto border-gray-300 border">
        <header className="grid grid-cols-6 items-center p-3 border-b border-b-gray-300 content-center">
          <div className="mx-5">
            <img
              src="https://picsum.photos/50/50"
              className="rounded-full w-10 h-10"
            />
          </div>

          <div className="col-span-4 font-semibold text-center text-l">
            pianizz
          </div>

          <div className=" m-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </div>
        </header>

        <div className="flex flex-row p-2">
          <div>
            <image className="">
              <img src="https://picsum.photos/500/500" />
            </image>
          </div>
          <div className="overflow-auto h-[calc(56vh-2rem)]">
            <div className="grid grid-cols-1 grid-rows-3 gap-1 px-1">
              <div>
                <image className="">
                  <img src="https://picsum.photos/300/300" />
                </image>
              </div>
              <div>
                <image className="">
                  <img src="https://picsum.photos/300/300" />
                </image>
              </div>
              <div>
                <image className="">
                  <img src="https://picsum.photos/300/300" />
                </image>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-4 gap-3">
          <div className="flex flex-row gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </div>

          <div className="text-sm font-semibold">11,552 Likes</div>

          <div className="text-sm">
            <span className="font-semibold">gnfi</span> Saat ini Indonesia
            memiliki 34 provinsi, jumlah tersebut diproyeksi bertambah seiring
            dengan adanya usulan 30 Daerah Otonomi Baru (DOB) khusus untuk
            provinsi, dan 9 diantaranya berada di Pulau Jawa.
          </div>

          <div className="text-gray-500 text-sm">View all 877 comments</div>

          <div className="text-gray-400 text-xs">2 HOURS AGO</div>
        </div>
      </div>
    </>
  );
};

export default Feed;
