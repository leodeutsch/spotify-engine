import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useLoginContext } from '../../context/Login';
import api from '../../service/api';
import ArrowLeft from '../../assets/left-arrow.png';
import { AlbumInformationContent, Artist, Content, Name, ReleaseDate, SubInfos, Header, Tracks } from './styles';
import Row from './Components/Row/row';

interface ParamsType {
  id: string;
}

interface AlbumType {
  images: Array<{ url: string }>;
  name: string;
  artists: Array<{ name: string }>;
  release_date: string;
  tracks: {
    items: Array<{}>;
  };
}

const AlbumInfo = () => {
  const [albumInfo, setAlbumInfo] = useState<AlbumType>();

  const history = useHistory();
  const { id } = useParams<ParamsType>();
  const { login } = useLoginContext();

  const handleGoBack = () => {
    history.push('/');
  };

  const handleGetAlbumInfo = async (id: string) => {
    const response = await api.get('/albums', { params: { ids: id }, headers: { Authorization: `Bearer ${login.token}` } });
    setAlbumInfo(response.data.albums[0]);
  };

  useEffect(() => {
    handleGetAlbumInfo(id);
  }, []);

  return (
    <>
      <Header>
        <button type="button" onClick={handleGoBack}>
          <img src={ArrowLeft} alt="Voltar" />
        </button>
      </Header>
      {albumInfo && (
        <Content>
          <AlbumInformationContent>
            <img src={albumInfo.images[0].url} alt="" />
            <div className="information">
              <Name>{albumInfo.name}</Name>
              <Artist>{albumInfo.artists.map(artist => artist.name).join(', ')}</Artist>
              <SubInfos>
                <ReleaseDate>{format(new Date(albumInfo.release_date), "dd 'de' MMMM 'de' yyyy", { locale: ptBr })}</ReleaseDate>
              </SubInfos>
            </div>
          </AlbumInformationContent>
          <Tracks>
            <h1>Tracks</h1>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Artistas</th>
                  <th>Duração</th>
                  <th>Ouvir</th>
                </tr>
              </thead>
              <tbody>
                {albumInfo.tracks.items.map(track => (
                  <Row track={track} />
                ))}
              </tbody>
            </table>
          </Tracks>
        </Content>
      )}
    </>
  );
};

export default AlbumInfo;
