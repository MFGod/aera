import { getUserData } from '../hooks/getUserData';
import { Task } from '../store/task-slice';

interface CreateTaskResponse {
  createdTaskId: number;
  columnId: number;
  title: string;
  description: string;
  isCompleted: boolean;
  isInProgress: boolean;
  completedAt: string;
}

export const addTaskService = async (
  task: Omit<Task, 'id'>,
  token: string,
): Promise<CreateTaskResponse> => {
  if (!task.title) {
    throw new Error('Заголовок должен быть заполнен');
  }
  const { userId } = getUserData();

  const response = await fetch('https://localhost:7049/api/user-tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      userId: userId,
      columnId: task.columnId,
      title: task.title,
      description: task.description,
      isCompleted: task.completed,
      isInProgress: task.inProgress,
      completedAt: task.completedAt,
    }),
  });

  if (response.ok) {
    const createdTask = await response.json(); // Получение данных созданной колонки
    console.log('Созданная задача:', createdTask);
    return createdTask;
  } else {
    const errorText = await response.text();
    throw new Error(`Ошибка при добавлении задачи: ${errorText}`);
  }
};

export const getTasksService = async (
  token: string,
  userId: string,
): Promise<Task[]> => {
  const response = await fetch(
    `https://localhost:7049/api/user-tasks/all?userId=${userId}`,
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
    throw new Error(`Ошибка при получении задач: ${errorText}`);
  }

  const tasks = await response.json();
  console.log('Полученные задачи:', tasks);
  return tasks.userTasks;
};

export const deleteTaskService = async (taskId: number, token: string) => {
  const response = await fetch('https://localhost:7049/api/user-tasks/', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      taskId: taskId,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Ошибка при получении задач: ${errorText}`);
  }

  return response.json();
};

export const updatedTaskService = async (
  token: string,
  updatingTaskId: number,
  task: Task,
) => {
  const url = 'https://localhost:7049/api/user-tasks/';
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      updatingTaskId,
      columnId: task.columnId,
      title: task.title,
      description: task.description,
      isCompleted: task.completed,
      isInProgress: task.inProgress,
      completedAt: task.completedAt,
    }),
  });
  console.log('Айди в запросе', updatingTaskId);

  if (response.ok) {
    const updatedTask = await response.json();
    console.log('Обновленная задача:', updatedTask);
    return {
      ...updatedTask,
      id: updatedTask.updatingTaskId, // Присваиваем id значение from updatingTaskId
    };
  } else {
    const errorText = await response.text();
    throw new Error(`Ошибка при обновлении: ${errorText}`);
  }
};
