import { useState } from 'react'

export default function AddAlbum() {
    const [album, setAlbum] = useState('')
    const [artist, setArtist] = useState('')
    const [year, setYear] = useState(1970)
    const handleSubmit = (e) => {
        e.preventDefault()
        //lets check to see that all data was entered: 
        if(!album || !artist) {
            alert('Please enter all infor')
            return 
        }
        const newAlbum = { artist, "album title": album, year }
        fetch('https://albums-api-cgl.web.app/albums', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAlbum)
        })
        .then(() => {
            //assume it worked...
            setAlbum('')
            setArtist('')
            setYear(1970)
        })
            .catch(alert)
    }
    return (
        <section className='add-album'>
            <h3>Add New Album</h3>
            <form onSubmit={handleSubmit}>
                <lable htmlFor="album">Album:
                    <input type="text" name="album" required
                        onChange={e => setAlbum(e.target.value)}
                        value={album} />
                </lable><br />
                <lable htmlFor="album">Artist:
                    <input type="text" name="artist" required
                        onChange={e => setArtist(e.target.value)}
                        value={artist} />
                </lable> <br />
                <lable htmlFor="album">Year:
                    <input type="number" name="year"
                        onChange={e => setYear(e.target.value)}
                        value={year} />
                </lable> <br />
                <input type='submit' value='Add Album' />

            </form>
        </section>
    )
}