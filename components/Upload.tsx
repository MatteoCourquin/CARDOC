import clsx from 'clsx';
import { IconBike, IconCar, IconClose } from './Icons';
import { useState } from 'react';
import {
  VEHICLE_BRAND_BIKE,
  VEHICLE_BRAND_CAR,
  VEHICLE_COLOR,
  VEHICLE_ENERGY,
  VEHICLE_TYPE,
  useCreateVehicle,
} from '@/services/api.vehicles';

const Upload = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const createVehicle = useCreateVehicle();
  // const [image, setImage] = useState<File | null>(null);
  const [vehicleData, setVehicleData] = useState({
    vehicle_name: '',
    type: VEHICLE_TYPE.NA,
    brand: VEHICLE_BRAND_CAR.NA,
    model: '',
    mileage: 0,
    color: VEHICLE_COLOR.NA,
    energy: VEHICLE_ENERGY.NA,
    date_of_first_registration: parseInt(new Date().toISOString()),
    date_of_purchase: parseInt(new Date().toISOString()),
    number_of_owner: 0,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setVehicleData({
      ...vehicleData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createVehicle.mutate(vehicleData);
  };

  // const handleImageChange = (e: any) => {
  //   setImage(e.target.files[0]);
  // };

  const getBrands = () => {
    switch (vehicleData.type) {
      case VEHICLE_TYPE.CAR:
        return Object.values(VEHICLE_BRAND_CAR);
      case VEHICLE_TYPE.BIKE:
        return Object.values(VEHICLE_BRAND_BIKE);
      default:
        return [];
    }
  };
  return (
    <div
      className={clsx(
        isOpen ? 'visible' : 'invisible',
        'fixed inset-0 z-[99] flex h-screen w-screen items-center justify-center transition-[visibility]',
      )}
    >
      <div
        className={clsx(
          isOpen ? 'opacity-100' : 'opacity-0',
          'absolute inset-0 h-full w-full cursor-pointer bg-[#00001023] transition-opacity',
        )}
        onClick={() => setIsOpen(!isOpen)}
      ></div>
      <div
        className={clsx(
          isOpen ? 'scale-100' : 'scale-0',
          'h-[calc(100%-60px)] w-[calc(100%-60px)] rounded-xl bg-white p-10 transition-transform',
        )}
      >
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <h5>Ajouter un véhicule</h5>
            <IconClose onClick={() => setIsOpen(!isOpen)} />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="mb-2 block font-bold text-gray-700">
                Vehicle Name:
                <input
                  type="text"
                  name="vehicle_name"
                  value={vehicleData.vehicle_name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="mb-2 block font-bold text-gray-700">
                Type:
                <div className="mt-1 flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="type"
                      value={VEHICLE_TYPE.CAR}
                      checked={vehicleData.type === VEHICLE_TYPE.CAR}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <div
                      className={clsx(
                        'flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border transition-colors',
                        vehicleData.type === VEHICLE_TYPE.CAR
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-700',
                      )}
                    >
                      <IconCar isActive={vehicleData.type === VEHICLE_TYPE.CAR} />
                    </div>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="type"
                      value={VEHICLE_TYPE.BIKE}
                      checked={vehicleData.type === VEHICLE_TYPE.BIKE}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <div
                      className={clsx(
                        'flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border transition-colors',
                        vehicleData.type === VEHICLE_TYPE.BIKE
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-700',
                      )}
                    >
                      <IconBike isActive={vehicleData.type === VEHICLE_TYPE.BIKE} />
                    </div>
                  </label>
                </div>
              </label>
            </div>
            <div className="mb-4">
              <label className="mb-2 block font-bold text-gray-700">
                Brand:
                <select
                  name="brand"
                  value={vehicleData.brand}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  {getBrands().map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="mb-4">
              <label className="mb-2 block font-bold text-gray-700">
                Model:
                <input
                  type="text"
                  name="model"
                  value={vehicleData.model}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="mb-2 block font-bold text-gray-700">
                Mileage:
                <input
                  type="number"
                  name="mileage"
                  value={vehicleData.mileage}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="mb-2 block font-bold text-gray-700">
                Color:
                <select
                  name="color"
                  value={vehicleData.color}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  {Object.values(VEHICLE_COLOR).map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="mb-4">
              <label className="mb-2 block font-bold text-gray-700">
                Energy:
                <select
                  name="energy"
                  value={vehicleData.energy}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  {Object.values(VEHICLE_ENERGY).map((energy) => (
                    <option key={energy} value={energy}>
                      {energy}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="mb-4">
              <label className="mb-2 block font-bold text-gray-700">
                Date of First Registration:
                <input
                  type="date"
                  name="date_of_first_registration"
                  value={
                    new Date(vehicleData.date_of_first_registration).toISOString().split('T')[0]
                  }
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="mb-2 block font-bold text-gray-700">
                Date of Purchase:
                <input
                  type="date"
                  name="date_of_purchase"
                  value={new Date(vehicleData.date_of_purchase).toISOString().split('T')[0]}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="mb-2 block font-bold text-gray-700">
                Number of Owners:
                <input
                  type="number"
                  name="number_of_owner"
                  value={vehicleData.number_of_owner}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
            </div>
            {/* <div>
              <label>
                Image:
                <input type="file" name="image" onChange={handleImageChange} />
              </label>
            </div> */}
            <button
              type="submit"
              className="w-full rounded-md bg-blue-500 px-4 py-2 font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
