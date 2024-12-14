export const getUserService = async (token: string, userId: string) => {
  try {
    const response = await fetch(
      `https://localhost:7049/api/users?userId=${userId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ошибка : ${errorText}`);
    }

    const user = await response.json();

    return user;
  } catch (error) {
    console.error(`Ошибка`, error);
  }
};

export const updateUserName = async (username: string, token: string, userId: string) => {
  try {
    const response = await fetch(
      `https://localhost:7049/api/users`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username })
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ошибка : ${errorText}`);
    }

    const data = await response.json();
    console.log("data", data);
    return data;

  } catch (error) {
    console.error(`Ошибка`, error);
  }
};
