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
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7GkjfL_882AUycb5r6Z2qPY1r6FrNdCGFhAyvOxekIL1XtWE4_H4eLy5hlGSSnKZGktkIn0vfRWuf8MfhJiWzcMbgtRFuFYea92h1Es2c_4V57AahYJRkwWmhfTp4xVOx2kMEjf11jSUON0I6GGOWOZh3u_MjY9v9RTTopkQyB888QBZWF5hWF3lOSqkA/s16000/Diagramas%20de%20flujo%20DUCS%20-%20Asuntos%20Internos.png",
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