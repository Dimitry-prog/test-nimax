import { ReactNode } from "react";
import { Metadata } from "next";
import ReservationFormProvider from "@/app/feature/reservation/provider";

export const metadata: Metadata = {
  title: 'Reservation',
  description: 'Reservation room',
}

const ReservationLayout = ({ children }: {
  children: ReactNode
}) => {
  return (
    <section className='max-w-[660px] h-[700px] p-[10px] mx-auto sm:px-5 sm:py-4 flex flex-col gap-2'>
      <ReservationFormProvider>
        {children}
      </ReservationFormProvider>
    </section>
  )
};

export default ReservationLayout;