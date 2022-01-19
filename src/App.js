import TodoListStatefull from './TodoList/TodoListStatefull';
import TodoListStateless from './TodoList/TodoListStateless';
import TodoListFuncional from './TodoList/TodoListFuncional';

const divStyle = {
	color: 'black',
	border: '3px solid #000',
	margin: '5px',
	padding: '10px'
};

const items = ['Banana','Uva','Laranja'];

function App() {
  return (
		<div>
		  <h2>Statefull vs Stateless</h2>

			<h3>Componente Statefull</h3>
			Possui gerenciamento de estados no componente.
			Construído usando classes em JS.
			<div style={divStyle}>
				<TodoListStatefull />
			</div>

			<h3>Componente Stateless</h3>
			Não possui gerenciamento de estados no componente.
			Construído usando Funções.
			É usado para renderizações de imagens e ícones.
			<div style={divStyle}>
				<TodoListStateless items={items} />
			</div>

			<h3>Componente Statefull usando o hook useState</h3>
			useState é um hook para criação de estados.
			<div style={divStyle}>
				<TodoListFuncional />
			</div>








		</div>
  );
}

export default App;
