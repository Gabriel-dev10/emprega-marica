import { ChevronDown, MapPin, Search } from 'lucide-react'

import { Button } from '../../../../shared/ui/button'

export function JobSearchForm() {
  return (
    <div className="w-full max-w-4xl bg-neutral-900/90 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/5 border border-neutral-800/20 p-2 sm:p-3 mb-10">
      <form className="flex flex-col md:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
        <div className="flex-1 relative group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary-600 transition-colors">
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder="Qual vaga você está buscando?"
            className="w-full h-12 pl-12 pr-4 bg-transparent rounded-xl text-text-default placeholder:text-text-subtle focus:outline-none focus:bg-neutral-800/10 transition-colors"
          />
        </div>
        <div className="hidden md:block w-px bg-white/10 my-2" />
        <div className="md:w-1/3 relative group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary-600 transition-colors">
            <MapPin size={20} />
          </div>
          <select
            className="w-full h-12 pl-12 pr-10 appearance-none bg-transparent rounded-xl text-text-default focus:outline-none focus:bg-neutral-800/10 cursor-pointer transition-colors"
            defaultValue=""
          >
            <option value="" disabled className="bg-neutral-950 text-text-default">
              Qual distrito?
            </option>
            <option value="centro" className="bg-neutral-950 text-text-default">
              Centro (1º Distrito)
            </option>
            <option value="ponta-negra" className="bg-neutral-950 text-text-default">
              Ponta Negra (2º Distrito)
            </option>
            <option value="inoa" className="bg-neutral-950 text-text-default">
              Inoã (3º Distrito)
            </option>
            <option value="itaipuacu" className="bg-neutral-950 text-text-default">
              Itaipuaçu (4º Distrito)
            </option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
            <ChevronDown size={14} />
          </div>
        </div>
        <div className="mt-2 md:mt-0">
          <Button
            size="lg"
            className="w-full md:w-auto h-12 px-8 rounded-xl shadow-lg shadow-primary-500/20"
          >
            Buscar Vagas
          </Button>
        </div>
      </form>
    </div>
  )
}
