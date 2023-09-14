'use client'
import { Controller, useFormContext } from 'react-hook-form';
import { useRouter } from "next/navigation";
import { ReservationFormData } from "@/app/feature/reservation/validation";
import { pickFieldsFromObj } from "@/app/utils/pickFieldsFromObj";

const ReservationRoom = () => {
  const {
    setValue,
    control,
    formState,
    trigger,
  } = useFormContext<ReservationFormData>()
  const { errors } = formState;
  const reservationFormErrors = pickFieldsFromObj(errors, ["adults", "childrenUnder5", "children5to12", "roomType", "nights", "insurance"]);
  const router = useRouter();

  const nextStep = async () => {
    const isValid = await trigger(["adults", "childrenUnder5", "children5to12", "roomType", "nights", "insurance"]);
    if (isValid) {
      router.push('/reservation/details')
    }
  };

  return (
    <form className="max-w-xl mx-auto">
      <div className="mb-4">
        <label htmlFor="adults" className="block mb-1 font-medium text-gray-700">Количество взрослых</label>
        <Controller
          name="adults"
          control={control}
          render={({ field }) => (
            <input
              type="number"
              id="adults"
              {...field}
              value={field.value || ''}
              onChange={(e) => {
                setValue('adults', parseInt(e.target.value));
              }}
              className={`w-full px-3 py-2 border rounded-md ${errors.adults
                ? 'border-red-500'
                : 'border-gray-300'}`}
            />
          )}
        />
        {errors.adults && <span className="text-sm text-red-500">{errors.adults.message}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="children5to12" className="block mb-1 font-medium text-gray-700">Количество детей от 5 до 12
          лет</label>
        <Controller
          name="children5to12"
          control={control}
          render={({ field }) => (
            <input
              type="number"
              id="children5to12"
              {...field}
              value={field.value || ''}
              onChange={(e) => {
                setValue('children5to12', parseInt(e.target.value));
              }}
              className={`w-full px-3 py-2 border rounded-md ${errors.children5to12
                ? 'border-red-500'
                : 'border-gray-300'}`}
            />
          )}
        />
        {errors.children5to12 && <span className="text-sm text-red-500">{errors.children5to12.message}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="childrenUnder5" className="block mb-1 font-medium text-gray-700">Количество детей до 5
          лет</label>
        <Controller
          name="childrenUnder5"
          control={control}
          render={({ field }) => (
            <input
              type="number"
              id="childrenUnder5"
              {...field}
              value={field.value || ''}
              onChange={(e) => {
                setValue('childrenUnder5', parseInt(e.target.value));
              }}
              className={`w-full px-3 py-2 border rounded-md ${errors.childrenUnder5
                ? 'border-red-500'
                : 'border-gray-300'}`}
            />
          )}
        />
        {errors.childrenUnder5 && <span className="text-sm text-red-500">{errors.childrenUnder5.message}</span>}
      </div>
      <div className="mb-4">
        <Controller
          name="roomType"
          control={control}
          render={({ field }) => (
            <>
              <span className="block mb-1 font-medium text-gray-700">Тип номера</span>
              <div className="flex items-center space-x-4">
                <label htmlFor="roomType-economy" className="flex items-center space-x-2">
                  <input type="radio" id="roomType-economy" {...field} value="Эконом" className="mr-2"/>
                  <span>Эконом</span>
                </label>
                <label htmlFor="roomType-standard" className="flex items-center space-x-2">
                  <input type="radio" id="roomType-standard" {...field} value="Стандарт" className="mr-2"/>
                  <span>Стандарт</span>
                </label>
                <label htmlFor="roomType-luxury" className="flex items-center space-x-2">
                  <input type="radio" id="roomType-luxury" {...field} value="Люкс" className="mr-2"/>
                  <span>Люкс</span>
                </label>
              </div>
            </>
          )}
        />
        {errors.roomType && <span className="text-sm text-red-500">{errors.roomType.message}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="nights" className="block mb-1 font-medium text-gray-700">Количество ночей</label>
        <Controller
          name="nights"
          control={control}
          render={({ field }) => (
            <input
              type="number"
              id="nights"
              {...field}
              value={field.value || ''}
              onChange={(e) => {
                setValue('nights', parseInt(e.target.value));
              }}
              className={`w-full px-3 py-2 border rounded-md ${errors.nights
                ? 'border-red-500'
                : 'border-gray-300'}`}
            />
          )}
        />
        {errors.nights && <span className="text-sm text-red-500">{errors.nights.message}</span>}
      </div>
      <div className="mb-4">
        <Controller
          name="insurance"
          control={control}
          rules={{ required: false }}
          render={({ field }) => (
            <div className="mb-4">
              <label htmlFor="insurance" className="inline-flex items-center cursor-pointer">
                <input type="checkbox" id="insurance" {...field}
                       value={field.value?.toString() || ''}
                       className={`mr-2 border rounded ${errors.insurance ? 'border-red-500' : 'border-gray-300'}`}/>
                <span className="text-sm font-medium text-gray-700">Страховка</span>
              </label>
            </div>
          )}
        />
        {errors.insurance && <span className="text-sm text-red-500">{errors.insurance.message}</span>}
      </div>
      <button
        onClick={nextStep}
        type="button"
        className={`w-full py-2 text-white bg-blue-500 rounded-md ${Object.keys(reservationFormErrors).length
          ? 'opacity-50 cursor-not-allowed'
          : ''}`}>Далее
      </button>
    </form>
  );
};

export default ReservationRoom;