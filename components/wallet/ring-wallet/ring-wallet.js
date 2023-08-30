import F2 from '@antv/my-f2';
import methods from "../../util/methods";
import util from '../../util/util';
import { formatRupiah } from "../../../util";
require('@antv/f2/lib/interaction/pie-select'); 


Component({
  mixins: [methods],
  data: {},
  props: {},
  didMount() {
    my.call('getStartupParams', {}, (result) => {
      util.tracert('pie', result.appId, result.url);
    });

    const id = `comp-ring-chart-${this.$id}`;
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
  didUpdate() {
    
    // this.render(this.chart, this.props, this.width, this.height);
    const id = `comp-ring-chart-${this.$id}`;
    const ctx = this.ctx = my.createCanvasContext(id);
    const canvas = this.canvas = new F2.Renderer(ctx);

    my.createSelectorQuery()
      .select(`#${id}`)
      .boundingClientRect()
      .exec(res => {
        if(!res || !res.length || !res[0]) {
          return;
        }
        const { width, height } = res[0];
        this.setData({
        }, () => {
          const { padding, appendPadding } = this.props;

          this.chart = new F2.Chart({
            el: canvas,
            width,
            height,
            padding,
            appendPadding,
          });

          this.render(this.chart, this.props, this.width, this.height);
        });
      });
  },
  didUnmount() {},
  methods: {
     render (chart, props, width, height){
      if(!chart) {
        return;
      }
      chart.clear();
      const { ringData,guideTitle,guideMain } = props;
      let data = ringData
      data.map(el=>el.a='1')
      let colors = ringData.map(el=> el.color)
      // console.log("data >>>>", data)
     
    
      chart.source(data)
      chart.coord({
        transposed: true,
        innerRadius: 0.6,
        radius: 1,
        type: 'polar',
       
      });      
      chart.interval().position('a*total').color('name',colors).adjust('stack')
      
      chart.interaction('pie-select',{
        onStart:(e)=>{
          // console.log("hasil dari click >>>>>>>>", e)
        },
        onEnd:(e)=>{
          console.log("ini total >>>>>", this.$page.data.totalChart);
          if(e.selected){
            titleGuide.content = e.data.name
            titleGuide.style.fill = e.data.color
            mainGuide.content = formatRupiah(e.data.total)
          }else{
            if(this.$page.data.buttonSeeAll){
              titleGuide.content = this.$page.data.dataDetailCategory.name
              titleGuide.style.fill = this.$page.data.dataDetailCategory.color
              mainGuide.content = formatRupiah(this.$page.data.dataDetailCategory.total)
            }else{
              titleGuide.content = "All"
              titleGuide.style.fill = "black"
              mainGuide.content = formatRupiah(this.$page.data.totalChart)
            }
          }
          titleGuide.repaint()
          mainGuide.repaint()
          this.$page.setDetailCategory(e)

        },
        offset:-35,
        appendRadius:45,
        style:{
          fillOpacity: 1,
        },
        defaultSelected:{name: "Transportation and Travel"}
      });

      let titleGuide = chart.guide().text(guideTitle)
      let mainGuide = chart.guide().text(guideMain)

      
      chart.axis(false);
      chart.tooltip(false);
      chart.legend({
        position:'right',
        align:"center",
        marker:"square"
      });
      
      chart.changeSize(width, height);
      }
  },
});
