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
    <section>
      <h2>TITLE</h2>
      <ReservationFormProvider>{children}</ReservationFormProvider>
      <p>NAVAGATION</p>
    </section>
  )
};

export default ReservationLayout;