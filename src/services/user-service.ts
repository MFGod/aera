export const getUserService = async (
  token: string,
) => {
  try {
    const response = await fetch(`https://localhost:7049/api/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Пидор")

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ошибка : ${errorText}`);
    }

    const user = await response.json();

    return user;
  }
  catch (error) {
    throw new Error(`Ошибка`);
  }
}
export const putUserService = () => {

}