import BookingsCountryData from "./BookingsCountryData";


export default interface CountryListProps {
    title: string;
    data: BookingsCountryData[];
    width?: string;
}