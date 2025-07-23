const translations = {
  en: {
    title: "QwertyVM",
    rules: "Rules",
    connect: "Connect",
    createVM: "Create VM",
    queue: "Queue",
  },
  ru: {
    title: "QwertyVM",
    rules: "Правила",
    connect: "Подключиться",
    createVM: "Создать VM",
    queue: "Очередь",
  },
  ua: {
    title: "QwertyVM",
    rules: "Правила",
    connect: "Підключитись",
    createVM: "Створити VM",
    queue: "Черга",
  },
};

function setLanguage(lang) {
  document.getElementById("title").textContent = translations[lang].title;
  document.getElementById("rulesLink").textContent = translations[lang].rules;
  // Можно расширять для других элементов
  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSelect");
  const savedLang = localStorage.getItem("lang") || "en";
  langSelect.value = savedLang;
  setLanguage(savedLang);
  langSelect.addEventListener("change", () => {
    setLanguage(langSelect.value);
  });
});