import { useState, useEffect } from 'react'

export default function AlbumList() {
    const [albums, setAlbums] = useState()
    useEffect(() => {
        fetch('https://albums-api-cgl.web.app/albums')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAlbums(data)
        })
        .catch(alert)

    }, [])
    return (
    <main className='album-list'>
        
        {!albums
        ? <p>Loading...</p>
        : albums.map(album => (
            <div className='album' key={album.albumId}>
            <h3>{album.album}</h3>
            <p>{album.artist}, {album["album title"]}</p>
            </div>
        ))
        }
    </main>
    )
}