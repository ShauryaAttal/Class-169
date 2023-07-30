# PRO-C168-Boilerplate
### Download the model from here : https://sketchfab.com/3d-models/pizza-35d8c71791944a6c9f2082a1ad82827d


<!DOCTYPE html>
<html>
  <head>
    <title>Menu Card</title>
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
    />

    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.1/dist/aframe-extras.min.js"></script>
    <script src="https://raw.githack.com/fcor/arjs-gestures/master/dist/gestures.js"></script>

    <!-- Bootstrap -->
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />

    <!-- Local StyleSheet -->

    <!--Marker Handler Src-->
  </head>

  <body style="margin: 0px; overflow: hidden">
    <a-scene
      embedded
      vr-mode-ui="enabled: false"
      arjs="sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960;debugUIEnabled: false;"
      gesture-detector
    >
      <!-- Camera -->
      <a-entity camera></a-entity>

      <a-assets>
        <a-asset-item id="pizza" src="./assets/pizza/scene.gltf"></a-asset-item>
      </a-assets>

      <a-marker
        id="pizza-marker"
        type="pattern"
        url="./assets/dish-markers/pizza-pattern.patt"
        cursor="rayOrigin:mouse"
      >
        <a-entity
          id="pizz3d"
          position="1 0 0"
          scale="0.5 0.5 0.5"
          gltf-model="#pizza"
          rotation="-90 0 0"
          gesture-handler
        ></a-entity>
      </a-marker>
    </a-scene>

    <!-- Button Main Div -->
  </body>
</html>

<!DOCTYPE html>
<html> 
