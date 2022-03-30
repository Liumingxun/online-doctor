<script setup>

</script>

<template>
<router-view></router-view>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}

html, body, #app {
  height: 100%;

}

body {
  background-color: #f6f6f6;
}

#k-mdp h1:before,
#k-mdp h2:before
{
  content: '||';
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #242EBF;
  background: #242EBF;
  margin-right: 4px;
}

#k-mdp, #mdp {
  line-height: 30px;
}

#mdp ol, #mdp ul, #k-mdp ol, #k-mdp ul {
  list-style-position: inside;
}
</style>
