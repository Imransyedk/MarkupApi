var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","name");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="5px";
button.addEventListener("click",foo);

let brand=document.createElement("div");
brand.setAttribute("id","brand");

div.append(input,button,brand);
document.body.append(div);

async function foo(){
  const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
  const products = await response.json();

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  const headers = ['Brand', 'Name', 'Price', 'Image', 'Product Link', 'Description'];

  const headerRow = document.createElement('tr');
  headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  products.forEach(product => {
    const { brand, name, price, image_link, product_link, description } = product;

    const tr = document.createElement('tr');

    const tdBrand = document.createElement('td');
    tdBrand.textContent = brand;
    tr.appendChild(tdBrand);

    const tdName = document.createElement('td');
    tdName.textContent = name;
    tr.appendChild(tdName);

    const tdPrice = document.createElement('td');
    tdPrice.textContent = price;
    tr.appendChild(tdPrice);

    const tdImage = document.createElement('td');
    const img = document.createElement('img');
    img.src = image_link;
    img.alt = name;
    img.width = 50;
    tdImage.appendChild(img);
    tr.appendChild(tdImage);

    const tdProductLink = document.createElement('td');
    const productLink = document.createElement('a');
    productLink.href = product_link;
    productLink.textContent = 'View Product';
    tdProductLink.appendChild(productLink);
    tr.appendChild(tdProductLink);

    const tdDescription = document.createElement('td');
    tdDescription.textContent = description;
    tr.appendChild(tdDescription);

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}
 

foo();