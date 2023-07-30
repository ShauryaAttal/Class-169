AFRAME.registerComponent("marker-handlers", {
  init: async function () {
    this.el.addEventlistener("markerFound", () => {
      console.log("marker is found");
      this.handleMarkerFound();

      var ratingButton = document.querySelector("#rating-button")
      ratingButton.addEventListener("click", ()=>{
        swal({
            icon:"warning",
            title:"Rate The Dish",
            text:"WIP"
        })
      })

      var orderButton = document.querySelector("#order-button")
      orderButton.addEventListener("click", ()=>{
        swal({
            icon:"https://i.imgur.com/4NZ6uLY.jpg",
            title:"Order It Now",
            text:"Your order will be delivered to your table shortly!"
        })
      })
    });

    this.el.addEventlistener("markerLost", () => {
      console.log("marker is lost");
      this.handleMarkerLost();
    });
  },

  handleMarkerFound: function () {
    var buttonDiv = document.querySelector("#button-div");
    buttonDiv.style.display = "flex";
  },

  handleMarkerLost: function () {
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  },
});
