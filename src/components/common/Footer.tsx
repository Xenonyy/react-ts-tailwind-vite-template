import { ProjectDetails } from '../../enums/projectDetails';

export const Footer = () => {
  return (
    <footer className="h-16 bg-lime-400 justify-around items-center flex flex-row">
      <h1 className="text-white font-bold drop-shadow-md">{}</h1>
      <span className="text-white font-bold drop-shadow-md">{`Version: ${ProjectDetails.version}`}</span>
    </footer>
  );
};
