import { twJoin } from "tailwind-merge";

interface StateBenefitProps {
  type: 'waiting' | 'sent' | 'delivered'
}

const STATE_VARIANT = {
  waiting: 'bg-red-50 text-red-700 border border-red-200',
  sent: 'text-yellow-700 border border-yellow-500',
  delivered: 'bg-green-50 text-green-700 border border-green-200'
}

export function StateBenefit ({ type }: StateBenefitProps) {
  return (
    <span className={twJoin(
      "rounded p-1  font-medium text-xs",
      STATE_VARIANT[type]
    )}>
      {type === 'delivered' ? 'Entregue' : type === 'sent' ? 'Enviado' : 'Aguardando'}
    </span>
  );
}
