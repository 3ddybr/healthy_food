import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCookies } from 'react-cookie';

import styles from './styles.module.scss';
import { apiCep } from '../../services/apiCep';

interface Address {
  cep: string;
  logradouro: string;
  bairro: string;
  uf: string;
}

interface User {
  nome: string;
  birthDate: string;
  cpf: string;
  endereco: Address;
}

const schema = yup.object().shape({
  nome: yup.string().required(),
  birthDate: yup.string().required(),
  cpf: yup.string().required(),
  cep: yup.string().required(),
  logradouro: yup.string().required(),
  bairro: yup.string().required(),
  uf: yup.string().required(),
});

export function Register() {
  const [users, setUsers] = useState<User[]>([]);
  const [cookies, setCookie] = useCookies(['user']);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const newUsersStr = JSON.stringify(users);
    localStorage.setItem('users', newUsersStr);
    cookies.user = newUsersStr;
  }, [cookies, users]);

  const handleFetchAddress = async (cep: string) => {
    if (cep.length === 8) {
      const res = await apiCep.get<Address>(`${cep}/json/`);
      setValue('bairro', res.data.bairro);
      setValue('logradouro', res.data.logradouro);
      setValue('uf', res.data.uf);
    }
  };

  const onChangeCep = (cep: string) => {
    handleFetchAddress(cep);
  };

  const onRegister = ({
    nome,
    birthDate,
    cpf,
    cep,
    logradouro,
    bairro,
    uf,
  }: any) => {
    const user: User = {
      nome,
      birthDate,
      cpf,
      endereco: {
        cep,
        logradouro,
        bairro,
        uf,
      },
    };
    setCookie('user', user);
    setUsers(prevUsers => [...prevUsers, user]);
  };

  return (
    <div className={styles.containerRegister}>
      <form className={styles.contentForm} onSubmit={handleSubmit(onRegister)}>
        <h2>Cadastrar usuário</h2>

        <input type="text" placeholder="Nome" {...register('nome')} />
        <span>{errors.nome && 'Campo obrigatório'}</span>

        <input
          type="text"
          placeholder="Data de nascimento"
          {...register('birthDate')}
        />
        <span>{errors.birthDate && 'Campo obrigatório'}</span>

        <input type="text" placeholder="Cpf" {...register('cpf')} />
        <span>{errors.cpf && 'Campo obrigatório'}</span>

        <input
          type="text"
          placeholder="Cep"
          {...register('cep')}
          onChange={event => onChangeCep(event.target.value)}
        />
        <span>{errors.cep && 'Campo obrigatório'}</span>

        <input
          type="text"
          placeholder="Logradouro"
          {...register('logradouro')}
        />
        <span>{errors.logradouro && 'Campo obrigatório'}</span>

        <input type="text" placeholder="Bairro" {...register('bairro')} />
        <span>{errors.bairro && 'Campo obrigatório'}</span>

        <input type="text" placeholder="UF" {...register('uf')} />
        <span>{errors.uf && 'Campo obrigatório'}</span>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
