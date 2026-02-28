const input = document.getElementById("itemInput");
const button = document.getElementById("addItemBtn");
const itemList = document.getElementById("itemList");
const removalAlert = document.querySelector(".removalAlert");
const closeAlertBtn = document.querySelector(".closeIcon a");

// FUNÇÃO PARA MOSTRAR ALERTA
function showAlert() {
  removalAlert.classList.remove("hidden");

  setTimeout(function () {
    removalAlert.classList.add("hidden");
  }, 3000);
}

// FECHA ALERTA NO X
closeAlertBtn.addEventListener("click", function (event) {
  event.preventDefault();
  removalAlert.classList.add("hidden");
});

// REMOVE ITENS QUE JÁ EXISTEM
const deleteButtons = document.querySelectorAll(".checkListContainer a");

deleteButtons.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const container = link.parentElement;
    container.remove();

    showAlert();
  });
});

// ADICIONA NOVO ITEM
button.addEventListener("click", function () {
  const value = input.value;

  if (value === "") {
    return;
  }

  const container = document.createElement("div");
  container.classList.add("checkListContainer");

  const checkItem = document.createElement("div");
  checkItem.classList.add("checkListItem");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const label = document.createElement("label");
  label.textContent = value;

  const deleteLink = document.createElement("a");
  deleteLink.href = "#";

  const icon = document.createElement("i");
  icon.classList.add("hgi", "hgi-stroke", "hgi-delete-02");

  deleteLink.addEventListener("click", function (event) {
    event.preventDefault();
    container.remove();

    showAlert();
  });

  checkItem.append(checkbox);
  checkItem.append(label);

  deleteLink.append(icon);

  container.append(checkItem);
  container.append(deleteLink);

  itemList.append(container);

  input.value = "";
});
