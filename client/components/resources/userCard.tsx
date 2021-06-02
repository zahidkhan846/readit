import moment from "moment";
import Image from "next/image";
import React from "react";

function UserCard({ user }) {
  return (
    <div className="overflow-hidden bg-white rounded w-80">
      <div className="h-20 bg-blue-500"></div>
      <div
        className="flex items-center justify-center overflow-hidden"
        style={{ marginTop: "-50px" }}
      >
        <Image
          className="rounded"
          src="https://picsum.photos/50"
          height={100}
          width={100}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="mt-4 text-2xl font-bold uppercase">{user.username}</p>
        <p className="text-gray-500">
          {`r/${user.username}`}
          {" . "}
          {moment(user.createdAt).startOf("hour").fromNow()}
        </p>
      </div>
      <p className="p-4">
        Respect for those who tried to make this world better place.
      </p>
      <div className="flex justify-between px-8">
        <div>
          <p className="font-medium">Karma</p>
          <p className="text-xs text-gray-500">
            <i className="mr-1 text-blue-500 fa fa-cog" aria-hidden="true"></i>{" "}
            123,456
          </p>
        </div>
        <div>
          <p className="font-medium">Cake Day</p>
          <p className="text-xs text-gray-500">
            <i
              className="mr-1 text-blue-500 fa fa-birthday-cake"
              aria-hidden="true"
            ></i>{" "}
            {moment(user.createdAt).format("MMMM, D YYYY")}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 px-4 pb-4 mt-4">
        <button className="px-6 py-1 font-bold text-white bg-blue-500 border border-blue-500 rounded-full hover:bg-blue-600 text-bold focus:outline-none">
          Follow
        </button>
        <button className="px-6 py-1 font-bold text-white bg-blue-500 border border-blue-500 rounded-full hover:bg-blue-600 text-bold focus:outline-none">
          Chat
        </button>
      </div>
    </div>
  );
}

export default UserCard;
