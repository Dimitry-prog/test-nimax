'use client'
import { Controller, useFormContext } from 'react-hook-form';
import { useRouter } from "next/navigation";
import { ReservationFormData } from "@/app/feature/reservation/validation";
import { pickFieldsFromObj } from "@/app/utils/pickFieldsFromObj";
import { useReservationData } from "@/app/feature/reservation/store";
import ReservationPrice from "@/app/feature/reservation/components/reservation-price";
import Input from "@/app/components/ui/input";
import Checkbox from "@/app/components/ui/checkbox";
import Button from "@/app/components/ui/button";

const ReservationRoom = () => {
  const {
    setValue,
    control,
    formState,
    trigger,
  } = useFormContext<ReservationFormData>()
  const { errors } = formState;
  const reservationRoomFormErrors = pickFieldsFromObj(errors, ["adults", "childrenUnder5", "children5to12", "roomType", "nights", "insurance"]);
  const router = useRouter();
  const updateFields = useReservationData(state => state.updateFields);
  const roomType = useReservationData(state => state.reservationData.roomType);
  const insurance = useReservationData(state => state.reservationData.insurance);

  const nextStep = async () => {
    const isValid = await trigger(["adults", "childrenUnder5", "children5to12", "roomType", "nights", "insurance"]);
    if (isValid) {
      router.push('/reservation/details')
    }
  };

  return (
    <form className="h-full flex flex-col gap-6">
      <h3 className='text-lg font-medium'>Расчет стоимости</h3>
      <div className='grow flex flex-col gap-6'>
        <div className="grid gap-1 sm:grid-cols-2 items-center">
          <Controller
            name="adults"
            control={control}
            render={({ field }) => (
              <Input
                label='Количество взрослых'
                type="number"
                min='0'
                {...field}
                onChange={(e) => {
                  const field = {
                    [e.target.name]: parseInt(e.target.value),
                  };
                  setValue('adults', parseInt(e.target.value));
                  updateFields(field);
                }}
                error={errors.adults?.message}
              />
            )}
          />
        </div>
        <div className="grid gap-1 sm:grid-cols-2 items-center">
          <Controller
            name="children5to12"
            control={control}
            render={({ field }) => (
              <Input
                label='Количество детей от 5 до 12'
                type="number"
                min='0'
                {...field}
                onChange={(e) => {
                  const field = {
                    [e.target.name]: parseInt(e.target.value),
                  };
                  setValue('children5to12', parseInt(e.target.value));
                  updateFields(field);
                }}
                error={errors.children5to12?.message}
              />
            )}
          />
        </div>
        <div className="grid gap-1 sm:grid-cols-2 items-center">
          <Controller
            name="childrenUnder5"
            control={control}
            render={({ field }) => (
              <Input
                label='Количество детей до 5 лет'
                type="number"
                min='0'
                {...field}
                onChange={(e) => {
                  const field = {
                    [e.target.name]: parseInt(e.target.value),
                  };
                  setValue('childrenUnder5', parseInt(e.target.value));
                  updateFields(field);
                }}
                error={errors.childrenUnder5?.message}
              />
            )}
          />
        </div>
        <div className="grid grid-cols-2">
          <p>Тип номера</p>
          <div className='flex flex-col gap-2'>
            <Controller
              name="roomType"
              control={control}
              defaultValue='Эконом'
              render={({ field }) => (
                <Input
                  type="radio"
                  {...field}
                  defaultChecked={roomType === 'Эконом'}
                  value={'Эконом'}
                  onChange={(e) => {
                    const field = {
                      [e.target.name]: e.target.value,
                    };
                    setValue('roomType', 'Эконом');
                    updateFields(field);
                  }}
                  error={errors.roomType?.message}
                />
              )}
            />
            <Controller
              name="roomType"
              control={control}
              render={({ field }) => (
                <Input
                  type="radio"
                  {...field}
                  defaultChecked={roomType === 'Стандарт'}
                  value={'Стандарт'}
                  onChange={(e) => {
                    const field = {
                      [e.target.name]: e.target.value,
                    };
                    setValue('roomType', 'Стандарт');
                    updateFields(field);
                  }}
                  error={errors.roomType?.message}
                />
              )}
            />
            <Controller
              name="roomType"
              control={control}
              render={({ field }) => (
                <Input
                  type="radio"
                  {...field}
                  defaultChecked={roomType === 'Люкс'}
                  value={'Люкс'}
                  onChange={(e) => {
                    const field = {
                      [e.target.name]: e.target.value,
                    };
                    setValue('roomType', 'Люкс');
                    updateFields(field);
                  }}
                  error={errors.roomType?.message}
                />
              )}
            />
          </div>
        </div>
        <div className="grid gap-1 sm:grid-cols-2 items-center">
          <Controller
            name="nights"
            control={control}
            render={({ field }) => (
              <Input
                label='Количество ночей'
                type="number"
                min='0'
                {...field}
                onChange={(e) => {
                  const field = {
                    [e.target.name]: parseInt(e.target.value),
                  };
                  setValue('nights', parseInt(e.target.value));
                  updateFields(field);
                }}
                error={errors.nights?.message}
              />
            )}
          />
        </div>
        <div className="grid grid-cols-2 items-center">
          <p className="mb-1 font-medium text-gray-700">Страховка</p>
          <Controller
            name="insurance"
            control={control}
            render={({ field }) => (
              <Checkbox
                type="checkbox"
                checked={insurance}
                {...field}
                value={field.value?.toString() || ''}
                onChange={(e) => {
                  const field = {
                    [e.target.name]: e.target.checked,
                  };
                  updateFields(field);
                }}
                error={errors.insurance?.message}
              />
            )}
          />
        </div>
        <ReservationPrice title='Итого:'/>
      </div>
      <Button
        onClick={nextStep}
        type="button"
        disabled={Boolean(Object.keys(reservationRoomFormErrors).length)}
        classes='self-end sm:max-w-[128px]'
      >
        Далее
      </Button>
    </form>
  );
};

export default ReservationRoom;