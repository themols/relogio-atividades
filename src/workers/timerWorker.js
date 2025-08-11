let isRuning = false;

self.onmessage = function (event) {
  if (isRuning) {
    return;
  }

  isRuning = true;

  const state = event.data;
  const { activeTask, secondsRemaining } = state;

  const endDate = activeTask.startDate + secondsRemaining * 1000;

  const now = Date.now();
  let countDownSeconds = Math.ceil((endDate - now) / 1000);

  function tik() {
    self.postMessage(countDownSeconds);

    const now = Date.now();
    countDownSeconds = Math.floor((endDate - now) / 1000);

    setTimeout(tik, 1000);
  }

  tik();
};
