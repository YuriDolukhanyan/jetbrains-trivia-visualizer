export async function fetchTriviaQuestions(amount = 50) {
  const API_URL = `https://opentdb.com/api.php?amount=${amount}`;
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch trivia questions");
    }
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching trivia data:", error);
    return [];
  }
}
