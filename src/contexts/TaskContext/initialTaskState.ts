export const initialTaskState = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};
