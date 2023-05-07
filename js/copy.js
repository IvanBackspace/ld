
function copyDiv() {
    var hint = document.getElementById("hint");
    hint.style.display = "block";
    setTimeout(function () {
      hint.style.display = "none";
      }, 2000);

    var div = document.getElementById("jsonld-output");
    var text = div.innerText;
    text = text.replace(/^\s*,/, ''); // удаляем первую запятую в начале текста
    div.innerText = text;

    var range = document.createRange();
    range.selectNode(div);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    var div = document.getElementById("card-body_script");
    var range = document.createRange();
    range.selectNode(div);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    document.execCommand("copy");

    // Удаляем временный элемент textarea
    document.body.removeChild(tempElement);
}