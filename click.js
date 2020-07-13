
(function () {

    function init() {
        let content = document.getElementById("content");
        let textX = document.getElementsByTagName("span")[0];
        let textY = document.getElementsByTagName("span")[1];

        content.addEventListener("click", function (event) {
            let documentX = event.pageX;
            let documentY = event.pageY;
            let rect = content.getBoundingClientRect();

            let contentX = rect.left + window.pageXOffset;
            let contentY = rect.top + window.pageYOffset;

            let cursorX = documentX - contentX;
            let cursorY = documentY - contentY;

            textX.textContent = cursorX;
            textY.textContent = cursorY;
        });
    }

    window.addEventListener("load", init, false);
})();