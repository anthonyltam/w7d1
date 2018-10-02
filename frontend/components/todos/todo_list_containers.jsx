import {connect} from 'react-redux';
import {todo_list} from 'todo_list';

const mapStateToProps = state => ({
  todos = state.todos;
});

// export default connect(mapStateToProps)(todo_list)

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(receive_todo(todo))
})
export default connect(mapStateToProps, mapDispatchToProps)(todo_list);
