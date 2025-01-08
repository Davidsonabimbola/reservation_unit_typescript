export const fetchData = async (): Promise<string> => {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  };
  