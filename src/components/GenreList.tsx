import useData from '../hooks/useData';

interface Genre {
    id: number;
    name: string;
}

function GenreList() {
    const { data, error, isLoading } = useData<Genre>("/genres");


    return (
        <>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            <ul>
                {data.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
        </>
    )
}

export default GenreList