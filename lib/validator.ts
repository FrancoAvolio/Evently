import * as z from "zod";

export const eventFormSchema = z.object({
  title: z
    .string()
    .min(3, "Title debe tener por lo menos 3 caracteres")
    .max(35, "Maximo 35 caracteres"),
  description: z
    .string()
    .min(3, "Descripcion debe tener por lo menos 3 caracteres")
    .max(400, "Descripcion tiene un maximo de 400 caracteres"),
  location: z
    .string()
    .min(3, "Ubicacion debe tener por lo menos 3 caracteres")
    .max(400, "Ubicacion tiene un maximo de 400 caracteres"),
  imageUrl: z.string().url("URL invalida"),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url("URL invalida"),
});
