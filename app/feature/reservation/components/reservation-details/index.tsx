'use client'
import { Controller, useFormContext } from 'react-hook-form';
import { ReservationFormData } from "@/app/feature/reservation/validation";
import { pickFieldsFromObj } from "@/app/utils/pickFieldsFromObj";
import { useRouter } from "next/navigation";
import { useReservationData } from "@/app/feature/reservation/store";
import Input from "@/app/components/ui/input";
import Button from "@/app/components/ui/button";

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

  const backStep = () => {
    router.back();
  };

  return (
    <form className="h-full flex flex-col gap-6">
      <h3 className='text-lg font-medium'>Расчет стоимости</h3>
      <div className='grow flex flex-col gap-6'>
        <div className="grid gap-1 sm:grid-cols-2 items-center">
          <Controller
            name="surname"
            control={control}
            render={({ field }) => (
              <Input
                label='Фамилия'
                type="text"
                {...field}
                // value={field.value || ''}
                onChange={(e) => {
                  const field = {
                    [e.target.name]: e.target.value,
                  };
                  setValue('surname', e.target.value);
                  updateFields(field);
                }}
                error={errors.surname?.message}
              />
            )}
          />
        </div>
        <div className="grid gap-1 sm:grid-cols-2 items-center">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                label='Имя'
                type="text"
                {...field}
                // value={field.value || ''}
                onChange={(e) => {
                  const field = {
                    [e.target.name]: e.target.value,
                  };
                  setValue('name', e.target.value);
                  updateFields(field);
                }}
                error={errors.name?.message}
              />
            )}
          />
        </div>
        <div className="grid gap-1 sm:grid-cols-2 items-center">
          <Controller
            name="patronymic"
            control={control}
            render={({ field }) => (
              <Input
                label='Отчество'
                type="text"
                {...field}
                // value={field.value || ''}
                onChange={(e) => {
                  const field = {
                    [e.target.name]: e.target.value,
                  };
                  setValue('patronymic', e.target.value);
                  updateFields(field);
                }}
                error={errors.patronymic?.message}
              />
            )}
          />
        </div>
        <div className="grid gap-1 sm:grid-cols-2 items-center">
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Input
                label='Номер телефона'
                type="text"
                placeholder="+7 987 654 32-10"
                {...field}
                // value={field.value || ''}
                onChange={(e) => {
                  const field = {
                    [e.target.name]: e.target.value,
                  };
                  setValue('phone', e.target.value);
                  updateFields(field);
                }}
                error={errors.phone?.message}
              />
            )}
          />
        </div>
        <div className="grid gap-1 sm:grid-cols-2 items-center">
          <Controller
            name="birthday"
            control={control}
            render={({ field }) => (
              <Input
                label='Дата рождения'
                type="date"
                {...field}
                value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
                onChange={(e) => {
                  const field = {
                    [e.target.name]: e.target.value,
                  };
                  setValue('birthday', new Date(e.target.value));
                  updateFields(field);
                }}
                error={errors.birthday?.message}
              />
            )}
          />
        </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-2 justify-between'>
        <Button
          onClick={backStep}
          type="button"
          classes='self-start sm:max-w-[250px] bg-white text-black hover:text-white'
        >
          Назад к расчету стоимости
        </Button>
        <Button
          onClick={nextStep}
          type="button"
          disabled={Boolean(Object.keys(reservationDetailsFormErrors).length)}
          classes='self-end sm:max-w-[128px] order-first sm:order-2 '
        >
          Далее
        </Button>
      </div>
    </form>
  );
};

export default ReservationDetails;