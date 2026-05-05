import { zodResolver } from "@hookform/resolvers/zod"
import { useCreateSpaceMutation } from "entities/space/api/spacesApi"
import { spaceSchema, type TSpaceSchema } from "features/space/model/schema"
import { Controller, useForm } from "react-hook-form"
import { zoneOptions } from "shared/types/types"



export default function CreateSpaceForm() {

    const [createSpace] = useCreateSpaceMutation()
    const { control, formState: { errors }, handleSubmit, reset } = useForm<TSpaceSchema>({
        resolver: zodResolver(spaceSchema),
        defaultValues: {
            capacity: undefined,
            description: '',
            pricePerHour: undefined,
            rating: undefined,
            title: "",
            zoneType: undefined
        }
    })

    const submitHandler = async (data: TSpaceSchema) => {
        await createSpace(data).unwrap()
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <Controller
                control={control}
                name="title"
                render={({ field }) => (<input {...field} placeholder="Введите название" />)}
            />
            <Controller
                control={control}
                name="description"
                render={({ field }) => (<input {...field} placeholder="Введите описание" />)}
            />
            <Controller
                control={control}
                name="rating"
                render={({ field }) => (<input {...field} placeholder="Введите рейтинг" onChange={(e) => field.onChange(Number(e.target.value))} />)}
            />
            <Controller
                control={control}
                name="capacity"
                render={({ field }) => (<input {...field} placeholder="Введите вместимость" onChange={(e) => field.onChange(Number(e.target.value))} />)}
            />
            <Controller
                control={control}
                name="pricePerHour"
                render={({ field }) => (<input {...field} placeholder="Введите цену за час" onChange={(e) => field.onChange(Number(e.target.value))} />)}
            />
            <Controller
                control={control}
                name="zoneType"
                render={({ field }) => (<select {...field}>
                    <option value={zoneOptions[0]}>{zoneOptions[0]}</option>
                    <option value={zoneOptions[1]}>{zoneOptions[1]}</option>
                    <option value={zoneOptions[2]}>{zoneOptions[2]}</option>
                </select>)}
            />
            <button type="submit">Создать</button>
        </form>
    )
}
