import ServicesCard from '@/components/services/ServicesCard'
import { ChartColumnBig, ChartNoAxesCombined, DollarSign, HandCoins, ShieldCheck, TrendingUp, Wallet } from 'lucide-react'
import React from 'react'

export default function ServicesPage() {
    
    return (
        <div>
            <div className='flex flex-col '>
                <p className='text-[#183657] font-extrabold text-7xl border-t-2 border-black/50 w-fit mx-auto p-8' >Nuestros servicios</p>
                <p className='text-2xl gap-6 text-[#3A3A3A] opacity-90 mt-8 text-center'>Tenemos una amplia gama de servicios para ayudarte a alcanzar tus metas financieras</p>
                <div className='flex gap-8 justify-center flex-wrap mt-16'>
                    <ServicesCard
                        icon={<TrendingUp className='size-full' strokeWidth={1.8} />}
                        title="Planificacion Financiera"
                        description="Desarrolla un plan financiero personalizado para el futuro"
                    />


                    <ServicesCard
                        icon={<HandCoins className='size-full' strokeWidth={1.8} />}
                        title="Inversiones"
                        description="Optimiza tu cartera con nuestras estrategias de inversion"
                    />
                    <ServicesCard
                        icon={<Wallet className='size-full' strokeWidth={1.8} />}
                        title="Gestion de Patrimonio"
                        description="Protege y haz crecer tu patrimonio con nuestras ayuda"
                    />
                    <ServicesCard
                        icon={<ShieldCheck className='size-full' strokeWidth={1.8} />}
                        title="Planificacion de Retiro"
                        description="Garantiza un retiro cómodo con nuestras estrategias"
                    />
                </div>
            </div>
        </div>
    )
}
