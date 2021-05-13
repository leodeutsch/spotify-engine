import React, {useState } from 'react'
import Search from '../../components/Search'
import { Container } from './styles'
import { AlbumType } from './HomeTypes'

const Home = () => {
  const [albums, setAlbums] = useState<AlbumType[]>([]);

  const handleGetApi = async (data: any) => {
    console.log(data)
    setAlbums(data);
  }

  return (
    <Container>
      <Search responseData={handleGetApi} />
      <table>
        <thead>
          <tr>
            <th>img</th>
            <th>Album</th>
            <th>Artista</th>
            <th>TotalFaixa</th>
          </tr>
        </thead>
        <tbody>
          {albums.map(album => (
            <tr>
              <td>
                <img src={album.images[0].url} alt={album.name} />
              </td>
              <td>{album.name}</td>
              <td>{album.artists.map(artist => artist.name).join(', ')}</td>
              <td>{album.total_tracks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default Home;
