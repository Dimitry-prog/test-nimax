import Link from "next/link";
import Image from "next/image";

const Success = () => {
  return (
    <div>
      <Image src='/Vector.png' alt='success' width={134} height={134} className='mx-auto'/>
      <h2>Заказ успешно оплачен.</h2>
      <Link href='/reservation'>Забронировать еще</Link>
    </div>
  )
};

export default Success;