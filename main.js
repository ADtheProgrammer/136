function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(450, 450);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on(pose, "got_poses");
}

function modelLoaded() {
    console.log("poseNet is Initialized");
}

function got_poses() {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}

function draw() {
    background(blanchedalmond);
    textSize(30);
    text("Arnav", 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 10, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000)
}


