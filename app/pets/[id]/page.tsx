import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import PetDetails from "@/app/components/pets/PetDetails";
import BackButton from "@/app/components/common/BackButton";
import { getPetById } from "@/app/utils/petUtils";
import { featuredPets } from "@/app/data/featuredPets";

export function generateStaticParams() {
  return featuredPets.map((pet) => ({
    id: pet.id.toString(),
  }));
}

export default function PetDescriptionPage({
  params,
}: {
  params: { id: string };
}) {
  const pet = getPetById(parseInt(params.id));

  if (!pet) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <BackButton className="mb-6" />
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900">
                Pet not found
              </h2>
              <p className="mt-2 text-gray-600">
                The pet you&apos;re looking for doesn&apos;t exist.
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <BackButton className="mb-6" />
          <PetDetails pet={pet} />
        </div>
      </main>
    </div>
  );
}
