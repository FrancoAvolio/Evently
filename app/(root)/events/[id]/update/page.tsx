import EventForm from "@/components/shared/EventForm";
import React from "react";
import { auth } from "@clerk/nextjs";

const UpdateEvent = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  return (
    <>
      <section className="bg-gray-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] text-center mt-6">
          Actualizar Evento
        </h3>
      </section>
      <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full my-8">
        <EventForm userId={userId} type="Update" />
      </div>
    </>
  );
};

export default UpdateEvent;
