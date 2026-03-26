import { ChevronDown, MapPin, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../../shared/ui/button";
import { DistrictSelect } from "../../../../shared/ui/district-select";

export function JobSearchForm() {
  const [distrito, setDistrito] = useState("");

  return (
    <form className="w-full relative" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-0 bg-neutral-900 border border-neutral-800 rounded-xl p-2">
        <div className="flex items-center flex-1 w-full px-4 py-2 hover:bg-neutral-800/50 rounded-lg transition-colors group">
          <Search
            size={20}
            className="text-text-subtle mr-3 shrink-0 group-focus-within:text-text-primary transition-colors"
          />
          <input
            type="text"
            placeholder="Qual vaga você está buscando?"
            className="w-full bg-transparent text-text-default placeholder:text-text-subtle text-sm md:text-base focus:outline-none"
          />
        </div>

        <div className="hidden md:block w-px h-8 bg-neutral-800 shrink-0 mx-2" />

        <div className="flex items-center flex-1 w-full px-4 py-2 hover:bg-neutral-800/50 rounded-lg transition-colors relative group">
          <MapPin
            size={20}
            className="text-text-subtle mr-3 shrink-0 group-focus-within:text-text-primary transition-colors"
          />

          <DistrictSelect
            className="w-full bg-transparent text-text-default text-sm md:text-base focus:outline-none appearance-none cursor-pointer [&>option]:bg-neutral-900"
            value={distrito}
            onChange={setDistrito}
          />

          <ChevronDown
            size={16}
            className="text-text-subtle pointer-events-none absolute right-4"
          />
        </div>

        <Button
          type="submit"
          className="w-full md:w-auto px-8 py-3 md:py-3.5 mt-2 md:mt-0 md:ml-2 rounded-lg"
        >
          Buscar Vagas
        </Button>
      </div>
    </form>
  );
}
