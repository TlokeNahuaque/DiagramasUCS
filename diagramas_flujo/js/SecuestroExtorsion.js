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
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjphJJOWqRszlLkMG6Ej4wIqqOg9BB5EFNNyBL87pr42XF1Jc8yKr6bXYjY_QsIefpAOPt4KHESbjUi2HwWLXcHXl5SRXErlkQ0pvdhDV1P3Jh1gy6GMB5phZokBaZtCCJTPnAX8UmYFf7tCyeF4j4nSvtQZexf0Peb-YPZZlP56gO00mDNZADm_n-DbPyx/s16000/Diagramas%20de%20flujo%20DUCS%20-%20Secuestro.png",
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