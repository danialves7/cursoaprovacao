const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__Menu');
const navLogo = document.querySelector('#navbar__logo');
const studentForm = document.querySelector('#student-form');
/* Display Mobile Menu */

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY
    console.log(scrollPos);

    // adds 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
}

if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight')
}

};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);



/* faq accordion */
/* $('.faq-head').each(function(){
    $(this).click(function(){
        $(this).next().toggleClass('show-faq-content');
        let icon = $(this).children('span').children("i").attr('class');

        if(icon == "fas fa-plus"){
            $(this).children('span').html('<i class = "fas fa-minus"></i>');
        } else {
            $(this).children('span').html('<i class = "fas fa-plus"></i>');
        }
    });
}); */

/* var selectedRow = null; */

// mostrar alerta
/* function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div,main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
} */

// Limpar todo campo
/* function clearFields(){
    document.querySelector("#date").value = "";
    document.querySelector("time").value = "";
    document.querySelector("#subject").value = "";
} */

// Adicionar dados

/* document.querySelector("#student-form").addEventListener("submit", (e) =>{
    e.preventDefault(); */

    // form values
    /* const date =document.querySelector("#date");
    const subject =document.querySelector("#subject");
    const time =document.querySelector("#time");
 */
    //validação
    /* if(date == "" || subject == "" || time == ""){
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
}); */

//editar dados
/* document.querySelector("#student-list").addEventListener("click", (e) =>{
    target =e.target;
    if(target.classList.contains("editar"){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#date").value = selectedRow.children[0].textContent;
        document.querySelector("#subject").value = selectedRow.children[1].textContent;
        document.querySelector("#time").value = selectedRow.children[2].textContent;

    })
}) */

//dados deletados

/* document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("deletar")){
        target.parentElement.parentElement.remove();
        showAlert("Cronograma deletado", "danger");
    }
}); */
