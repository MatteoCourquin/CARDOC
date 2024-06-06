import axios, { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';

export enum VEHICLE_TYPE {
  CAR = 'Voiture',
  BIKE = 'Moto',
}

export enum VEHICLE_BRAND_CAR {
  RENAULT = 'Renault',
  PEUGEOT = 'Peugeot',
  CITROEN = 'Citroën',
  BMW = 'BMW',
  MERCEDES = 'Mercedes',
  AUDI = 'Audi',
  VOLKSWAGEN = 'Volkswagen',
  TOYOTA = 'Toyota',
  FORD = 'Ford',
  NISSAN = 'Nissan',
  KIA = 'Kia',
  HYUNDAI = 'Hyundai',
  SKODA = 'Skoda',
  SEAT = 'Seat',
  VOLVO = 'Volvo',
  HONDA = 'Honda',
  FIAT = 'Fiat',
  SUZUKI = 'Suzuki',
  MAZDA = 'Mazda',
  JEEP = 'Jeep',
  LAND_ROVER = 'Land Rover',
  MINI = 'Mini',
  JAGUAR = 'Jaguar',
  LEXUS = 'Lexus',
  PORSCHE = 'Porsche',
  ALFA_ROMEO = 'Alfa Romeo',
  DS = 'DS',
  SMART = 'Smart',
  TESLA = 'Tesla',
  MASERATI = 'Maserati',
  BENTLEY = 'Bentley',
  LAMBORGHINI = 'Lamborghini',
  ASTON_MARTIN = 'Aston Martin',
  LOTUS = 'Lotus',
  BUGATTI = 'Bugatti',
  ROLLS_ROYCE = 'Rolls Royce',
  MCLAREN = 'McLaren',
  FERRARI = 'Ferrari',
  OTHER = 'Autre',
}

export enum VEHICLE_BRAND_BIKE {
  YAMAHA = 'Yamaha',
  SUZUKI = 'Suzuki',
  KAWASAKI = 'Kawasaki',
  HONDA = 'Honda',
  DUCATI = 'Ducati',
  APRILIA = 'Aprilia',
  TRIUMPH = 'Triumph',
  HARLEY_DAVIDSON = 'Harley Davidson',
  KTM = 'KTM',
  BUELL = 'Buell',
  MV_AGUSTA = 'MV Agusta',
  MOTO_GUZZI = 'Moto Guzzi',
  VICTORY = 'Victory',
  INDIAN = 'Indian',
  ZERO = 'Zero',
  OTHER = 'Autre',
}

export enum VEHICLE_COLOR {
  WHITE = 'Blanc',
  BLACK = 'Noir',
  GREY = 'Gris',
  RED = 'Rouge',
  BLUE = 'Bleu',
  GREEN = 'Vert',
  YELLOW = 'Jaune',
  ORANGE = 'Orange',
  PURPLE = 'Violet',
  PINK = 'Rose',
  BROWN = 'Marron',
  SILVER = 'Argent',
  GOLD = 'Or',
  BRONZE = 'Bronze',
  OTHER = 'Autre',
}

export enum VEHICLE_ENERGY {
  GASOLINE = 'Essence',
  DIESEL = 'Diesel',
  ELECTRIC = 'Electrique',
  HYBRID = 'Hybride',
  OTHER = 'Autre',
}

export interface Vehicle {
  vehicle_name: string;
  type: VEHICLE_TYPE;
  brand: VEHICLE_BRAND_CAR | VEHICLE_BRAND_BIKE;
  model: string;
  mileage: number;
  color: VEHICLE_COLOR;
  energy: VEHICLE_ENERGY;
  date_of_first_registration: number;
  date_of_purchase: number;
  number_of_owner: number;
}

const instance = axios.create({
  baseURL: 'https://0hfr9uof24.execute-api.eu-west-1.amazonaws.com/Prod/',
});

const requestInterceptor = (config: any) => config;
const requestErrorInterceptor = (error: any) => Promise.reject(error);

instance.interceptors.request.use(requestInterceptor, requestErrorInterceptor);
axios.interceptors.request.use(requestInterceptor, requestErrorInterceptor);

// // ========= GET FEATURES =========
// // ================================
// const getFeatures = async () => {
//   try {
//     const response = await instance.get<Feature[]>('/features');
//     return response.data;
//   } catch (error: any) {
//     console.error('Error fetching features:', error.message);
//     throw error;
//   }
// };
// export const useGetFeaturesQuery = () => {
//   return useQuery({
//     queryKey: ['features'],
//     queryFn: getFeatures,
//   });
// };

// // ========= PUT FEATURES =========
// // ================================
// const putFeature = async (data: Omit<Feature, 'lastUsage'>) => {
//   const featureData = {
//     featureName: data.featureName,
//     description: data.description,
//     createdAt: data.createdAt,
//     createdBy: data.createdBy,
//     dev: data.dev,
//     prod: data.prod,
//   };

//   try {
//     const response: AxiosResponse = await instance.put(
//       '/features',
//       featureData
//     );
//     return response.data;
//   } catch (error: any) {
//     console.error('Error updating feature:', error.message);
//     throw error;
//   }
// };
// export const useUpdateFeature = () => {
//   const { dismissToast, addToast } = useToast();
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: putFeature,
//     onMutate: async (updatedFeature) => {
//       addToast(LOADER.UPDATE, 'loader');
//       await queryClient.cancelQueries({ queryKey: ['features'] });

//       const previousAllFeatures = queryClient.getQueryData(['features']);

//       queryClient.setQueryData(['features'], (old: Feature[]) => {
//         return old.map((feature) =>
//           feature.featureName === updatedFeature.featureName
//             ? updatedFeature
//             : feature
//         );
//       });

//       return { previousAllFeatures };
//     },
//     onSuccess: () => {
//       addToast(INFO.UPDATE, 'info');
//     },
//     onError: (error) => {
//       console.error(error);
//       addToast(ERROR.UPDATE, 'error');
//     },
//     onSettled: () => {
//       dismissToast(2000);
//       setTimeout(() => {
//         queryClient.invalidateQueries({
//           queryKey: ['features'],
//         });
//       }, 200);
//     },
//   });
// };

// ========= POST VEHICLE =========
// =================================
const postVehicle = async (data: Vehicle) => {
  const vehicleData = {
    vehicle_name: data.vehicle_name,
    type: data.type,
    brand: data.brand,
    model: data.model,
    mileage: data.mileage,
    color: data.color,
    energy: data.energy,
    date_of_first_registration: data.date_of_first_registration,
    date_of_purchase: data.date_of_purchase,
    number_of_owner: data.number_of_owner,
  };

  try {
    const response: AxiosResponse = await instance.post('/vehicles', vehicleData);
    return response.data;
  } catch (error: any) {
    console.error('Error posting Vehicles:', error.message);
    throw error;
  }
};
export const useCreateVehicle = () => {
  return useMutation({
    mutationFn: postVehicle,
    onError: (error) => {
      console.error('ERROR' + error);
    },
  });
};

// // ========= DELETE FEATURES =========
// // ===================================
// const deleteFeature = async (featureName: string) => {
//   try {
//     const response: AxiosResponse = await instance.delete('/features', {
//       data: { featureName },
//     });
//     return response.data;
//   } catch (error: any) {
//     console.error('Error deleting feature:', error.message);
//     throw error;
//   }
// };
// export const useDeleteFeature = () => {
//   const { dismissToast, addToast } = useToast();
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: deleteFeature,
//     onMutate: () => {
//       addToast(LOADER.DELETE, 'loader');
//     },
//     onSuccess: () => {
//       addToast(INFO.DELETE, 'info');
//     },
//     onError: (error) => {
//       console.error(error);
//       addToast(ERROR.DELETE, 'error');
//     },
//     onSettled: () => {
//       dismissToast(2000);
//       queryClient.invalidateQueries({ queryKey: ['features'] });
//     },
//   });
// };
