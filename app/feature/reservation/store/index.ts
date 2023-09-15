import { create } from "zustand";
import { ReservationFormData } from "@/app/feature/reservation/validation";
import { immer } from "zustand/middleware/immer";

type ReservationData = {
  birthday: string;
} & Omit<ReservationFormData, 'birthday'>;

type ReservationState = {
  reservationData: ReservationData;
  isLoading: boolean;
  error: null | string;
  updateFields: (filed: Partial<ReservationData>) => void;
};

export const useReservationData = create<ReservationState>()(immer(set => ({
  reservationData: {
    adults: 1,
    children5to12: 0,
    childrenUnder5: 0,
    roomType: 'Эконом',
    nights: 1,
    insurance: false,
    surname: '',
    name: '',
    patronymic: '',
    phone: '',
    birthday: '',
  },
  isLoading: false,
  error: null,
  updateFields: (filed: Partial<ReservationState>) => {
    set(state => {
      Object.assign(state.reservationData, filed);
    })
  }
})));