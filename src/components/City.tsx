import Plot from 'react-plotly.js';
interface CitiesProps {
    city: string;
    state: string;
    latitude: number;
    longitude: number;
    population: string;
    growth_from_2000_to_2013: string;
}

export function City(props : CitiesProps){

    const oldPopulation = parseFloat(props.population) - ((parseFloat(props.population) * parseFloat(props.growth_from_2000_to_2013)) / 100)
    const verifiedStatusPopulation = oldPopulation < parseFloat(props.population);
    const iframeSrc = `https://maps.google.com/maps?q=${props.latitude},${props.longitude}&hl=es;&output=embed`
    return (
        <>
        <div>
        <iframe src={iframeSrc} width="100%" height="300px" loading="lazy"></iframe>
        </div>
        <div className='context'>
            <div className='text'>
                <h1>{props.city}</h1>
                <p><b>State:</b> {props.state}</p>
                <p><b>Current Population:</b> {props.population}</p>
                <p><b>Growth from 2000 to 2013:</b> {props.growth_from_2000_to_2013}</p>
            </div>
            <Plot data={[
                    {type: 'scatter',
                    x: ['old', 'current'],
                    y: [oldPopulation,props.population],
                    marker: {
                        size: 15,
                        color: verifiedStatusPopulation ? ['rgb(240,68,68)','rgb(56,125,89)'] : ['rgb(56,125,89)', 'rgb(240,68,68)']
                    }}
                ]} layout = {{width: 400, height: 400, title: 'Population'}} />
        </div>
        </>
    )
}