'use client'

import { SubmitHandler, useFormContext } from "react-hook-form";
import { ReservationFormData } from "@/app/feature/reservation/validation";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ReservationConfirm = () => {
  const { handleSubmit, reset, formState } = useFormContext<ReservationFormData>();
  const router = useRouter();

  const onSubmit: SubmitHandler<ReservationFormData> = (data) => {
    console.log('data', data);
    if (formState.isValid) {
      router.push('/reservation/success');
      reset();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-between'>
      <div className='flex flex-col gap-1'>
        <h3>name</h3>
        <p>phone</p>
        <p>roomType</p>
        <p>adults plus kids</p>
        <p>insurance</p>
        <p>К оплате <span>1 234 ₽</span></p>
      </div>
      <div className='flex justify-between'>
        <Link
          href='/reservation/details'
          className={`w-full py-2 text-white bg-blue-500 rounded-md`}>
          Назад к данным покупателя
        </Link>
        <button
          type="submit"
          className={`w-full py-2 text-white bg-blue-500 rounded-md`}>Оплатить
        </button>
      </div>
    </form>
  )
};

export default ReservationConfirm;