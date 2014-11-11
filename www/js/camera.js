// camera.js

var pictureSource;
var destinationType;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  pictureSource = navigator.camera.PictureSourceType;
  destinationType = navigator.camera.DestinationType;
}

function onPhotoURISuccess(imageURI) {
  var image = $('#image');
  image.attr('src', imageURI);
}


function capturePhoto() {
  navigator.camera.getPicture(onPhotoURISuccess, onFail,
    {
      quality: 100,
      destinationType: Camera.DestinationType.FILE_URI,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }
  );
}

function getPhoto(source) {
  navigator.camera.getPicture(onPhotoURISuccess, onFail,
    {
      quality: 100,
      destinationType: destinationType.FILE_URI,
      sourceType: source
    }
  );
}

function onFail(message) {
  // onFail
}
