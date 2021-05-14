import React from 'react';
import { useHistory } from 'react-router-dom';

const Row = ({ album }: any) => {
  const history = useHistory();

  const handleGoToInfo = () => {
    history.push(`/${album.id}`);
  };

  return (
    <tr onClick={handleGoToInfo}>
      <td data-th="Cover">
        <img src={album.images[0].url} alt={album.name} />
      </td>
      <td data-th="Album">{album.name}</td>
      <td data-th="Artista">{album.artists.map((artist: { name: any }) => artist.name).join(', ')}</td>
      <td data-th="Total de Músicas">{album.total_tracks}</td>
    </tr>
  );
};

export default Row;
