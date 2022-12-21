import { useState,useEffect } from 'react';
import { useQuery } from 'react-query'
import { City } from './City';
import { api } from '../services/api';

interface CitiesProps {
    rank: number;
    city: string;
    latitude: number;
    longitude: number;
    state: string;
    population: string;
    growth_from_2000_to_2013: string;
}

export function Dashboard() {
    const [values, setValues] = useState<CitiesProps[]>([])
    const [options, setOptions] = useState<CitiesProps[]>([])

    const { isLoading, error, data } = useQuery<CitiesProps[]>(
        'cities', 
        async () => {
            const response = await api.get(`cities.json`);
            setValues(response.data)
            return response.data;
        },
        {
            staleTime: 1000 * 5
        }
    )

    function handleCities(value: string) {
        const citites = values.filter(res => res.city == value)
        setOptions(citites)
    }

    return (
    <>
        <select id='teste' onChange={(e)=>handleCities(e.target.value)}>
            <option>Select city</option>
            {
                values.map((opts, i) => <option>{opts.city}</option>)
            }
        </select>
        {options.map(response => (
            <City 
                key={response.rank} 
                city={response.city} 
                state={response.state} 
                latitude={response.latitude}
                longitude={response.longitude}
                population={response.population}
                growth_from_2000_to_2013={response.growth_from_2000_to_2013}/>
            ))}
    </>
    )
  }

