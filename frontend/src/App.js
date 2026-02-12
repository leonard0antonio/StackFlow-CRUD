import GlobalStyle from './styles/global';
import styled from 'styled-components';
import Form from './components/Form'; 
import Grid from './components/Grid';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Container = styled.div`
  width: 100%; /* Corrigido: era 'with' */
  max-width: 800px; /* Adicionado para não ficar espalhado em telas muito grandes */
  margin: 20px auto 0 auto; /* Centraliza o container na página */
  display: flex;
  flex-direction: column; /* Corrigido: era 'felx' */
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2`
  /* Opcional: Adicione um estilo extra se quiser */
`;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
  try {
    const res = await axios.get("http://localhost:8800");
    // O .sort deve envolver a função de comparação e estar dentro do setUsers
    setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
  } catch (error) {
    toast.error(error);
  }
};

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
      </Container>
      {/* O ToastContainer deve ficar fora do Container para não ser afetado pelo alinhamento flex */}
      <ToastContainer autoClose={300} position="bottom-left" />
      <GlobalStyle />
    </>
  );
}

export default App;