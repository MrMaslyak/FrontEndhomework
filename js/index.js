fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((contacts) => {
    const container = document.getElementById("contacts-container");

    contacts.forEach((contact) => {
      const { name, email, phone, address } = contact;

      const color = generateRandomColor();

      const contactCard = document.createElement("div");
      contactCard.className = "contact-card";

      const avatar = document.createElement("div");
      avatar.className = "avatar";
      avatar.style.backgroundColor = color;
      avatar.innerText = getInitials(name);
      contactCard.appendChild(avatar);

      const nameElement = document.createElement("div");
      nameElement.className = "name";
      nameElement.innerText = name;
      contactCard.appendChild(nameElement);

      const emailElement = document.createElement("div");
      emailElement.className = "contact-info";
      emailElement.innerHTML = `<a href="mailto:${email}">${email}</a>`;
      contactCard.appendChild(emailElement);

      const phoneElement = document.createElement("div");
      phoneElement.className = "contact-info";
      phoneElement.innerHTML = `<a href="tel:${phone}">${phone}</a>`;
      contactCard.appendChild(phoneElement);

      const addressElement = document.createElement("div");
      addressElement.className = "contact-info";
      addressElement.innerText = `${address.city}, ${address.street}, ${address.suite}`;
      contactCard.appendChild(addressElement);

      container.appendChild(contactCard);
    });
  })
  .catch((error) => console.error(error));

function generateRandomColor() {
  const symbols = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += symbols[Math.floor(Math.random() * symbols.length)];
  }
  return color;
}

function getInitials(name) {
  const names = name.split(" ");
  const initials = names.map((name) => name.charAt(0)).join("");
  return initials;
}
