// camera.js

var pictureSource;
var destinationType;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  pictureSource = navigator.camera.PictureSourceType;
  destinationType = navigator.camera.DestinationType;
}

function onPhotoDataSuccess(imageData) {
  var image = $('#image');
  image.attr('src', 'data:image/jpeg;base64,' + imageData);
}

function onPhotoURISuccess(imageURI) {
  var image = $('#image');
  image.attr('src', imageURI);
}

function capturePhoto() {
  navigator.camera.getPicture(onPhotoURISuccess, onFail,
    {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      saveToPhotoAlbum: true
    }
  );
}

function getPhoto(source) {
  navigator.camera.getPicture(onPhotoURISuccess, onFail,
    {
      quality: 50,
      destinationType: destinationType.FILE_URI,
      sourceType: source
    }
  );
}

function onFail(message) {
  alert(message);
}
