<template>
    <h2 class="">内联表达式</h2>
    <pre class="brush: js">
        <div &nbsp;v-text="message"></div>
        function hello1111SyntaxHighlighter()
        {
            return "hi!";
        }
    </pre>
</template>

<script>
    module.exports = {
        data:{

        },
        ready: function(){
            var SyntaxHighlighter = require("shCore").SyntaxHighlighter;
            SyntaxHighlighter.highlight();
        }
    };
</script>