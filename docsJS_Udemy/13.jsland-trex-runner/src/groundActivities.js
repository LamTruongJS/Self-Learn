import game from './game';

export default function($ground) {
  // tăng quãng đường mà trex đã chạy
  game.length++;

  // tăng tốc game
  if (game.length - game.lastSpeedUpLength > 1000) {
    game.speed += 0.2;
    game.lastSpeedUpLength = game.length;
  }

  // tạo hiệu ứng hoạt hình cho background tùy theo tốc độ
  game.ground.position += game.speed;
  if (game.ground.position >= game.ground.width) {
    game.ground.position = 0;
  }
  $ground.style.backgroundPositionX = -game.ground.position + 'px';
}
