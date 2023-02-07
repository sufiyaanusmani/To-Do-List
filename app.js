function appendListItem(text, uniqueID) {
    let listItem = `<li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"  style = "background-color: #f4f6f7;" ><input class="form-check-input me-2" type="checkbox" id="${uniqueID}" value="" /><h6 id="text-${uniqueID}">${text}</h6></li >`;
    $("#main-list").append(listItem);
}

let items = ["Task 1", "Task 2", "Task 3"]

for (let i = 0; i < items.length; i++) {
    appendListItem(items[i], `task-${i}`)
}

$("input[type='checkbox']").change(function () {
    let id = $(this).attr("id");
    if ($(this).is(":checked")) {
        $(`#text-${id}`).addClass("strike")
    } else {
        $(`#text-${id}`).removeClass("strike")
    }
});
