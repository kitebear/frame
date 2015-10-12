<template>
    <h2 class="">简单事例</h2>
    <pre class="brush: js;toolbar:false;" >
        <div &nbsp;v-text="message"></div>
        function helloSyntaxHighlighter()
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