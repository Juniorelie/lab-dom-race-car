class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;

    this.element = document.createElement("img");
    this.element.src = imgSrc;

    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.left += this.directionX;
    this.top += this.directionY;

    if (this.left < 60) {
      this.left = 60;
    }
    if (this.top < 5) {
      this.top = 5;
    }

    if (this.left > 310) {
      this.left = 310;
    }

    if (this.top > 490) {
      this.top = 490;
    }

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();
    console.log(playerRect);

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
