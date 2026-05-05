import { useDeleteSpaceMutation } from "entities/space/api/spacesApi"
import type { ISpace } from "entities/space/model/types"

interface ISpaceCardProps {
    space: ISpace
}

export default function SpaceCard({ space }: ISpaceCardProps) {
    const [deleteSpace] = useDeleteSpaceMutation()
    const deleteHandler = async () => {
        await deleteSpace({ id: space.id }).unwrap()
    }
    return (
        <div>
            <h2>Название: {space.title}</h2>
            <h2>Рейтинг: {space.rating}</h2>
            <h2>Тип зоны: {space.zoneType}</h2>
            <h2>Описание: {space.description}</h2>
            <h2>Вместимость: {space.capacity}</h2>
            <button onClick={deleteHandler}>Удалить</button>
        </div>
    )
}
