import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Section,
  Text,
} from '@react-email/components';

interface ChecklistEmailProps {
  name: string;
}

export function ChecklistEmailTemplate({ name }: ChecklistEmailProps) {
  const colors = {
    surface: '#F9F9F9',
    surfaceContainerLowest: '#FFFFFF',
    onSurface: '#1A1C1C',
    onSurfaceVariant: '#454934',
    surfaceVariant: '#E2E2E2',
    secondary: '#566516',
    outline: '#767962',
  };

  return (
    <Html>
      <Head />
      <Body
        style={{
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          backgroundColor: colors.surface,
        }}
      >
        <Container
          style={{
            margin: '0 auto',
            padding: '40px 20px',
            maxWidth: '600px',
          }}
        >
          <Section
            style={{
              backgroundColor: colors.surfaceContainerLowest,
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            }}
          >
            <Text
              style={{
                color: colors.onSurface,
                fontSize: '24px',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              Aqui está seu checklist!
            </Text>

            <Text
              style={{
                color: colors.onSurfaceVariant,
                fontSize: '16px',
                lineHeight: '1.6',
              }}
            >
              Olá {name}, obrigado por baixar nosso checklist!
            </Text>

            <Text
              style={{
                color: colors.onSurfaceVariant,
                fontSize: '16px',
                lineHeight: '1.6',
                marginTop: '16px',
              }}
            >
              Em anexo você encontrará o checklist com os 07 erros que fazem seu
              site perder clientes.
            </Text>

            <Hr
              style={{
                borderColor: colors.surfaceVariant,
                margin: '24px 0',
              }}
            />

            <Text style={{ color: colors.onSurfaceVariant, fontSize: '14px' }}>
              Precisa de ajuda? Responda este email ou{' '}
              <Link
                href="https://wa.me/5511968336094"
                style={{ color: colors.secondary }}
              >
                entre em contato pelo WhatsApp
              </Link>
              .
            </Text>
          </Section>

          <Text
            style={{
              textAlign: 'center' as const,
              color: colors.outline,
              fontSize: '12px',
              marginTop: '24px',
            }}
          >
            © 2026 OFS Freelancer. Todos os direitos reservados.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
