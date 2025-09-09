import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

export default async function ServiceDetailsPage({ params }) {
  const p = await params;
  const servicesCollection = dbConnect(collectionNameObj.serviceCollection);
  const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });
  return (
    <div>
      <section className="flex justify-center mb-8">
        <figure className="relative">
          <Image
            src="/assets/images/checkout/checkout.png"
            width={1200}
            height={300}
            alt="banner"
          />
          <div className="transparent-layer overlay-bg absolute top-0 w-full h-full border border-red-400">
            <div className="flex items-center h-full w-full font-bold text-2xl ps-16">
              <div>
                <h1 className="text-white">Service Details</h1>
              </div>
            </div>
          </div>
        </figure>
      </section>

      <section>
        <Image src={data?.img} height={280} width={400} alt={data?.title}/>
        <h1 className="text-bold text-3xl">{data?.title}</h1>
      </section>
    </div>
  );
}
