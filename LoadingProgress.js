        // setTimeout(ShowLoadProgress, 5000);
        // setTimeout(() => {
        //     ShowLoadProgress()
        // }, timeout);

        var i = 0;
        function ShowLoadProgress() {
        if (i == 0) {
            i = 1;
            var elem = document.getElementById("progressBar_1");
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
                ShowApplication();
            } else {
                width++;
                elem.style.width = width + "%";
            }
            }
        }
        }
        function ShowApplication(){
            document.getElementById("wrapper").classList.remove("d-none");
            document.getElementById("ProgressBarContainer").classList.add("d-none");
        }