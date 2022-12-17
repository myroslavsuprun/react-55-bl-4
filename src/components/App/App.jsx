import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
  Filter,
} from 'components';
import { useSelector } from 'react-redux';
import { selectFilter, selectTodos } from 'redux/selectors';

const App = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <Filter />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {todos.length > 0 &&
              filteredTodos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo id={todo.id} text={todo.text} counter={index + 1} />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export { App };
