const emojis = ['😎', '😎', '😶‍🌫️', '😶‍🌫️', '🥶', '🥶', '🤪', '🤪', '🙈', '🙈', '🧟', '🧟', '😵‍💫', '😵‍💫', '🤡', '🤡']
        var shuffleEmojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);
        console.log(shuffleEmojis);

        function sweetalert() {
            Swal.fire({
                title: "You Won The Game!!!",
                width: 600,
                padding: "3em",
                color: "#716add",
                background: "#fff url(/images/trees.png)",
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("./images/nyan-cat.gif")
                  left top
                  no-repeat
                `
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            });
        }

        for (var i = 0; i < emojis.length; i++) {
            let box = document.createElement('div');
            box.className = 'item';
            box.innerHTML = shuffleEmojis[i];

            box.onclick = function() {
                this.classList.add('boxOpened');

                setTimeout(function () {
                    console.log(document.querySelectorAll('.boxOpened').length);
                    if (document.querySelectorAll('.boxOpened').length > 1) {
                        // console.log(document.querySelectorAll('.boxOpened'));
                        if (document.querySelectorAll('.boxOpened')[0].innerHTML == document.querySelectorAll('.boxOpened')[1].innerHTML) {
                            document.querySelectorAll('.boxOpened')[0].classList.add('boxMatch');
                            document.querySelectorAll('.boxOpened')[1].classList.add('boxMatch');

                            document.querySelectorAll('.boxOpened')[1].classList.remove('boxOpened');
                            document.querySelectorAll('.boxOpened')[0].classList.remove('boxOpened');
                            if (document.querySelectorAll('.boxMatch').length == emojis.length) {
                                sweetalert();
                            }
                        }
                        else {
                            console.log(document.querySelectorAll('.boxOpened'));
                            document.querySelectorAll('.boxOpened')[1].classList.remove('boxOpened');
                            document.querySelectorAll('.boxOpened')[0].classList.remove('boxOpened');
                        }
                    }
                }, 500)
            }


            document.querySelector('.game').appendChild(box);
        }