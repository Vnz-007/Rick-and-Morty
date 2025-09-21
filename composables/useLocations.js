// composables/useLocations.js
export const useLocations = () => {
  const locations = useState("locations", () => []);

  async function fetchLocations() {
    if (!process.client) return;

    if (locations.value.length === 0) {
      const { data } = await useFetch(
        "https://rickandmortyapi.com/api/location"
      );
      if (data.value?.results) {
        locations.value = data.value.results.map((l) => {
          const saved = localStorage.getItem(`location-liked-${l.id}`);
          return {
            ...l,
            liked: saved ? JSON.parse(saved) : false,
          };
        });
      }
    }
  }

  function toggleLike(id) {
    const loc = locations.value.find((l) => l.id === id);
    if (loc) {
      loc.liked = !loc.liked;
      if (process.client) {
        localStorage.setItem(
          `location-liked-${loc.id}`,
          JSON.stringify(loc.liked)
        );
      }
    }
  }

  return { locations, fetchLocations, toggleLike };
};
