import { useState, useEffect } from 'react'
import AlbumCard from './AlbumCard'

export default function AlbumList({ toggle }) {
    const [albums, setAlbums] = useState()
    useEffect(() => {
        fetch('https://albums-api-cgl.web.app/albums')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAlbums(data)
            })
            .catch(alert)

    }, [toggle])
    return (
        <main className='album-list'>

            {!albums
                ? <p>Loading...</p>
                : albums.map(album => <AlbumCard key={album.albumId} album={album} />)
            }
        </main>
    )
}