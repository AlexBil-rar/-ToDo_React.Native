import {createSlice} from '@reduxjs/toolkit'

  const initialValue = {
    todoList: [{
      id: 2, 
      main: 'Сделать тз', 
      description: 'Успеть за 5 дней' , 
      seconddate: "09/10/2022", 
      active: false
    }]
  };


const todoSlice = createSlice({
    name: 'todo',
    initialState: initialValue,
    reducers: {
        addTodo: (state, action) => {
           const newTodo ={
                      id: Date.now(),
                      main: action.payload.main,
                      description: action.payload.description,
                      seconddate: action.payload.seconddate,
                      active: false
                   };
                   state.todoList.push(newTodo)
        },
        toggleComplete: (state, action) => {
            const index = state.todoList.findIndex((todo) => todo.id === action.payload.id);
            state.todoList[index].active = action.payload.active
        },
        updateTodo: (state, action) => {
            let data = action.payload;
            const updataArray = [];
            state.todoList.map((item) => {
                if(item.id === data.id) {
                    item.id = data.id
                    item.main = data.main
                    item.description = data.description;
                    item.seconddate = data.seconddate
                }
                updataArray.push(item)
            })
        },
        removeTodo(state, action) {
            state.todoList = state.todoList.filter((todo) => todo.id !== action.payload.id)
        }
    }
})


export const {
    addTodo,
    toggleComplete,
    removeTodo,
    updateTodo
    } = todoSlice.actions

export default todoSlice.reducer

