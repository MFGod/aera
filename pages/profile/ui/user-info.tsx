import styled from 'styled-components';
import { StyledAddIcon } from '../../../public/assets/icons/add-column';
import { PhotoIcon } from '../../../public/assets/icons/photo';
import { useEffect, useState } from 'react';
import {
  getUploadImage,
  updateUsername,
  uploadImageRequest,
} from '@/services/user-service';
import { useAuthData } from '@/hooks/useAuthData';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setUserImage, setUsername } from '@/store/user-slice';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-size: 14px;

  padding: 8px 14px;
  width: max-content;

  background-color: transparent;

  border: 1px solid #1d1e24;
  border-radius: 50px;

  cursor: pointer;

  &:active {
    outline: none;
  }
`;

const Input = styled.input`
  width: 293px;
  font-size: 16px;
  color: #1d1e24;

  background-color: transparent;

  border: none;

  &:focus {
    outline: none;
  }
`;

export const UserInfo = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.user.username);

  const { token, userId } = useAuthData();

  const [name, setName] = useState(username || '');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [profileImageLink, setProfileImageLink] = useState<string | null>(null);

  const [placeholder, setPlaceholder] = useState(
    username || 'Введите новое имя',
  );

  useEffect(() => {
    if (username && username !== name) {
      setName(username);
    }
  }, [username]);

  const handleChangeName = async (newName: string) => {
    if (newName === username) {
      console.warn('Новое имя совпадает с текущим.');
      return;
    }

    try {
      if (!token || !userId) throw new Error('Необходим токен и userId.');
      if (!newName.trim()) throw new Error('Имя не может быть пустым.');

      const data = await updateUsername(token, userId, newName.trim());
      dispatch(setUsername(data.username)); // Обновляем Redux
      console.log('Имя пользователя успешно обновлено:', data.username);
    } catch (error) {
      console.error('Ошибка при обновлении имени пользователя:', error);
    }
  };

  const handleFocus = () => setPlaceholder('');

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const newValue = e.target.value.trim();
    if (newValue) {
      handleChangeName(newValue);
    } else {
      setPlaceholder(username || 'Введите новое имя');
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      try {
        const { profileImageLink } = await uploadImageRequest(
          userId,
          token,
          file,
        );

        const url = await getUploadImage(profileImageLink, token);
        setImageUrl(url);
        dispatch(setUserImage(url));
        localStorage.setItem('userImage', profileImageLink);

        console.log('profileImageLink', profileImageLink);
        setProfileImageLink(profileImageLink);

      } catch (error) {
        console.error('Ошибка при загрузке изображения:', error);
      }
    }
  };

  useEffect(() => {
    const userimage = localStorage.getItem('userImage');
    if (userimage) {
      setProfileImageLink(userimage);
      
      // Загрузить URL для отображения
      const fetchImageUrl = async () => {
        if (token) {
          try {
            const url = await getUploadImage(userimage, token);
            setImageUrl(url);
          } catch (error) {
            console.error('Ошибка при получении изображения:', error);
          }
        }
      };

      fetchImageUrl();
    }
  }, [token]);


  return (
    <Wrapper>
      <Input
        id="uploadImage_url"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <label
        htmlFor="uploadImage_url"
        style={{ display: 'block', cursor: 'pointer' }}
      >
        <div
          style={{
            backgroundColor: '#F2F3F5',
            borderRadius: '8px',
            width: '250px',
            height: '250px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Uploaded"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          ) : (
            <PhotoIcon />
          )}
        </div>
      </label>

      <Div>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={username}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Button>
          Специальность <StyledAddIcon />
        </Button>
        <Button>
          описание <StyledAddIcon />
        </Button>
      </Div>
    </Wrapper>
  );
};  
