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
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisyoF06nhS19YLtyR2EplK9OvgicVyLAiCtKnHb_ZYF_aQ1sQQbaSJmcnFlrs1ibJqj7vt_2lHK2340gQr436fJ1YBWyMQMngpzYD6n7iGtxGjBMNG5W3TRin9z_9Pee_-j2IPLCMSKcWAq1thN-dXSxU4NH6b0zltvACaTaV4IJJgAvjoJVs6eeh3gEuE/s16000/Diagramas%20de%20flujo%20DUCS%20-%20Tr%C3%A1nsito.png",
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