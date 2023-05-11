import { useState } from 'react';
import ConfirmDialog from '../../components/ConfirmDialog';
import NewChatModal from '../../components/HomeChat/NewChatModal';
import { DropDownProps } from '../../types/chat';
import { useRouter } from 'next/dist/client/router';
import { deleteUser, getUserData } from '../../actions';

function ConfigDropdown(dropDownProps: DropDownProps) {
  const { getChatsData, userData, isOpen, setConfigOpen } = dropDownProps;

  const [delDialogIsOpen, setDelDialogIsOpen] = useState(false);
  const [newChatModalIsOpen, setNewChatModalIsOpen] = useState(false);

  const router = useRouter();

  const handleDeleteUser = () => {
    setDelDialogIsOpen(true);
    setConfigOpen(false);
  };

  const handleNewChatModal = () => {
    setNewChatModalIsOpen(true);
    setConfigOpen(false);
  };

  const handleConfirmDelete = () => {
    /* 
      : 
      1. Get current user data 
      2. Delete user 
    */
    getUserData()
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    deleteUser()
      .then((res) => router.push('/'))
      .catch((err) => console.log(err));
  };

  return (
    <div className={isOpen ? 'configDropdown scale1' : 'configDropdown'}>
      <ul>
        <li onClick={handleNewChatModal}>
          <div>Nuevo chat</div>
        </li>
        <li onClick={handleDeleteUser}>
          <div>Eliminar cuenta</div>
        </li>
      </ul>

      <NewChatModal
        isOpen={newChatModalIsOpen}
        setIsOpen={setNewChatModalIsOpen}
        userData={userData}
        getChatsData={getChatsData}
      />
      <ConfirmDialog
        title="Eliminar Usuario"
        text="¿Está seguro que desea eliminar la cuenta?"
        isOpen={delDialogIsOpen}
        handleCancel={setDelDialogIsOpen}
        handleOk={handleConfirmDelete}
      />
    </div>
  );
}

export default ConfigDropdown;
