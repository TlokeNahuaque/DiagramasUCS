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
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiT5OeisfzjRxKwJv34Mihk3m5YgsCF5jVwuIY0Ud08RCaoBB7I6nXzMkYnHqHQA6TA_2DlxnUVb-Y7vfw_R-R-aPoiMqNsJwq-HA4c3j-WFb-GOgoaV7gRa9dwlnQuPtG27mbmSF3U70SvzlTHSybdwm1aX2bcLZZN3Vwj-of6ujAQZhV_v1e_0lL3mGrs/s16000/Diagramas%20de%20flujo%20DUCS%20-%20Derechos%20Humanos.png",
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