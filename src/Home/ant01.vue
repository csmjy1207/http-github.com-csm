<template>
<div>
    <!-- Button -->
    <div>
        <h3>Botton按钮</h3>
    <a-button type="primary">
        Primary
        </a-button>
        <a-button>Default</a-button>
        <a-button type="dashed">
        Dashed
        </a-button>
        <a-button type="danger">
        Danger
        </a-button>
        <a-button type="primary">
            按钮
        </a-button>
        <a-button type="link">
        Link
        </a-button>
        <!-- 按钮组 -->
        <!-- <div id="components-button-demo-button-group">
            <h4>Basic</h4>
            <a-button-group>
                <a-button>Cancel</a-button>
                <a-button type="primary">
                    OK
                </a-button>
            </a-button-group> <br>
            <a-button-group>
        <a-button disabled>
            L
        </a-button>
        <a-button disabled>
            M
        </a-button>
        <a-button disabled>
            R
        </a-button>
        </a-button-group><br>
        <a-button-group>
        <a-button type="primary">
            L
        </a-button>
        <a-button>M</a-button>
        <a-button>M</a-button>
        <a-button type="dashed">
            R
        </a-button>
        </a-button-group>
        <h4>With Icon</h4>
        <a-button-group>
        <a-button type="primary"> <a-icon type="left" />Go back </a-button>
        <a-button type="primary"> Go forward<a-icon type="right" /> </a-button>
        </a-button-group>
        <a-button-group>
        <a-button type="primary" icon="cloud" />
        <a-button type="primary" icon="cloud-download" />
        </a-button-group>
        </div> -->
        <br><br>
    <hr>
    </div>
    
    <!-- Icon -->
    <div>
        <h3>Icon图标</h3>
        <div class="icons-list">
            <icon-font type="icon-tuichu" />
            <icon-font type="icon-facebook" />
            <icon-font type="icon-twitter" />
        </div>
    </div>
    <br><br>
    <hr>
    <!-- Grid -->
    <div>
        <h3>Grid栅格</h3>
        <a-row>
        <a-col :span="12">
            col-12
        </a-col>
        <a-col :span="12">
            col-12
        </a-col>
        </a-row>
        <a-row>
        <a-col :span="8">
            col-8
        </a-col>
        <a-col :span="8">
            col-8
        </a-col>
        <a-col :span="8">
            col-8
        </a-col>
        </a-row>
        <a-row>
        <a-col :span="6">
            col-6
        </a-col>
        <a-col :span="6">
            col-6
        </a-col>
        <a-col :span="6">
            col-6
        </a-col>
        <a-col :span="6">
            col-6
        </a-col>
        </a-row>

        <br>
        <!-- 对齐方式 -->
        <p>Align Top</p>
        <a-row type="flex" justify="center" align="top">
        <a-col :span="4">
            <p class="height-100">
            col-4
            </p>
        </a-col>
        <a-col :span="4">
            <p class="height-50">
            col-4
            </p>
        </a-col>
        <a-col :span="4">
            <p class="height-120">
            col-4
            </p>
        </a-col>
        <a-col :span="4">
            <p class="height-80">
            col-4
            </p>
        </a-col>
        </a-row>
        <p>Align Center</p>
        <a-row type="flex" justify="space-around" align="middle">
        <a-col :span="4">
            <p class="height-100">
            col-4
            </p>
        </a-col>
        <a-col :span="4">
            <p class="height-50">
            col-4
            </p>
        </a-col>
        <a-col :span="4">
            <p class="height-120">
            col-4
            </p>
        </a-col>
        <a-col :span="4">
            <p class="height-80">
            col-4
            </p>
        </a-col>
        </a-row>
        <p>Align Bottom</p>
        <a-row type="flex" justify="space-between" align="bottom">
        <a-col :span="4">
            <p class="height-100">
            col-4
            </p>
        </a-col>
        <a-col :span="4">
            <p class="height-50">
            col-4
            </p>
        </a-col>
        <a-col :span="4">
            <p class="height-120">
            col-4
            </p>
        </a-col>
        <a-col :span="4">
            <p class="height-80">
            col-4
            </p>
        </a-col>
        </a-row>
        元素排序
        <a-row type="flex">
        <a-col :span="6" :order="4">
            1 col-order-4
        </a-col>
        <a-col :span="6" :order="3">
            2 col-order-3
        </a-col>
        <a-col :span="6" :order="2">
            3 col-order-2
        </a-col>
        <a-col :span="6" :order="1">
            4 col-order-1
        </a-col>
        </a-row>
        <!-- flex布局 -->
        <p>sub-element align left</p>
        <a-row type="flex" justify="start">
        <a-col :span="4">
            col-4
        </a-col>
        <a-col :span="4">
            col-4
        </a-col>
        <a-col :span="4">
            col-4
        </a-col>
        <a-col :span="4">
            col-4
        </a-col>
        </a-row>
        <p>sub-element align center</p>
        <a-row type="flex" justify="center">
        <a-col :span="4">
            col-4
        </a-col>
        <a-col :span="4">
            col-4
        </a-col>
        <a-col :span="4">
            col-4
        </a-col>
        <a-col :span="4">
            col-4
        </a-col>
        </a-row>

        <p>sub-element align right</p>
        <a-row type="flex" justify="end">
        <a-col :span="4">
            col-4
        </a-col>
        <a-col :span="4">
            col-4
        </a-col>
        <a-col :span="4">
            col-4
        </a-col>
        <a-col :span="4">
            col-4
        </a-col>
        </a-row>
        <p>sub-element monospaced arrangement</p>
        <a-row type="flex" justify="space-between">
        <a-col :span="4">
            col-4
        </a-col>
        <a-col :span="4">
            col-4
        </a-col>
        <a-col :span="4">
            col-4
        </a-col>
        <a-col :span="4">
            col-4
        </a-col>
        </a-row>
        <p>sub-element align full</p>
        <a-row type="flex" justify="space-around">
        <a-col :span="4">
            col-4
        </a-col>
        <a-col :span="4">
            col-4
        </a-col>
        <a-col :span="4">
            col-4
        </a-col>
        <a-col :span="4">
            col-4
        </a-col>
        </a-row>
        <!-- 占比 -->
        <a-divider orientation="left">
        Percentage columns
        </a-divider>
        <a-row type="flex">
        <a-col :flex="2">2 / 5</a-col>
        <a-col :flex="3">3 / 5</a-col>
        </a-row>
        <a-divider orientation="left">
        Fill rest
        </a-divider>
        <a-row type="flex">
        <a-col flex="100px">100px</a-col>
        <a-col flex="auto">auto</a-col>
        </a-row>
        <a-divider orientation="left">
        Raw flex style
        </a-divider>
        <a-row type="flex">
        <a-col flex="1 1 200px">1 1 200px</a-col>
        <a-col flex="0 1 300px">0 1 300px</a-col>
        </a-row>
        <!-- 左右偏移 -->
        <a-row>
        <a-col :span="8">
            col-8
        </a-col>
        <a-col :span="8" :offset="8">
            col-8
        </a-col>
        </a-row>

        <a-row>
        <a-col :span="6" :offset="6">
            col-6 col-offset-6
        </a-col>
        <a-col :span="6" :offset="6">
            col-6 col-offset-6
        </a-col>
        </a-row>
        <a-row>
        <a-col :span="12" :offset="6">
            col-12 col-offset-6
        </a-col>
        </a-row>
        <a-row>
        <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
        Col
        </a-col>
        <a-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">
        Col
        </a-col>
        <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
        Col
        </a-col>
    </a-row>
    <br><br><hr>
    </div>
    
    <!-- layout -->
    <div>
        <h3>Layout布局</h3>
        <div id="components-layout-demo-basic">
        <a-layout>
        <a-layout-header>Header</a-layout-header>
        <a-layout-content>Content</a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
        </a-layout>

        <a-layout>
        <a-layout-header>Header</a-layout-header>
        <a-layout>
            <a-layout-sider>Sider</a-layout-sider>
            <a-layout-content>Content</a-layout-content>
        </a-layout>
        <a-layout-footer>Footer</a-layout-footer>
        </a-layout>

        <a-layout>
        <a-layout-header>Header</a-layout-header>
        <a-layout>
            <a-layout-content>Content</a-layout-content>
            <a-layout-sider>Sider</a-layout-sider>
        </a-layout>
        <a-layout-footer>Footer</a-layout-footer>
        </a-layout>

        <a-layout>
        <a-layout-sider>Sider</a-layout-sider>
        <a-layout>
            <a-layout-header>Header</a-layout-header>
            <a-layout-content>Content</a-layout-content>
            <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
        </a-layout>
    </div>
    <!-- 自定义触发器 -->
    <br>
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
            <a-menu-item key="1">
            <a-icon type="user" />
            <span>nav 1</span>
            </a-menu-item>
            <a-menu-item key="2">
            <a-icon type="video-camera" />
            <span>nav 2</span>
            </a-menu-item>
            <a-menu-item key="3">
            <a-icon type="upload" />
            <span>nav 3</span>
            </a-menu-item>
        </a-menu>
        </a-layout-sider>
        <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
            <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
            />
        </a-layout-header>
        <a-layout-content
            :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
            Content
        </a-layout-content>
        </a-layout>
    </a-layout>
     <br><br>
  <hr>
  </div>
 
  <!-- space -->
    <div>
        <h3>Space 间距</h3>
        <a-space>
            Space
            <a-button type="primary">Button</a-button>
            <a-upload>
            <a-button> <a-icon type="upload" /> Click to Upload </a-button>
            </a-upload>
            <a-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
            <a-button>Confirm</a-button>
            </a-popconfirm>
        </a-space>

        <a-space direction="vertical">
            <a-card title="Card" style="width: 300px;">
            <p>Card content</p>
            <p>Card content</p>
            </a-card>
            <a-card title="Card" style="width: 300px;">
            <p>Card content</p>
            <p>Card content</p>
            </a-card>
        </a-space>

    <a-radio-group v-model="size">
        <a-radio value="small">Small</a-radio>
        <a-radio value="middle">Middle</a-radio>
        <a-radio value="large">Large</a-radio>
        </a-radio-group>
        <a-space :size="size">
        <a-button type="primary">Primary</a-button>
        <a-button>Default</a-button>
        <a-button type="dashed">Dashed</a-button>
        <a-button type="link">Link</a-button>
        </a-space>
        <br><br/>
        <hr/>
    </div>
    <!-- Affix -->
    <div>
        <h3>Affix固钉</h3>
        <a-space direction="vertical">
            <a-affix :offset-top="top">
            <a-button type="primary" @click="top += 10">
                Affix top
            </a-button>
            </a-affix>
            <!-- 滚动容器 -->
            <div id="components-affix-demo-target" ref="container" class="scrollable-container">
            <div class="background">
            <a-affix :target="() => this.$refs.container">
                <a-button type="primary">
                Fixed at the top of container
                </a-button>
            </a-affix>
            </div>
        </div>

        <a-affix :offset-top="120" @change="change">
        <a-button>120px to affix top</a-button>
    </a-affix>
        </a-space>
        <br><br/>
        <hr>
    </div>
    <!-- breadcrumb面包屑 -->
    <div>
        <h3>breadcrumb面包屑</h3>
        <a-breadcrumb>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
        <a-breadcrumb-item>An Application</a-breadcrumb-item>
    </a-breadcrumb>

    <a-breadcrumb :routes="routes">
        <template slot="itemRender" slot-scope="{ route, params, routes, paths }">
            <span v-if="routes.indexOf(route) === routes.length - 1">
            {{ route.breadcrumbName }}
            </span>
            <router-link v-else :to="`${basePath}/${paths.join('/')}`">
            {{ route.breadcrumbName }}
            </router-link>
        </template>
        </a-breadcrumb>
        <br />
        {{ $route.path }}

        <br /><br /><hr />

        <h3>Dropdown下拉菜单</h3>
        <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
        Hover me <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
        <a-menu-item>
            <a href="javascript:;">1st menu item</a>
        </a-menu-item>
        <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
        </a-menu-item>
        <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
        </a-menu-item>
        </a-menu>
    </a-dropdown>
    <br /><br /><hr/>
    </div>
    <!-- Menu导航菜单 -->
    <div>
        <h3>Menu导航菜单</h3>
        <div>
            <a-menu
            style="width: 256px"
            :default-selected-keys="['1']"
            :open-keys.sync="openKeys"
            mode="inline"
            @click="handleClick"
            >
            <a-sub-menu key="sub1" @titleClick="titleClick">
                <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
                <a-menu-item-group key="g1">
                <template slot="title"> <a-icon type="qq" /><span>Item 1</span> </template>
                <a-menu-item key="1">
                    Option 1
                </a-menu-item>
                <a-menu-item key="2">
                    Option 2
                </a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group key="g2" title="Item 2">
                <a-menu-item key="3">
                    Option 3
                </a-menu-item>
                <a-menu-item key="4">
                    Option 4
                </a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>
            <a-sub-menu key="sub2" @titleClick="titleClick">
                <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
                <a-menu-item key="5">
                Option 5
                </a-menu-item>
                <a-menu-item key="6">
                Option 6
                </a-menu-item>
                <a-sub-menu key="sub3" title="Submenu">
                <a-menu-item key="7">
                    Option 7
                </a-menu-item>
                <a-menu-item key="8">
                    Option 8
                </a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
            <a-sub-menu key="sub4">
                <span slot="title"><a-icon type="setting" /><span>Navigation Three</span></span>
                <a-menu-item key="9">
                Option 9
                </a-menu-item>
                <a-menu-item key="10">
                Option 10
                </a-menu-item>
                <a-menu-item key="11">
                Option 11
                </a-menu-item>
                <a-menu-item key="12">
                Option 12
                </a-menu-item>
            </a-sub-menu>
            </a-menu>
        </div>
        <br /><br /><hr/>
    </div>
    <!-- PageHeader页头 -->
    <div>
        <h3>PageHeader页头</h3>
        <a-page-header
            style="border: 1px solid rgb(235, 237, 240)"
            title="Title"
            sub-title="This is a subtitle"
            @back="() => null"
        />
        <a-page-header
            style="border: 1px solid rgb(235, 237, 240)"
            title="Title"
            :breadcrumb="{ props: { routes } }"
            sub-title="This is a subtitle"
        />
        <div>
            <a-page-header
            style="border: 1px solid rgb(235, 237, 240)"
            title="Title"
            sub-title="This is a subtitle"
            @back="() => $router.go(-1)"
            >
            <template slot="extra">
                <a-button key="3">
                Operation
                </a-button>
                <a-button key="2">
                Operation
                </a-button>
                <a-button key="1" type="primary">
                Primary
                </a-button>
            </template>
            <template slot="footer">
                <a-tabs default-active-key="1">
                <a-tab-pane key="1" tab="Details" />
                <a-tab-pane key="2" tab="Rule" />
                </a-tabs>
            </template>
            <div class="content">
                <div class="main">
                <a-descriptions size="small" :column="2">
                    <a-descriptions-item label="Created">
                    Lili Qu
                    </a-descriptions-item>
                    <a-descriptions-item label="Association">
                    <a>421421</a>
                    </a-descriptions-item>
                    <a-descriptions-item label="Creation Time">
                    2017-01-10
                    </a-descriptions-item>
                    <a-descriptions-item label="Effective Time">
                    2017-10-10
                    </a-descriptions-item>
                    <a-descriptions-item label="Remarks">
                    Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
                    </a-descriptions-item>
                </a-descriptions>
                </div>
                <div class="extra">
                <div
                    :style="{
                    display: 'flex',
                    width: 'max-content',
                    justifyContent: 'flex-end',
                    }"
                >
                    <a-statistic
                    title="Status"
                    value="Pending"
                    :style="{
                        marginRight: '32px',
                    }"
                    />
                    <a-statistic title="Price" prefix="$" :value="568.08" />
                </div>
                </div>
            </div>
            </a-page-header>
        </div>
        <br /> <br /> <hr />
    </div>
    <!-- Pagination分页 -->
    <div>
        <h3>Pagination分页</h3>
        <a-pagination v-model="current" :total="50" show-less-items />
        <div>
            <a-pagination
            show-size-changer
            :default-current="3"
            :total="500"
            @showSizeChange="onShowSizeChange"
            />
            <br />
            <a-pagination
            v-model="current"
            show-size-changer
            :page-size.sync="pageSize"
            :total="500"
            disabled
            @showSizeChange="onShowSizeChange"
            />
        </div>
        <br /><br /><hr />
    </div>
    <!-- Steps步骤条 -->
    <div>
        <h3>Steps步骤条</h3>
        <a-steps :current="1">
            <a-step>
            <!-- <span slot="title">Finished</span> -->
            <template slot="title">
                Finished
            </template>
            <span slot="description">This is a description.</span>
            </a-step>
            <a-step title="In Progress" sub-title="Left 00:00:08" description="This is a description." />
            <a-step title="Waiting" description="This is a description." />
        </a-steps>

        <a-steps :current="1" size="small">
            <a-step title="Finished" />
            <a-step title="In Progress" />
            <a-step title="Waiting" />
        </a-steps>

        <a-steps>
            <a-step status="finish" title="Login">
            <a-icon slot="icon" type="user" />
            </a-step>
            <a-step status="finish" title="Verification">
            <a-icon slot="icon" type="solution" />
            </a-step>
            <a-step status="process" title="Pay">
            <a-icon slot="icon" type="loading" />
            </a-step>
            <a-step status="wait" title="Done">
            <a-icon slot="icon" type="smile-o" />
            </a-step>
        </a-steps>
        步骤切换
        <div>
            <a-steps :current="current">
            <a-step v-for="item in steps" :key="item.title" :title="item.title" />
            </a-steps>
            <div class="steps-content">
            {{ steps[current].content }}
            </div>
            <div class="steps-action">
            <a-button v-if="current < steps.length - 1" type="primary" @click="next">
                Next
            </a-button>
            <a-button
                v-if="current == steps.length - 1"
                type="primary"
                @click="$message.success('Processing complete!')"
            >
                Done
            </a-button>
            <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
                Previous
            </a-button>
            </div>
        </div>
        导航步骤
        <div>
            <a-steps v-model="current" type="navigation" size="small" :style="stepStyle">
            <a-step
                title="Step 1"
                sub-title="00:00:05"
                status="finish"
                description="This is a description."
            />
            <a-step
                title="Step 2"
                sub-title="00:01:02"
                status="process"
                description="This is a description."
            />
            <a-step
                title="Step 3"
                sub-title="waiting for longlong time"
                status="wait"
                description="This is a description."
            />
            </a-steps>
            <a-steps v-model="current" type="navigation" :style="stepStyle">
            <a-step status="finish" title="Step 1" />
            <a-step status="process" title="Step 2" />
            <a-step status="wait" title="Step 3" />
            <a-step status="wait" title="Step 4" />
            </a-steps>
            <a-steps v-model="current" type="navigation" size="small" :style="stepStyle">
            <a-step status="finish" title="finish 1" />
            <a-step status="finish" title="finish 2" />
            <a-step status="process" title="current process" />
            <a-step status="wait" title="wait" disabled />
            </a-steps>
        </div>
        <br /><br /> <hr />
    </div>
    <!-- AutoComplete -->
    <div>
        <h3>AutoComplete 自动完成</h3>
        <div class="certain-category-search-wrapper" style="width: 250px">
            <a-auto-complete
            class="certain-category-search"
            dropdown-class-name="certain-category-search-dropdown"
            :dropdown-match-select-width="false"
            :dropdown-style="{ width: '300px' }"
            size="large"
            style="width: 100%"
            placeholder="input here"
            option-label-prop="value"
            >
            <template slot="dataSource">
                <a-select-opt-group v-for="group in dataSource" :key="group.title">
                <span slot="label">
                    {{ group.title }}
                    <a
                    style="float: right"
                    href="https://www.google.com/search?q=antd"
                    target="_blank"
                    rel="noopener noreferrer"
                    >more
                    </a>
                </span>
                <a-select-option v-for="opt in group.children" :key="opt.title" :value="opt.title">
                    {{ opt.title }}
                    <span class="certain-search-item-count">{{ opt.count }} people</span>
                </a-select-option>
                </a-select-opt-group>
                <a-select-option key="all" disabled class="show-all">
                <a
                    href="https://www.google.com/search?q=ant-design-vue"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View all results
                </a>
                </a-select-option>
            </template>
            <a-input>
                <a-icon slot="suffix" type="search" class="certain-category-icon" />
            </a-input>
            </a-auto-complete>
        </div>
        <br /><br /> <hr />
    </div>
    <!-- Cascader -->
    <div>
        <h3>Cascader 级联选择</h3>
        <a-cascader :options="options" placeholder="Please select" @change="onChange" />
        <br /> <br /><hr />
    </div>
    <!-- Checkbox多选框 -->
    <div>
        <h3>Checkbox多选框</h3>
        <a-checkbox @change="onChange">
            Checkbox
        </a-checkbox>
        <br /> <br /><hr />
    </div>
    <!-- DatePicker -->
    <div>
    <h3>DatePicker 日期选择框</h3>
    <a-date-picker>
        <template slot="renderExtraFooter">
            extra footer
        </template>
        </a-date-picker>
        <a-date-picker show-time>
        <template slot="renderExtraFooter">
            extra footer
        </template>
        </a-date-picker>
        <br /><br /><hr />
    </div>
    <!-- Form -->
    <div>
    <h3>Form 表单</h3>
     <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
    <a-form-item label="Note">
      <a-input
        v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </a-form-item>
    <a-form-item label="Gender">
      <a-select
        v-decorator="[
          'gender',
          { rules: [{ required: true, message: 'Please select your gender!' }] },
        ]"
        placeholder="Select a option and change input text above"
        @change="handleSelectChange"
      >
        <a-select-option value="male">
          male
        </a-select-option>
        <a-select-option value="female">
          female
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
  <br /> <br /> <hr />

  <h3>FormModel 表单</h3>
  <a-form-model layout="inline" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
    <a-form-model-item>
      <a-input v-model="formInline.user" placeholder="Username">
        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item>
      <a-input v-model="formInline.password" type="password" placeholder="Password">
        <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="formInline.user === '' || formInline.password === ''"
      >
        Log in
      </a-button>
    </a-form-model-item>
  </a-form-model>
  <br /><br /><hr />
    </div>
    <!-- Rate -->
    <div>
        <h3>Rate评分</h3>
        <a-rate v-model="value" />
        <br /><br /><hr />
    </div>
    <!-- Select -->
    <div>
        <h3>Select选择器</h3>
        <div>
        <a-select default-value="lucy" style="width: 120px" @change="handleChange">
        <a-select-option value="jack">
            Jack
        </a-select-option>
        <a-select-option value="lucy">
            Lucy
        </a-select-option>
        <a-select-option value="disabled" disabled>
            Disabled
        </a-select-option>
        <a-select-option value="Yiminghe">
            yiminghe
        </a-select-option>
        </a-select>
        <a-select default-value="lucy" style="width: 120px" disabled>
        <a-select-option value="lucy">
            Lucy
        </a-select-option>
        </a-select>
        <a-select default-value="lucy" style="width: 120px" loading>
        <a-select-option value="lucy">
            Lucy
        </a-select-option>
        </a-select>
    </div>
    <br /><br /><hr />
    </div>
    <!-- Silder -->
    <div>
        <h3>Slider 滑动输入条</h3>
         <div>
            <a-slider id="test" :default-value="30" :disabled="disabled" />
            <a-slider range :default-value="[20, 50]" :disabled="disabled" />
            Disabled: <a-switch size="small" :checked="disabled" @change="handleDisabledChange" />
        </div>
        <div style="height: 300px">
            <div style="display: inline-block;height: 300px;marginLeft: 70px">
            <a-slider vertical :default-value="30" />
            </div>
            <div style="display: inline-block;height: 300px;marginLeft: 70px">
            <a-slider vertical range :step="10" :default-value="[20, 50]" />
            </div>
            <div style="display: inline-block;height: 300px;marginLeft: 70px">
            <a-slider vertical range :marks="marks" :default-value="[26, 37]" />
            </div>
        </div>
        <br /><br /> <hr />
    </div>
    <!-- Switch -->
    <div>
        <h3>Switch开关</h3>
        <a-switch default-checked @change="onChange" />
         <div>
            <a-switch checked-children="开" un-checked-children="关" default-checked />
            <br />
            <a-switch checked-children="1" un-checked-children="0" />
            <br />
            <a-switch default-checked>
            <a-icon slot="checkedChildren" type="check" />
            <a-icon slot="unCheckedChildren" type="close" />
            </a-switch>
        </div>
        <br /><br /> <hr />
    </div>
    <!-- TimePicker -->
    <div>
        <h3>TimePicker 时间选择框</h3>
         <a-time-picker use12-hours @change="onChange" />
        <a-time-picker use12-hours format="h:mm:ss A" @change="onChange" />
        <a-time-picker use12-hours format="h:mm a" @change="onChange" />
        <br /><br /> <hr />
    </div>
    <!-- Transfer -->
    <div>
        <h3>穿梭框</h3>
        <a-transfer
        :data-source="mockData"
        show-search
        :filter-option="filterOption"
        :target-keys="targetKeys"
        :render="item => item.title"
        @change="handleChange"
        @search="handleSearch"
    />
        <br /><br /> <hr />
    </div>
    <!-- TreeSelect -->
    <div>
        <h3>树型选择控件</h3>
        <a-tree-select
            v-model="value"
            show-search
            style="width: 100%"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="Please select"
            allow-clear
            tree-default-expand-all
        >
            <a-tree-select-node key="0-1" value="parent 1" title="parent 1">
            <a-tree-select-node key="0-1-1" value="parent 1-0" title="parent 1-0">
                <a-tree-select-node key="random" :selectable="false" value="leaf1" title="my leaf" />
                <a-tree-select-node key="random1" value="leaf2" title="your leaf" />
            </a-tree-select-node>
            <a-tree-select-node key="random2" value="parent 1-1" title="parent 1-1">
                <a-tree-select-node key="random3" value="sss">
                <b slot="title" style="color: #08c">sss</b>
                </a-tree-select-node>
            </a-tree-select-node>
            </a-tree-select-node>
        </a-tree-select>
        <br /><br /> <hr />
    </div>
    <!-- Upload -->
    <div>
        <h3>Upload 上传</h3>
        <a-upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        :default-file-list="defaultFileList"
    >
        <a-button> <a-icon type="upload" /> Upload </a-button>
    </a-upload>
    
        <br /><br /> <hr />
    </div>
    <!-- Avatar -->
    <div>
            <h3>Avatar头像</h3>
            <div>
        <a-avatar icon="user" />
        <a-avatar>
        <a-icon slot="icon" type="user" />
        </a-avatar>
        <a-avatar>U</a-avatar>
        <a-avatar>USER</a-avatar>
        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">
        U
        </a-avatar>
        <a-avatar style="backgroundColor:#87d068" icon="user" />
    </div>
         <br /><br /> <hr />
    </div>
    <!-- Badge -->
    <div>
        <h3>Badge徽标数</h3>
        <div>
        <a-badge count="25" />
        <a-badge
        count="4"
        :number-style="{
            backgroundColor: '#fff',
            color: '#999',
            boxShadow: '0 0 0 1px #d9d9d9 inset',
        }"
        />
        <a-badge count="109" :number-style="{ backgroundColor: '#52c41a' }" />
    </div>
    <div style="margin-top: 10px">
      <a-badge :dot="show">
        <a href="#" class="head-example" />
      </a-badge>
      <a-switch v-model="show" />
    </div>
         <br /><br /> <hr />
    </div>
    <!-- Calendar -->
    <div>
        <h3>Calendar 日历</h3>
         <a-calendar @panelChange="onPanelChange" /> 
         <br /><br /> <hr />
    </div>
    <!-- Card -->
    <div>
        <h3>Card 卡片</h3>
          <div>
        <a-card title="Default size card" style="width: 300px">
        <a slot="extra" href="#">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
        </a-card>
        <br />
        <a-card size="small" title="Small size card" style="width: 300px">
        <a slot="extra" href="#">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
        </a-card>
    </div>
         <br /><br /> <hr />
    </div>
    <!-- Carousel -->
    <div>
        <h3>Carousel 走马灯</h3>
        <a-carousel autoplay>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
        </a-carousel>
         <br /><br /> <hr />
    </div>
    <!-- Collapse -->
    <div>
        <h3>Collapse折叠面板</h3>
         <div>
        <a-collapse accordion>
        <a-collapse-panel key="1" header="This is panel header 1">
            <p>{{ text }}</p>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
            <p>{{ text }}</p>
        </a-collapse-panel>
        <a-collapse-panel key="3" header="This is panel header 3">
            <p>{{ text }}</p>
        </a-collapse-panel>
        </a-collapse>
    </div>
         <br /><br /> <hr />
    </div>
    <!-- Comment -->
    <div>
        <h3>Comment评论</h3>
         <div>
        <!-- <a-collapse accordion>
        <a-collapse-panel key="1" header="This is panel header 1">
            <p>{{ text }}</p>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
            <p>{{ text }}</p>
        </a-collapse-panel>
        <a-collapse-panel key="3" header="This is panel header 3">
            <p>{{ text }}</p>
        </a-collapse-panel>
        </a-collapse> -->
    </div>
         <br /><br /> <hr />
    </div>
</div>

</template>
<script>
import { Icon } from 'ant-design-vue';
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const dataSource = [
  {
    title: 'Libraries',
    children: [
      {
        title: 'AntDesign',
        count: 10000,
      },
      {
        title: 'AntDesign UI',
        count: 10600,
      },
    ],
  },
  {
    title: 'Solutions',
    children: [
      {
        title: 'AntDesign UI',
        count: 60100,
      },
      {
        title: 'AntDesign',
        count: 30010,
      },
    ],
  },
  {
    title: 'Articles',
    children: [
      {
        title: 'AntDesign design language',
        count: 100000,
      },
    ],
  },
];
export default {
  name: 'vnt01',
   components: {
    IconFont,
  },
  data() {
    return {
       collapsed: false,
       size: 'small',
       top: 10,
    //    current: ['mail'],
      openKeys: ['sub1'],
      routes: [
        {
          path: '/home',
          breadcrumbName: 'First-level Menu',
        },
        {
          path: '/ant01',
          breadcrumbName: 'Second-level Menu',
        },
        {
          path: '/ant02',
          breadcrumbName: 'Third-level Menu',
        },
      ],
      current: 1,
      steps: [
        {
          title: 'First',
          content: 'First-content',
        },
        {
          title: 'Second',
          content: 'Second-content',
        },
        {
          title: 'Last',
          content: 'Last-content',
        },
      ],
      dataSource,
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ],

      formInline: {
        user: '',
        password: '',
      },
      value: 2,
      mockData: [],
      targetKeys: [],
    };
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);
    },
  },
   mounted() {
    this.getMock();
  },
  methods: {
    change(affixed) {
      console.log(affixed);
    },
     handleClick(e) {
      console.log('click', e);
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
    // 步骤条
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
    onChange(value) {
      console.log(value);
    },
    getMock() {
      const targetKeys = [];
      const mockData = [];
      for (let i = 0; i < 20; i++) {
        const data = {
          key: i.toString(),
          title: `content${i + 1}`,
          description: `description of content${i + 1}`,
          chosen: Math.random() * 2 > 1,
        };
        if (data.chosen) {
          targetKeys.push(data.key);
        }
        mockData.push(data);
      }
      this.mockData = mockData;
      this.targetKeys = targetKeys;
    },
    filterOption(inputValue, option) {
      return option.description.indexOf(inputValue) > -1;
    },
    handleChange(targetKeys, direction, moveKeys) {
      console.log(targetKeys, direction, moveKeys);
      this.targetKeys = targetKeys;
    },
    handleSearch(dir, value) {
      console.log('search:', dir, value);
    },
    
  },
};
</script>

<style scoped>
/* 按钮 */
#components-button-demo-button-group > h4 {
  margin: 16px 0;
  font-size: 14px;
  line-height: 1;
  font-weight: normal;
}
#components-button-demo-button-group > h4:first-child {
  margin-top: 0;
}
#components-button-demo-button-group .ant-btn-group {
  margin-right: 8px;
}
/* Icon图标 */
.icons-list >>> .anticon {
  margin-right: 6px;
  font-size: 24px;
}
/* Layout布局 */
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
/* 滚动容器 */
#components-affix-demo-target.scrollable-container {
  height: 100px;
  overflow-y: scroll;
}
#components-affix-demo-target .background {
  padding-top: 60px;
  height: 300px;
  background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
}

/* 页头 */
tr:last-child td {
  padding-bottom: 0;
}
#components-page-header-demo-responsive .content {
  display: flex;
}
#components-page-header-demo-responsive .ant-statistic-content {
  font-size: 20px;
  line-height: 28px;
}
@media (max-width: 576px) {
  #components-page-header-demo-responsive .content {
    display: block;
  }

  #components-page-header-demo-responsive .main {
    width: 100%;
    margin-bottom: 12px;
  }

  #components-page-header-demo-responsive .extra {
    width: 100%;
    margin-left: 0;
    text-align: left;
  }
}
/* 步骤条 */
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
/* 自动完成 */
.certain-category-search-wrapper
  >>> .certain-category-search.ant-select-auto-complete
  .ant-input-affix-wrapper
  .ant-input-suffix {
  right: 12px;
}
.certain-category-search-wrapper >>> .certain-search-item-count {
  position: absolute;
  color: #999;
  right: 16px;
}
.certain-category-search-wrapper
  >>> .certain-category-search.ant-select-focused
  .certain-category-icon {
  color: #108ee9;
}
.certain-category-search-wrapper >>> .certain-category-icon {
  color: #6e6e6e;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  font-size: 16px;
}
/* 走马灯 */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
