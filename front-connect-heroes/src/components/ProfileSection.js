import React, { useEffect, useState } from 'react';

const ProfileSection = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        console.log(authToken)
        const response = await fetch('http://127.0.0.1:8000/profile/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${authToken}`,
            },
        });
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfileData();
  }, []);

  if (!profileData) {
    return <div>Carregando...</div>;
  }

  const { background_image, avatar, user, connections } = profileData;

  return (
    <section className="profile-section">
      {/* Imagem de fundo */}
      <img src={background_image} alt="Imagem de fundo" className="bg-profile"/>
      {/* Imagem de perfil */}
      <img src={avatar} alt="Imagem de perfil" className="img-profile" />
      {/* Nome de usuário */}
      <div>Nome de usuário: {user.username}</div>
      {/* Número de conexões */}
      <div>Número de conexões: {connections.length}</div>
      {/* Opção para ir até as publicações */}
      <button>Ir até as publicações</button>
      {/* Opção para ir até os vídeos */}
      <button>Ir até os vídeos</button>
    </section>
  );
};

export default ProfileSection;
