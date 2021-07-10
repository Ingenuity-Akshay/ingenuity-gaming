import { draw } from './draw.js'

class move extends draw {
    start() {
        window.addEventListener('resize', this.resize.bind(this));
        this.car.addEventListener('load', () => {
            window.addEventListener('keydown', this.keyHandlers.bind(this));
            window.addEventListener('keyup', this.keyHandlers.bind(this));
            this.bg.addEventListener('load', this.initDraw.bind(this));
        });
    }
    resize() {
        this.getCoordinates();
        this.initDraw();
    }
    keyHandlers(e) {
        switch (e.type) {
            case 'keydown':
                switch (e.code) {
                    case 'KeyW':
                    case 'ArrowUp':
                        this.dir = -1;
                        break;
                    case 'KeyS':
                    case 'ArrowDown':
                        this.dir = 1;
                        break;
                    case 'KeyA':
                    case 'ArrowLeft':
                        this.mod = -1;
                        break;
                    case 'KeyD':
                    case 'ArrowRight':
                        this.mod = 1;
                        break;
                }
                break;
            case 'keyup':
                switch (e.code) {
                    case 'KeyW':
                    case 'ArrowUp':
                    case 'KeyS':
                    case 'ArrowDown':
                        this.dir = 0;
                        break;
                    case 'KeyA':
                    case 'ArrowLeft':
                    case 'KeyD':
                    case 'ArrowRight':
                        this.mod = 0;
                        break;
                }
                break;
        }
    }
}
let carMove = new move();
carMove.start();