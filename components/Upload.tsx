import clsx from 'clsx';
import { IconClose } from './Icons';
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
  const [vehicleData, setVehicleData] = useState({
    vehicle_name: '',
    type: '',
    brand: '',
    model: '',
    mileage: '',
    color: '',
    energy: '',
    date_of_first_registration: '',
    date_of_purchase: '',
    number_of_owner: '',
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
    console.log(vehicleData);
  };

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
          'h-11/12 w-11/12 rounded-xl bg-white p-10 transition-transform',
        )}
      >
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <h5>Ajouter un véhicule</h5>
            <IconClose onClick={() => setIsOpen(!isOpen)} />
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Vehicle Name:
                <input
                  type="text"
                  name="vehicle_name"
                  value={vehicleData.vehicle_name}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Type:
                <select name="type" value={vehicleData.type} onChange={handleChange}>
                  {Object.values(VEHICLE_TYPE).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label>
                Brand:
                <select name="brand" value={vehicleData.brand} onChange={handleChange}>
                  {getBrands().map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label>
                Brand:
                <input type="text" name="brand" value={vehicleData.brand} onChange={handleChange} />
              </label>
            </div>
            <div>
              <label>
                Model:
                <input type="text" name="model" value={vehicleData.model} onChange={handleChange} />
              </label>
            </div>
            <div>
              <label>
                Mileage:
                <input
                  type="number"
                  name="mileage"
                  value={vehicleData.mileage}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Color:
                <select name="color" value={vehicleData.color} onChange={handleChange}>
                  {Object.values(VEHICLE_COLOR).map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label>
                Energy:
                <select name="energy" value={vehicleData.energy} onChange={handleChange}>
                  {Object.values(VEHICLE_ENERGY).map((energy) => (
                    <option key={energy} value={energy}>
                      {energy}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label>
                Date of First Registration:
                <input
                  type="date"
                  name="date_of_first_registration"
                  value={vehicleData.date_of_first_registration}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Date of Purchase:
                <input
                  type="date"
                  name="date_of_purchase"
                  value={vehicleData.date_of_purchase}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Number of Owners:
                <input
                  type="number"
                  name="number_of_owner"
                  value={vehicleData.number_of_owner}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
