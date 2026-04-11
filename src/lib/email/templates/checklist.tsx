import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Section,
  Text,
} from "@react-email/components";

interface ChecklistEmailProps {
  name: string;
}

export function ChecklistEmailTemplate({ name }: ChecklistEmailProps) {
  return (
    <Html>
      <Head />
      <Body
        style={{
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          backgroundColor: "#F9F9F9",
        }}
      >
        <Container
          style={{
            margin: "0 auto",
            padding: "40px 20px",
            maxWidth: "600px",
          }}
        >
          <Section
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "40px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <Text
              style={{
                color: "#1A1C1C",
                fontSize: "24px",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              Aqui está seu checklist!
            </Text>

            <Text
              style={{
                color: "#454934",
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              Olá {name}, obrigado por baixar nosso checklist!
            </Text>

            <Text
              style={{
                color: "#454934",
                fontSize: "16px",
                lineHeight: "1.6",
                marginTop: "16px",
              }}
            >
              Em anexo você encontrará o checklist com os 07 erros que fazem seu
              site perder clientes.
            </Text>

            <Hr
              style={{
                borderColor: "#E2E2E2",
                margin: "24px 0",
              }}
            />

            <Text style={{ color: "#454934", fontSize: "14px" }}>
              Precisa de ajuda? Responda este email ou{" "}
              <Link
                href="https://wa.me/5511968336094"
                style={{ color: "#566516" }}
              >
                entre em contato pelo WhatsApp
              </Link>
              .
            </Text>
          </Section>

          <Text
            style={{
              textAlign: "center" as const,
              color: "#767962",
              fontSize: "12px",
              marginTop: "24px",
            }}
          >
            © 2026 OFS Freelancer. Todos os direitos reservados.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
