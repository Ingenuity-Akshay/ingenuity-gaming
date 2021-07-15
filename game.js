export class game {
    car = new Image();
    road = new Image();
    bg = new Image();
    myGame;
    carW = 48;
    carH = 92;
    x;
    y;
    speed = 3;
    dir = 0;
    mod = 0;
    constructor() {
        this.myGame = document.getElementById("myGame");
        this.myGame.width = innerWidth;
        this.myGame.height = innerHeight;
        this.x = myGame.width / 3;
        this.y = myGame.height - this.carH;
        this.road.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmyAKXQmUcHm8S6VOsWuOw_ibq3gakIbCESGgmJQKqsRYEdsrHuGK6Dw0zZBLU1wteiA&usqp=CAU";
        this.car.src="https://th.bing.com/th/id/R.2144a2fae2c7e97c3b6e2ae01d065593?rik=Q0l6D0MdNHufcQ&pid=ImgRaw";
        this.bg.src='https://c0.wallpaperflare.com/preview/321/716/4/top-view-photography-of-grass-field-at-daytime.jpg';
    }
    getCoordinates() {
        this.myGame.width = innerWidth;
        this.myGame.height = innerHeight;
        this.x = myGame.width / 3;
        this.y = myGame.height - this.carH;
    }

}