const progressBar = () => {
  // Находим элемент progress
  const progressElement = document.querySelector(
    ".course__progress-element progress"
  );

  const numberElement = document.querySelector(
    ".course__progress-label .course__number"
  );

  if (progressElement) {
    // Получаем значение атрибута value
    const value = progressElement.value; // Число 0
    const maxValue = progressElement.max; // Число 1000000
    const minValue = progressElement.min; // Число 0

    const rect = progressElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let timeout;
    let checkScrollCompleted = false;

    //анимация плавного заполнения прогресс-бара
    const animateProgress = (targetValue, duration = 1000) => {
      const startValue = 0;
      const startTime = performance.now(); // Запоминаем время начала

      const updateProgress = (currentTime) => {
        const elapsed = currentTime - startTime; // Сколько времени прошло
        const progress = Math.min(elapsed / duration, 1); // Прогресс от 0 до 1

        // Вычисляем текущее значение
        const currentValue = Math.floor(
          startValue + (targetValue - startValue) * progress
        );
        progressElement.value = currentValue;

        // Если анимация не закончена - продолжаем
        if (progress < 1) {
          requestAnimationFrame(updateProgress);
        }
        // ну и анимацию числа сюда же добавим, пусть будет для красоты
        numberElement.textContent = currentValue.toLocaleString("ru-RU") + " ₽";
      };

      requestAnimationFrame(updateProgress);
    };

    //проверка позиции элемента и заполнение прогресс-бара
    const checkScroll = () => {
      clearTimeout(timeout);
      if (checkScrollCompleted) return;
      timeout = setTimeout(function () {
        // Проверка позиции (выполнится через 100мс после окончания прокрутки для экономии ресурсов)
        const rect = progressElement.getBoundingClientRect();
        if (rect.top <= windowHeight / 1.4 && rect.bottom >= 0) {
          // верх элемента дошёл до середины экрана или выше
          // Генерируем случайное значение от 350000 до 600000
          const randomValue =
            Math.floor(Math.random() * (600000 - 350000 + 1)) + 350000;
          animateProgress(randomValue);
          checkScrollCompleted = true;
          window.removeEventListener("scroll", checkScroll);
        }
      }, 100);
    };

    window.addEventListener("scroll", checkScroll);

    console.log("Value:", progressElement.value);
    console.log("Max:", maxValue);
    console.log("Min:", minValue);
  }
};

progressBar();
