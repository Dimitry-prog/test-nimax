import { z } from "zod";

export const reservationSchema = z.object({
  adults: z.number().min(1, { message: "Количество взрослых должно быть не менее 1" }),
  children5to12: z.number().optional().default(0),
  childrenUnder5: z.number().optional().default(0),
  roomType: z.enum(['Эконом', 'Стандарт', 'Люкс']),
  nights: z.number().min(1, { message: "Количество ночей должно быть не менее 1" }),
  insurance: z.boolean().optional().default(false),
  surname: z.string().nonempty({ message: "Поле 'Фамилия' обязательно для заполнения" }).min(1, { message: "Фамилия слишком короткая" }),
  name: z.string().nonempty({ message: "Поле 'Имя' обязательно для заполнения" }).min(1, { message: "Имя слишком короткое" }),
  patronymic: z.string().optional().default(''),
  phone: z.string().nonempty({ message: "Поле 'Номер телефона' обязательно для заполнения" }).refine(value => /^\+7 ?\d{3} ?\d{3} ?\d{2}-\d{2}$/.test(value), { message: "Неверный формат номера телефона. Формат должен быть +7 XXX XXX XX-XX" }),
  birthday: z.coerce.date().min(new Date(1923, 0, 1), { message: "Дата не может быть ранее 1923 года" }).refine(value => value instanceof Date, { message: "Поле 'Дата рождения' обязательно для заполнения" }),
});

export type ReservationFormData = z.infer<typeof reservationSchema>;