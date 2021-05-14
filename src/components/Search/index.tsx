import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoginContext } from '../../context/Login';
import api from '../../service/api';
import { Form } from './styles';
import { SearchProps, FormDataType, ApiGetType } from './search.types';

const Search = (props: SearchProps) => {
  const { login } = useLoginContext();
  const { responseData } = props;
  const { handleSubmit, register } = useForm();

  const handleSubmitForm = async (formData: FormDataType) => {
    const { data } = await api.get<ApiGetType>('search', {
      params: { q: formData.search, type: 'album', limit: 10 },
      headers: { Authorization: `Bearer ${login.token}` },
    });
    return responseData(data.albums.items);
  };

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <input type="text" placeholder="Buscar" {...register('search')} />
      <button type="submit">Buscar</button>
    </Form>
  );
};

export default Search;
