document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener('submit', function () {
        var $this = event.target;

        if ($this.classList.contains("SendMail")) {
            var http = new XMLHttpRequest();
            http.open("POST", '/vg/www/templates/modules/mail/php/sendmail.php');
            http.onreadystatechange = function () {//Call a function when the state changes.
                if (http.readyState == 4 && http.status == 200) {
                    var res1 = JSON.parse(http.responseText);
                    let inputs = $this.querySelectorAll('input')
                    let close = document.querySelector('.bgcgray-modal');
                    let message = document.querySelector('.message')
                    let pp = document.querySelector('.callback')

                    if (res1.error == 0) {
                        $this.querySelector('button').disabled = true;
                        $this.querySelector('button').classList.remove('accept');

                        // if (pp.style.display = 'block') {
                        //     pp.classList.remove('range-cb');
                        //     close.classList.remove("visib");
                        //     pp.style.display = 'none';
                        // };
                        // if (pp.style.display = 'none') {
                        //     pp.classList.remove('range-cb');
                        //     close.classList.remove("visib");
                        // }

                        inputs.forEach(el => {
                            if (el.type == 'checkbox') {
                                el.checked = false;
                            } else {
                                el.value = '';
                            }

                        });
                        message.style.display = 'block';
                        setTimeout(() => {
                            message.classList.add('message-close');
                            setTimeout(() => {
                                message.style.display = 'none';
                                message.classList.remove('message-close')
                            }, 300)
                        }, 2000)


                    } else {
                        alert(res1.data);
                        if ($('.g-recaptcha').length) {
                            grecaptcha.reset();
                        }
                    }
                }
            }
            http.send(new FormData($this));

            event.preventDefault();
            return false;
        } else {
            return true;
        }
    });

});