export default function AlbumCard({ album }) {
    return (
        <div className='album'>
            <h3>{album.album}</h3>
            <p>{album.artist}, {album["album title"]}</p>
        </div>
    )
}