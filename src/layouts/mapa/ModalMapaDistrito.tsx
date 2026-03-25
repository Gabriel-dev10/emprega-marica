import { Map as MapIcon, X } from 'lucide-react'
import { useState } from 'react'
import { MapaMarica } from './MapaMarica'

const MAPA_DISTRITO: Record<number, string> = {
  1: 'centro',
  2: 'ponta-negra',
  3: 'inoa',
  4: 'itaipuacu',
}

interface ModalMapaDistritoProps {
  onSelecionar: (value: string) => void
  customTrigger?: React.ReactNode
}

export function ModalMapaDistrito({ onSelecionar, customTrigger }: ModalMapaDistritoProps) {
  const [aberto, setAberto] = useState(false)

  function fechar() {
    setAberto(false)
  }

  function handleDistritoClick(numero: number) {
    onSelecionar(MAPA_DISTRITO[numero])
    fechar()
  }

  return (
    <>
      {customTrigger ? (
        <button
          type="button"
          onClick={() => setAberto(true)}
          className="cursor-pointer inline-block bg-transparent border-none p-0 text-left appearance-none"
        >
          {customTrigger}
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setAberto(true)}
          className="flex items-center gap-1.5 text-xs text-primary-400 hover:text-primary-300 transition-colors mt-1 ml-0.5"
        >
          <MapIcon size={13} />
          Não sei meu distrito — ver no mapa
        </button>
      )}

      {aberto && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md rounded-2xl">
          <button
            type="button"
            className="absolute inset-0"
            onClick={fechar}
            aria-label="Fechar modal"
          />
          <div className="bg-neutral-900 border border-white/15 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] w-full max-w-4xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div>
                <h2 className="text-white font-semibold text-xl">Selecione seu Distrito</h2>
                <p className="text-neutral-400 text-sm mt-1">
                  Clique na área correspondente ao seu bairro para selecionar automaticamente o
                  distrito.
                </p>
              </div>
              <button
                type="button"
                onClick={fechar}
                className="text-neutral-400 hover:text-white transition-colors p-2 rounded-xl hover:bg-white/10 ml-4 shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            <div className="px-3 py-3">
              <div className="bg-neutral-950 border border-white/10 rounded-2xl overflow-hidden ring-1 ring-white/5">
                <MapaMarica onDistritoClick={handleDistritoClick} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
