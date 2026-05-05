import SpacesList from "entities/space/ui/spaces-list/list";
import CreateSpaceForm from "features/space/ui/create-form";

export function SpacesPage() {
  return (
    <div>
      <CreateSpaceForm />
      <SpacesList />
    </div>
  );
}
