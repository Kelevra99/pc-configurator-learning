const sendForm = () => {
  const form = document.querySelector(".modal");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // поздаем объект FormData для сбора данных формы
    const formData = new FormData(form);

    // преобразуем FormData в объект для отправки JSON
    const sendObj = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
    };

    fetch("https://jsonplaceholder.typicode.com/posts/", {
      method: "POST",
      body: JSON.stringify(sendObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        // проверка статуса ответа сервера
        // если ошибка не ок, то выдаем окно с ошибкой
        if (!response.ok) {
          throw new Error(
            `Ошибка сервера: ${response.status} ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((json) => {
        console.log("Данные успешно отправлены:", json);
        // уведомление об успешной отправке
        alert("Заявка успешно отправлена!");
        // закрываем окно в случае успешной отправки, зачем оно нам надо то дальше?
        form.style.display = "";
      })
      .catch((error) => {
        // если от сервера пришла ошибка
        console.error("Ошибка при отправке формы:", error);
        alert(
          `Произошла ошибка при отправке формы: ${error.message}. Пожалуйста, попробуйте позже.`
        );
      })
      .finally(() => {
        // очистка формы
        
        form.reset();
      });
  });
};

sendForm();
