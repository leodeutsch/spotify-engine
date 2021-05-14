import React, { useState } from 'react';
import Search from '../../components/Search';
import { Container } from './styles';
import { AlbumType } from './HomeTypes';
import Row from './components/Row/row';

const Home = () => {
  const [albums, setAlbums] = useState<AlbumType[]>([]);

  const handleGetApi = async (data: any) => {
    setAlbums(data);
  };

  return (
    <Container>
      <Search responseData={handleGetApi} />
      <table>
        <thead>
          <tr>
            <th>Capa</th>
            <th>Album</th>
            <th>Artista</th>
            <th>TotalFaixa</th>
          </tr>
        </thead>
        <tbody>
          {albums.map(album => (
            <Row album={album} />
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Home;
