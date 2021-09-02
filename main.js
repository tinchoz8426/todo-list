//Uso de jQuery
//Esta es la forma corta de inicializar jQuery, pero tambien esta: $(document).ready(function(){})
$(function () {
    $("#input").change(function () {
        let input = $(this).val();
        $("ul").append(`<li class="list-item">${input} <i class="fas fa-check"></i> <i class="fas fa-trash-alt"></i></li>`);
    })

    $("ul").on("click", ".fa-trash-alt", function () {
        $(this).parent("li").fadeOut(1800); //Le pone un display:none, pero no lo elimina
        //$(this).parent("li").remove(); //Para eliminar el list item
        $(this).parent("li").toggleClass("deleted");
    })

    $("ul").on("click", ".fa-check", function () {
        $(this).parent("li").fadeOut(1800);
        $(this).parent("li").toggleClass("checked");
    })

    $("form").submit(function (e) {
        e.preventDefault();
    })

    //Esto lo hice con JavaScript Vanilla y con una libreria que se llama dragable.js
    const dropItems = document.getElementById("drop-items");

    new Sortable(dropItems, {
        animation: 350,
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
    });
})

