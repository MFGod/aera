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

export const updateUsername = async (
  token: string,
  userId: string,
  username: string,
) => {
  try {
    const response = await fetch(`https://localhost:7049/api/users`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userId, username }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ошибка : ${errorText}`);
    }

    const data = await response.json();
    console.log('data', data);
    return data;
  } catch (error) {
    console.error(`Ошибка`, error);
    throw error;
  }
};

export const uploadImageService = async (
  userId: string,
  token: string,
  file: File,
) => {
  const formData = new FormData();
  formData.append('UserProfileImage', file);

  try {
    const response = await fetch(
      `https://localhost:7049/api/users/upload-user-profile-image?userId=${userId}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      },
    );
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ошибка : ${errorText}`);
    }

    const data = await response.json();
    console.log('data', data);
    return data;
  } catch (error) {
    console.error(`Ошибка`, error);
    throw error;
  }
};

//export const getUploadImage = async (imageName: string, token: string) => {
//  const url = new URL(imageName);
//  const extractedImageName = url.searchParams.get('ImageName');
//  console.log('Extracted Image Name:', extractedImageName);

//  try {
//    const response = await fetch(
//      `https://localhost:7049/api/users/profile-image?ImageName=${extractedImageName}`,
//      {
//        method: 'GET',
//        headers: {
//          Authorization: `Bearer ${token}`,
//        },
//      },
//    );

//    if (!response.ok) {
//      const errorText = await response.text();
//      throw new Error(`Error: ${errorText}`);
//    }

//    const imageBlob = await response.blob();

//    // Создаем URL для использования изображения в компоненте
//    const imageUrl = URL.createObjectURL(imageBlob);
//    console.log('imageUrl', imageUrl);
//    return imageUrl;
//  } catch (error) {
//    console.error('Error fetching image:', error);
//    throw error;
//  }
//};
