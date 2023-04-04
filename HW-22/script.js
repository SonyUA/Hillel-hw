$(document).ready(function () {
    $(".btnAdd").click(function () {
        let classForAlert = new Date().toISOString().slice(-4);
        let text = `<div class="alert alert-info ${classForAlert}" role="alert"></div>`;
        $(".box").append(text);
        $(`.${classForAlert}`).text($("#formGroupExampleInput").val());
    });

    $(".box").on("click", ".alert", function () {
        $(this).slideUp();
    });
});
