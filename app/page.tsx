import Link from "next/link";

export default function Home() {
  return (
    <div className='h-screen grid place-content-center'>
      <Link href='/reservation'
            className='w-full py-[10px] px-[14px] text-white text-sm font-medium rounded bg-blue hover:bg-blue-light focus:ring-2 focus:ring-offset-2 ring-blue transition-all duration-500'>
        Забронировать номер
      </Link>
    </div>

  )
}
