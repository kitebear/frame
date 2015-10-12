<template>
    <aside class="sidebar">
        <ul>
            <li>
                <a class="sidebar-tree" >1.指令</a>
                <ul class="sidebar-ul">
                    <li>
                        <a v-link="{ name : 'simpleEmp' }">1.简单事例</a>
                    </li>
                    <li>
                        <a v-link="{ name : 'inlineExp' }">2.内联表达式</a>
                    </li>
                </ul>
            </li>
            <li>
                <a  >2.过滤器</a>
            </li>
            <li>
                <a>3.渲染列表</a>
            </li>
            <li>
                <a>4.事件监听</a>
            </li>
            <li>
                <a>5.处理表单</a>
            </li>
            <li>
                <a>6.计算属性</a>
            </li>
            <li>
                <a>7.自定义指令</a>
            </li>
            <li>
                <a>8.自定义过滤器</a>
            </li>
            <li>
                <a>9.组件系统</a>
            </li>
            <li>
                <a>10.过渡效果</a>
            </li>
        </ul>
    </aside>
    <section class="content">
        <router-view></router-view>
    </section>
</template>
<script>
    $("body").delegate(".sidebar-tree","click",function(){
        $(this).next().slideToggle("200", "linear");
    });
</script>