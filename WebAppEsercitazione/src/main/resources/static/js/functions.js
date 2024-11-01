function remove_album(_id){
    const element = document.getElementById(_id);
    element.remove();
}

function add_album() {

    const number = document.getElementById("number").value;
    const file = "img/album/" + document.getElementById("file").files[0].name;
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;

    const tableBody = document.getElementById("tb");

    const newRowHTML = `
        <tr id="${number}">
            <th scope="row">${number}</th>
            <td><img src="${file}"></td>
            <td>${title}</td>
            <td>${date}</td>
            <td><button type="button" class="btn btn-danger" onclick="remove_album(${number})"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
    `;

    tableBody.innerHTML += newRowHTML;

    document.getElementById("formAdd").reset();

    alert("L'album è stato aggiunto nella tabella");
}