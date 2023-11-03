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
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCbu-zRIJsxcAxgQS3E3_X7cj-abMj9qXfuq9hIoKlvJyZnhC_FHH1yo-2rCYIlZTiiHTEJRkKw077gdNEajMBgupIIPaDsfuqHovZk1SrFpe9YEyB-dDbBMUvgw8AdEoFo1AFAUb22mdm5R1Zj3J5IB8hiytG4iIMgIptqwpSGE0gg1LBHBTINIznR1i6/s16000/Diagramas%20de%20flujo%20DUCS%20-%20Seguridad%20Privada.png",
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