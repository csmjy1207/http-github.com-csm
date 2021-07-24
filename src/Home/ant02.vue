<template>
<div>
    <div>
        <h3>描述列表</h3>
         <a-descriptions title="User Info" bordered>
            <a-descriptions-item label="Product">
            Cloud Database
            </a-descriptions-item>
            <a-descriptions-item label="Billing Mode">
            Prepaid
            </a-descriptions-item>
            <a-descriptions-item label="Automatic Renewal">
            YES
            </a-descriptions-item>
            <a-descriptions-item label="Order time">
            2018-04-24 18:00:00
            </a-descriptions-item>
            <a-descriptions-item label="Usage Time" :span="2">
            2019-04-24 18:00:00
            </a-descriptions-item>
            <a-descriptions-item label="Status" :span="3">
            <a-badge status="processing" text="Running" />
            </a-descriptions-item>
            <a-descriptions-item label="Negotiated Amount">
            $80.00
            </a-descriptions-item>
            <a-descriptions-item label="Discount">
            $20.00
            </a-descriptions-item>
            <a-descriptions-item label="Official Receipts">
            $60.00
            </a-descriptions-item>
            <a-descriptions-item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1<br />
            </a-descriptions-item>
        </a-descriptions>
        <br /><br /><hr />
    </div>
    <div>
        <h3>Empty空状态</h3>
        <div>
        <a-switch
        un-checked-children="default"
        checked-children="customize"
        :checked="customize"
        @change="val => (customize = val)"
        />

        <a-divider />
        <a-config-provider>
        <template v-if="customize" #renderEmpty>
            <div style="text-align: center">
            <a-icon type="smile" style="font-size: 20px" />
            <p>Data Not Found</p>
            </div>
        </template>
        <div class="config-provider">
            <h3>Select</h3>
            <a-select :style="style" :options="[]" />

            <h3>TreeSelect</h3>
            <a-tree-select :style="style" :tree-data="[]" />

            <h3>Cascader</h3>
            <a-cascader :style="style" :options="[]" :show-search="true" />

            <h3>Transfer</h3>
            <a-transfer :data-source="[]" />

            <h3>Table</h3>
            <a-table style="margin-top: 8px" :columns="columns" :data-source="[]" />
            <h3>List</h3>
            <a-list :data-source="[]" />
        </div>
        </a-config-provider>
        </div>
        <br /><br /><hr />
    </div>
    <div>
        <h3>Popover 气泡卡片</h3>
         <a-popover title="Title">
            <template slot="content">
            <p>Content</p>
            <p>Content</p>
            </template>
            <a-button type="primary">
            Hover me
            </a-button>
        </a-popover>
        
        <div id="components-popover-demo-placement">
        <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
        <a-popover placement="topLeft">
            <template slot="content">
            <p>Content</p>
            <p>Content</p>
            </template>
            <template slot="title">
            <span>Title</span>
            </template>
            <a-button>TL</a-button>
        </a-popover>
        <a-popover placement="top">
            <template slot="content">
            <p>Content</p>
            <p>Content</p>
            </template>
            <template slot="title">
            <span>Title</span>
            </template>
            <a-button>Top</a-button>
        </a-popover>
        <a-popover placement="topRight">
            <template slot="content">
            <p>Content</p>
            <p>Content</p>
            </template>
            <template slot="title">
            <span>Title</span>
            </template>
            <a-button>TR</a-button>
        </a-popover>
        </div>
        <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
        <a-popover placement="leftTop">
            <template slot="content">
            <p>Content</p>
            <p>Content</p>
            </template>
            <template slot="title">
            <span>Title</span>
            </template>
            <a-button>LT</a-button>
        </a-popover>
        <a-popover placement="left">
            <template slot="content">
            <p>Content</p>
            <p>Content</p>
            </template>
            <template slot="title">
            <span>Title</span>
            </template>
            <a-button>Left</a-button>
        </a-popover>
        <a-popover placement="leftBottom">
            <template slot="content">
            <p>Content</p>
            <p>Content</p>
            </template>
            <template slot="title">
            <span>Title</span>
            </template>
            <a-button>LB</a-button>
        </a-popover>
        </div>
        <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
        <a-popover placement="rightTop">
            <template slot="content">
            <p>Content</p>
            <p>Content</p>
            </template>
            <template slot="title">
            <span>Title</span>
            </template>
            <a-button>RT</a-button>
        </a-popover>
        <a-popover placement="right">
            <template slot="content">
            <p>Content</p>
            <p>Content</p>
            </template>
            <template slot="title">
            <span>Title</span>
            </template>
            <a-button>Right</a-button>
        </a-popover>
        <a-popover placement="rightBottom">
            <template slot="content">
            <p>Content</p>
            <p>Content</p>
            </template>
            <template slot="title">
            <span>Title</span>
            </template>
            <a-button>RB</a-button>
        </a-popover>
        </div>
        <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
        <a-popover placement="bottomLeft">
            <template slot="content">
            <p>Content</p>
            <p>Content</p>
            </template>
            <template slot="title">
            <span>Title</span>
            </template>
            <a-button>BL</a-button>
        </a-popover>
        <a-popover placement="bottom">
            <template slot="content">
            <p>Content</p>
            <p>Content</p>
            </template>
            <template slot="title">
            <span>Title</span>
            </template>
            <a-button>Bottom</a-button>
        </a-popover>
        <a-popover placement="bottomRight">
            <template slot="content">
            <p>Content</p>
            <p>Content</p>
            </template>
            <template slot="title">
            <span>Title</span>
            </template>
            <a-button>BR</a-button>
        </a-popover>
        </div>
        </div>
        <br /><br /><hr />
    </div>
    <div>
        <h3>Statistic 统计数值</h3>
        <div>
            <a-statistic title="Active Users" :value="112893" style="margin-right: 50px" />
            <a-statistic title="Account Balance (CNY)" :precision="2" :value="112893" />
        </div>
        <a-row :gutter="16">
        <a-col :span="12">
        <a-statistic title="Feedback" :value="1128" style="margin-right: 50px">
            <template #suffix>
            <a-icon type="like" />
            </template>
        </a-statistic>
        </a-col>
        <a-col :span="12">
        <a-statistic title="Unmerged" :value="93" class="demo-class">
            <template #suffix>
            <span> / 100</span>
            </template>
        </a-statistic>
        </a-col>
        </a-row>
        <br /><br /><hr />
    </div>
    <div>
        <h3>Table 表格</h3>
        <a-table :columns="columns" :data-source="data">
        <!-- <a slot="name" slot-scope="text">{{ text }}</a>
        <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
        <span slot="tags" slot-scope="tags">
        <a-tag
            v-for="tag in tags"
            :key="tag"
            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
        >
            {{ tag.toUpperCase() }}
        </a-tag>
        </span>
        <span slot="action" slot-scope="text, record">
        <a>Invite 一 {{ record.name }}</a>
        <a-divider type="vertical" />
        <a>Delete</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
        </span> -->
        </a-table>
        <br /><br /><hr />
    </div>
    <div>
        <h3>Tabs 标签页</h3>
        <div>
            <a-tabs default-active-key="1" @change="callback">
            <a-tab-pane key="1" tab="Tab 1">
                Content of Tab Pane 1
            </a-tab-pane>
            <a-tab-pane key="2" tab="Tab 2" force-render>
                Content of Tab Pane 2
            </a-tab-pane>
            <a-tab-pane key="3" tab="Tab 3">
                Content of Tab Pane 3
            </a-tab-pane>
            </a-tabs>
        </div>
        <br /><br /><hr />
    </div>
    <div>
        <h3>标签 Tag</h3>
        <div>
            <a-tag>Tag 1</a-tag>
            <a-tag><a href="https://github.com/vueComponent/ant-design">Link</a></a-tag>
            <a-tag closable @close="log">
            Tag 2
            </a-tag>
            <a-tag closable @close="preventDefault">
            Prevent Default
            </a-tag>
        </div>
        <div>
        <h4 style="margin-bottom: 16px">
        Presets:
        </h4>
        <div>
        <a-tag color="pink">
            pink
        </a-tag>
        <a-tag color="red">
            red
        </a-tag>
        <a-tag color="orange">
            orange
        </a-tag>
        <a-tag color="green">
            green
        </a-tag>
        <a-tag color="cyan">
            cyan
        </a-tag>
        <a-tag color="blue">
            blue
        </a-tag>
        <a-tag color="purple">
            purple
        </a-tag>
        </div>
        <h4 style="margin: '16px 0'">
        Custom:
        </h4>
        <div>
        <a-tag color="#f50">
            #f50
        </a-tag>
        <a-tag color="#2db7f5">
            #2db7f5
        </a-tag>
        <a-tag color="#87d068">
            #87d068
        </a-tag>
        <a-tag color="#108ee9">
            #108ee9
        </a-tag>
        </div>
        </div>
        <br /><br /><hr />
    </div>
    <div>
        <h3>时间轴</h3>
        <a-timeline>
            <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
            <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
            <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
            <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
        </a-timeline>
        <a-timeline mode="alternate">
            <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
            <a-timeline-item color="green">
            Solve initial network problems 2015-09-01
            </a-timeline-item>
            <a-timeline-item>
            <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
            </a-timeline-item>
            <a-timeline-item color="red">
            Network problems being solved 2015-09-01
            </a-timeline-item>
            <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
            <a-timeline-item>
            <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
            Technical testing 2015-09-01
            </a-timeline-item>
        </a-timeline>
        <br /><br /><hr />
    </div>
    <div>
        <h3>Tooltip文字提示</h3>
        <a-tooltip>
            <template slot="title">
            prompt text
            </template>
            Tooltip will show when mouse enter.
        </a-tooltip>
        <br /><br /><hr />
    </div>
    <div>
        <h3>树形控件</h3>
        <a-tree show-line :default-expanded-keys="['0-0-0']" @select="onSelect">
            <a-icon slot="switcherIcon" type="down" />
            <a-tree-node key="0-0" title="parent 1">
            <a-tree-node key="0-0-0" title="parent 1-0">
                <a-tree-node key="0-0-0-0" title="leaf" />
                <a-tree-node key="0-0-0-1" title="leaf" />
                <a-tree-node key="0-0-0-2" title="leaf" />
            </a-tree-node>
            <a-tree-node key="0-0-1" title="parent 1-1">
                <a-tree-node key="0-0-1-0" title="leaf" />
            </a-tree-node>
            <a-tree-node key="0-0-2" title="parent 1-2">
                <a-tree-node key="0-0-2-0" title="leaf" />
                <a-tree-node key="0-0-2-1" title="leaf" />
            </a-tree-node>
            </a-tree-node>
        </a-tree>
        <br /><br /><hr />
    </div>
    <div>
        <h3>Alert 警告提示</h3>
        <div>
            <a-alert message="Warning text" banner />
            <br />
            <a-alert
            message="Very long warning text warning text text text text text text text"
            banner
            closable
            />
            <br />
            <a-alert :show-icon="false" message="Warning text without icon" banner />
            <br />
            <a-alert type="error" message="Error text" banner />
        </div>
        <br /><br /><hr />
    </div>
    <div>
        <h3>Drawer 抽屉</h3>
        <div
        :style="{
        height: '200px',
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid #ebedf0',
        borderRadius: '2px',
        padding: '48px',
        textAlign: 'center',
        background: '#fafafa',
        }"
    >
        Render in this
        <div style="margin-top: 16px">
        <a-button type="primary" @click="showDrawer">
            Open
        </a-button>
        </div>
        <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :visible="visible"
      :get-container="false"
      :wrap-style="{ position: 'absolute' }"
      @close="onClose"
    >
      <p>Some contents...</p>
    </a-drawer>
        </div>
        <br /><br /><hr />
    </div>
    <div>
        <h3>全局提示</h3>
       <div>
            <a-button @click="success">
            Success
            </a-button>
            <a-button @click="error">
            Error
            </a-button>
            <a-button @click="warning">
            Warning
            </a-button>
        </div>
        <br /><br /><hr />
    </div>
    <div>
        <h3>Modal 对话框</h3>
       <a-button type="dashed" @click="showDeleteConfirm">
            Delete
        </a-button>
        <br /><br /><hr />
    </div>
    <div>
        <h3>通知提醒框</h3>
        <a-button type="primary" @click="openNotification">
            Open the notification box
        </a-button>
        <br /><br /><hr />
    </div>
    <div>
        <h3>Popconfirm 气泡确认框</h3>
       <a-popconfirm
            title="Are you sure delete this task?"
            ok-text="Yes"
            cancel-text="No"
            @confirm="confirm"
            @cancel="cancel"
        >
            <a href="#">Delete</a>
        </a-popconfirm>
        <br /><br /><hr />
    </div>
    <div>
        <h3>Progress 进度条</h3>
        <div>
            <a-progress type="circle" :percent="percent" />
            <a-button-group>
            <a-button icon="minus" @click="decline" />
            <a-button icon="plus" @click="increase" />
            </a-button-group>
             <div>
                <a-progress stroke-linecap="square" :percent="75" />
                <a-progress stroke-linecap="square" :percent="75" type="circle" />
                <a-progress stroke-linecap="square" :percent="75" type="dashboard" />
            </div>
        </div>
        <br /><br /><hr />
    </div>
    <div>
        <h3>Result 结果</h3>
         <a-result title="Great, we have done all the operations!">
            <template #icon>
            <a-icon type="smile" theme="twoTone" />
            </template>
            <template #extra>
            <a-button type="primary">
                Next
            </a-button>
            </template>
        </a-result>
        <br /><br /><hr />
    </div>
    <div>
        <h3>加载占位图</h3>
       <a-skeleton avatar :paragraph="{ rows: 4 }" />
        <br /><br /><hr />
    </div>
    <div>
        <h3>Spin 加载中</h3>
       <div>
            <a-spin />
        </div>
        <br /><br /><hr />
    </div>
    <div>
        <h3>Anchor 锚点</h3>
      <a-anchor>
            <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
            <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
            <a-anchor-link
            href="#components-anchor-demo-basic"
            title="Basic demo with Target"
            target="_blank"
            />
            <a-anchor-link href="#API" title="API">
            <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
            <a-anchor-link href="#Link-Props" title="Link Props" />
            </a-anchor-link>
        </a-anchor>
        <br /><br /><hr />
    </div>
    <div>
        <h3>BackTop 回到顶部</h3>
       <div>
            <a-back-top />
            Scroll down to see the bottom-right
            <strong style="color: rgba(64, 64, 64, 0.6)"> gray </strong>
            button.
        </div>
        <br /><br /><hr />
    </div>
    <div>
        <h3>ConfigProvider 全局化配置</h3>
       为组件提供统一的全局化配置。
        <br /><br /><hr />
    </div>
    <div>
        <h3>分割线</h3>
       <div>
           <a-divider />
           <a-divider>With Text</a-divider>
            <a-divider dashed />
            Text
            <a-divider type="vertical" />
            <a href="#">Link</a>
            <a-divider type="vertical" />
            <a href="#">Link</a>
            <a-divider orientation="left">left text</a-divider>
            <a-divider orientation="right">right text</a-divider>
        </div>
        <br /><br /><hr />
    </div>
    <div>
        <h3>LocaleProvider 国际化</h3>
       <a-locale-provider :locale="zh_CN">
            <App />
        </a-locale-provider>
        <div class="change-locale">
            <span :style="{ marginRight: '16px' }">Change locale of components: </span>
            <a-radio-group :default-value="null" @change="changeLocale">
                <a-radio-button key="en" :value="null">
                English
                </a-radio-button>
                <a-radio-button key="cn" :value="zhCN">
                中文
                </a-radio-button>
            </a-radio-group>
            </div>
        <br /><br /><hr />
    </div>
 
 
 
 
</div>
</template>

<script>

export default {    
  data() {
    return {
      customize: false,
      style: { width: '200px' },
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        
      ],
      buttonWidth: 70,
      visible: false,
      percent: 0,
    };
  },
  methods: {
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    },
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },

    success() {
      this.$message.success('This is a success message');
    },
    error() {
      this.$message.error('This is an error message');
    },
    warning() {
      this.$message.warning('This is a warning message');
    },

    showDeleteConfirm() {
      this.$confirm({
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    },
    openNotification() {
      this.$notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    },
     confirm(e) {
      console.log(e);
      this.$message.success('Click on Yes');
    },
    cancel(e) {
      console.log(e);
      this.$message.error('Click on No');
    },
    increase() {
      let percent = this.percent + 10;
      if (percent > 100) {
        percent = 100;
      }
      this.percent = percent;
    },
    decline() {
      let percent = this.percent - 10;
      if (percent < 0) {
        percent = 0;
      }
      this.percent = percent;
    },
  },
};
</script>

<style>
.code-box-demo .config-provider h3 {
  font-size: inherit;
  margin: 16px 0 8px 0;
}

#components-popover-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
