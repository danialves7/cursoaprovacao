var selectedRow = null;

// mostrar alerta
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div,main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
};

// Limpar todo campo
function clearFields(){
    document.querySelector("#date").value = "";
    document.querySelector("time").value = "";
    document.querySelector("#subject").value = "";
};

// Adicionar dados

document.querySelector("#student-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    // form values
    const date =document.querySelector("#date").value;
    const subject =document.querySelector("#subject").value;
    const time =document.querySelector("#time").value;

    //validação
    if(date == "" || subject == "" || time == ""){
        showAlert("Por favor complete todos os campos", "danger");
    }
    else{
        if(selectRow == null){
            const list =document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
              <td>${date}</td>
              <td>${subject}</td>
              <td>${time}</td>
              <td>
              <a href="#" class="btn btn-warning btn-sm edit">Editar</a>
              <a href="#" class="btn btn-danger btn-sm delete">Deletar</a>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Matéria adicionada", "success");
        }
        else {
            selectedRow.children[0].textContent = date;
            selectedRow.children[1].textContent = subject;
            selectedRow.children[2].textContent = time;
            selectedRow = null;
            showAlert("Informação editada", "info");
        }
        clearFields();
    }
});

//editar dados
document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")) {
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#date").value = selectedRow.children[0].textContent;
        document.querySelector("#subject").value = selectedRow.children[1].textContent;
        document.querySelector("#time").value = selectedRow.children[2].textContent;

    }
});

//dados deletados

document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Cronograma deletado", "danger");
    }
});
