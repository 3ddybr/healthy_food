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

export function Register() {
  const schema = yup.object().shape({
    nome: yup.string().required(),
    birthDate: yup.string().required(),
    cpf: yup.string().max(14).required(),
    cep: yup.string().max(8).required(),
    logradouro: yup.string().required(),
    bairro: yup.string().required(),
    uf: yup.string().required(),
  });

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
  }: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any) => {
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
    alert('Usu??rio cadastrado com sucesso!');
  };

  return (
    <div className={styles.containerRegister}>
      <form className={styles.contentForm} onSubmit={handleSubmit(onRegister)}>
        <h2>Cadastrar usu??rio</h2>

        <input type="text" placeholder="Nome" {...register('nome')} />
        <span>{errors.nome && 'Campo obrigat??rio'}</span>

        <input
          type="text"
          placeholder="Data de nascimento"
          {...register('birthDate')}
        />
        <span>{errors.birthDate && 'Campo obrigat??rio'}</span>

        <input type="text" placeholder="Cpf" {...register('cpf')} />
        <span>{errors.cpf && 'Campo obrigat??rio'}</span>
        <span>{errors.cpf?.type && 'Tipo invalido apenas 11 n??meros'}</span>
        <span>{errors.cpf?.message}</span>

        <input
          type="text"
          placeholder="Cep (apenas n??meros)"
          {...register('cep')}
          onChange={event => onChangeCep(event.target.value)}
        />
        <span>{errors.cep && 'Campo obrigat??rio'}</span>
        <span>{errors.cep?.type && 'Tipo invalido apenas 8 n??meros'}</span>

        <input
          type="text"
          placeholder="Logradouro"
          {...register('logradouro')}
        />
        <span>{errors.logradouro && 'Campo obrigat??rio'}</span>

        <input type="text" placeholder="Bairro" {...register('bairro')} />
        <span>{errors.bairro && 'Campo obrigat??rio'}</span>

        <input type="text" placeholder="UF" {...register('uf')} />
        <span>{errors.uf && 'Campo obrigat??rio'}</span>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
