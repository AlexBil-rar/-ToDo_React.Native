import React from 'react';
import { View,} from 'react-native'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ToDOItem from './ToDoItem';
import FilterTodo from '../UI/FilterTodo';
import InputSearch from '../UI/InputSearch';
import Pagination from '../UI/Pagination';

const ToDoList = () => {
    const Todos = useTypedSelector((state) => state.Todo.todoList)

    const [filtred, setFiltred] = React.useState<string | boolean>() 
    const [search, setSearch] = React.useState<string>('')
    const [last, setlast] = React.useState(Object)

    const [currentPage, setCurrentPage] = React.useState(1)
    const [totalTodos, setTotalTodos] = React.useState(0);
    const todosPerPage = 15;

    const TodoData = React.useMemo(() => {
        let computedTodos  = Todos
        if (search) {
            setCurrentPage(1);
            computedTodos = computedTodos.filter(
                (todo:  {seconddate: string, main: string}) =>
                todo.main.toLowerCase().includes(search.toLowerCase()) ||
                todo.seconddate.toLowerCase().includes(search.toLowerCase())
            );
        }
        if (filtred === true) {
            computedTodos = computedTodos.filter(
                (todo: { active: boolean; }) =>
                filtred === true && todo.active === true
            )
        }
        if (filtred === false) {
            computedTodos = computedTodos.filter(
                (todo: { active: boolean; }) =>
                filtred === false && todo.active === false
            )
        }
        setTotalTodos(computedTodos.length)
        let last = computedTodos[computedTodos.length - 1]
        setlast(last)
        return computedTodos.slice(
            (currentPage - 1 ) * todosPerPage,
            (currentPage - 1 ) * todosPerPage + todosPerPage 
        )
    },[Todos, currentPage, search, filtred, last])

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
    
    const resetFilter = () => {
        setSearch("");
        setFiltred("");
        setCurrentPage(1);
    };     


    return (
        <View >
            <InputSearch search={search} setSearch={setSearch}/>
            <FilterTodo setFiltred={setFiltred} resetFilter={resetFilter} /> 
            {TodoData.map((todo) => (
                <ToDOItem lastOne={last} key={todo.id}  todo={todo} />

            ))}
                <Pagination totalTodo={totalTodos} paginate={paginate} todoPage={todosPerPage}/>
        </View>
    );
};




export default ToDoList;