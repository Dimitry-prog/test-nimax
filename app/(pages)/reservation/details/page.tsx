'use client'
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  surname: z.string().nonempty({ message: "Поле 'Фамилия' обязательно для заполнения" }).min(1, { message: "Фамилия слишком короткая" }),
  name: z.string().nonempty({ message: "Поле 'Имя' обязательно для заполнения" }).min(1, { message: "Имя слишком короткое" }),
  patronymic: z.string().optional().default(''),
  phone: z.string().nonempty({ message: "Поле 'Номер телефона' обязательно для заполнения" }).refine(value => /^\+7 ?\d{3} ?\d{3} ?\d{2}-\d{2}$/.test(value), { message: "Неверный формат номера телефона. Формат должен быть +7 XXX XXX XX-XX" }),
  birthday: z.coerce.date().min(new Date(1923, 0, 1), { message: "Дата не может быть ранее 1923 года" }).refine(value => value instanceof Date, { message: "Поле 'Дата рождения' обязательно для заполнения" }),
});

type FormData = z.infer<typeof schema>;

const Details = () => {
  const { setValue, handleSubmit, control, formState } = useForm<FormData>({
    mode: "all",
    resolver: zodResolver(schema),
  });
  const { errors } = formState;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto" noValidate>
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
                setValue('surname', e.target.value);
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
                setValue('name', e.target.value);
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
                setValue('patronymic', e.target.value);
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
                setValue('phone', e.target.value);
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
                setValue('birthday', new Date(e.target.value));
              }}
              className={`w-full px-3 py-2 border rounded-md ${errors.birthday
                ? 'border-red-500'
                : 'border-gray-300'}`}
            />
          )}
        />
        {errors.birthday && <span className="text-sm text-red-500">{errors.birthday.message}</span>}
      </div>
      <button type="submit"
              className={`w-full py-2 text-white bg-blue-500 rounded-md ${!formState.isValid
                ? 'opacity-50 cursor-not-allowed'
                : ''}`}>Далее
      </button>
    </form>
  );
};

export default Details;