import Task from './task/TaskComponent';
import taskIcon from './task/icon';
import Event from './event/EventComponent';
import eventIcon from './event/icon';

const config = {
  entityTypes: {
    Task: {
      width: 125,
      height: 75,
    },
    Event: {
      width: 50,
      height: 50,
    },
  },
  gridSize: 25,
};

const customEntities = {
  Task: {
    component: Task,
    icon: taskIcon,
  },
  Event: {
    component: Event,
    icon: eventIcon,
  },
};

export { config, customEntities };