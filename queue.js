// Заготовка скрипта для очереди и VM карточек (заглушка)
document.addEventListener("DOMContentLoaded", () => {
  const vmList = document.getElementById("vmList");
  // Пример карточки VM
  const vmExample = {
    id: "vm1",
    name: "Ubuntu VM",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ubuntu_Logo.svg/120px-Ubuntu_Logo.svg.png",
    status: "Available",
  };

  function createVMCard(vm) {
    const card = document.createElement("div");
    card.className = "vm-card";
    card.style.border = "1px solid #555";
    card.style.borderRadius = "8px";
    card.style.padding = "10px";
    card.style.backgroundColor = "#222";
    card.innerHTML = `
      <img src="${vm.image}" alt="${vm.name}" style="width:100%; border-radius:6px;" />
      <h3>${vm.name}</h3>
      <p>Status: ${vm.status}</p>
      <button onclick="alert('Connect to ${vm.name}')">Connect</button>
    `;
    return card;
  }

  vmList.appendChild(createVMCard(vmExample));
});