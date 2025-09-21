export const useCharacters = () => {
  const characters = useState("characters", () => []);

  async function fetchCharacters() {
    // só roda no cliente
    if (!process.client) return;

    if (characters.value.length === 0) {
      const { data } = await useFetch(
        "https://rickandmortyapi.com/api/character"
      );
      if (data.value?.results) {
        characters.value = data.value.results.map((c) => {
          const saved = localStorage.getItem(`character-liked-${c.id}`);
          return {
            ...c,
            liked: saved ? JSON.parse(saved) : false,
          };
        });
      }
    }
  }

  function toggleLike(id) {
    const character = characters.value.find((c) => c.id === id);
    if (character) {
      character.liked = !character.liked;
      if (process.client) {
        localStorage.setItem(
          `character-liked-${character.id}`,
          JSON.stringify(character.liked)
        );
      }
    }
  }

  return { characters, fetchCharacters, toggleLike };
};
