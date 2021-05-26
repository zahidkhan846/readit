import React, { FC } from "react";
import Image from "next/image";

const Featured: FC = () => {
  return (
    <div>
      <h1 className="mb-2 text-sm font-bold">Trending today</h1>
      <div className="grid grid-cols-4">
        <div className="relative w-56 h-40">
          <Image
            src="/images/card.png"
            height={160}
            width={224}
            alt="card1"
            className="rounded"
          />
          <div className="absolute bottom-0 left-0 w-full px-4 py-2 text-sm font-bold text-white">
            <p>Lorem ipsum dolor sit amet.</p>
            <p className="text-xs font-thin">Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="relative w-56 h-40">
          <Image
            src="https://picsum.photos/200"
            height={160}
            width={224}
            alt="card1"
            className="rounded"
          />
          <div className="absolute bottom-0 left-0 w-full px-4 py-2 text-sm font-bold text-white">
            <p>Lorem ipsum dolor sit amet.</p>
            <p className="text-xs font-thin">Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="relative w-56 h-40">
          <Image
            src="/images/forest.jpg"
            height={160}
            width={224}
            alt="card1"
            className="rounded"
          />
          <div className="absolute bottom-0 left-0 w-full px-4 py-2 text-sm font-bold text-white">
            <p>Lorem ipsum dolor sit amet.</p>
            <p className="text-xs font-thin">Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="relative w-56 h-40">
          <Image
            src="https://picsum.photos/200"
            height={160}
            width={224}
            alt="card1"
            className="rounded"
          />
          <div className="absolute bottom-0 left-0 w-full px-4 py-2 text-sm font-bold text-white">
            <p>Lorem ipsum dolor sit amet.</p>
            <p className="text-xs font-thin">Lorem, ipsum dolor.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;