import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { FaRegCommentAlt, FaRegHeart } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { GrBookmark } from "react-icons/gr";

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

          <div className="">
            <HiOutlineDotsHorizontal size={30}></HiOutlineDotsHorizontal>
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

        <div className="flex flex-col p-2 gap-3">
          <div className="flex flex-row gap-3">
            <FaRegHeart size={26} />

            <FaRegCommentAlt className="my-auto" size={24} />

            <LuSend size={26} />

            <GrBookmark size={26} />
          </div>

          <div className="text-sm font-semibold">11,552 Likes</div>

          <div className="text-sm">
            <span className="font-semibold">
              gnfi Saat ini Indonesia memiliki 34 provinsi, jumlah tersebut
              diproyeksi bertambah seiring dengan adanya usulan 30 Daerah
              Otonomi Baru (DOB) khusus untuk provinsi, dan 9 diantaranya berada
              di Pulau Jawa.
            </span>
          </div>

          <div className="text-gray-500 text-sm">View all 877 comments</div>

          <div className="text-gray-400 text-xs">2 HOURS AGO</div>
        </div>
      </div>
    </>
  );
};

export default Feed;
