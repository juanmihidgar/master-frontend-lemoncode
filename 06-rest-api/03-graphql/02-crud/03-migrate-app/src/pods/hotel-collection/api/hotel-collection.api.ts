import Axios from 'axios';
import { graphQLClient } from 'core/api';
import { HotelEntityApi } from './hotel-collection.api-model';

const url = '/api/hotels';

interface GetHotelCollectionResponse {
  hotels: HotelEntityApi[];
}

export const getHotelCollection = async (): Promise<HotelEntityApi[]> => {
  const query = `
    query {
      hotels {
        id
        name
        shortDescription
        hotelRating
        address1
        thumbNailUrl
      }
    }
  `;
  const { hotels } = await graphQLClient.request<GetHotelCollectionResponse>(
    query
  );
  return hotels;
};

interface DeleteHotelResponse {
  deleteHotel: boolean;
}

export const deleteHotel = async (id: string): Promise<boolean> => {
  const query = `
    mutation {
      deleteHotel(id: "${id}")
    }
  `;
  const { deleteHotel } = await graphQLClient.request<DeleteHotelResponse>(
    query
  );
  return deleteHotel;
};
