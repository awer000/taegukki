window.onload = function () {
  // Definitions
  var canvas = document.getElementById("circular-objects-canvas")
  var context = canvas.getContext("2d")

  var radian = Math.PI / 180

  const radius = 150
  const rotateDegree = 32

  // 빨강
  context.fillStyle = "red"
  context.beginPath()
  context.arc(
    radius * 3,
    radius * 2,
    radius,
    rotateDegree * radian,
    (180 + rotateDegree) * radian,
    true
  )
  context.fill()

  // 파랑
  context.fillStyle = "blue"
  context.beginPath()
  context.arc(
    radius * 3,
    radius * 2,
    radius,
    rotateDegree * radian,
    (180 + rotateDegree) * radian,
    false
  )
  context.fill()
  
  // 보조 선 긋기
  // context.beginPath()
  // context.arc(
  //   radius * 3,
  //   radius * 2,
  //   radius + (radius * (1 / 2)),
  //   0 * radian,
  //   360 * radian,
  //   true
  // )
  // context.stroke()


  // 태극 중심의 빨간 부분 마무리
  context.fillStyle = "red"
  context.beginPath()
  context.arc(
    387,
    259,
    radius / 2,
    rotateDegree * radian,
    (180 + rotateDegree) * radian,
    false
  )
  context.fill()

  // // 태극 중심의 파란 부분 마무리
  context.fillStyle = "blue"
  context.beginPath()
  context.arc(
    512.5,
    341.5,
    radius / 2,
    rotateDegree * radian,
    (180 + rotateDegree) * radian,
    true
  )
  context.fill()

  // 건 부분
  context.resetTransform();
  context.translate(300,110);
  context.rotate((90 + rotateDegree) * radian);
  context.fillStyle = "black"
  context.beginPath()
  context.fillRect(0, 0, radius, radius / 6)
  context.fill()

  context.fillStyle = "black"
  context.beginPath()
  context.fillRect(0, radius / 6 + radius / 12, radius, radius / 6)
  context.fill()

  context.fillStyle = "black"
  context.beginPath()
  
  context.fillRect(0, radius / 6 + radius / 12 + radius / 6 + radius / 12, radius, radius / 6)
  context.fill()

  // 리 부분
  context.resetTransform();
  context.translate(220,345);
  context.rotate((30 + rotateDegree) * radian);
  context.fillStyle = "black"
  context.beginPath()
  context.fillRect(0, 0, radius, radius / 6)
  context.fill()

  context.fillStyle = "black"
  context.beginPath()
  context.fillRect(0, radius / 6 + radius / 12, radius, radius / 6)
  context.fill()

  context.fillStyle = "black"
  context.beginPath()
  
  context.fillRect(0, radius / 6 + radius / 12 + radius / 6 + radius / 12, radius, radius / 6)
  context.fill()

  // 흰색 
  context.resetTransform();
  context.translate(253,405);
  context.rotate((30 + rotateDegree) * radian);
  context.fillStyle = "white"
  context.beginPath()
  context.fillRect(0, radius / 6 + radius / 12, radius / 12, radius / 6 + 10)
  context.fill();

  // 감 부분
  context.resetTransform();
  context.translate(680,55);
  context.rotate((25 + rotateDegree) * radian);
  context.fillStyle = "black"
  context.beginPath()
  context.fillRect(0, 0, radius, radius / 6)
  context.fill()

  context.fillStyle = "black"
  context.beginPath()
  context.fillRect(0, radius / 6 + radius / 12, radius, radius / 6)
  context.fill()

  context.fillStyle = "black"
  context.beginPath()
  
  context.fillRect(0, radius / 6 + radius / 12 + radius / 6 + radius / 12, radius, radius / 6)
  context.fill()


  // 감 흰색 부분
  context.resetTransform();
  context.translate(720,110);
  context.rotate((25 + rotateDegree) * radian);
  context.fillStyle = "white"
  context.beginPath()
  context.fillRect(0, 0, radius / 12, radius / 6 + 12)
  context.fill();

  context.resetTransform();
  context.translate(720,110);
  context.rotate((25 + rotateDegree) * radian);
  context.fillStyle = "white"
  context.beginPath()
  context.fillRect(0, radius / 6 + radius / 12 + radius / 6 + radius / 12, radius / 12, radius / 6 + 10)
  context.fill();

  // 곤 부분
  context.resetTransform();
  context.translate(610,470);
  context.rotate((-90 + rotateDegree) * radian);
  context.fillStyle = "black"
  context.beginPath()
  context.fillRect(0, 0, radius, radius / 6)
  context.fill()

  context.fillStyle = "black"
  context.beginPath()
  context.fillRect(0, radius / 6 + radius / 12, radius, radius / 6)
  context.fill()

  context.fillStyle = "black"
  context.beginPath()
  
  context.fillRect(0, radius / 6 + radius / 12 + radius / 6 + radius / 12, radius, radius / 6)
  context.fill()

  // 흰색 부분

  context.resetTransform();
  context.translate(580,370);
  context.rotate((-90 + rotateDegree) * radian);
  context.fillStyle = "white"
  context.beginPath()
  context.fillRect(0, radius / 6 + radius / 12 + radius / 6 + radius / 12, radius / 12, radius / 6 + 100)
  context.fill();
}
