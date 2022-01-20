import { COUNTRY_CODE_MAPPING } from '../data/country-mapping.js';

export default interface BookingsCountryData {
    id: string
    display_code: string;
    reference_value: BookingsData;
    value: BookingsData;
}

interface BookingsData {
    nr_of_rooms: number;
    revenue: number;
}