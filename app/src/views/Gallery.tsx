import { useGetCollectionMediaQuery } from "../redux/api/pexelsApi";

const Gallery = () => {
  const collectionID = "fwdje1p";

  const { data, error, isLoading } = useGetCollectionMediaQuery(collectionID);

  if (isLoading) return <p>Loading Photos...</p>;
  if (error) return <p className="text-red-600">Failed to load photos.</p>;

  return (
    <div className="flex flex-col items-center justify-center">
      {data?.media?.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.media.map((item: any) => (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img
                key={item.id}
                src={item.src.large}
                alt={item.alt || "Pexels photo"}
                className="w-50 md:w-60 h-auto object-contain rounded-2xl md:grayscale hover:grayscale-0 transition"
              />
            </a>
          ))}
        </div>
      ) : (
        <p>No photos found in this collection.</p>
      )}
    </div>
  );
};

export default Gallery;
