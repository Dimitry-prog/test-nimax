'use client'
import { Controller, useFormContext } from 'react-hook-form';
import { ReservationFormData } from "@/app/feature/reservation/validation";
import { pickFieldsFromObj } from "@/app/utils/pickFieldsFromObj";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useReservationData } from "@/app/feature/reservation/store";

const ReservationDetails = () => {
  const {
    setValue,
    control,
    formState,
    trigger,
  } = useFormContext<ReservationFormData>()
  const { errors } = formState;
  const reservationDetailsFormErrors = pickFieldsFromObj(errors, ["surname", "name", "children5to12", "patronymic", "phone", "birthday"]);
  const router = useRouter();
  const updateFields = useReservationData(state => state.updateFields);

  const nextStep = async () => {
    const isValid = await trigger(["surname", "name", "children5to12", "patronymic", "phone", "birthday"]);
    if (isValid) {
      router.push('/reservation/confirm')
    }
  };

  return (
    <form className="max-w-xl mx-auto">
      <div className="mb-4">
        <label htmlFor="surname" className="block mb-1 font-medium text-gray-700">Фамилия</label>
        <Controller
          name="surname"
          control={control}
          render={({ field }) => (
            <input
              type="text"
              id="surname"
              {...field}
              value={field.value || ''}
              onChange={(e) => {
                const field = {
                  [e.target.name]: e.target.value,
                };
                setValue('surname', e.target.value);
                updateFields(field);
              }}
              className={`w-full px-3 py-2 border rounded-md ${errors.surname
                ? 'border-red-500'
                : 'border-gray-300'}`}
            />
          )}
        />
        {errors.surname && <span className="text-sm text-red-500">{errors.surname.message}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Имя</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <input
              type="text"
              id="name"
              {...field}
              value={field.value || ''}
              onChange={(e) => {
                const field = {
                  [e.target.name]: e.target.value,
                };
                setValue('name', e.target.value);
                updateFields(field);
              }}
              className={`w-full px-3 py-2 border rounded-md ${errors.name
                ? 'border-red-500'
                : 'border-gray-300'}`}
            />
          )}
        />
        {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="patronymic" className="block mb-1 font-medium text-gray-700">Отчество</label>
        <Controller
          name="patronymic"
          control={control}
          render={({ field }) => (
            <input
              type="text"
              id="patronymic"
              {...field}
              value={field.value || ''}
              onChange={(e) => {
                const field = {
                  [e.target.name]: e.target.value,
                };
                setValue('patronymic', e.target.value);
                updateFields(field);
              }}
              className={`w-full px-3 py-2 border rounded-md ${errors.patronymic
                ? 'border-red-500'
                : 'border-gray-300'}`}
            />
          )}
        />
        {errors.patronymic && <span className="text-sm text-red-500">{errors.patronymic.message}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-1 font-medium text-gray-700">Номер телефона</label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <input
              type="tel"
              id="phone"
              {...field}
              value={field.value || ''}
              onChange={(e) => {
                const field = {
                  [e.target.name]: e.target.value,
                };
                setValue('phone', e.target.value);
                updateFields(field);
              }}
              className={`w-full px-3 py-2 border rounded-md ${errors.phone
                ? 'border-red-500'
                : 'border-gray-300'}`}
            />
          )}
        />
        {errors.phone && <span className="text-sm text-red-500">{errors.phone.message}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="birthday" className="block mb-1 font-medium text-gray-700">Дата рождения</label>
        <Controller
          name="birthday"
          control={control}
          render={({ field }) => (
            <input
              type="date"
              id="birthday"
              {...field}
              value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
              onChange={(e) => {
                const field = {
                  [e.target.name]: e.target.value,
                };
                setValue('birthday', new Date(e.target.value));
                updateFields(field);
              }}
              className={`w-full px-3 py-2 border rounded-md ${errors.birthday
                ? 'border-red-500'
                : 'border-gray-300'}`}
            />
          )}
        />
        {errors.birthday && <span className="text-sm text-red-500">{errors.birthday.message}</span>}
      </div>
      <div className='flex justify-between'>
        <Link
          href='/reservation'
          className={`w-full py-2 text-white bg-blue-500 rounded-md`}>
          Назад к расчету стоимости
        </Link>
        <button
          onClick={nextStep}
          type="button"
          className={`w-full py-2 text-white bg-blue-500 rounded-md ${Object.keys(reservationDetailsFormErrors).length
            ? 'opacity-50 cursor-not-allowed'
            : ''}`}>Далее
        </button>
      </div>
    </form>
  );
};

export default ReservationDetails;