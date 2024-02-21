// 图表部分
var myChart = echarts.init(document.querySelector('.chart'));
var option = {
    grid: {
        left: 10,
        bottom: 10,
        height: 180,
    },
    title: {},
    tooltip: {},
    xAxis: {
        axisTick: {
            show: false,
        },
        axisLine: {
            symbol: ["none", "arrow"],
            symbolSize: [5, 5],
            lineStyle: {
                color: '#777777',
                width: 2,
            },
        },
        name: "D",
        nameTextStyle: {
            color: "#d9d9d9"
        },
        data: [],
    },
    yAxis: {
        axisTick: {
            show: false,
        },
        axisLine: {
            symbol: ["none", "arrow"],
            symbolSize: [5, 5],
            lineStyle: {
                color: '#777777',
                width: 2,
                length: 170,
            },
        },
        axisLabel: {
            interval: 0,
        },
        name: "B",
        nameTextStyle: {
            color: "#d9d9d9"
        },
        data: [],
    },
    series: [{
        type: 'bar',
        itemStyle: { color: "#d9d9d9" },
        data: [5, 9, 14, 10, 12, 9, 7, 6, 9, 9, 14, 10, 12, 9, 7, 6, 14, 10, 12, 9, 5]
    }]
};

// 使用刚指定的配置项和数据显示图表。

myChart.setOption(option);

// 选择数据
var trade_tr = document.querySelectorAll('.trade_tr');
for (var i = 0; i < trade_tr.length; i++) {
    var trade_td = trade_tr[i].children[2];
    trade_td.onclick = function () {
        if (this.classList.contains('select') == false && this.innerHTML != '') {
            this.classList.add('select');
        }
        else this.classList.remove('select');
    }
}
var data_tit = document.querySelector('.data_tit');
var data_th = data_tit.children;
for (var i = 0; i < data_th.length; i++) {
    data_th[i].onclick = function () {
        if (this.classList.contains('select') == false && this.innerHTML != '') {
            this.classList.add('select');
        }
        else this.classList.remove('select');
    }
}







  const navItems = document.querySelectorAll('.nav_item');
  const contents = document.querySelectorAll('.content');
  let activeNavItem = null; // track currently active nav item
  let activeContent = null; // track currently active content
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // if clicking on currently active nav item, do nothing
      if (item === activeNavItem) return;
      // remove active class from previously active nav item
      if (activeNavItem) activeNavItem.classList.remove('active');
      // add active class to current nav item
      item.classList.add('active');
      // hide currently active content
      if (activeContent) activeContent.style.display = 'none';
      // show current content
      const target = item.getAttribute('data-target');
      const newActiveContent = document.querySelector(target);
      newActiveContent.style.display = 'block';
      // track new active nav item and content
      activeNavItem = item;
      activeContent = newActiveContent;
    });
  });