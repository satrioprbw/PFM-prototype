import F2 from '@antv/my-f2';
import methods from '../../util/methods';
import util from '../../util/util';



Component({
  mixins: [methods],
  data: {},
  props: {},
  didMount() {
    my.call('getStartupParams', {}, (result) => {
      util.tracert('line', result.appId, result.url);
    });

    const id = `comp-line-chart-${this.$id}`;
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
      
      const {lineData, rangeDate}= this.props
      
      chart.source(lineData,{
        "total":{
          min:0,
          formatter: (total)=> `${total/1000000} m`,
          tickCount: 4,
        },
        "date":{
          formater:(date)=>this.$page.toFormatDate(date)
        }
      })
      chart.line().position('tanggal*total')
      chart.area().position('tanggal*total').color('l(90) 0:#023e8a 0.5:#118ab2 1:#90e0ef')
      chart.changeSize(width, height);
    }
  },
});
