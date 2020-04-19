import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../redux/actions';
import { getVisibleTodos } from '../selectors';

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: id => dispatch(toggleTodo(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)