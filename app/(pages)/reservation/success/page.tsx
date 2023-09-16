import Link from "next/link";
import Image from "next/image";

const Success = () => {
  return (
    <div className='w-full grow flex flex-col justify-center items-center gap-3'>
      <div className='flex flex-col gap-3 justify-center grow sm:grow-0'>
        <Image src='/Vector.png' alt='success' width={134} height={134} className='mx-auto'/>
        <h2 className='mb-2 text-center text-xl font-semibold'>Заказ успешно оплачен.</h2>
      </div>
      <Link
        href='/reservation'
        className='w-full sm:max-w-[300px] block py-[10px] px-[14px] text-white text-center text-sm font-medium rounded bg-blue hover:bg-blue-light focus:ring-2 focus:ring-offset-2 ring-blue transition-all duration-500'
      >
        Забронировать еще
      </Link>
    </div>
  )
};

export default Success;