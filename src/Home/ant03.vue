<template>
    <div>
        <a-divider>Ant Design Vue</a-divider>
         <a-tree show-line :default-expanded-keys="['0-0-0']" @select="onSelect">
            <a-icon slot="switcherIcon" type="down" />
            <a-tree-node key="0-0" title="组件">
            <a-tree-node key="0-0-0" title="一般">
                <a-tree-node key="0-0-0-0" title="Button 按钮" />
                <a-tree-node key="0-0-0-1" title="Icon 图标" />
            </a-tree-node>
            <a-tree-node key="0-0-1" title="布局">
                <a-tree-node key="0-0-1-0" title="Grid 栅格" />
                <a-tree-node key="0-0-1-1" title="Layout 布局" />
                <a-tree-node key="0-0-1-2" title="Space 间距" />
            </a-tree-node>
            <a-tree-node key="0-0-2" title="总结">
                <a-tree-node key="0-0-2-0" title="leaf" />
                <a-tree-node key="0-0-2-1" title="leaf" />
            </a-tree-node>
            <a-tree-node key="0-0-4" title="数据输入">
                <a-tree-node key="0-0-4-0" title="AutoComplete 自动完成" />
                <a-tree-node key="0-0-4-1" title="Cascader 级联选择" />
                <a-tree-node key="0-0-4-2" title="Checkbox多选框" />
                <a-tree-node key="0-0-4-3" title="DatePicker 日期选择框" />
                <a-tree-node key="0-0-4-4" title="Form 表单" />
                <a-tree-node key="0-0-4-6" title="FormModel 表单" /> 
                <a-tree-node key="0-0-4-7" title="Input 输入框" /> 
                <a-tree-node key="0-0-4-8" title="InputNumber 数字输入框" /> 
                <a-tree-node key="0-0-4-9" title="Mentions 提及" /> 
                <a-tree-node key="0-0-4-10" title="Radio 单选框" /> 
                <a-tree-node key="0-0-4-11" title="Rate 评分" /> 
                <a-tree-node key="0-0-4-12" title="Select 选择器" /> 
                <a-tree-node key="0-0-4-13" title="Slider 滑动输入条" /> 
                <a-tree-node key="0-0-4-14" title="Switch 开关" /> 
                <a-tree-node key="0-0-4-15" title="TimePicker 时间选择框" /> 
                <a-tree-node key="0-0-4-16" title="Transfer 穿梭框" /> 
                <a-tree-node key="0-0-4-17" title="TreeSelect 树型选择控件" /> 
                <a-tree-node key="0-0-4-18" title="Upload 上传" /> 
            </a-tree-node>
            <a-tree-node key="0-0-5" title="数据显示">
                <a-tree-node key="0-0-5-0" title="Avatar头像" />
                <a-tree-node key="0-0-5-1" title="Badge徽标数" />
                <a-tree-node key="0-0-5-2" title="Calendar 日历" />
                <a-tree-node key="0-0-5-3" title="Card 卡片" />
                <a-tree-node key="0-0-5-4" title="Carousel 走马灯" />
                <a-tree-node key="0-0-5-5" title="Collapse折叠面板" />
                <a-tree-node key="0-0-5-6" title="Comment评论" />
                <a-tree-node key="0-0-5-7" title="Descriptions 描述列表" />
                <a-tree-node key="0-0-5-8" title="Empty 空状态" />
                <a-tree-node key="0-0-5-9" title="List 列表" />
                <a-tree-node key="0-0-5-10" title="Popover 气泡卡片" />
                <a-tree-node key="0-0-5-11" title="Statistic 统计数值" />
                <a-tree-node key="0-0-5-12" title="Table 表格" />
                <a-tree-node key="0-0-5-13" title="Tabs 标签页" />
                <a-tree-node key="0-0-5-14" title="标签 Tag" />
                <a-tree-node key="0-0-5-15" title="Timeline 时间轴" />
                <a-tree-node key="0-0-5-16" title="Tooltip 文字提示" />
                <a-tree-node key="0-0-5-17" title="Tree 树形控件" />
            </a-tree-node>
             <a-tree-node key="0-0-6" title="回馈">
                <a-tree-node key="0-0-6-0" title="Alert 警告提示" />
                <a-tree-node key="0-0-6-1" title="Drawer 抽屉" />
                <a-tree-node key="0-0-6-2" title="Messge全局提示" />
                <a-tree-node key="0-0-6-3" title="Modal 对话框" />
                <a-tree-node key="0-0-6-4" title=" Notification 通知提醒框" />
                <a-tree-node key="0-0-6-5" title="Popconfirm 气泡确认框" />
                <a-tree-node key="0-0-6-6" title="Progress 进度条" />
                <a-tree-node key="0-0-6-7" title="Result 结果" />
                <a-tree-node key="0-0-6-8" title="SKeletion 股价屏（加载占位图）" />
                <a-tree-node key="0-0-6-9" title="Spin 加载中" />
            </a-tree-node>
            <a-tree-node key="0-0-7" title="其他">
                <a-tree-node key="0-0-7-0" title="Anchor 锚点" />
                <a-tree-node key="0-0-7-1" title="BackTop 回到顶部" />
                <a-tree-node key="0-0-7-2" title="ConfigProvider 全局化配置" />
                <a-tree-node key="0-0-7-3" title="Divider 分割线" />
                <a-tree-node key="0-0-7-4" title="LocaleProvider 国际化" />
            </a-tree-node>
            </a-tree-node>
        </a-tree>
    </div>
</template>

<script>
export default {
  methods: {
    // onSelect(selectedKeys, info) {
    //   console.log('selected', selectedKeys, info);
    // },
  },
};
</script>