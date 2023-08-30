import F2 from '@antv/my-f2';
import methods from '../../util/methods';
import util from '../../util/util';



Component({
  mixins: [methods],
  data: {},
  props: {},
  didMount() {
    my.call('getStartupParams', {}, (result) => {
      util.tracert('bar', result.appId, result.url);
    });

    const id = `comp-bar-chart-${this.$id}`;
    const ctx = this.ctx = my.createCanvasContext(id);
    const canvas = this.canvas = new F2.Renderer(ctx);

    const pixelRatio = this.pixelRatio = my.getSystemInfoSync().pixelRatio;
    ctx.scale(pixelRatio, pixelRatio);

    my.createSelectorQuery()
      .select(`#${id}`)
      .boundingClientRect()
      .exec(res => {
        if(!res || !res.length || !res[0]) {
          return;
        }
        const { width, height } = res[0];
        this.setData({
          width: width * pixelRatio,
          height: height * pixelRatio,
        }, () => {
          const { padding, appendPadding } = this.props;

          this.chart = new F2.Chart({
            el: canvas,
            width,
            height,
            padding,
            appendPadding,
          });

          this.render(this.chart, this.props, width, height);
        });
      });
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
     render (chart, props, width, height){
      if(!chart) {
        return;
      }
      chart.clear();
    
      let data = props.barData
      let colors = ["#00FFCA", "#F3FDE8"]
       data.forEach(element => {
        data.push({
          jenis:"minus",
          tanggal:element.tanggal,
          total:element.limit
        })
      });
      // console.log("data bar area >>>>", data)
    
      chart.source(data)
      chart.interval().position('tanggal*total').color('jenis',colors).adjust('stack')
      chart.tooltip(false)
      chart.legend(false)
      chart.scale('tanggal',{
        tickCount:2
      })
      chart.scale('total',{
        tickCount:2,
        formatter: el => ""
      })
      chart.changeSize(width, height);
    }
  },
});
