var app = new Vue({
    el: '#demo',
    data() {
      return {
        index: 0,
        scale: 2,
        type: "square",
        showType: true,
        changeImgPosition: false,
        height: 180,
        width: 200,
              taobao: false,
              filter:false,
              
        imgList: [
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvLwuYC7kXwqF7xUbv8v3oePbx7AkInVVB_RxqaWZKUBTOdcGbT1WpbP5gWeTcerY3R9oK7ztZu8CWhR8njegqAEvc-ZUTsw9AGVl-Cy_jMMFMiH382UaOxRuo5cgdIs7xS5kLMscPAU5C1pIMp8uwHIGLrndP5URCoz6wcKeTo_u_BJ03TZm-e-1pI27P/s16000/Diagramas%20de%20flujo%20DUCS%20-%20Unidad%20de%20G%C3%A9nero.png",
        ]
      };
    },
    created() {
      this.url = this.imgList[this.index];
          document.body.onmousewheel = event => {
        event = event || window.event
        this.scale += event.deltaY > 0 ? -0.1 : 0.1
      }
    },
    methods: {

      addScale() {
        this.scale += 0.5;
      },
      subScale() {
        this.scale -= 0.5;
      },
      changeShowType() {
        this.showType = !this.showType;

      }
    }
  })