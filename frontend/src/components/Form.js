import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display:flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px; /* Definimos a largura aqui, não no padding! */
  padding: 0 10px; /* Ajustado para um respiro interno normal */
  border: 1px solid #bbb; /* Adicionado o ponto e vírgula que faltava */
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px; /* Corrigido de 'bordeer-radius' */
  border: none;
  background-color: #2c73d2;
  color: #fff;
  height: 42px;
`;

const Form = ({ onEdit, setOnEdit, getUsers }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.name.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.fone.value = onEdit.fone;
      user.data_nascimento.value = onEdit.data_nascimento.split("T")[0]; // Ajuste para pegar apenas a data
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    const nome = user.name.value.trim();
    const email = user.email.value.trim();
    const fone = user.fone.value.trim();
    const dataNascimento = user.data_nascimento.value;

    // ✅ Validação campos vazios
    if (!nome || !email || !fone || !dataNascimento) {
      return toast.warn("Preencha todos os campos!");
    }

    // ✅ Validação email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return toast.warn("Digite um email válido!");
    }

    // ✅ Validação telefone (apenas números e mínimo 10 dígitos)
    const onlyNumbers = fone.replace(/\D/g, "");
    if (onlyNumbers.length < 10) {
      return toast.warn("Digite um telefone válido!");
    }

    // ✅ Validação data futura
    const hoje = new Date();
    const dataSelecionada = new Date(dataNascimento);
    if (dataSelecionada > hoje) {
      return toast.warn("Data de nascimento inválida!");
    }

    try {
      if (onEdit) {
        const { data } = await axios.put(
          "http://localhost:8800/" + onEdit.id,
          {
            nome,
            email,
            fone,
            data_nascimento: dataNascimento,
          }
        );
        toast.success(data);
      } else {
        const { data } = await axios.post(
          "http://localhost:8800/",
          {
            nome,
            email,
            fone,
            data_nascimento: dataNascimento,
          }
        );
        toast.success(data);
      }

      user.name.value = "";
      user.email.value = "";
      user.fone.value = "";
      user.data_nascimento.value = "";

      setOnEdit(null);
      getUsers();

    } catch (error) {
      toast.error("Erro ao salvar usuário!");
    }
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="name" />
      </InputArea>
      <InputArea>
        <Label>Email</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="fone" />
      </InputArea>
      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="data_nascimento" type="date" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;