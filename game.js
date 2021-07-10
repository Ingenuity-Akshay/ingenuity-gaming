onload = () => {
    const canvas = document.querySelector('#myGame');
    const ctx = canvas.getContext('2d');
    const car = new Image();
    const road = new Image();
    const bg = new Image();

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    const carW = 55;
    const carH = 92;

    let x = canvas.width / 3;
    let y = canvas.height - carH;
    let speed = 5;
    let dir = 0;
    let mod = 0;
    car.addEventListener('load', () => {
        draw();
        window.addEventListener('keydown', keyHandler);
        window.addEventListener('keyup', keyHandler);
    });
    road.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmyAKXQmUcHm8S6VOsWuOw_ibq3gakIbCESGgmJQKqsRYEdsrHuGK6Dw0zZBLU1wteiA&usqp=CAU";
    car.src = "https://th.bing.com/th/id/R.2144a2fae2c7e97c3b6e2ae01d065593?rik=Q0l6D0MdNHufcQ&pid=ImgRaw";
    bg.src = 'https://c0.wallpaperflare.com/preview/321/716/4/top-view-photography-of-grass-field-at-daytime.jpg';


    window.addEventListener('resize', () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        x = canvas.width / 3;
        y = canvas.height - carH;
        draw();

    })
    function draw() {
        if (road.complete && car.complete) {
            if (((x + speed * mod) >= (canvas.width / 3)) && (x + speed * mod) <= (canvas.width * (2 / 3)) - carW) {
                x += speed * mod;
            }
            if ((y + speed * dir) >= 0 && (y + speed * dir) <= canvas.height - carH) {
                y += speed * dir;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(road, canvas.width / 3, 0, canvas.width / 3, 1000);
            ctx.drawImage(car, x, y, carW, carH);

        }
        requestAnimationFrame(draw);
    }
    function keyHandler(e) {
        switch (e.type) {
            case 'keydown':
                switch (e.code) {
                    case 'KeyW':
                    case 'ArrowUp':
                        console.log(speed, dir, mod);
                        dir = -1;
                        break;
                    case 'KeyS':
                    case 'ArrowDown':
                        dir = 1;
                        break;
                    case 'KeyA':
                    case 'ArrowLeft':
                        mod = -1;
                        break;
                    case 'KeyD':
                    case 'ArrowRight':
                        mod = 1;
                        break;
                }
                break;
            case 'keyup':
                switch (e.code) {
                    case 'KeyW':
                    case 'ArrowUp':
                    case 'KeyS':
                    case 'ArrowDown':
                        dir = 0;
                        break;
                    case 'KeyA':
                    case 'ArrowLeft':
                    case 'KeyD':
                    case 'ArrowRight':
                        mod = 0;
                        break;
                }
                break;
        }
    }
}