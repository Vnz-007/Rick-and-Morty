// composables/useEpisodes.js
export const useEpisodes = () => {
  const episodes = useState("episodes", () => []);

  async function fetchEpisodes() {
    if (!process.client) return;

    if (episodes.value.length === 0) {
      const { data } = await useFetch(
        "https://rickandmortyapi.com/api/episode"
      );
      if (data.value?.results) {
        episodes.value = data.value.results.map((e) => {
          const saved = localStorage.getItem(`episode-liked-${e.id}`);
          return {
            ...e,
            liked: saved ? JSON.parse(saved) : false,
          };
        });
      }
    }
  }

  function toggleLike(id) {
    const ep = episodes.value.find((e) => e.id === id);
    if (ep) {
      ep.liked = !ep.liked;
      if (process.client) {
        localStorage.setItem(
          `episode-liked-${ep.id}`,
          JSON.stringify(ep.liked)
        );
      }
    }
  }

  return { episodes, fetchEpisodes, toggleLike };
};
