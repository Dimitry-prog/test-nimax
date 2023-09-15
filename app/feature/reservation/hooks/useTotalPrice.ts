import { useReservationData } from "@/app/feature/reservation/store";
import { priceRoomType } from "@/app/utils/constants";

export const useTotalPrice = () => {
  const adults = useReservationData(state => state.reservationData.adults);
  const children5to12 = useReservationData(state => state.reservationData.children5to12);
  const roomType = useReservationData(state => state.reservationData.roomType);
  const nights = useReservationData(state => state.reservationData.nights);
  const insurance = useReservationData(state => state.reservationData.insurance);

  const costRoom = priceRoomType[roomType];
  const costInsurance = 0.1;
  const costAdults = costRoom * nights * adults;
  const costKids = costRoom * nights * children5to12 * .5;
  const basePrice = costAdults + costKids;
  const insurancePrice = insurance ? basePrice * costInsurance : 0;

  return basePrice + insurancePrice;
}