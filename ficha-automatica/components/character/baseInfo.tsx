const BaseInfo = () => {
    return (
      <div className="flex flex-col gap-2 p-4 rounded-xl bg-gray-800 text-white w-full md:w-1/2">
        {/* Nome e Foto */}
        <div className="flex items-center gap-4">
          <img src="/placeholder-avatar.png" alt="Avatar" className="w-16 h-16 rounded-full" />
          <input type="text" placeholder="Nome do personagem" className="bg-gray-700 p-2 rounded" />
        </div>
  
        {/* Info principal */}
        <div className="grid grid-cols-2 gap-2">
          <input type="text" placeholder="Classe" />
          <input type="text" placeholder="Raça" />
          <input type="number" placeholder="Nível" />
          <input type="text" placeholder="Antecedente" />
        </div>
  
        {/* Iniciativa, XP, Inspiração, Proficiência */}
        <div className="grid grid-cols-2 gap-2">
          <input type="number" placeholder="Iniciativa" />
          <input type="number" placeholder="Proficiência" />
          <input type="number" placeholder="XP" />
          <input type="checkbox" /> Inspiração
        </div>
      </div>
    );
  };

export default BaseInfo; // <- ESSENCIAL!