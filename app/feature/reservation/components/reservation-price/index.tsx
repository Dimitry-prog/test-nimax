'use client'

import { useTotalPrice } from "@/app/feature/reservation/hooks/useTotalPrice";

type ReservationPriceProps = {
  title: string;
  confirm?: boolean;
}

const ReservationPrice = ({ title, confirm }: ReservationPriceProps) => {
  const totalPrice = useTotalPrice()

  const ContentConfirm = () => (
    <div className="flex gap-2">
      <p>{title}</p>
      <p className='font-semibold'>{totalPrice} ₽</p>
    </div>
  )

  return (
    <>
      {confirm
        ?
        <ContentConfirm/>
        :
        (
          <div className="grid grid-cols-2 items-center">
            <p>{title}</p>
            <p className='justify-self-end sm:justify-self-start font-semibold'>{totalPrice} ₽</p>
          </div>
        )}
    </>
  );
};

export default ReservationPrice;