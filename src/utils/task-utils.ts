import { calculateDaysLeft } from './date-utils';
import { Task } from '../store/task-slice';


export type FilterType = 'all' | 'recentlyAdded' | 'week' | 'none';

const filterByDate = (tasks: Task[], filter: FilterType): Task[] => {
  return tasks.filter((task) => {
    const daysLeft = task.completedAt
      ? calculateDaysLeft(task.completedAt)
      : Infinity;

    switch (filter) {
      case 'week':
        return daysLeft <= 7;
      case 'all':
      default:
        return true;
    }
  });
};

// Функция фильтрации задач по выбранному фильтру
export const filterTaskByFilter = (
  tasks: Task[],
  filter: FilterType
): Task[] => {
  if (filter === 'none') {
    return tasks; // Возвращаем все задачи, если фильтр не выбран
  }
  const filteredTasks = filterByDate(tasks, filter);

  switch (filter) {
    case 'recentlyAdded':
      return filteredTasks.slice(-5);
    case 'all':
    case 'week':
    default:
      return filteredTasks;
  }
};
