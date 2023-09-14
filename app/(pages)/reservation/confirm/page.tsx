const Confirm = () => {
  return (
    <form className='flex flex-col justify-between'>
      <div className='flex flex-col gap-1'>
        <h3>name</h3>
        <p>phone</p>
        <p>roomType</p>
        <p>adults plus kids</p>
        <p>insurance</p>
        <p>К оплате <span>1 234 ₽</span></p>
      </div>
      <div className='flex justify-between'>
        {/*<button type="submit"*/}
        {/*        className={`w-full py-2 text-white bg-blue-500 rounded-md ${!formState.isValid*/}
        {/*          ? 'opacity-50 cursor-not-allowed'*/}
        {/*          : ''}`}>Далее*/}
        {/*</button>*/}
      </div>
    </form>
  )
};

export default Confirm;