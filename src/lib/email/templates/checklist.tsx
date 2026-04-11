interface ChecklistEmailProps {
  name: string;
}

export function ChecklistEmailTemplate({ name }: ChecklistEmailProps) {
  return (
    <div
      style={{
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '40px 20px',
        backgroundColor: '#F9F9F9',
      }}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '40px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        }}
      >
        <h1
          style={{
            color: '#1A1C1C',
            fontSize: '24px',
            fontWeight: 700,
            marginBottom: '16px',
          }}
        >
          Aqui está seu checklist!
        </h1>

        <p style={{ color: '#454934', fontSize: '16px', lineHeight: '1.6' }}>
          Olá {name}, obrigado por baixar nosso checklist!
        </p>

        <p
          style={{
            color: '#454934',
            fontSize: '16px',
            lineHeight: '1.6',
            marginTop: '16px',
          }}
        >
          Em anexo você encontrará o checklist com os 10 erros que fazem seu
          site perder clientes.
        </p>

        <div
          style={{
            marginTop: '32px',
            paddingTop: '24px',
            borderTop: '1px solid #E2E2E2',
          }}
        >
          <p style={{ color: '#454934', fontSize: '14px' }}>
            Precisa de ajuda? Responda este email ou entre em contato pelo
            WhatsApp.
          </p>
        </div>
      </div>

      <p
        style={{
          textAlign: 'center',
          color: '#767962',
          fontSize: '12px',
          marginTop: '24px',
        }}
      >
        © 2024 OFS Freelancer. Todos os direitos reservados.
      </p>
    </div>
  );
}
