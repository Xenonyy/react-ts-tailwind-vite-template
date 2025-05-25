import { ProjectDetails } from '../../enums/projectDetails';

export const Header = () => {
  return (
    <header className="h-16 bg-lime-400 justify-around items-center flex flex-row">
      <h1 className="text-white font-bold drop-shadow-md">{ProjectDetails.name}</h1>
      <span className="text-white font-bold drop-shadow-md">{'Armand Gonda'}</span>
    </header>
  );
};
