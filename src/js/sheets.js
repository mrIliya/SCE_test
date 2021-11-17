const DATA_URL = "https://my-json-server.typicode.com/mriliya/test_json/posts";
const sheetsContainer = document.querySelector(".table-content__main");
const loadBtn = document.querySelector(".table-content__btn");
let items = 5;

const fetchData = async () => {
  let data = null;

  const response = await fetch(DATA_URL).catch((err) => console.log(err));
  if (response) {
    data = await response.json();
  }

  return data;
};

const displayData = async (num) => {
  let data = await fetchData();
  data = data.slice(0, num);
  sheetsContainer.innerHTML = data
    .map((item) => {
      const { body, email, id, postid, name } = item;
      return `<ul class="table-content__list" id=${id}>
						<li class="table-content__line">${body}</li>
						<li class="table-content__line">${email}</li>
						<li class="table-content__line">${id}</li>
						<li class="table-content__line">${postid}</li>
						<li class="table-content__line">${name}</li>
					</ul>`;
    })
    .join("");
};

loadBtn.addEventListener("click", () => {
  items = items + 5;
  displayData(items);
});

window.addEventListener("DOMContentLoaded", displayData(5));
