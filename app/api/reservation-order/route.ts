import { ReservationFormData, reservationSchema } from "@/app/feature/reservation/validation";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const reservationData: ReservationFormData = await request.json();

  if (!reservationData) {
    return NextResponse.json({ message: "Missing required data" });
  }

  const result = reservationSchema.safeParse(reservationData);

  if (!result.success) {
    return NextResponse.json({ message: "Missing required data" });
  }

  return NextResponse.json(result);
}