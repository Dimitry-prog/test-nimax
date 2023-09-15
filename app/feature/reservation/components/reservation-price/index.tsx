'use client'

import { useTotalPrice } from "@/app/feature/reservation/hooks/useTotalPrice";

const ReservationPrice = ({ title }: { title: string }) => {
  const totalPrice = useTotalPrice()

  return (
    <div className='flex gap-1'>
      <p>{title}</p>
      <p>{totalPrice} ₽</p>
    </div>
  );
};

export default ReservationPrice;