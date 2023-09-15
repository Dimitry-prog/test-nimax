'use client'

const ReservationPrice = ({ title }: { title: string }) => {

  return (
    <div className='flex gap-1'>
      <p>{title}</p>
    </div>
  );
};

export default ReservationPrice;