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
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdR1NHE6BaMLOuNeVTCjwfFnrZp_Yv9lmFZaCLK6URV4c8ALeKG-AmTtMupSU2horNAvV3N3W2npf1E4FiDkqxw6dPFx365O_JbXe89FNxPRYINvYSYgF2PzwBm6efOR5oDnOWJ0L5IVWvdNwgF-a__96bwfBpZVxit5hOYevK7PFi4PR96db8At4i4acM/s16000/Diagramas%20de%20flujo%20DUCS%20-%20Asistencia%20Cibern%C3%A9tica.png",
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