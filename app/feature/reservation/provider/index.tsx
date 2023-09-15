'use client'
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ReservationFormData, reservationSchema } from "@/app/feature/reservation/validation";
import { zodResolver } from "@hookform/resolvers/zod";

const ReservationFormProvider = ({ children }: {
  children: ReactNode
}) => {
  const methods = useForm<ReservationFormData>({
    mode: "all",
    resolver: zodResolver(reservationSchema),
  });
  return <FormProvider {...methods}>{children}</FormProvider>
};

export default ReservationFormProvider;