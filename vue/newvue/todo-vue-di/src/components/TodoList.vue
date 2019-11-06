<template>
    <div class="todo-list">
        <h2>{{category}}</h2>
        <input v-model="newTodo" type="text">
        <button @click="addTodo">추가</button>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.content }}
          <button @click="removeTodo(todo.id)" >완료!</button>
        </li>
      </div>
</template>

<script>
export default {
    props: { // 하위 컴포넌트로 데이터 전송
        category: {
          type: String,
          required: true
        },
      },
      data: function() {
        return {
          todos: [],
          newTodo: '',
        }
      },
      methods: {
        addTodo () {
          this.todos.push({ id: Date.now(), content: this.newTodo })
          this.newTodo = ''
        },
        removeTodo (removeTodoId) {
          this.todos = this.todos.filter(todo => {
            return todo.id !== removeTodoId
          })
        }
      },
}
</script>

<style lang="">
    /* li {
        color: blue;
    } */
</style>