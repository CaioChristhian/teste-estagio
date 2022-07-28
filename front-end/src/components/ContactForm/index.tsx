import { useCallback, useState,  } from 'react';

import FormGroup from '../FormGroup';
import Input from '../Input';
import { api } from '../../services/api';
import { Form, ButtonContainer, Button } from './styles';

interface ContactFormProps {
  buttonLabel: string;
  closeModal: () => void;
}

interface IFormState {
  name: string;
  email: string;
  phone: string;
  date_birthday: string;
  image: string;
}

export default function ContactForm({ buttonLabel, closeModal }: ContactFormProps) {
  const [formState, setFormState] = useState<IFormState>({
    name: "",
    email: "",
    phone: "",
    date_birthday: "",
    image: "",
  })

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    api.post('/mycontact', {
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      date_birthday: formState.date_birthday,
      image: formState.image
    })

    window.alert("Contato cadastrado")
    closeModal()
    window.location.reload()
  }, [formState, closeModal])

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          placeholder="Nome"
          required
          onChange={(event => setFormState({
            ...formState,
            name: event.currentTarget?.value || "",
          }))}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="E-mail"
          required
          onChange={(event => setFormState({
            ...formState,
            email: event.currentTarget?.value || "",
          }))}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          required
          onChange={(event => setFormState({
            ...formState,
            phone: event.currentTarget?.value || "",
          }))}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="date"
          placeholder="Data de aniversário"
          required
          onChange={(event => setFormState({
            ...formState,
            date_birthday: event.currentTarget?.value || "",
          }))}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="url"
          placeholder="Insira o URL de uma imagem"
          required
          onChange={(event => setFormState({
            ...formState,
            image: event.currentTarget?.value || "",
          }))}
        />
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}