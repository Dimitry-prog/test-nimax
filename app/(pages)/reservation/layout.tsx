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
      <ReservationFormProvider>
        {children}
      </ReservationFormProvider>
    </section>
  )
};

export default ReservationLayout;