import React from 'react';

export default function InvestmentSection() {
  return (
    <section className="investment-section">
      <img src="/videos/rodape.png" alt="" className="investment-rodape" />
      <div className="investment-content">
        <h2>investimento e condições.</h2>
        <p>
          A escolha da narrativa é acompanhada de um processo simples e seguro.
        </p>
        <ul>
          <li>O pagamento pode ser realizado com 50% de sinal na assinatura do contrato, os 50% restantes até 1 semana antes do evento.</li>
          <li>Cartão de crédito (consultar taxas do cartão).</li>
          <li>Parcelamento de confiança: É um parcelamento firmado em contrato, no qual mensalmente você paga um valor fixo até a data do seu casamento, por pix ou transferência bancária.</li>
        </ul>
        <p className="signature">ajuliagallo</p>
      </div>
    </section>
  );
}
