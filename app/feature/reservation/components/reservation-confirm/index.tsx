'use client'

import { SubmitHandler, useFormContext } from "react-hook-form";
import { ReservationFormData } from "@/app/feature/reservation/validation";
import { useRouter } from "next/navigation";
import ReservationPrice from "@/app/feature/reservation/components/reservation-price";
import Button from "@/app/components/ui/button";
import { useReservationData } from "@/app/feature/reservation/store";

const ReservationConfirm = () => {
  const { handleSubmit, reset, formState } = useFormContext<ReservationFormData>();
  const router = useRouter();
  const insurance = useReservationData(state => state.reservationData.insurance);
  const phone = useReservationData(state => state.reservationData.phone);
  const name = useReservationData(state => state.reservationData.name);
  const surname = useReservationData(state => state.reservationData.surname);
  const patronymic = useReservationData(state => state.reservationData.patronymic);
  const roomType = useReservationData(state => state.reservationData.roomType);
  const nights = useReservationData(state => state.reservationData.nights);
  const adults = useReservationData(state => state.reservationData.adults);
  const children5to12 = useReservationData(state => state.reservationData.children5to12);
  const childrenUnder5 = useReservationData(state => state.reservationData.childrenUnder5);
  const fullName = `${surname} ${name} ${patronymic}`
  const onSubmit: SubmitHandler<ReservationFormData> = (data) => {
    console.log('data', data);
    if (formState.isValid) {
      router.push('/reservation/success');
      reset();
    }
  };

  const backStep = () => {
    router.back();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-full flex flex-col gap-6">
      <h3 className='text-lg font-medium'>Подтверждение заказа</h3>
      <div className='flex flex-col gap-[6px] grow'>
        <p className='text-sm font-semibold'>{fullName}</p>
        <p>{phone}</p>
        <p>Номер «{roomType}» на {nights} ночей</p>
        <p>{adults} взрослых, {children5to12} ребенка от 12 лет и {childrenUnder5} ребенок младше 12 лет</p>
        <p className='mb-3.5'>{insurance ? 'Страховка включена' : 'Без страховки'}</p>
        <ReservationPrice title='К оплате' confirm/>
      </div>
      <div className='flex flex-col sm:flex-row gap-2 justify-between'>
        <Button
          onClick={backStep}
          type="button"
          classes='self-start sm:max-w-[252px] bg-white text-black hover:text-white'
        >
          Назад к данным покупателя
        </Button>
        <Button
          type="submit"
          classes='self-end sm:max-w-[128px] order-first sm:order-2 '
        >
          Оплатить
        </Button>
      </div>
    </form>
  )
};

export default ReservationConfirm;