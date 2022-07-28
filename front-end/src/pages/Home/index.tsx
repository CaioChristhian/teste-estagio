import { useEffect, useState } from 'react';
import ContactEditForm from '../../components/ContactEditForm';
import ContactForm from '../../components/ContactForm';
import EditContactModal from '../../components/EditContactModal';
import NewContactModal from '../../components/NewContactModal';
import { api } from '../../services/api';

import {
  Container, Header, ListContainer, Card,
  EditButton, DeleteButton,
  CancelButton, FooterModalHome
} from './styles';

interface IContactsState {
  id: string;
  name: string;
  email: string;
  phone: string;
  to_char: string;
  image: string;
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [contacts, setContacts] = useState<IContactsState[]>([])
  const [actualId, setActualId] = useState("")

  useEffect(() => {
		api.get('/mycontact')  
		.then(response => {  
			setContacts(response.data) 
	})
	}, [])

  const handleDelete = async (index: string) => {
    await api.delete(`/mycontact/${index}`).then(() => {
      window.alert('Contato deletado com sucesso')

      window.location.reload()
    })
  }

  return (
    <Container>
      <Header>
        <strong>{contacts.length} contatos</strong>
        <button onClick={() => setIsOpen(true)} type='button'>Novo Contato</button>
      </Header>

      <ListContainer>
        {contacts.map(contact => {
          return (
            <Card key={contact.id}>
              <img src={contact.image} alt="" />
              <div className="info">
                <div className="contact-name">
                  <strong>{contact.name}</strong>
                </div>
                <span>{contact.email}</span>
                <span>{contact.phone}</span>
                <span>{contact.to_char}</span>
              </div>

              <div className="actions">
                <EditButton onClickCapture={() => setActualId(contact.id)} onClick={() => setIsOpenEdit(true)} className='edit-button' type="button">
                  Editar
                </EditButton>
                <DeleteButton onClick={() => handleDelete(contact.id)} className='delete-button' type="button">
                  Excluir
                </DeleteButton>
              </div>
            </Card>
          )
        })}
      </ListContainer>
    
      <NewContactModal isOpen={isOpen} close={() => setIsOpen(false)}>
          <h1>Novo Contato</h1>
          
          <ContactForm closeModal={() => setIsOpen(false)} buttonLabel="Salvar" />

          <FooterModalHome>
            <CancelButton onClick={() => setIsOpen(false)} type="button">
              Cancelar
            </CancelButton>
          </FooterModalHome>
      </NewContactModal>
        
      <EditContactModal isOpenEdit={isOpenEdit} closeEdit={() => setIsOpenEdit(false)}>
        <h1>Editar Contato</h1>
      
        <ContactEditForm index={actualId}  closeModal={() => setIsOpenEdit(false)} buttonLabel="Salvar" />

        <FooterModalHome>
          <CancelButton onClick={() => setIsOpenEdit(false)} type="button">
            Cancelar
          </CancelButton>
        </FooterModalHome>
      </EditContactModal>
    </Container>
  );
}
